import { useRef } from 'react'
import useScrollProgress from '../hooks/useScrollProgress.js'
import Magnetic from './Magnetic.jsx'
import { links, photoCredits } from '../content.js'
import './Footer.css'

const YEAR = new Date().getFullYear()

// The closing scene: the escalator photo pulls back while "Let's connect"
// slides together from both sides.
export default function Footer() {
  const ref = useRef(null)
  useScrollProgress(ref)

  return (
    <footer ref={ref} id="contact" className="footer" aria-labelledby="contact-title">
      <div className="footer-photo" aria-hidden="true" />

      <div className="footer-inner">
        <p className="label"><b>04</b> — Contact</p>
        <h2 id="contact-title" className="footer-sign">
          <span className="footer-line footer-line--a">Let’s</span>
          <span className="footer-line footer-line--b">Connect</span>
        </h2>
        <div className="footer-actions">
          <Magnetic>
            <a className="btn btn--accent" href={links.linkedin} target="_blank" rel="noreferrer">
              <span className="roll" data-text="LinkedIn"><span>LinkedIn</span></span> <span aria-hidden="true">↗</span>
            </a>
          </Magnetic>
          <Magnetic>
            <a className="btn" href={links.github} target="_blank" rel="noreferrer">
              <span className="roll" data-text="GitHub"><span>GitHub</span></span> <span aria-hidden="true">↗</span>
            </a>
          </Magnetic>
        </div>
      </div>

      <div className="footer-bar">
        <p className="label">© {YEAR} Raymond Buckman</p>
        <img className="footer-smile" src="/images/smile.png" alt="" />
        <p className="label">
          <img src="/images/icons8-icon.png" alt="" /> Icon pack by{' '}
          <a href="https://icons8.com" target="_blank" rel="noreferrer">Icons8</a>
        </p>
        <Magnetic strength={0.5}>
          <a className="footer-top" href="#top" aria-label="Back to top" data-cursor="Top">↑</a>
        </Magnetic>
        <p className="footer-credits">
          Photo credits:{' '}
          {photoCredits.map((c, i) => (
            <span key={c.source}>
              {i > 0 && ' · '}
              <a href={c.source} target="_blank" rel="noreferrer">{c.what}</a> by {c.who}, {c.license}
            </span>
          ))}
        </p>
      </div>
    </footer>
  )
}
