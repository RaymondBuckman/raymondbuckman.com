# raymondbuckman.com

Personal site of Raymond Buckman — computer engineer and IT specialist.

Built with **React 19** and **Vite**, hosted on **Cloudflare Pages**.
Design: "Downtown After Dark" — monochrome concrete and brick, a graffiti
headline font, one acid-green accent, scroll-driven parallax and lots of
hover effects.

## Run it locally

```bash
npm install
npm run dev      # live preview at http://localhost:5173
npm run build    # production build into dist/
```

## Where things are

| What | Where |
|---|---|
| All text, links, hobbies, photo credits | `src/content.js` |
| Page sections (hero, about, résumé, hobbies, footer) | `src/components/` |
| Scroll-parallax engine | `src/hooks/useScrollProgress.js` |
| Theme colours and shared styles | `src/index.css` |
| Fonts (self-hosted) | `src/fonts.css`, `src/main.jsx` |
| Images | `public/images/` |

## Credits

- Icons by [Icons8](https://icons8.com).
- Photos with licences that require credit are listed in `photoCredits`
  in `src/content.js` and shown in the site footer.
