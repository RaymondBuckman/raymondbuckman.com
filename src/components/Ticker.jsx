import { useRef } from 'react'
import useScrollProgress from '../hooks/useScrollProgress.js'
import { ticker } from '../content.js'
import './Ticker.css'

// Two crossing bands of skills, like construction tape. Scrolling the page
// slides them in opposite directions.
function Band({ reverse }) {
  const words = [...ticker, ...ticker, ...ticker]
  return (
    <div className={`band ${reverse ? 'band--reverse' : ''}`} aria-hidden="true">
      <div className="band-track">
        {words.map((w, i) => (
          <span key={i} className="band-item">{w}<i>✦</i></span>
        ))}
      </div>
    </div>
  )
}

export default function Ticker() {
  const ref = useRef(null)
  useScrollProgress(ref)
  return (
    <section ref={ref} className="ticker" aria-label="Skills">
      <p className="sr-only">{ticker.join(', ')}</p>
      <Band />
      <Band reverse />
    </section>
  )
}
