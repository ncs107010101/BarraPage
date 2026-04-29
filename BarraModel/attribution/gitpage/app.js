const SAMPLE_DATA_URL = "./data/sample_payload.json";
const DAYS_PER_YEAR = 252;

const dom = {
  dataSourceLabel: document.getElementById("dataSourceLabel"),
  loadStatus: document.getElementById("loadStatus"),
  summaryCaption: document.getElementById("summaryCaption"),
  kpiGrid: document.getElementById("kpiGrid"),
  returnChart: document.getElementById("returnChart"),
  periodCaption: document.getElementById("periodCaption"),
  groupChips: document.getElementById("groupChips"),
  periodTableWrap: document.getElementById("periodTableWrap"),
  riskCaption: document.getElementById("riskCaption"),
  riskModelSwitch: document.getElementById("riskModelSwitch"),
  riskTableWrap: document.getElementById("riskTableWrap"),
  validationWrap: document.getElementById("validationWrap"),
  configWrap: document.getElementById("configWrap"),
};

const state = {
  payload: null,
  riskModel: "variance_covariance",
};

async function initialize() {
  dom.dataSourceLabel.textContent = SAMPLE_DATA_URL;
  try {
    const response = await fetch(SAMPLE_DATA_URL, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const payload = await response.json();
    state.payload = payload;
    state.riskModel = pickDefaultRiskModel(payload?.risk ?? []);
    renderAll();
    dom.loadStatus.textContent = "載入成功";
  } catch (error) {
    dom.loadStatus.textContent = "載入失敗";
    dom.kpiGrid.innerHTML = `<p class="empty">讀取範例資料失敗：${escapeHtml(String(error))}</p>`;
  }
}

function pickDefaultRiskModel(rows) {
  const models = [...new Set((rows ?? []).map((row) => String(row.risk_model ?? "")))].filter(Boolean);
  if (models.includes("variance_covariance")) {
    return "variance_covariance";
  }
  return models[0] ?? "variance_covariance";
}

function renderAll() {
  const payload = state.payload;
  if (!payload) return;

  const totals = (payload.totals ?? []).slice().sort((a, b) => String(a.date).localeCompare(String(b.date)));
  const factorRows = payload.period_summary ?? [];
  const riskRows = payload.risk ?? [];
  const validationRows = payload.validation ?? [];
  const config = payload.meta?.config ?? {};
  const rowsMeta = payload.meta?.rows ?? {};

  renderKpi(totals);
  renderReturnChart(totals);
  renderPeriodAttribution(factorRows);
  renderRisk(riskRows);
  renderValidation(validationRows);
  renderConfig(config, rowsMeta);
}

function renderKpi(totals) {
  if (!totals.length) {
    dom.summaryCaption.textContent = "No totals rows.";
    dom.kpiGrid.innerHTML = `<p class="empty">範例資料沒有 totals 欄位內容。</p>`;
    return;
  }

  const dailyP = totals.map((row) => toNum(row.portfolio_return));
  const dailyB = totals.map((row) => toNum(row.benchmark_return));
  const dailyA = totals.map((row) => toNum(row.active_return));
  const cumulativeP = cumulativeFromDaily(dailyP);
  const cumulativeB = cumulativeFromDaily(dailyB);
  const cumulativeA = cumulativeFromDaily(dailyA);
  const years = totals.length / DAYS_PER_YEAR;
  const annP = annualized(cumulativeP.at(-1), years);
  const annB = annualized(cumulativeB.at(-1), years);
  const annA = annualized(cumulativeA.at(-1), years);
  const te = std(dailyA) * Math.sqrt(DAYS_PER_YEAR);
  const ir = te > 0 ? annA / te : null;
  const winRate = dailyA.filter((v) => v > 0).length / dailyA.length;
  const maxDd = maxDrawdown(cumulativeP);

  const startDate = String(totals[0].date ?? "");
  const endDate = String(totals.at(-1).date ?? "");
  dom.summaryCaption.textContent = `${startDate} → ${endDate} | ${totals.length} 交易日`;

  const items = [
    ["Portfolio Return", pct(cumulativeP.at(-1)), tone(cumulativeP.at(-1))],
    ["Benchmark Return", pct(cumulativeB.at(-1)), tone(cumulativeB.at(-1))],
    ["Active Return", pct(cumulativeA.at(-1)), tone(cumulativeA.at(-1))],
    ["Portfolio Ann.", pct(annP), tone(annP)],
    ["Tracking Error", pct(te), ""],
    ["Information Ratio", num(ir, 3), tone(ir)],
    ["Benchmark Ann.", pct(annB), tone(annB)],
    ["Active Ann.", pct(annA), tone(annA)],
    ["Win Rate", pct(winRate), tone(winRate - 0.5)],
    ["Max Drawdown", pct(maxDd), "bad"],
  ];

  dom.kpiGrid.innerHTML = items
    .map(([label, value, cls]) => {
      const className = cls ? `kpi-value ${cls}` : "kpi-value";
      return `<article class="kpi"><div class="kpi-label">${escapeHtml(label)}</div><div class="${className}">${value}</div></article>`;
    })
    .join("");
}

function renderReturnChart(totals) {
  if (!totals.length) {
    dom.returnChart.innerHTML = "";
    return;
  }
  const dailyP = totals.map((row) => toNum(row.portfolio_return));
  const dailyB = totals.map((row) => toNum(row.benchmark_return));
  const dailyA = totals.map((row) => toNum(row.active_return));
  const series = [
    { name: "portfolio", values: cumulativeFromDaily(dailyP), color: "#ff9f5c" },
    { name: "benchmark", values: cumulativeFromDaily(dailyB), color: "#58c9d8" },
    { name: "active", values: cumulativeFromDaily(dailyA), color: "#a6e18e" },
  ];
  const yMin = Math.min(...series.flatMap((s) => s.values));
  const yMax = Math.max(...series.flatMap((s) => s.values));
  const width = 980;
  const height = 340;
  const pad = { l: 64, r: 18, t: 16, b: 42 };
  const innerW = width - pad.l - pad.r;
  const innerH = height - pad.t - pad.b;

  const y0 = mapY(0, yMin, yMax, innerH, pad.t);
  const base = [
    `<line x1="${pad.l}" y1="${y0}" x2="${width - pad.r}" y2="${y0}" stroke="rgba(255,255,255,0.16)" stroke-dasharray="4 4" />`,
    ...buildYAxisTicks(yMin, yMax, pad, innerH, width),
  ];

  const paths = series
    .map((s) => {
      const d = linePath(s.values, yMin, yMax, width, pad, innerW, innerH);
      return `<path d="${d}" fill="none" stroke="${s.color}" stroke-width="2.2" stroke-linecap="round" />`;
    })
    .join("");

  const xLabels = buildXAxisLabels(totals, pad, innerW, height);
  dom.returnChart.innerHTML = `${base.join("")}${paths}${xLabels}`;
}

function renderPeriodAttribution(rows) {
  const monthly = (rows ?? []).filter((row) => String(row.frequency ?? "") === "1mo");
  if (!monthly.length) {
    dom.periodCaption.textContent = "No period_summary rows with frequency=1mo.";
    dom.groupChips.innerHTML = "";
    dom.periodTableWrap.innerHTML = `<p class="empty">無可顯示資料。</p>`;
    return;
  }

  const latestPeriod = monthly.map((row) => String(row.period_start)).sort().at(-1);
  const latestRows = monthly
    .filter((row) => String(row.period_start) === latestPeriod)
    .sort((a, b) => Math.abs(toNum(b.active_contribution_sum)) - Math.abs(toNum(a.active_contribution_sum)));

  const groupTotals = sumByGroup(latestRows);
  dom.periodCaption.textContent = `Period Start: ${latestPeriod}`;
  dom.groupChips.innerHTML = Object.entries(groupTotals)
    .map(([group, value]) => `<span class="chip">${escapeHtml(group)}: ${pct(value)}</span>`)
    .join("");

  dom.periodTableWrap.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>factor_group</th>
          <th>factor_id</th>
          <th>active_contribution</th>
        </tr>
      </thead>
      <tbody>
        ${latestRows
          .slice(0, 18)
          .map((row) => {
            const val = toNum(row.active_contribution_sum);
            return `<tr>
              <td>${escapeHtml(String(row.factor_group ?? ""))}</td>
              <td class="mono">${escapeHtml(String(row.factor_id ?? ""))}</td>
              <td class="${tone(val)}">${pct(val)}</td>
            </tr>`;
          })
          .join("")}
      </tbody>
    </table>
  `;
}

function renderRisk(rows) {
  const models = [...new Set((rows ?? []).map((row) => String(row.risk_model ?? "")))].filter(Boolean);
  dom.riskModelSwitch.innerHTML = models
    .map((m) => {
      const active = m === state.riskModel ? "active" : "";
      return `<button class="${active}" data-risk-model="${escapeHtml(m)}">${escapeHtml(shortRiskName(m))}</button>`;
    })
    .join("");

  for (const btn of dom.riskModelSwitch.querySelectorAll("button[data-risk-model]")) {
    btn.addEventListener("click", () => {
      state.riskModel = String(btn.dataset.riskModel || "");
      renderRisk(rows);
    });
  }

  const targetRows = (rows ?? []).filter((row) => String(row.risk_model) === state.riskModel);
  if (!targetRows.length) {
    dom.riskCaption.textContent = `Model: ${state.riskModel}`;
    dom.riskTableWrap.innerHTML = `<p class="empty">無可顯示資料。</p>`;
    return;
  }

  const latestDate = targetRows.map((row) => String(row.date ?? "")).sort().at(-1);
  const latestRows = targetRows
    .filter((row) => String(row.date) === latestDate && String(row.component_type) !== "total")
    .sort((a, b) => Math.abs(toNum(b.risk_contribution_pct)) - Math.abs(toNum(a.risk_contribution_pct)));

  dom.riskCaption.textContent = `Model: ${state.riskModel} | Date: ${latestDate}`;
  dom.riskTableWrap.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>component_type</th>
          <th>component_id</th>
          <th>risk_contribution</th>
          <th>risk_contribution_pct</th>
        </tr>
      </thead>
      <tbody>
        ${latestRows
          .slice(0, 20)
          .map((row) => {
            const rc = toNum(row.risk_contribution);
            const pctVal = toNum(row.risk_contribution_pct);
            return `<tr>
              <td>${escapeHtml(String(row.component_type ?? ""))}</td>
              <td class="mono">${escapeHtml(String(row.component_id ?? ""))}</td>
              <td class="${tone(rc)}">${num(rc, 10)}</td>
              <td class="${tone(pctVal)}">${pct(pctVal)}</td>
            </tr>`;
          })
          .join("")}
      </tbody>
    </table>
  `;
}

function renderValidation(rows) {
  if (!rows?.length) {
    dom.validationWrap.innerHTML = `<p class="empty">無 validation rows。</p>`;
    return;
  }
  dom.validationWrap.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>metric</th>
          <th>value</th>
        </tr>
      </thead>
      <tbody>
        ${rows
          .map((row) => {
            const val = toNum(row.value);
            const cls = Math.abs(val) < 1e-8 ? "good" : "";
            return `<tr><td>${escapeHtml(String(row.metric ?? ""))}</td><td class="${cls}">${num(val, 12)}</td></tr>`;
          })
          .join("")}
      </tbody>
    </table>
  `;
}

function renderConfig(config, rowsMeta) {
  const flat = flattenObject(config);
  const rowsInfo = flattenObject(rowsMeta, "rows");
  const all = [...flat, ...rowsInfo];
  dom.configWrap.innerHTML = `<div class="config-grid">
    ${all
      .map(([k, v]) => `<article class="kv"><div class="k">${escapeHtml(k)}</div><div class="v mono">${escapeHtml(String(v))}</div></article>`)
      .join("")}
  </div>`;
}

function flattenObject(input, prefix = "") {
  const out = [];
  const entries = Object.entries(input ?? {});
  for (const [key, value] of entries) {
    const nextKey = prefix ? `${prefix}.${key}` : key;
    if (value !== null && typeof value === "object" && !Array.isArray(value)) {
      out.push(...flattenObject(value, nextKey));
      continue;
    }
    out.push([nextKey, value]);
  }
  return out;
}

function sumByGroup(rows) {
  const map = new Map();
  for (const row of rows) {
    const group = String(row.factor_group ?? "unknown");
    const next = (map.get(group) ?? 0) + toNum(row.active_contribution_sum);
    map.set(group, next);
  }
  return Object.fromEntries([...map.entries()].sort((a, b) => Math.abs(b[1]) - Math.abs(a[1])));
}

function cumulativeFromDaily(dailyReturns) {
  const out = [];
  let level = 1;
  for (const r of dailyReturns) {
    level *= 1 + toNum(r);
    out.push(level - 1);
  }
  return out;
}

function annualized(totalReturn, years) {
  if (!Number.isFinite(totalReturn) || !Number.isFinite(years) || years <= 0) {
    return null;
  }
  return Math.pow(1 + totalReturn, 1 / years) - 1;
}

function maxDrawdown(cumulativeSeries) {
  let peak = -Infinity;
  let worst = 0;
  for (const value of cumulativeSeries) {
    if (value > peak) peak = value;
    const drawdown = value - peak;
    if (drawdown < worst) worst = drawdown;
  }
  return worst;
}

function std(values) {
  if (!values || values.length < 2) return 0;
  const arr = values.map(toNum);
  const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
  const variance = arr.reduce((acc, v) => acc + (v - mean) ** 2, 0) / (arr.length - 1);
  return Math.sqrt(Math.max(variance, 0));
}

function linePath(values, yMin, yMax, width, pad, innerW, innerH) {
  if (!values.length) return "";
  const steps = Math.max(values.length - 1, 1);
  return values
    .map((value, i) => {
      const x = pad.l + (i / steps) * innerW;
      const y = mapY(value, yMin, yMax, innerH, pad.t);
      return `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");
}

function buildYAxisTicks(yMin, yMax, pad, innerH, width) {
  const ticks = 5;
  const out = [];
  for (let i = 0; i <= ticks; i += 1) {
    const t = i / ticks;
    const value = yMin + (1 - t) * (yMax - yMin);
    const y = pad.t + t * innerH;
    out.push(`<line x1="${pad.l}" y1="${y}" x2="${width - pad.r}" y2="${y}" stroke="rgba(255,255,255,0.07)" />`);
    out.push(`<text x="${pad.l - 10}" y="${y + 4}" fill="rgba(235,245,252,0.72)" font-size="11" text-anchor="end">${pct(value)}</text>`);
  }
  return out;
}

function buildXAxisLabels(totals, pad, innerW, height) {
  const labels = [];
  const idxs = [0, Math.floor((totals.length - 1) / 2), totals.length - 1];
  for (const idx of idxs) {
    const x = pad.l + (idx / Math.max(totals.length - 1, 1)) * innerW;
    const label = String(totals[idx]?.date ?? "");
    labels.push(`<text x="${x}" y="${height - 12}" fill="rgba(235,245,252,0.72)" font-size="11" text-anchor="middle">${escapeHtml(label)}</text>`);
  }
  return labels.join("");
}

function mapY(value, yMin, yMax, innerH, topPad) {
  const span = Math.max(yMax - yMin, 1e-9);
  const norm = (value - yMin) / span;
  return topPad + (1 - norm) * innerH;
}

function shortRiskName(model) {
  if (model === "variance_covariance") return "Variance";
  if (model === "downside_semicovariance") return "Downside";
  return model;
}

function tone(value) {
  if (!Number.isFinite(value)) return "";
  return value >= 0 ? "good" : "bad";
}

function toNum(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

function pct(value) {
  if (!Number.isFinite(value)) return "--";
  return `${(value * 100).toFixed(2)}%`;
}

function num(value, digits = 6) {
  if (!Number.isFinite(value)) return "--";
  return Number(value).toFixed(digits);
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

initialize();
