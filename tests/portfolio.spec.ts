import { expect, test, type Page } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const ids = ['index', 'about', 'about-feeling', 'about-learning', 'thoughts', 'thought-curiosity', 'thought-space', 'thought-natural', 'work', 'project-1', 'project-2', 'project-3', 'project-4', 'outro']

async function scene(page: Page, id: string) {
  await page.evaluate(id => {
    history.replaceState(null, '', '#' + id)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }, id)
  await expect(page.locator('.journey')).toHaveAttribute('data-active-scene', String(ids.indexOf(id)))
  await expect.poll(() => page.locator('#' + id).evaluate(el => Math.abs(el.getBoundingClientRect().top))).toBeLessThan(1)
  await page.waitForTimeout(200)
}

async function separated(page: Page, first: string, second: string) {
  const a = (await page.locator(first).boundingBox())!
  const b = (await page.locator(second).boundingBox())!
  expect(a.x + a.width + 12 <= b.x || b.x + b.width + 12 <= a.x || a.y + a.height + 12 <= b.y || b.y + b.height + 12 <= a.y).toBe(true)
}

test('all modules share a layered stage; navigation, reverse scroll, stroke art and copy', async ({ page }) => {
  test.setTimeout(90000)
  await page.setViewportSize({ width: 1440, height: 900 })
  const errors: string[] = []
  page.on('pageerror', error => errors.push(error.message))
  await page.goto('/')
  await page.evaluate(() => document.fonts.ready)
  await expect(page.locator('html')).toHaveAttribute('lang', 'en-AU')
  await expect(page.locator('#index .name-stroke')).toHaveCount(28)
  const transforms = await page.locator('#index .name-stroke').evaluateAll(paths => paths.map(el => getComputedStyle(el).transform))
  expect(transforms.every(value => value !== 'none')).toBe(true)
  await expect(page.locator('.hero-meta').first()).not.toContainText('MMXXVI')
  expect(await page.locator('main').textContent()).not.toMatch(/\byou(?:r|rs|['’](?:re|ve|ll|d))?\b/i)
  await expect(page.getByText('READ AS A PAGE')).toHaveCount(0)
  await page.screenshot({ path: 'artifacts/revised-desktop-hero.png' })
  const displacement = () => page.locator('#index .name-stroke').evaluateAll(paths =>
    Math.max(...paths.map(el => { const matrix = new DOMMatrix(getComputedStyle(el).transform); return Math.hypot(matrix.e, matrix.f) })))
  expect(await displacement()).toBeLessThan(3)
  await page.evaluate(() => window.scrollTo(0, 280))
  await expect.poll(displacement).toBeGreaterThan(10)
  await page.screenshot({ path: 'artifacts/name-partially-scattered.png' })
  await page.evaluate(() => window.scrollTo(0, 0))
  await expect.poll(displacement).toBeLessThan(3)

  for (const id of ids.slice(1)) {
    await scene(page, id)
    await expect(page.locator('.scene-layer:not([inert])')).toHaveCount(1)
    const layer = page.locator('#' + id)
    await expect(layer).toHaveCSS('position', 'absolute')
    await page.screenshot({ path: `artifacts/revised-desktop-${id}.png` })
    if (id === 'about-feeling') await separated(page, '.about-second', '.about-third')
  }
  await expect(page.getByRole('link', { name: 'EMAIL' })).toHaveAttribute('href', 'mailto:jiahang.s@outlook.com')
  await scene(page, 'thoughts')
  await page.mouse.wheel(0, 1100)
  await expect(page.getByRole('button', { name: '02 Curiosity' })).toHaveAttribute('aria-current', 'step')
  await page.mouse.wheel(0, -1100)
  await expect(page.getByRole('button', { name: '01 Instinct' })).toHaveAttribute('aria-current', 'step')
  await page.getByRole('button', { name: '04 Natural' }).click()
  await expect(page.locator('.journey')).toHaveAttribute('data-active-scene', '7')
  await page.getByRole('link', { name: 'WORK', exact: true }).click()
  await expect(page.locator('.journey')).toHaveAttribute('data-active-scene', '8')
  expect(errors).toEqual([])
})

test('wheel and keyboard loop through an identical opening echo, without rewinding', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/')
  await scene(page, 'outro')
  await page.evaluate(() => {
    const samples: number[] = []
    Object.assign(window, { loopSamples: samples })
    const until = performance.now() + 6000
    function capture() { samples.push(scrollY); if (performance.now() < until) requestAnimationFrame(capture) }
    requestAnimationFrame(capture)
  })
  await page.mouse.wheel(0, 1600)
  await expect.poll(() => page.evaluate(() => scrollY), { timeout: 10000 }).toBeLessThan(1)
  await expect(page.locator('.journey')).toHaveAttribute('data-active-scene', '0')
  await expect(page.locator('#index')).not.toHaveAttribute('inert')
  await page.waitForTimeout(500)
  const intermediate = await page.evaluate(() => (window as unknown as { loopSamples: number[] }).loopSamples.filter(y => y > 10 && y < 13000))
  expect(intermediate).toEqual([])
  await page.mouse.wheel(0, 1100)
  await expect(page.locator('.journey')).toHaveAttribute('data-active-scene', '1')
  await scene(page, 'outro')
  await page.getByRole('link', { name: 'AGAIN?', exact: true }).focus()
  await page.keyboard.press('Enter')
  await expect.poll(() => page.evaluate(() => scrollY), { timeout: 10000 }).toBeLessThan(1)
  await expect(page.locator('#index')).toBeFocused()
})

test('touch swipe loops from the ending into the opening', async ({ browser }) => {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true })
  const page = await context.newPage()
  await page.goto('http://127.0.0.1:4173/')
  await scene(page, 'outro')
  const session = await context.newCDPSession(page)
  await session.send('Input.synthesizeScrollGesture', { x: 195, y: 700, yDistance: -1800, speed: 850, gestureSourceType: 'touch' })
  // Native touch momentum may continue a few pixels after the reset; do not trap it.
  await expect.poll(() => page.evaluate(() => scrollY), { timeout: 10000 }).toBeLessThan(60)
  await expect(page.locator('.journey')).toHaveAttribute('data-active-scene', '0')
  await expect(page.locator('#index')).toHaveCSS('opacity', '1')
  await context.close()
})

for (const viewport of [{ width: 390, height: 844 }, { width: 360, height: 667 }, { width: 768, height: 1024 }]) {
  test(`responsive layered scenes: ${viewport.width}x${viewport.height}`, async ({ page }) => {
    test.setTimeout(90000)
    await page.setViewportSize(viewport)
    await page.goto('/')
    await page.evaluate(() => document.fonts.ready)
    if (viewport.width < 768) {
      await page.getByRole('button', { name: 'MENU', exact: true }).click()
      await expect(page.getByRole('link', { name: 'THOUGHTS', exact: true })).toBeVisible()
      await page.keyboard.press('Escape')
      await expect(page.getByRole('button', { name: 'MENU', exact: true })).toBeFocused()
    }
    for (const id of ids) {
      await scene(page, id)
      await page.screenshot({ path: `artifacts/revised-${viewport.width}-${id}.png` })
      expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)).toBe(false)
      if (id === 'about-feeling') await separated(page, '.about-second', '.about-third')
      if (id === 'outro') await separated(page, '.again', '.footer')
      const bounds = await page.locator('#' + id).evaluate(el => [...el.querySelectorAll('p, h2:not(.sr-only), .contact-links, .footer')].filter(node => !node.closest('.scroll-invitation')).map(node => {
        const rect = node.getBoundingClientRect()
        return { text: node.textContent?.slice(0, 40), bottom: rect.bottom, top: rect.top, right: rect.right }
      }))
      for (const rect of bounds) {
        expect(rect.bottom, JSON.stringify(rect)).toBeLessThan(viewport.height - 48)
        expect(rect.top, JSON.stringify(rect)).toBeGreaterThan(64)
        expect(rect.right, JSON.stringify(rect)).toBeLessThanOrEqual(viewport.width + 1)
      }
    }
  })
}

test('reduced motion, short viewport fallback, asset loading and WCAG checks', async ({ page }) => {
  test.setTimeout(90000)
  await page.emulateMedia({ reducedMotion: 'reduce', colorScheme: 'dark' })
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/')
  await page.evaluate(() => document.fonts.ready)
  await expect(page.locator('.journey-linear')).toHaveCount(1)
  await expect(page.locator('.scene-layer[inert]')).toHaveCount(0)
  await expect(page.locator('html')).not.toHaveClass(/lenis/)
  await expect(page.locator('.thought-chinese')).toHaveText(['隔牖風驚竹， 開門雪滿山。', '不識廬山真面目， 只緣身在此山中。', '行到水窮處， 坐看雲起時。', '雲無心以出岫。'])
  for (const image of await page.locator('img').all()) {
    await image.scrollIntoViewIfNeeded()
    await expect.poll(() => image.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0)).toBe(true)
  }
  const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()
  expect(results.violations).toEqual([])
  await page.goto('/')
  await page.keyboard.press('Tab')
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(page.locator('main')).toBeFocused()
  await page.emulateMedia({ reducedMotion: 'no-preference', colorScheme: 'light' })
  await page.setViewportSize({ width: 844, height: 390 })
  await expect(page.locator('.journey-linear')).toHaveCount(1)
  await expect(page.locator('body')).toHaveCSS('color', 'rgb(36, 36, 35)')
})

test('active layered scene remains keyboard-accessible and passes axe', async ({ page }) => {
  await page.goto('/')
  await scene(page, 'thoughts')
  const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()
  expect(results.violations).toEqual([])
  await page.getByRole('button', { name: 'Next scene', exact: true }).focus()
  await page.keyboard.press('Enter')
  await expect(page.locator('.journey')).toHaveAttribute('data-active-scene', '5')
})

test('artwork hover stays within one degree of its resting angle', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/')
  for (let index = 1; index <= 4; index++) {
    await page.mouse.move(0, 0)
    await scene(page, `project-${index}`)
    const art = page.locator(`#project-${index} .project-artwork`)
    await art.evaluate(el => {
      const angle = () => {
        const style = getComputedStyle(el)
        const matrix = new DOMMatrix(style.transform)
        return Math.atan2(matrix.b, matrix.a) * 180 / Math.PI + (parseFloat(style.rotate) || 0)
      }
      const initial = angle()
      const samples: number[] = []
      Object.assign(window, { hoverSamples: samples })
      const until = performance.now() + 1200
      function sample() { samples.push(Math.abs(angle() - initial)); if (performance.now() < until) requestAnimationFrame(sample) }
      requestAnimationFrame(sample)
    })
    await art.hover()
    await page.waitForTimeout(550)
    await page.screenshot({ path: `artifacts/work-${index}-hover.png` })
    await page.mouse.move(0, 0)
    await page.waitForTimeout(700)
    const samples = await page.evaluate(() => (window as unknown as { hoverSamples: number[] }).hoverSamples)
    expect(Math.max(...samples)).toBeLessThan(1)
    expect(samples.at(-1)).toBeLessThan(0.05)
  }
})
