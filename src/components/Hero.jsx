import { useRef } from 'react'
import useScrollProgress from '../hooks/useScrollProgress.js'
import { pointerProps } from '../hooks/usePointer.js'
import { hero } from '../content.js'
import './Hero.css'

const YEAR = new Date().getFullYear()

// Splits a word into letters so each can animate and react on hover.
function Letters({ word, offset = 0 }) {
  return (
    <span className="hero-word" aria-hidden="true">
      {[...word].map((ch, i) => (
        <span key={i} className="hero-letter" style={{ '--i': i + offset }}>{ch}</span>
      ))}
    </span>
  )
}

// Full-screen subway platform. Layers move at different speeds as you scroll
// and as the mouse moves, which creates the depth.
export default function Hero() {
  const ref = useRef(null)
  useScrollProgress(ref, 'exit')

  return (
    <header ref={ref} className="hero" {...pointerProps}>
      <div className="hero-photo" aria-hidden="true" />
      <div className="hero-ghost" aria-hidden="true">Portfolio</div>
      <div className="hero-streak" aria-hidden="true" />
      <div className="hero-vignette" aria-hidden="true" />

      <div className="hero-title">
        <h1 className="display">
          <span className="sr-only">{hero.first} {hero.last}</span>
          <Letters word={hero.first} />
          <Letters word={hero.last} offset={hero.first.length} />
        </h1>
      </div>

      <div className="hero-foot">
        <p className="label">Portfolio <b>/</b> {YEAR}</p>
        <a className="hero-scroll" href="#about" aria-label="Scroll down" data-cursor="Go">
          <span className="hero-scroll-line" />
          <span className="label">Scroll</span>
        </a>
        <p className="label hero-roles">
          {hero.roles.map((r) => <span key={r}>{r}</span>)}
        </p>
      </div>
    </header>
  )
}
