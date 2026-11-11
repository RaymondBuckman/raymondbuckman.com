import { useRef } from 'react'
import useScrollProgress from '../hooks/useScrollProgress.js'
import { pointerProps } from '../hooks/usePointer.js'
import { about } from '../content.js'
import './About.css'

// A tall section with a "sticky" screen inside it. While you scroll through,
// the city photo opens from a small window to full screen, a giant HELLO
// flies past, then the About card slides in.
export default function About() {
  const ref = useRef(null)
  useScrollProgress(ref, 'pin')

  return (
    <section ref={ref} id="about" className="about" aria-labelledby="about-title">
      <div className="about-sticky">
        <div className="about-frame" aria-hidden="true">
          <div className="about-photo" />
        </div>
        <p className="about-hello" aria-hidden="true">Hello</p>

        <div className="about-card" {...pointerProps}>
          <p className="label"><b>01</b> — About</p>
          <h2 id="about-title" className="display">About Me</h2>
          <p className="about-text">{about.text}</p>
          <dl className="about-facts">
            {about.facts.map((f) => (
              <div key={f.label}>
                <dt className="label">{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
