# Unduli Senadheera — Portfolio Website

A personal portfolio site built from Unduli Senadheera's CV: Mechanical
Engineering (Aeronautical Stream) undergraduate at the University of
Moratuwa. Design language is a technical "blueprint / drafting sheet"
theme — white background, aerospace blue accents, an airfoil line-drawing
in the hero, and section headers styled like drawing-sheet numbers.

## Structure

```
portfolio/
├── index.html          ← all page content lives here
├── css/
│   └── style.css        ← design system (colors, type, layout)
├── js/
│   └── script.js         ← mobile nav, scroll reveal, social links
├── assets/
│   ├── img/               ← YOUR PHOTOS GO HERE (see assets/img/README.md)
│   └── docs/
│       └── Unduli_Senadheera_CV.pdf   ← linked from the "Download CV" button
└── README.md
```

## Before you publish — please check these

1. **Photos** — The glider gallery uses the committed files in
   `assets/img/30cm glider project/`, and the SOFE gallery uses
   `assets/img/Sofe/`. The remaining project cards intentionally show
   placeholders until matching files are added with the filenames listed
   in `assets/img/README.md`.

2. **Social links** — Open `js/script.js` and replace the two placeholder
   URLs (`YOUR-LINKEDIN-HANDLE`, `YOUR-GITHUB-USERNAME`) with your real
   profile links.

3. **CV file / privacy** — The CV PDF currently linked from "Download CV"
   is the exact file you uploaded, which includes your **home address**
   and your **referees' direct phone numbers and emails**. Before this
   goes on a public website, consider swapping in a version that removes
   the home address and lists referee details as "available on request"
   instead — the site's Contact section already does this for you, but
   the linked PDF itself still has the original details. Just replace
   `assets/docs/Unduli_Senadheera_CV.pdf` with your edited version (keep
   the same filename, or update the `href` in `index.html`'s hero
   section).

## Hosting on GitHub Pages

1. Create a new repository on GitHub (e.g. `unduli-portfolio`).
2. From inside this `portfolio` folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/unduli-portfolio.git
   git push -u origin main
   ```
3. On GitHub: go to the repo → **Settings → Pages** → under "Build and
   deployment", set **Source** to `Deploy from a branch`, branch `main`,
   folder `/ (root)` → **Save**. Confirm that the Pages workflow is using
   this repository's `main` branch, not an older `gh-pages` branch.
4. Your site will be live at:
   `https://YOUR-USERNAME.github.io/unduli-portfolio/`
   (GitHub takes a minute or two to build it the first time.)

## Making future edits

- **Text** — edit directly inside `index.html`; every section is
  clearly commented (`<!-- ===== PROJECTS ===== -->` etc.).
- **Colors / fonts** — all defined once as CSS variables at the top of
  `css/style.css` under `:root`, so a single change there updates the
  whole site.
- **Adding a new project card** — copy one `<article class="project-card">`
  block in the Projects section of `index.html`, update the text, image
  filename, and tags.

No build tools, frameworks, or installs required — it's plain HTML/CSS/JS,
so any edit just needs a save and a browser refresh (or `git push` once
it's live).
