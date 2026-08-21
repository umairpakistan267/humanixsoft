# HumanixSoft

Marketing site for **HumanixSoft**, a product studio / software house.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Deploy on GitHub Pages

1. Create a GitHub repo (example name: `humanixsoft`).
2. Push this project to `main`:

```bash
git add .
git commit -m "Initial HumanixSoft site"
git branch -M main
git remote add origin https://github.com/YOUR_USER/humanixsoft.git
git push -u origin main
```

3. On GitHub: **Settings → Pages → Source: GitHub Actions**.
4. The site will be at `https://YOUR_USER.github.io/humanixsoft/`.

If you later point a custom domain (e.g. humanixsoft.com) at Pages, set `BASE_PATH` to `/` in `.github/workflows/deploy.yml`.

## Stack

Vite, React, TypeScript, Tailwind CSS, React Router.
