import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test('desktop: navigation, four pinned chapters, reading mode and conceptual loop', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  const errors: string[] = []
  page.on('pageerror', error => errors.push(error.message))
  await page.goto('/')
  await page.evaluate(() => document.fonts.ready)
  await expect(page.getByRole('heading', { name: 'JET', exact: true })).toBeVisible()
  await expect(page.locator('html')).toHaveAttribute('lang', 'en-AU')
  await page.waitForTimeout(1000)
  await page.screenshot({ path: 'artifacts/desktop-hero.png' })
  await page.getByRole('link', { name: 'THOUGHTS', exact: true }).click()
  await expect.poll(() => page.locator('#thoughts').evaluate(el => Math.abs(el.getBoundingClientRect().top))).toBeLessThan(8)
  await page.mouse.wheel(0, 1000)
  await expect(page.getByRole('button', { name: '02 Curiosity', exact: true })).toHaveAttribute('aria-current', 'step')
  await page.mouse.wheel(0, -1000)
  await expect(page.getByRole('button', { name: '01 Instinct', exact: true })).toHaveAttribute('aria-current', 'step')
  for (const name of ['Instinct', 'Curiosity', 'Space', 'Natural']) {
    await page.getByRole('button', { name: new RegExp(name) }).click()
    await expect(page.getByRole('button', { name: new RegExp(name) })).toHaveAttribute('aria-current', 'step')
    await page.waitForTimeout(200)
    const visible = page.locator('.nature-scene[aria-hidden="false"]')
    await expect(visible).toHaveCount(1)
    expect(await visible.evaluate(el => Number(getComputedStyle(el).opacity))).toBeGreaterThan(0.95)
    await page.screenshot({ path: `artifacts/desktop-${name.toLowerCase()}.png` })
  }
  await page.getByRole('button', { name: 'READ AS A PAGE' }).click()
  await expect(page.locator('.thoughts-linear')).toHaveCount(1)
  await expect(page.locator('.nature-scene[aria-hidden="false"]')).toHaveCount(4)
  await page.getByRole('button', { name: 'RETURN TO THE SCENES' }).click()
  await expect(page.locator('.thoughts-linear')).toHaveCount(0)
  await page.locator('#work').scrollIntoViewIfNeeded()
  await expect(page.locator('.project')).toHaveCount(4)
  await page.locator('.outro').scrollIntoViewIfNeeded()
  await page.waitForTimeout(700)
  await page.screenshot({ path: 'artifacts/desktop-outro.png' })
  await expect(page.getByRole('link', { name: 'EMAIL' })).toHaveAttribute('href', 'mailto:jiahang.s@outlook.com')
  await page.getByRole('link', { name: 'AGAIN?' }).click()
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeLessThan(8)
  expect(errors).toEqual([])
})

for (const viewport of [{ width: 390, height: 844 }, { width: 360, height: 667 }, { width: 768, height: 1024 }, { width: 844, height: 390 }]) {
  test(`responsive: ${viewport.width}x${viewport.height}, full essay and no overflow`, async ({ page }) => {
    await page.setViewportSize(viewport)
    await page.goto('/')
    await page.evaluate(() => document.fonts.ready)
    await page.waitForTimeout(1000)
    await page.screenshot({ path: `artifacts/${viewport.width}-hero.png` })
    if (viewport.width < 768) {
      await page.getByRole('button', { name: 'MENU', exact: true }).click()
      await expect(page.getByRole('link', { name: 'THOUGHTS', exact: true })).toBeVisible()
      await page.keyboard.press('Escape')
      await expect(page.getByRole('button', { name: 'MENU', exact: true })).toBeFocused()
      await page.getByRole('button', { name: 'MENU', exact: true }).click()
    }
    await page.getByRole('link', { name: 'THOUGHTS', exact: true }).click()
    await page.waitForTimeout(1200)
    if (viewport.height > 640) {
      for (const name of ['Instinct', 'Curiosity', 'Space', 'Natural']) {
        await page.getByRole('button', { name: new RegExp(name) }).click()
        await expect(page.getByRole('button', { name: new RegExp(name) })).toHaveAttribute('aria-current', 'step')
        const bounds = await page.locator('.nature-scene[aria-hidden="false"] .thought-note').boundingBox()
        const controls = await page.locator('.thought-controls').boundingBox()
        expect(bounds!.y + bounds!.height).toBeLessThan(controls!.y)
        await page.screenshot({ path: `artifacts/${viewport.width}-${name.toLowerCase()}.png` })
      }
    } else {
      await expect(page.locator('.thoughts-linear')).toHaveCount(1)
    }
    await page.locator('.project-1').scrollIntoViewIfNeeded()
    await page.waitForTimeout(500)
    await page.screenshot({ path: `artifacts/${viewport.width}-work.png` })
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth)
    expect(overflow).toBe(false)
    await page.locator('.outro').scrollIntoViewIfNeeded()
    await page.screenshot({ path: `artifacts/${viewport.width}-outro.png` })
  })
}

test('reduced motion, assets and accessibility', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce', colorScheme: 'dark' })
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/')
  await page.evaluate(() => document.fonts.ready)
  await expect(page.locator('.thoughts-linear')).toHaveCount(1)
  await expect(page.locator('html')).not.toHaveClass(/lenis/)
  await expect(page.getByText('撥開雲霧見青天', { exact: true })).toHaveCount(1)
  for (const image of await page.locator('img').all()) {
    await image.scrollIntoViewIfNeeded()
    await expect.poll(() => image.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0)).toBe(true)
  }
  const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()
  expect(results.violations).toEqual([])
  await page.emulateMedia({ reducedMotion: 'reduce', colorScheme: 'light' })
  await expect(page.locator('body')).toHaveCSS('color', 'rgb(36, 36, 35)')
  await page.goto('/')
  await page.keyboard.press('Tab')
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(page.locator('main')).toBeFocused()
})
