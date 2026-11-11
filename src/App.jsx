import { useCallback, useState } from 'react'
import Cursor from './components/Cursor.jsx'
import Nav from './components/Nav.jsx'
import Sidebar from './components/Sidebar.jsx'
import Hero from './components/Hero.jsx'
import Ticker from './components/Ticker.jsx'
import About from './components/About.jsx'
import Resume from './components/Resume.jsx'
import Hobbies from './components/Hobbies.jsx'
import Footer from './components/Footer.jsx'
import useActiveSection from './hooks/useActiveSection.js'
import { navItems } from './content.js'

const sectionIds = navItems.map((item) => item.id)

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = useCallback(() => setMenuOpen(false), [])
  const active = useActiveSection(sectionIds)

  return (
    <div id="top">
      <Cursor />
      <Nav active={active} onMenu={() => setMenuOpen(true)} />
      <Sidebar open={menuOpen} onClose={closeMenu} />

      <main>
        <Hero />
        <Ticker />
        <About />
        <Resume />
        <Hobbies />
      </main>
      <Footer />
    </div>
  )
}
