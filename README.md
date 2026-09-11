# CODEINK

A React + Vite prototype of the CODEINK landing page — streetwear where each
piece hides a song, unlocked by cracking a code tied to its NFC-linked drop.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs a static site to `dist/`.

## Deploy — Vercel (recommended, ~2 minutes)

1. Push this folder to a new GitHub repo.
2. Go to vercel.com → **Add New Project** → import the repo.
3. Vercel auto-detects Vite; leave the defaults and click **Deploy**.
4. Every future push to `main` redeploys automatically.

## Deploy — GitHub Pages (free, no extra account)

This repo already includes `.github/workflows/deploy.yml`, which builds and
publishes the site automatically on every push to `main`.

1. Push this folder to a new GitHub repo.
2. In the repo, go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.
3. Push to `main` (or re-run the workflow from the **Actions** tab).
4. Your site goes live at `https://<username>.github.io/<repo-name>/`.

## Routes

- `/` — the public homepage.
- `/drop/:id` — the page an NFC chip should point to, e.g. `/drop/001`.
  This is the "crack the code" experience: a short boot sequence, a
  password field, a hint link that appears after two wrong attempts, and
  on success a full reveal (artwork, song, artist, concept paragraph,
  Spotify/YouTube Music links).

Point each garment's NFC chip at `https://your-deployed-url/drop/001`
(swap the id per Drop).

### Why direct links like `/drop/001` need extra config

This is a single-page app — only one real file (`index.html`) exists on
the server, and React Router decides what to show based on the URL. A
static host that doesn't know this will 404 on a direct visit or page
refresh at `/drop/001`, because it looks for an actual file at that path.

- **Vercel**: `vercel.json` in this repo rewrites every path to
  `index.html`, so this works out of the box once deployed.
- **GitHub Pages**: has no rewrite config, so the deploy workflow copies
  `index.html` to `404.html` after building — GitHub Pages serves that for
  any unmatched path, and React Router then reads the URL and renders the
  right route. The workflow also sets `VITE_BASE_PATH` to the repo
  subpath so assets and routing resolve correctly there.

## Adding a new Drop

Add a new entry to `src/data/drops.js`:

```js
'002': {
  id: '002',
  name: 'Static Bloom',
  question: 'WHAT NOISE IS THIS?',
  accepted: ['song title', 'alternate spelling'],
  hint: 'A one-line clue, vague enough to stay fair.',
  song: 'Real Song Title',
  artist: 'Real Artist',
  concept: 'A short paragraph about the story behind this piece.',
  spotifyUrl: 'https://open.spotify.com/...',
  youtubeUrl: 'https://music.youtube.com/...',
}
```

No routing or component changes needed — `/drop/002` picks it up automatically.

## Notes

- The password check in `src/pages/DropPage.jsx` is client-side and meant
  for prototyping only — `accepted` answers currently ship in the bundle,
  which means anyone could read them from the built JS. Before this
  protects a real answer, move `DROPS` (or at least the `accepted` list and
  the comparison itself) to a server function, so the client only ever
  sends a guess and gets `granted`/`denied` back. Vercel supports this
  natively via serverless functions; GitHub Pages would need an external
  API since it only serves static files.
- The artwork in the reveal is a placeholder gradient block
  (`.reveal-art-full` in `src/index.css`). Swap it for a real `<img>` once
  you have final artwork per Drop.
