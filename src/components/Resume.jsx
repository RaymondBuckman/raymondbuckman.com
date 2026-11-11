import { useRef } from 'react'
import Tile from './Tile.jsx'
import useScrollProgress from '../hooks/useScrollProgress.js'
import { education, seniorProject, languages, employment, skills, volunteer, links } from '../content.js'
import './Resume.css'

const List = ({ items, className = '' }) => (
  <ul className={`list ${className}`}>
    {items.map((i) => (
      <li key={i.title}><strong>{i.title}</strong><span>{i.detail}</span></li>
    ))}
  </ul>
)

const Pills = ({ items, big }) => (
  <ul className={`pills ${big ? 'pills--big' : ''}`}>
    {items.map((i) => <li key={i}>{i}</li>)}
  </ul>
)

export default function Resume() {
  const ref = useRef(null)
  useScrollProgress(ref)

  return (
    <section ref={ref} id="resume" className="resume texture" aria-labelledby="resume-title">
      <div className="resume-ghost" aria-hidden="true">Résumé · Résumé · Résumé</div>

      <header className="section-head">
        <p className="label"><b>02</b> — Résumé</p>
        <h2 id="resume-title" className="display">The <em>Work</em></h2>
      </header>

      <div className="bento">
        <Tile area="edu" label="Education" title={education.degree.replace('B.S. ', '')} icon="/images/education-icon.png"
          photo="/images/books.jpg" photoPos="20% 30%" fx="pan">
          <p><strong>{education.degree}</strong> <span className="muted">— {education.school}</span></p>
          <Pills items={education.courses} />
        </Tile>

        <Tile area="rc" label="Senior project" title={seniorProject.name} icon="/images/drone-icon.png" fx="rise">
          <div className="drones">
            {seniorProject.photos.map((src, i) => (
              <div key={src} className="drone" style={{ '--d': i }} data-cursor="Fly">
                <img src={src} alt={`RC Over IP drone, photo ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
          <p>{seniorProject.summary}</p>
        </Tile>

        <Tile area="lang" label="Languages" title="Code" icon="/images/languages-icon.png"
          photo="/images/code.jpg" photoPos="100% 20%" cover fx="rise">
          <Pills items={languages} big />
        </Tile>

        <Tile area="work" label="Employment" title="Work" icon="/images/employment-icon.png"
          photo="/images/hammer.jpg" photoPos="50% 0%" cover fx="zoom-out">
          <List items={employment} />
        </Tile>

        <Tile area="skills" label="Additional skills" title="Toolbox" icon="/images/toolbox-icon.png"
          photo="/images/eiffel.jpg" photoPos="50% 25%" cover fx="zoom-in">
          <Pills items={skills} />
        </Tile>

        <Tile area="learn" label="Coursework & certifications" title="Still Learning" icon="/images/certificate-icon.png"
          photo="/images/laptop.jpg" photoPos="50% 40%" fx="rise">
          <div className="learn">
            <div>
              <p className="label">Recent coursework</p>
              <List items={education.coursework} />
            </div>
            <div>
              <p className="label">Certifications</p>
              <List items={education.certifications} className="list--certs" />
            </div>
          </div>
        </Tile>

        <Tile area="vol" label="Volunteer work" title="Giving Back" icon="/images/volunteer-icon.png"
          photo="/images/heart-cross.jpg" photoPos="40% 60%" fx="pan-reverse">
          <List items={volunteer} />
        </Tile>

        <Tile area="me" label="Elsewhere" title="Say Hi" photo="/images/brandenburg-gate.jpg" photoPos="70% 40%" cover fx="turn">
          <div className="me">
            <div className="me-badge">
              <img src="/images/me.jpg" alt="Raymond Buckman" />
              <svg className="me-ring" viewBox="0 0 100 100" aria-hidden="true">
                <defs><path id="ring" d="M50,50 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0" /></defs>
                <text><textPath href="#ring">RAYMOND BUCKMAN ✦ REACT DEVELOPER ✦ </textPath></text>
              </svg>
            </div>
            <div className="me-links">
              <a href={links.linkedin} target="_blank" rel="noreferrer">
                <img src="/images/linkedin-icon.png" alt="" />
                <span className="roll" data-text="LinkedIn"><span>LinkedIn</span></span>
              </a>
              <a href={links.github} target="_blank" rel="noreferrer">
                <img src="/images/github-icon.png" alt="" />
                <span className="roll" data-text="GitHub"><span>GitHub</span></span>
              </a>
            </div>
          </div>
        </Tile>
      </div>
    </section>
  )
}
