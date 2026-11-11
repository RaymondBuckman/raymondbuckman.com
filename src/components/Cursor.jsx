import { useEffect, useRef } from 'react'
import './Cursor.css'

// A ring that trails the mouse and swells over anything clickable.
// Only shown with a real mouse; the normal cursor stays visible too.
export default function Cursor() {
  const ringRef = useRef(null)

  useEffect(() => {
    const ring = ringRef.current
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let target = { x: -100, y: -100 }
    let pos = { ...target }
    let frame = 0

    function loop() {
      // ease 20% of the remaining distance each frame, which gives the trailing feel
      pos.x += (target.x - pos.x) * 0.2
      pos.y += (target.y - pos.y) * 0.2
      ring.style.translate = `${pos.x}px ${pos.y}px`
      frame = requestAnimationFrame(loop)
    }
    function onMove(e) {
      target = { x: e.clientX, y: e.clientY }
      const hot = e.target.closest('a, button, [data-cursor]')
      ring.classList.toggle('is-hot', Boolean(hot))
      ring.dataset.label = hot?.dataset.cursor ?? ''
      ring.classList.add('is-on')
    }
    function onLeave() { ring.classList.remove('is-on') }

    window.addEventListener('pointermove', onMove)
    document.documentElement.addEventListener('pointerleave', onLeave)
    frame = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return <div ref={ringRef} className="cursor" aria-hidden="true" />
}
