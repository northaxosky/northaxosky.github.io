# northaxosky.github.io

Personal portfolio website for [Kuzey Gök](https://northaxosky.github.io).

Built with Next.js, Tailwind CSS, and TypeScript. Deployed to GitHub Pages via GitHub Actions.

## Development

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Build static export to `out/` |
| `npm test` | Run tests |
| `npm run lint` | Lint with ESLint |

## Updating Content

All site content lives in [`src/data/portfolio.ts`](src/data/portfolio.ts) — edit that file to update profile info, experience, projects, or skills.

## Deployment

Pushes to `main` automatically build and deploy to GitHub Pages via the [deploy workflow](.github/workflows/deploy.yml).
