// Wrap a button or link so it leans toward the mouse when you get close.
export default function Magnetic({ children, strength = 0.35 }) {
  function onMove(e) {
    if (e.pointerType !== 'mouse') return
    const box = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - box.left - box.width / 2) * strength
    const y = (e.clientY - box.top - box.height / 2) * strength
    e.currentTarget.firstElementChild.style.translate = `${x}px ${y}px`
  }
  function onLeave(e) {
    e.currentTarget.firstElementChild.style.translate = '0 0'
  }
  return (
    <span className="magnetic" onPointerMove={onMove} onPointerLeave={onLeave}>
      {children}
    </span>
  )
}
