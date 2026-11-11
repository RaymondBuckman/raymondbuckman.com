# raymondbuckman.com — Rebuild Brief

Raymond's personal/résumé site. Goal: rebuild it with a modern, simple stack, keep the
look and feel of the current site, refresh the content, and move hosting from
SiteGround to Cloudflare Pages. Raymond wants to be hands-on with the design — propose
options, show changes in a local preview, and ask before big visual decisions.

## Current site (as of Nov 2026)

- Live at https://raymondbuckman.com — a single long page.
- Built ~2017 with React, Bootstrap 3.3.7, Sass, jQuery and Webpack 3 (one `bundle.js`).
- Source is on GitHub: https://github.com/RaymondBuckman/Personal-Site
  ("Reactjs version of my homepage").
- Hosted at SiteGround, which also holds the domain registration and DNS
  (nameservers ns1/ns2.siteground.net).

### Design to keep (the "theme")

- Dark background (`#282828`) with a black polka-dot / dotted texture (radial-gradient),
  used on the sidebar.
- Headings in the hand-drawn **Akronim** Google Font; **Prosto One** also loaded.
- Full-bleed black-and-white photo backgrounds per section:
  hero = subway platform (`subway.jpg`), intro = city (`city-1.jpg`),
  education = books (`books.jpg`), etc.
- Hero: big white "Raymond Buckman" in Akronim between two thin horizontal white rules,
  with a down-arrow to scroll.
- Slide-out left sidebar (hamburger menu / close icon) containing: "Me" photo,
  LinkedIn, GitHub with a dropdown of featured projects (with preview images),
  Icons8 credit, and a smiley image at the bottom.
- Row of section nav icons (Education, Languages, Employment, Additional Skills,
  Volunteer Work, Hobbies) that jump to anchors.
- Hobbies shown as a grid of photo tiles, each with a short caption.
- White line icons from Icons8 (credit required: "Icon pack by Icons8").

### Assets

All images are served from the site root, e.g. `https://raymondbuckman.com/subway.jpg`.
Known files: subway.jpg, city-1.jpg, books.jpg, smile.png, linkedin-icon.png,
github-icon.png, icons8-icon.png, education-icon.png, languages-icon.png,
employment-icon.png, skills-icon.png, volunteer-icon.png, hobbies-icon.png,
djokovic-preview.jpg, m2-preview.jpg, the-winter-war-preview.jpg, turkey-preview.jpg,
board-1-smudge-mini.jpg, board-2-mini.jpg, drone-1-mini.jpg, drone-2-mini.jpg,
drone-3-mini.jpg, and hobby tiles named `<hobby>-mini.jpg` (tennis, trance, travel,
foreign-languages, weight-lifting, running, cars, pingpong, geography, health, pets,
gaming, music-production, history, technology, modern-design, reading, dubstep).
Some icons are hot-linked from png.icons8.com — download local copies.

**Copy assets out of the Personal-Site repo, or download them from the live site,
before SiteGround is cancelled.**

## Current content (to refresh, not copy verbatim)

- **About Me:** written as an entry-level job seeker interested in front-end dev,
  UX design and QA; open to work abroad. Needs rewriting — ask Raymond what he's
  doing now and what he's looking for.
- **Education:** B.S. Computer Engineering, San Jose State University. Courses listed:
  Operating Systems, Database Systems, Computer Architecture, Digital Design I & II,
  Algorithms & Data Structures, Computer Networking, Advanced Algorithm Design,
  Microprocessor Design, Embedded Systems.
- **Senior project — RC Over IP:** drone controlled by a smartphone app over the
  drone's Wi-Fi; UDP packets decoded into PWM signals for the flight controller.
  Sections: How It Works, The App (two joysticks → roll/pitch/yaw/throttle),
  The Frame (aluminum), The Flight Controller Board (32-bit ARM, Naze32), Parts List.
- **Online courses:** older LinkedIn Learning-style courses (CSS, JavaScript,
  UX for Web Design, Bootstrap 3, React basics, Responsive Design, Accessibility,
  HTML, Git & GitHub, Foundations of Programming, Sass).
- **Languages & libraries:** HTML5/CSS3, JavaScript, jQuery, Bootstrap 3 & 4, Sass,
  React, Java, SQL.
- **Employment:** real-estate renovation and property work; brief stint as an
  exhibitor at ARM TechCon.
- **Additional skills:** Webpack/Grunt, Node.js, GSAP, ScrollMagic, Particles.js,
  various editors, Git, MS Office, Photoshop; French (intermediate), German (beginner).
- **Volunteer work:** church media-team camera operator (since Feb 2016);
  San Diego Food Bank food packager.
- **Hobbies & interests:** ~20 photo tiles (tennis, trance, travel, languages,
  lifting, running, cars, ping pong, geography, health, pets, gaming, music
  production, history, technology, design, reading, dubstep). Ask whether to keep,
  trim or drop.

### Add: newer coursework (confirmed by Raymond)

From his GitHub (IBM Skills Network / edX courses). Check each repo for details:
- Full-stack developer capstone (`xrwvm-fullstack_developer_capstone`)
- Node.js / Express final project (`expressBookReviews`)
- React projects: e-plantShopping, conference event planner, e-commerce with
  Redux Toolkit, feedback form, custom hook, to-do list, content rating app
- Embedded AI final project in Python (`oaqjp-final-project-emb-ai`)
- Agile planning lab, Intro to Git & GitHub, GitHub final project

Older portfolio projects: Djokovic, M2, The-Winter-War, Turkey — ask Raymond
which to keep featured.

## Plan

1. Rebuild with **React 19 + Vite** (Raymond's choice — he knows React from the
   2017 version and wants the site to show current React skills). Use the official
   Vite React template (`npm create vite@latest`), plain CSS or Sass, and small
   reusable components (section headers, hobby tiles, project cards, sidebar).
   No Bootstrap/jQuery needed. Mobile-first, accessible, fast. Keep the theme above.
   Raymond hasn't done web dev in a while: briefly explain what's changed since
   2017 (Vite instead of Webpack/Create React App, hooks-only components, etc.)
   as it comes up.
   - Because React renders in the browser, put the title, meta description and
     Open Graph/Twitter card tags (title, description, preview image) directly in
     `index.html`, so link previews on LinkedIn, Slack and texts show real content.
   - Cloudflare Pages build settings: build command `npm run build`,
     output directory `dist`.
2. Work in a new GitHub repo (or a fresh branch of Personal-Site — ask Raymond).
3. Deploy with **Cloudflare Pages** connected to the GitHub repo
   (auto-deploys on push). Test on the free `*.pages.dev` URL first.
4. Transfer the domain from SiteGround to Cloudflare Registrar: unlock the domain
   and get the auth/EPP code in SiteGround, then start the transfer in Cloudflare.
   Then attach the custom domain to the Pages project.
5. Email: the domain's MX records point to SiteGround's mail servers
   (mx10/20/30.mailspamprotection.com). Raymond should check SiteGround
   Site Tools → Email → Accounts. If mailboxes are in use, move them before
   cancelling (e.g. Cloudflare Email Routing to forward to a personal inbox).
6. Cancel SiteGround only after the new site is live on the domain and email is
   handled.

## Working style

- Raymond wants to drive the design: offer 2–3 options for big choices, keep a live
  local preview running, and make small iterative changes.
- Keep the code simple enough for Raymond to edit by hand.
