# Barra Attribution GitHub Pages (Static Frontend-Like UI)

This folder is the GitHub Pages static site for attribution demo.

## What this version does

- Uses a UI almost identical to `BarraModel/attribution/frontend` (including tabs).
- Loads only bundled sample data: `./data/sample_payload.json`.
- Portfolio-level sections use full bundled sample payload.
- Stock-level section loads `./data/stock_precomputed_latest.json` (latest-date weights + precomputed annualized contributions), so it does not fetch full historical stock rows.
- Does not call backend APIs.
- Disables `Validate / Run Attribution / Load Run / Upload payload` actions in GitHub Pages mode.

## Files

- `index.html`: page structure (frontend-like layout)
- `styles.css`: same visual style as frontend
- `app.js`: frontend logic with static-sample mode enabled
- `data/sample_payload.json`: sample payload used for rendering
- `data/stock_precomputed_latest.json`: compact stock-level precomputed dataset

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
