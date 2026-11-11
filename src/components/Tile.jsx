import { useRef } from 'react'
import useScrollProgress from '../hooks/useScrollProgress.js'
import { pointerProps } from '../hooks/usePointer.js'
import './Tile.css'

// One bento card.
//   photo / photoPos – optional background photo and where it's anchored
//   cover            – true: photo fills the whole tile; false: photo is a header strip
//   fx               – how the photo moves on scroll: pan, pan-reverse, rise, zoom-in, zoom-out, turn
//   area             – which grid slot it takes (see .bento in Resume.css)
export default function Tile({ area, label, title, icon, photo, photoPos, cover = false, fx = 'rise', children }) {
  const ref = useRef(null)
  useScrollProgress(ref)

  return (
    <article ref={ref} className={`tile ${cover ? 'tile--cover' : ''} reveal`} style={{ gridArea: area }} data-fx={fx} {...pointerProps}>
      {photo && (
        <div className="tile-photo" aria-hidden="true">
          <div className="tile-img" style={{ backgroundImage: `url(${photo})`, backgroundPosition: photoPos }} />
        </div>
      )}
      <header className="tile-head">
        {icon && <img className="tile-icon" src={icon} alt="" />}
        <p className="label">{label}</p>
        <h3 className="display tile-title">{title}</h3>
      </header>
      <div className="tile-body">{children}</div>
      <span className="tile-arrow" aria-hidden="true">↗</span>
    </article>
  )
}
