# Barra Attribution GitHub Pages (Static Frontend-Like UI)

This folder is the GitHub Pages static site for attribution demo.

## What this version does

- Uses a UI almost identical to `BarraModel/attribution/frontend` (including tabs).
- Loads only bundled sample data: `./data/sample_payload.json`.
- Portfolio-level sections use full bundled sample payload.
- Stock-level section reads `stock_precomputed` from `sample_payload.json` (backend-precomputed summary + factor rows), so it does not fetch full historical stock rows.
- Keeps backward-compatible fallback to legacy `./data/stock_precomputed_latest.json` if `stock_precomputed` is missing.
- Does not call backend APIs.
- Disables `Validate / Run Attribution / Load Run / Upload payload` actions in GitHub Pages mode.

## Files

- `index.html`: page structure (frontend-like layout)
- `styles.css`: same visual style as frontend
- `app.js`: frontend logic with static-sample mode enabled
- `data/sample_payload.json`: sample payload used for rendering
- `data/stock_precomputed_latest.json`: legacy fallback stock precomputed dataset

## Local preview

From `BarraModel/attribution/gitpage`:

```powershell
python -m http.server 8080
```

Then open:

`http://127.0.0.1:8080`

## Deployment

Deployment is handled by:

`/.github/workflows/deploy-barra-gitpage.yml`

Push to `main` or `master`, and GitHub Actions deploys this folder to GitHub Pages.
