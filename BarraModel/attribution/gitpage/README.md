# Barra Attribution GitHub Pages (Static)

這個資料夾是純靜態展示版，專供 GitHub Pages 發佈使用。

## 特性

- 僅讀取 `./data/sample_payload.json` 範例資料
- 不含任何 API 呼叫
- 不含 `Validate / Run Attribution / Load Run` 等後端運算流程
- 已配好自動部署 workflow：`.github/workflows/deploy-barra-gitpage.yml`

## 檔案結構

- `index.html`: 主頁
- `styles.css`: 樣式
- `app.js`: 前端渲染邏輯
- `data/sample_payload.json`: 範例資料（來源：`simulate_data/api_runs/era_smoke2/frontend_payload.json`）

## 本機預覽

在 `BarraModel/attribution/gitpage` 目錄下啟動靜態伺服器：

```powershell
python -m http.server 8080
```

打開：`http://127.0.0.1:8080`

## 最方便上線方式（已設定）

這個 repo 現在是「推上 GitHub 就部署」模式：

1. Push 到 `main` 或 `master`。
2. GitHub Actions 會自動把 `BarraModel/attribution/gitpage` 部署到 Pages。

## 你只要做一次的 GitHub 設定

1. 到 repo `Settings` → `Pages`
2. Source 選 `GitHub Actions`

之後只要更新 `BarraModel/attribution/gitpage` 底下檔案並 push，就會自動更新網站。
