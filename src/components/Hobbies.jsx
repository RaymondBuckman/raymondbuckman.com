import { useLayoutEffect, useRef } from 'react'
import useScrollProgress, { refreshScrollProgress } from '../hooks/useScrollProgress.js'
import { hobbies } from '../content.js'
import './Hobbies.css'

// Scrolling down moves the gallery sideways. The section is made exactly
// tall enough for the strip to travel its full width while pinned.
export default function Hobbies() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  useScrollProgress(sectionRef, 'pin')

  useLayoutEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    function measure() {
      const shift = Math.max(0, track.scrollWidth - window.innerWidth)
      section.style.setProperty('--shift', `${shift}px`)
      section.style.height = `${shift + window.innerHeight * 1.2}px`
      refreshScrollProgress()
    }
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(track)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="hobbies" className="hobbies" aria-labelledby="hobbies-title">
      <div className="hobbies-sticky">
        <header className="hobbies-head">
          <div>
            <p className="label"><b>03</b> — Hobbies &amp; interests</p>
            <h2 id="hobbies-title" className="hobbies-sign">Off the Clock</h2>
          </div>
          <div className="hobbies-meter" aria-hidden="true"><span /></div>
        </header>

        <ol ref={trackRef} className="hobbies-track">
          {hobbies.map((h, i) => (
            <li key={h.name} className={`hobby ${h.centered ? 'hobby--centered' : ''}`} style={{ '--i': i }} data-cursor="Nice">
              <div className="hobby-img"><img src={h.image} alt="" loading="lazy" /></div>
              <span className="hobby-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="hobby-label">{h.label}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
