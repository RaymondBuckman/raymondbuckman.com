import { useEffect, useState } from 'react'
import { projects, navItems, links } from '../content.js'
import './Sidebar.css'

// The slide-out menu from the 2017 site: photo, LinkedIn, GitHub (with featured
// projects), section links, Icons8 credit and the smiley.
export default function Sidebar({ open, onClose }) {
  const [showProjects, setShowProjects] = useState(false)

  // close with the Escape key
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <>
      <div className={`scrim ${open ? 'is-open' : ''}`} onClick={onClose} aria-hidden="true" />
      <aside className={`sidebar texture ${open ? 'is-open' : ''}`} aria-label="Menu" inert={!open}>
        <button className="sidebar-close" onClick={onClose} aria-label="Close menu">
          <span /><span />
        </button>

        <div className="sidebar-me">
          <img src="/images/me.jpg" alt="Raymond Buckman" />
        </div>

        <ol className="sidebar-nav">
          {navItems.map((item, i) => (
            <li key={item.id} style={{ '--i': i }}>
              <a href={`#${item.id}`} onClick={onClose}>
                <span className="sidebar-num">0{i + 1}</span>
                <span className="roll" data-text={item.label}><span>{item.label}</span></span>
              </a>
            </li>
          ))}
        </ol>

        <ul className="sidebar-links">
          <li>
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              <img src="/images/linkedin-icon.png" alt="" /> LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </li>
          <li>
            <button onClick={() => setShowProjects(!showProjects)} aria-expanded={showProjects}>
              <img src="/images/github-icon.png" alt="" /> GitHub projects
              <span className={`sidebar-caret ${showProjects ? 'is-up' : ''}`} aria-hidden="true">▾</span>
            </button>
            <ul className={`sidebar-projects ${showProjects ? 'is-open' : ''}`}>
              {projects.map((p) => (
                <li key={p.name}>
                  <img src={p.image} alt="" />
                  <span>{p.name}</span>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        <div className="sidebar-foot">
          <p className="label">
            <img src="/images/icons8-icon.png" alt="" /> Icon pack by{' '}
            <a href="https://icons8.com" target="_blank" rel="noreferrer">Icons8</a>
          </p>
          <img className="sidebar-smile" src="/images/smile.png" alt="" />
        </div>
      </aside>
    </>
  )
}
