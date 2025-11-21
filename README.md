# Winnie Mutembei Journey Portfolio

Personal storytelling site for Winnie Mutembei—a Kingdom Bank project manager, BBIT student at Zetech University, and Team Kenya Roll Ball medalist. The site is a lightweight static build focused on narrative chapters (childhood, education, skills, future) with consistent typography, accessible navigation, and subtle reveal animations.

## Features
- Multi-page layout highlighting each life chapter (`index`, `childhood`, `education`, `skills`, `future`, `contact`).
- Reusable style system defined in `assets/css/styles.css`, covering grid, cards, timeline, and chip components.
- JavaScript enhancements in `assets/js/script.js`, including data-year footer updates, scroll-triggered reveal states, and progressive enhancement hooks via the `data-page` attribute.
- Semantic HTML with skip links, aria labels, and keyboard-friendly navigation.

## Project Structure
```
portfolio/
├─ assets/
│  ├─ css/styles.css
│  └─ js/script.js
├─ childhood.html
├─ contact.html
├─ education.html
├─ future.html
├─ index.html
└─ skills.html
```

## Getting Started
1. Clone or download the repository to your machine.
2. Open any page (e.g., `index.html`) directly in a browser, or run a static-server / Live Server extension for hot reload while editing.

```bash
# Example using Python's simple server from the project root
cd /Users/nkatha/Documents/Winnie-Zitech/portfolio
python3 -m http.server 8080
# Visit http://localhost:8080
```

## Editing Tips
- Keep asset paths absolute (as currently configured) or switch to relative paths if you plan to deploy to a different directory.
- When adding new sections, follow the existing `section` + `data-reveal` pattern so animations remain consistent.
- Add responsive tweaks in `styles.css` near the `@media` queries to maintain layout quality on tablets and phones.

## Deployment
Because the project is static, you can deploy the directory as-is to platforms like GitHub Pages, Netlify Drop, Vercel (static), or any S3-compatible bucket. Ensure asset paths are updated if the hosting root differs from `/Users/nkatha/Documents/Winnie-Zitech/portfolio`.

