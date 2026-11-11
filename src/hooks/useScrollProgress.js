import { useEffect } from 'react'

// The parallax engine.
//
// It writes one CSS variable, --p (0 → 1), onto an element describing how far
// that element has travelled through the screen. All the actual motion lives
// in CSS, e.g.  transform: translateY(calc(var(--p) * 30%));
// so every effect can be tuned in the stylesheet without touching JavaScript.
//
// Modes:
//   'through' – 0 when the top enters the bottom of the screen, 1 when the bottom leaves the top
//   'pin'     – for tall sections with a sticky inside: 0 when the top reaches the top,
//               1 when the bottom reaches the bottom
//   'exit'    – for the hero: 0 at the start, 1 once it has scrolled off the top
//
// One shared scroll listener drives every element, once per animation frame.

const watched = new Set()
let frame = 0

function progress(el, mode) {
  const box = el.getBoundingClientRect()
  const screen = window.innerHeight
  if (mode === 'pin') return -box.top / Math.max(1, box.height - screen)
  if (mode === 'exit') return -box.top / box.height
  return (screen - box.top) / (screen + box.height)
}

function updateAll() {
  frame = 0
  watched.forEach(({ el, mode }) => {
    const p = Math.min(1, Math.max(0, progress(el, mode)))
    el.style.setProperty('--p', p.toFixed(4))
  })
}

function requestUpdate() {
  if (!frame) frame = requestAnimationFrame(updateAll)
}

export default function useScrollProgress(ref, mode = 'through') {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const item = { el, mode }
    watched.add(item)
    if (watched.size === 1) {
      window.addEventListener('scroll', requestUpdate, { passive: true })
      window.addEventListener('resize', requestUpdate)
    }
    requestUpdate()
    return () => {
      watched.delete(item)
      if (watched.size === 0) {
        window.removeEventListener('scroll', requestUpdate)
        window.removeEventListener('resize', requestUpdate)
      }
    }
  }, [ref, mode])
}

// Exported so components that change size (like the hobby gallery) can ask for a refresh.
export { requestUpdate as refreshScrollProgress }
