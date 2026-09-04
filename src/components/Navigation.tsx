import { useEffect, useRef, useState } from 'react'

const links = [ ['INDEX', '#index'], ['ABOUT', '#about'], ['THOUGHTS', '#thoughts'], ['WORK', '#work'] ]

export function Navigation() {
  const [open, setOpen] = useState(false)
  const button = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (!open) return
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); button.current?.focus() }
    }
    document.addEventListener('keydown', close)
    return () => document.removeEventListener('keydown', close)
  }, [open])

  return (
    <header className={`site-header ${open ? 'menu-open' : ''}`}>
      <a className="wordmark" href="#index" onClick={() => setOpen(false)}>JET / <span lang="zh-Hant">孫佳航</span></a>
      <button ref={button} className="menu-toggle" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? 'CLOSE' : 'MENU'}</button>
      <nav id="main-navigation" className={open ? 'is-open' : ''} aria-label="Main navigation">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
    </header>
  )
}
