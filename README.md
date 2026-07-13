# Burger Builder

A React burger-building app backed by Firebase (Realtime Database + Auth).
Built with [Vite](https://vitejs.dev/) and tested with [Vitest](https://vitest.dev/).

## Setup

```bash
npm install
cp .env.example .env   # then fill in your Firebase values
```

Environment variables (see `.env.example`):

- `REACT_APP_FIREBASE_API_KEY` — Firebase web API key
- `REACT_APP_FIREBASE_DB_URL` — Realtime Database URL

> The Firebase web API key is not a secret — it ships in the client bundle by
> design. Access control is enforced server-side by `database.rules.json` and
> Firebase Auth, **not** by hiding the key.

## Scripts

- `npm start` / `npm run dev` — start the dev server at http://localhost:3000
- `npm run build` — production build into `build/`
- `npm run preview` — preview the production build locally
- `npm test` — run the test suite once
- `npm run test:watch` — run tests in watch mode

## Deployment (Firebase)

```bash
npm run build
firebase deploy --only hosting,database
```

`firebase deploy --only database` publishes the security rules in
`database.rules.json` — deploy these before relying on the app in production.
