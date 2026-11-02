# BEC-2027 · Benue Election Command (demo)

Static build of the Benue Election Command prototype, served at bec.askalia4by4.com behind a password.

- `index.html` – the whole app (simulated demonstration data).
- `middleware.js` – password gate. Set `BEC_PASSWORD` in Vercel → Project → Settings → Environment Variables, then redeploy.
- `vercel.json` – keeps the site out of search engines and uncached.

On this domain the X monitor module shows its built-in snapshot; live Supabase data works only inside claude.ai.
