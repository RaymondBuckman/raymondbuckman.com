import { useEffect, useState } from 'react'
import { navItems } from '../content.js'
import './Nav.css'

// Floating glass bar. Slides away while you scroll down, comes back when you
// scroll up. The thin accent line along its bottom shows reading progress.
export default function Nav({ active, onMenu }) {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    function onScroll() {
      const y = window.scrollY
      setHidden(y > lastY && y > 300)
      lastY = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${hidden ? 'is-hidden' : ''}`} aria-label="Main">
      <button className="nav-menu" onClick={onMenu} aria-label="Open menu" data-cursor="Menu">
        <span /><span />
      </button>
      <a className="nav-mark display" href="#top" aria-label="Back to top">RB</a>

      <ol className="nav-links">
        {navItems.map((item, i) => (
          <li key={item.id}>
            <a href={`#${item.id}`} aria-current={active === item.id ? 'true' : undefined}>
              <span className="nav-num">0{i + 1}</span>
              <span className="roll" data-text={item.label}><span>{item.label}</span></span>
            </a>
          </li>
        ))}
      </ol>

      <a className="nav-cta" href="#contact">
        <span className="roll" data-text="Let’s talk"><span>Let’s talk</span></span>
      </a>
      <span className="nav-progress" aria-hidden="true" />
    </nav>
  )
}
