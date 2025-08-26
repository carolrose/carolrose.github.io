# Clean Academic Homepage (Pancheva-inspired)

This is a tiny, no-dependency static site that imitates the clean layout of **pancheva.github.io**:
a prominent name + subtitle, a simple "Menu" button that toggles a compact navigation, and a single-column page body with a short black divider under each section title.

## Files
- `index.html` — About
- `research.html` — Research blurb(s)
- `papers.html` — Publications list
- `teaching.html` — Courses and schools
- `theses.html` — PhD supervision
- `assets/style.css` — Styles (system fonts, light grayscale palette)
- `assets/script.js` — Small, accessible menu toggle

## Customize
- Replace **Your Name**, **Professor of Linguistics**, and **Your Institution** in the page headers.
- Edit the contact block on `index.html`.
- Duplicate the list items in `papers.html`, `teaching.html`, and `theses.html` to add entries.
- Want a headshot? Add `<img class="headshot" src="assets/your-photo.jpg" alt="Your Name"/>` under the site title and add CSS like:
  ```css
  .headshot{width:120px;height:auto;border-radius:8px;margin:8px 0;}
  ```

## GitHub Pages
Option A (user site):
1. Create a repo named `USERNAME.github.io`.
2. Put these files at the repo root and push.
3. Visit `https://USERNAME.github.io` after the build finishes.

Option B (project site):
1. Create any repo name.
2. Put these files at the repo root.
3. In repo Settings → Pages, choose "Deploy from a branch", Branch: `main`, Folder: `/` (or `/docs` if you move files into `docs/`).

## Local preview
Just open `index.html` in your browser, or serve the folder with a simple HTTP server:
```bash
python3 -m http.server 8000
```

---
This template is intentionally minimal and does not copy code from the referenced site.
