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

If you later point a custom domain (e.g. humanixsoft.com) at Pages, this repo is already set to `BASE_PATH=/`. Add the domain in GitHub **Settings → Pages → Custom domain**, then set DNS at your registrar.

### Namecheap → GitHub Pages (`humanixsoft.com`)

In Namecheap: **Domain List → Manage → Advanced DNS**. Keep MX records if you use email.

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `umairpakistan267.github.io.` |

Then GitHub **Settings → Pages → Custom domain**: `humanixsoft.com` → Save. When DNS is green, keep **Enforce HTTPS** on.

## Stack

Vite, React, TypeScript, Tailwind CSS, React Router.
