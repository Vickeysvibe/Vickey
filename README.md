# Vibe — Vickey's portfolio

Personal portfolio built with Create React App, React Router and framer-motion.

```bash
npm install
npm start        # dev server on http://localhost:3000
npm test         # smoke test
npm run build    # production build in ./build
```

## Where things live

| Path | What |
| --- | --- |
| `src/data/` | Content: projects, experiences, blog posts, skills, social links |
| `src/components/` | UI. `Layout` = desktop split view + mobile landing, `Info` = all sections |
| `src/css/` | One stylesheet per area. Mobile breakpoint is `max-width: 999px` everywhere (mirrored in `hooks/useMediaQuery.js`) |

To add a project, experience, blog post or skill, edit the matching file in `src/data/`.

The contact form posts to Formspree; no secrets are needed. Never put API keys in
`REACT_APP_*` variables — they are compiled into the public JS bundle.
