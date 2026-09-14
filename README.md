# Ritika Singh — Personal Portfolio

A modern, responsive personal portfolio built with plain HTML, CSS, and JavaScript (no build step required).

## Folder structure

```
portfolio/
├── index.html                     # page markup and section layout
├── style.css                      # all styling — theme variables in :root at the top
├── data.js                        # all editable content (skills, projects, education, etc.)
├── script.js                      # rendering logic, animations, filters, nav, form validation
├── README.md
└── assets/
    ├── Ritika_Singh_Resume.pdf    # your resume (already in place)
    ├── certificates/              # add certificate images here
    ├── career/                    # add future offer/selection images here
    └── projects/                  # add project screenshots here
```

## How to edit your content

Open `data.js` — everything you'll want to update regularly (skills, project details, education,
experience, DSA stats, career highlights, certificates, gallery) lives there in plain objects/arrays.
You shouldn't need to touch `index.html`, `style.css`, or `script.js` for routine content updates.

### Adding a new photo
1. Drop the image file into the matching `assets/` subfolder (e.g. `assets/certificates/my-cert.png`).
2. In `data.js`, find the matching entry and set its `image` field to that path, e.g.
   `image: "assets/certificates/my-cert.png"`.
3. Save and refresh — no other files need to change.

### Adding content to the Career Highlights / Offers section
The `careerHighlights` array in `data.js` is intentionally left as clearly-marked placeholders
(`"Add company name"`, generic descriptions) since no real offers were provided. When you have a
real result to add:
1. Edit the relevant object's `title`, `organization`, `year`, and `description`.
2. Add an image to `assets/career/` and point `image` at it.
Do this only once you have a confirmed, real outcome — don't fill it in speculatively.

## Changing the color theme

All colors are CSS variables at the top of `style.css` under `:root` (now correctly at the very top
of the file). Change `--violet-500`, `--cyan-400`, `--navy-900`, etc. to re-theme the whole site in
one place. Note: despite the variable names, the current theme is a green/lime palette, not purple —
feel free to rename the variables if that's confusing, or just leave them.

## Known placeholders you still need to fill in

- `assets/ritika-profile.jpg` — your hero-section profile photo (referenced in `index.html` but not
  yet provided).
- The second project in `data.js` ("Password Security Analyzer") needs a real GitHub link — it
  currently points to `#`.
- `careerHighlights` in `data.js` — placeholder offers/selections, add real ones when confirmed.
- Several `certificates` entries in `data.js` have `image: null` — add the certificate images to
  `assets/certificates/` and update the paths when you have them.
- Gallery photos — replace `img: null` with a path like `assets/gallery/college-1.jpg`.
- `heroStats.dsaProblems` in `data.js` — your resume says "130+" while the DSA stats card says
  "176". Confirm the real current number; the site currently uses 176.
- `og:image` meta tag in `index.html` points to `assets/og-preview.svg`, which doesn't exist yet.

## Running locally

No build tools needed — just open `index.html` in a browser, or serve the folder with any static
server (e.g. `npx serve .` or the VS Code "Live Server" extension) for the smoothest experience.

## Deploying

Works as-is on GitHub Pages, Netlify, or Vercel — just upload/push the whole `portfolio/` folder.
