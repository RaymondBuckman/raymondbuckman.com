// Hover helpers. They write CSS variables while the mouse moves over an element:
//   --x, --y   cursor position inside the element (as %), used for the spotlight glow
//   --mx, --my cursor position from -1 to 1, used for tilt and mouse-parallax
// CSS decides what to do with them. Touch screens simply never set them.

export function trackPointer(event) {
  if (event.pointerType !== 'mouse') return
  const el = event.currentTarget
  const box = el.getBoundingClientRect()
  const x = (event.clientX - box.left) / box.width
  const y = (event.clientY - box.top) / box.height
  el.style.setProperty('--x', `${(x * 100).toFixed(1)}%`)
  el.style.setProperty('--y', `${(y * 100).toFixed(1)}%`)
  el.style.setProperty('--mx', (x * 2 - 1).toFixed(3))
  el.style.setProperty('--my', (y * 2 - 1).toFixed(3))
}

export function resetPointer(event) {
  const el = event.currentTarget
  el.style.setProperty('--mx', '0')
  el.style.setProperty('--my', '0')
}

// Spread these onto any element: <div {...pointerProps}>
export const pointerProps = { onPointerMove: trackPointer, onPointerLeave: resetPointer }
