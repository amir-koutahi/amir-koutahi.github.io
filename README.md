# amir-koutahi.github.io

Personal website for Amir Koutahi — University of Toronto, Engineering Science (ECE).

A static, dependency-free site (HTML/CSS/JS) hosted on GitHub Pages.

## Structure

```
index.html          Home — intro, what I do, explore, about, contact
projects.html       Projects — filterable lab reports & research
tutorial-notes.html Teaching — course accordion with weekly materials
styles.css          Theme (sleek dark-tech)
script.js           Nav toggle, filtering, accordion, scroll reveal
assets/pdfs/        (optional) re-hosted PDF reports
```

## Editing

Everything is plain HTML — no build step. Edit the `.html` files directly and push to `main`;
GitHub Pages redeploys automatically.

### Adding a project
Copy a `.pcard` block in `projects.html`, set `data-cat` to a category (Physics, Optics,
Statistics, Mathematics, Biology), update the title/description/tags, and point `href` to the PDF.

### Adding tutorial-note files
In `tutorial-notes.html`, change a `<span class="week soon">` to a link, e.g.
`<a class="week" href="assets/pdfs/mata36-week1.pdf">Week 1</a>` and remove the `soon` class.

## PDFs
Project links currently point to the existing files on `amirkoutahi.com`. To make the site fully
self-contained, drop the PDFs into `assets/pdfs/` and update the `href`s to relative paths.
