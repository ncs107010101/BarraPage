const dom = {
  mainTabs: document.getElementById("mainTabs"),
  pageLayout: document.getElementById("pageLayout"),
  runConsole: document.getElementById("runConsole"),
  contentMain: document.getElementById("contentMain"),
  portfolioTabPanel: document.getElementById("portfolioTabPanel"),
  stockTabPanel: document.getElementById("stockTabPanel"),
  apiBaseUrl: document.getElementById("apiBaseUrl"),
  dataDir: document.getElementById("dataDir"),
  configPath: document.getElementById("configPath"),
  outputRoot: document.getElementById("outputRoot"),
  runLabel: document.getElementById("runLabel"),
  runId: document.getElementById("runId"),
  payloadFile: document.getElementById("payloadFile"),
  ovIndustryMode: document.getElementById("ovIndustryMode"),
  ovAssetWeight: document.getElementById("ovAssetWeight"),
  ovSalesWeight: document.getElementById("ovSalesWeight"),
  ovLookbackDays: document.getElementById("ovLookbackDays"),
  ovMar: document.getElementById("ovMar"),
  ovEraMode: document.getElementById("ovEraMode"),
  ovEraNumSim: document.getElementById("ovEraNumSim"),
  ovEraScaleA: document.getElementById("ovEraScaleA"),
  ovEraIgnoreHead: document.getElementById("ovEraIgnoreHead"),
  ovEraSeed: document.getElementById("ovEraSeed"),
  btnSyncFromPayload: document.getElementById("btnSyncFromPayload"),
  filterDateFrom: document.getElementById("filterDateFrom"),
  filterDateTo: document.getElementById("filterDateTo"),
  displayFrequency: document.getElementById("displayFrequency"),
  btnFilterReset: document.getElementById("btnFilterReset"),
  groupStyle: document.getElementById("groupStyle"),
  groupIndustry: document.getElementById("groupIndustry"),
  groupCountry: document.getElementById("groupCountry"),
  groupCustom: document.getElementById("groupCustom"),
  dataMode: document.getElementById("dataMode"),
  btnValidate: document.getElementById("btnValidate"),
  btnRun: document.getElementById("btnRun"),
  btnLoadRun: document.getElementById("btnLoadRun"),
  runProgressCard: document.getElementById("runProgressCard"),
  runProgressText: document.getElementById("runProgressText"),
  runProgressEta: document.getElementById("runProgressEta"),
  runProgressBar: document.getElementById("runProgressBar"),
  runProgressPct: document.getElementById("runProgressPct"),
  runProgressElapsed: document.getElementById("runProgressElapsed"),
  logList: document.getElementById("logList"),
  kpiGrid: document.getElementById("kpiGrid"),
  chartTitle: document.getElementById("chartTitle"),
  chartCaption: document.getElementById("chartCaption"),
  returnChart: document.getElementById("returnChart"),
  chartLegend: document.getElementById("chartLegend"),
  chartLinePortfolio: document.getElementById("chartLinePortfolio"),
  chartLineBenchmark: document.getElementById("chartLineBenchmark"),
  chartLineActive: document.getElementById("chartLineActive"),
  chartDateFrom: document.getElementById("chartDateFrom"),
  chartDateTo: document.getElementById("chartDateTo"),
  chartZoom: document.getElementById("chartZoom"),
  chartZoomValue: document.getElementById("chartZoomValue"),
  btnChartRangeReset: document.getElementById("btnChartRangeReset"),
  btnOpenConfigFab: document.getElementById("btnOpenConfigFab"),
  configModal: document.getElementById("configModal"),
  configModalContent: document.getElementById("configModalContent"),
  btnCloseConfigModal: document.getElementById("btnCloseConfigModal"),
  groupAttributionTableWrap: document.getElementById("groupAttributionTableWrap"),
  factorRankCaption: document.getElementById("factorRankCaption"),
  periodValueMode: document.getElementById("periodValueMode"),
  periodSortMode: document.getElementById("periodSortMode"),
  periodShowCount: document.getElementById("periodShowCount"),
  periodGroupStyle: document.getElementById("periodGroupStyle"),
  periodGroupIndustry: document.getElementById("periodGroupIndustry"),
  periodGroupCountry: document.getElementById("periodGroupCountry"),
  periodGroupCustom: document.getElementById("periodGroupCustom"),
  periodGroupSpecific: document.getElementById("periodGroupSpecific"),
  factorRank: document.getElementById("factorRank"),
  validationBox: document.getElementById("validationBox"),
  riskModelSwitch: document.getElementById("riskModelSwitch"),
  riskTableWrap: document.getElementById("riskTableWrap"),
  factorFilter: document.getElementById("factorFilter"),
  factorFrequency: document.getElementById("factorFrequency"),
  factorDateFrom: document.getElementById("factorDateFrom"),
  factorDateTo: document.getElementById("factorDateTo"),
  btnFactorDateLatest: document.getElementById("btnFactorDateLatest"),
  factorTableWrap: document.getElementById("factorTableWrap"),
  stockFilter: document.getElementById("stockFilter"),
  stockValueMode: document.getElementById("stockValueMode"),
  stockFactorGroup: document.getElementById("stockFactorGroup"),
  stockSortKey: document.getElementById("stockSortKey"),
  stockSortDir: document.getElementById("stockSortDir"),
  stockOnlyPortfolioPositive: document.getElementById("stockOnlyPortfolioPositive"),
  stockSummaryWrap: document.getElementById("stockSummaryWrap"),
  stockDetailCaption: document.getElementById("stockDetailCaption"),
  stockDetailWrap: document.getElementById("stockDetailWrap"),
  btnOpenTourTop: document.getElementById("btnOpenTourTop"),
  btnOpenTourFab: document.getElementById("btnOpenTourFab"),
  tourOverlay: document.getElementById("tourOverlay"),
  tourStepCounter: document.getElementById("tourStepCounter"),
  tourStepTitle: document.getElementById("tourStepTitle"),
  tourStepBody: document.getElementById("tourStepBody"),
  tourStepTip: document.getElementById("tourStepTip"),
  btnTourPrev: document.getElementById("btnTourPrev"),
  btnTourNext: document.getElementById("btnTourNext"),
  btnTourClose: document.getElementById("btnTourClose"),
};

const defaultPaths = {
  dataDir: "C:\\Users\\CCH\\Documents\\New project\\BarraModel\\attribution\\simulate_data",
  configPath: "C:\\Users\\CCH\\Documents\\New project\\BarraModel\\attribution\\simulate_data\\model_spec.yaml",
  outputRoot: "C:\\Users\\CCH\\Documents\\New project\\BarraModel\\attribution\\runs",
};

const CORE_FACTOR_GROUPS = ["style", "industry", "country", "custom"];
const PERIOD_EXTRA_FACTOR_GROUPS = ["specific"];
const TOUR_ACTIVE_CLASS = "tour-target-active";
const RUN_DURATION_STORE_KEY = "barra_attribution_run_durations_ms_v1";
const STATIC_DEMO_MODE = true;
const STATIC_SAMPLE_PAYLOAD_URL = "./data/sample_payload.json";
const STATIC_STOCK_CHUNKS_MANIFEST_URL = "./data/stock_chunks_manifest.json";

const state = {
  runMeta: null,
  payload: null,
  riskModel: "variance_covariance",
  mode: "none",
  activeTab: "input",
  filters: {
    dateFrom: "",
    dateTo: "",
    factorGroups: new Set(CORE_FACTOR_GROUPS),
  },
  chartView: {
    showPortfolio: true,
    showBenchmark: true,
    showActive: true,
    dateFrom: "",
    dateTo: "",
    zoomPct: 100,
  },
  displayFrequency: "monthly",
  periodView: {
    valueMode: "active",
    sortMode: "abs_desc",
    showCount: "all",
    factorGroups: new Set([...CORE_FACTOR_GROUPS, "specific"]),
  },
  factorTable: {
    frequency: "monthly",
    dateFrom: "",
    dateTo: "",
  },
  stockView: {
    query: "",
    valueMode: "active",
    factorGroup: "all",
    sortKey: "asset_return",
    sortDir: "desc",
    onlyPortfolioPositive: true,
    selectedAssetId: "",
  },
  stockCache: {
    rowsKey: "",
    filteredRows: [],
    summaryKey: "",
    summaryRows: [],
  },
  runProgress: {
    startedAt: 0,
    estimatedMs: 0,
    timerId: null,
    progress: 0,
  },
  tour: {
    isOpen: false,
    stepIndex: 0,
    activeTarget: null,
  },
};

const TOUR_STEPS = [
  {
    title: "總覽",
    target: "#tourTopbar",
    bodyHtml: `
      <p>這是 Barra Attribution Workbench 的靜態展示版本，使用範例資料呈現結果。</p>
    `,
    tip: "此頁不會呼叫後端 API，只展示 sample payload。",
  },
  {
    title: "Run Console",
    target: "#runConsole",
    bodyHtml: `
      <p>此區保留原版介面外觀，但在 GitHub Pages 靜態模式中已停用後端運算動作。</p>
      <ul>
        <li>Validate / Run / Load Run 已停用</li>
        <li>顯示內容由 sample payload 載入</li>
      </ul>
    `,
    tip: "你仍可透過頁籤切換與篩選查看結果。",
  },
  {
    title: "KPI 指標",
    target: "#kpiGrid",
    bodyHtml: `
      <p>這裡展示 Portfolio、Benchmark、Active 的累積與年化績效等指標。</p>
    `,
    tip: "切換 View Filters 後，KPI 會跟著更新。",
  },
  {
    title: "Period Attribution",
    target: "#periodPanel",
    bodyHtml: `
      <p>可檢視因子在期間內的貢獻，支援 active / non-active 觀察模式。</p>
    `,
    tip: "可搭配排序與群組勾選快速看重點因子。",
  },
  {
    title: "Risk 與 Timeseries",
    target: "#riskPanel",
    bodyHtml: `
      <p>可切換風險模型並查看風險拆解，同時搭配因子時間序列追蹤。</p>
    `,
    tip: "所有內容均來自已打包的 sample payload。",
  },
];

function initializeTourUI() {
  if (!dom.tourOverlay) return;
  dom.tourOverlay.classList.remove("is-open");
  dom.tourOverlay.setAttribute("aria-hidden", "true");
}

function onTourOverlayClick(event) {
  const el = event.target;
  if (!(el instanceof HTMLElement)) return;
  if (el.classList.contains("tour-overlay") || el.classList.contains("tour-scrim")) {
    closeTour();
  }
}

function onTourKeydown(event) {
  if (!state.tour.isOpen) return;
  if (event.key === "Escape") {
    closeTour();
    return;
  }
  if (event.key === "ArrowRight") {
    onTourNext();
    return;
  }
  if (event.key === "ArrowLeft") {
    onTourPrev();
  }
}

function openTour(stepIndex = 0) {
  if (!dom.tourOverlay || TOUR_STEPS.length === 0) return;
  state.tour.isOpen = true;
  state.tour.stepIndex = Math.max(0, Math.min(stepIndex, TOUR_STEPS.length - 1));
  dom.tourOverlay.classList.add("is-open");
  dom.tourOverlay.setAttribute("aria-hidden", "false");
  renderTourStep();
}

function closeTour() {
  state.tour.isOpen = false;
  if (dom.tourOverlay) {
    dom.tourOverlay.classList.remove("is-open");
    dom.tourOverlay.setAttribute("aria-hidden", "true");
  }
  clearTourTarget();
}

function onTourPrev() {
  moveTourStep(-1);
}

function onTourNext() {
  const isLast = state.tour.stepIndex >= TOUR_STEPS.length - 1;
  if (isLast) {
    closeTour();
    return;
  }
  moveTourStep(1);
}

function moveTourStep(offset) {
  if (!state.tour.isOpen) return;
  const next = state.tour.stepIndex + offset;
  state.tour.stepIndex = Math.max(0, Math.min(next, TOUR_STEPS.length - 1));
  renderTourStep();
}

function renderTourStep() {
  if (!state.tour.isOpen) return;
  const idx = state.tour.stepIndex;
  const step = TOUR_STEPS[idx];
  if (!step) return;

  if (dom.tourStepCounter) {
    dom.tourStepCounter.textContent = `Step ${idx + 1} / ${TOUR_STEPS.length}`;
  }
  if (dom.tourStepTitle) {
    dom.tourStepTitle.textContent = step.title;
  }
  if (dom.tourStepBody) {
    dom.tourStepBody.innerHTML = step.bodyHtml;
  }
  if (dom.tourStepTip) {
    dom.tourStepTip.textContent = step.tip ?? "";
  }
  if (dom.btnTourPrev) {
    dom.btnTourPrev.disabled = idx === 0;
  }
  if (dom.btnTourNext) {
    dom.btnTourNext.textContent = idx >= TOUR_STEPS.length - 1 ? "完成導覽" : "下一步";
  }

  applyTourTarget(step.target);
}

function applyTourTarget(selector) {
  ensureTabForSelector(selector);
  clearTourTarget();
  if (!selector) return;
  const target = document.querySelector(selector);
  if (!(target instanceof HTMLElement)) return;
  state.tour.activeTarget = target;
  target.classList.add(TOUR_ACTIVE_CLASS);
  target.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
}

function openConfigModal() {
  if (!dom.configModal) return;
  dom.configModal.classList.add("is-open");
  dom.configModal.setAttribute("aria-hidden", "false");
}

function closeConfigModal() {
  if (!dom.configModal) return;
  dom.configModal.classList.remove("is-open");
  dom.configModal.setAttribute("aria-hidden", "true");
}

function onConfigModalClick(event) {
  const el = event.target;
  if (!(el instanceof HTMLElement)) return;
  if (el.classList.contains("config-modal") || el.classList.contains("config-modal-scrim")) {
    closeConfigModal();
  }
}

function onConfigModalKeydown(event) {
  if (event.key !== "Escape") return;
  if (!dom.configModal?.classList.contains("is-open")) return;
  closeConfigModal();
}

function clearTourTarget() {
  const prev = state.tour.activeTarget;
  if (prev instanceof HTMLElement) {
    prev.classList.remove(TOUR_ACTIVE_CLASS);
  }
  state.tour.activeTarget = null;
}

function ensureTabForSelector(selector) {
  if (!selector) return;
  if (selector === "#runConsole") {
    setActiveTab("input");
    return;
  }
  if (selector === "#stockPanel" || selector === "#stockFactorPanel") {
    setActiveTab("stock");
    return;
  }
  if (
    selector === "#kpiGrid" ||
    selector === "#periodPanel" ||
    selector === "#riskPanel" ||
    selector === "#factorPanel"
  ) {
    setActiveTab("portfolio");
  }
}

function setActiveTab(tab) {
  state.activeTab = tab;
  const isInput = tab === "input";
  const isPortfolio = tab === "portfolio";
  const isStock = tab === "stock";

  dom.runConsole.hidden = !isInput;
  dom.contentMain.hidden = isInput;
  dom.portfolioTabPanel.hidden = !isPortfolio;
  dom.stockTabPanel.hidden = !isStock;
  dom.pageLayout.classList.toggle("single-column", !isInput);

  for (const btn of dom.mainTabs.querySelectorAll("button[data-tab]")) {
    btn.classList.toggle("active", btn.dataset.tab === tab);
  }
}

function onMainTabClick(event) {
  const btn = event.target.closest("button[data-tab]");
  if (!btn) return;
  setActiveTab(String(btn.dataset.tab || "input"));
}

function initialize() {
  dom.dataDir.value = defaultPaths.dataDir;
  dom.configPath.value = defaultPaths.configPath;
  dom.outputRoot.value = defaultPaths.outputRoot;
  setScenarioDefaults();

  dom.mainTabs.addEventListener("click", onMainTabClick);
  if (!STATIC_DEMO_MODE) {
    dom.btnValidate.addEventListener("click", onValidate);
    dom.btnRun.addEventListener("click", onRun);
    dom.btnLoadRun.addEventListener("click", onLoadRun);
    dom.payloadFile.addEventListener("change", onPayloadFileChange);
  }
  dom.btnSyncFromPayload.addEventListener("click", onSyncFromPayload);
  dom.factorFilter.addEventListener("input", renderFactorTable);
  dom.factorFrequency.addEventListener("change", onFactorFrequencyChange);
  dom.factorDateFrom.addEventListener("change", onFactorTableRangeChange);
  dom.factorDateTo.addEventListener("change", onFactorTableRangeChange);
  dom.btnFactorDateLatest.addEventListener("click", onFactorTableLatestDate);
  dom.chartLinePortfolio.addEventListener("change", onChartViewChange);
  dom.chartLineBenchmark.addEventListener("change", onChartViewChange);
  dom.chartLineActive.addEventListener("change", onChartViewChange);
  dom.chartDateFrom.addEventListener("change", onChartViewChange);
  dom.chartDateTo.addEventListener("change", onChartViewChange);
  dom.chartZoom.addEventListener("input", onChartZoomInput);
  dom.btnChartRangeReset.addEventListener("click", onChartRangeReset);
  dom.riskModelSwitch.addEventListener("click", onRiskModelSwitch);
  dom.ovIndustryMode.addEventListener("change", onIndustryModeChange);
  dom.filterDateFrom.addEventListener("change", onViewFilterChange);
  dom.filterDateTo.addEventListener("change", onViewFilterChange);
  dom.displayFrequency.addEventListener("change", onDisplayFrequencyChange);
  dom.btnFilterReset.addEventListener("click", onResetViewFilters);
  dom.groupStyle.addEventListener("change", onViewFilterChange);
  dom.groupIndustry.addEventListener("change", onViewFilterChange);
  dom.groupCountry.addEventListener("change", onViewFilterChange);
  dom.groupCustom.addEventListener("change", onViewFilterChange);
  dom.periodValueMode.addEventListener("change", onPeriodViewChange);
  dom.periodSortMode.addEventListener("change", onPeriodViewChange);
  dom.periodShowCount.addEventListener("change", onPeriodViewChange);
  dom.periodGroupStyle.addEventListener("change", onPeriodViewChange);
  dom.periodGroupIndustry.addEventListener("change", onPeriodViewChange);
  dom.periodGroupCountry.addEventListener("change", onPeriodViewChange);
  dom.periodGroupCustom.addEventListener("change", onPeriodViewChange);
  dom.periodGroupSpecific.addEventListener("change", onPeriodViewChange);
  dom.stockFilter.addEventListener("input", onStockViewChange);
  dom.stockValueMode.addEventListener("change", onStockViewChange);
  dom.stockFactorGroup.addEventListener("change", onStockViewChange);
  dom.stockSortKey.addEventListener("change", onStockViewChange);
  dom.stockSortDir.addEventListener("change", onStockViewChange);
  dom.stockOnlyPortfolioPositive.addEventListener("change", onStockViewChange);
  dom.btnOpenConfigFab?.addEventListener("click", openConfigModal);
  dom.btnCloseConfigModal?.addEventListener("click", closeConfigModal);
  dom.configModal?.addEventListener("click", onConfigModalClick);
  document.addEventListener("keydown", onConfigModalKeydown);
  dom.btnOpenTourTop?.addEventListener("click", () => openTour(0));
  dom.btnOpenTourFab?.addEventListener("click", () => openTour(0));
  dom.btnTourPrev?.addEventListener("click", onTourPrev);
  dom.btnTourNext?.addEventListener("click", onTourNext);
  dom.btnTourClose?.addEventListener("click", closeTour);
  dom.tourOverlay?.addEventListener("click", onTourOverlayClick);
  document.addEventListener("keydown", onTourKeydown);

  onIndustryModeChange();
  applyStateFiltersToControls();
  applyDisplayFrequencyControl();
  applyPeriodViewControls();
  applyStockViewControls();
  applyFactorTableControls();
  applyChartViewControls();
  syncFactorTableRangeToControls();
  initializeTourUI();
  setActiveTab("input");
  renderAll();
  if (STATIC_DEMO_MODE) {
    setupStaticDemoUi();
    loadBundledSamplePayload();
  }
  log("前端已初始化。");
}

function setScenarioDefaults() {
  dom.ovIndustryMode.value = "blended";
  dom.ovAssetWeight.value = "0.75";
  dom.ovSalesWeight.value = "0.25";
  dom.ovLookbackDays.value = "60";
  dom.ovMar.value = "0.0";
  dom.ovEraMode.value = "simulated";
  dom.ovEraNumSim.value = "80";
  dom.ovEraScaleA.value = "1.4";
  dom.ovEraIgnoreHead.value = "15";
  dom.ovEraSeed.value = "20260428";
}

function onIndustryModeChange() {
  const mode = dom.ovIndustryMode.value;
  const disableWeights = mode !== "blended";
  dom.ovAssetWeight.disabled = disableWeights;
  dom.ovSalesWeight.disabled = disableWeights;
}

function onSyncFromPayload() {
  const cfg = state.payload?.meta?.config;
  if (!cfg) {
    log("目前尚未載入 payload，無法同步設定。", "error");
    return;
  }
  try {
    const industry = cfg.industry_exposure ?? {};
    dom.ovIndustryMode.value = String(industry.mode ?? dom.ovIndustryMode.value);
    dom.ovAssetWeight.value = String(industry.asset_weight ?? dom.ovAssetWeight.value);
    dom.ovSalesWeight.value = String(industry.sales_weight ?? dom.ovSalesWeight.value);

    const risk = cfg.risk_model ?? {};
    dom.ovLookbackDays.value = String(risk.lookback_days ?? dom.ovLookbackDays.value);
    dom.ovMar.value = String(risk.mar ?? dom.ovMar.value);
    dom.ovEraMode.value = String(risk.factor_era_mode ?? dom.ovEraMode.value);
    dom.ovEraNumSim.value = String(risk.factor_era_num_simulations ?? dom.ovEraNumSim.value);
    dom.ovEraScaleA.value = String(risk.factor_era_scaled_a ?? dom.ovEraScaleA.value);
    dom.ovEraIgnoreHead.value = String(risk.factor_era_ignore_head ?? dom.ovEraIgnoreHead.value);
    dom.ovEraSeed.value = String(risk.factor_era_seed ?? dom.ovEraSeed.value);

    onIndustryModeChange();
    log("已用 payload config 同步 Scenario Overrides。", "success");
  } catch (err) {
    log(`?郊 Scenario Overrides 憭望?: ${err.message}`, "error");
  }
}

function collectScenarioOverrides() {
  return {
    industry_exposure: {
      mode: String(dom.ovIndustryMode.value || "blended"),
      asset_weight: safeNumber(dom.ovAssetWeight.value || 0.75),
      sales_weight: safeNumber(dom.ovSalesWeight.value || 0.25),
    },
    risk_model: {
      lookback_days: Math.max(20, safeInt(dom.ovLookbackDays.value || 60)),
      mar: safeNumber(dom.ovMar.value || 0.0),
      factor_era_mode: String(dom.ovEraMode.value || "simulated"),
      factor_era_num_simulations: Math.max(1, safeInt(dom.ovEraNumSim.value || 80)),
      factor_era_scaled_a: Math.max(0.01, safeNumber(dom.ovEraScaleA.value || 1.4)),
      factor_era_ignore_head: Math.max(0, safeInt(dom.ovEraIgnoreHead.value || 15)),
      factor_era_seed: Math.max(0, safeInt(dom.ovEraSeed.value || 20260428)),
    },
  };
}

function normalizeFactorGroup(group) {
  const g = String(group ?? "").toLowerCase();
  if (CORE_FACTOR_GROUPS.includes(g) || PERIOD_EXTRA_FACTOR_GROUPS.includes(g)) {
    return g;
  }
  return "custom";
}

function applyStateFiltersToControls() {
  dom.filterDateFrom.value = state.filters.dateFrom || "";
  dom.filterDateTo.value = state.filters.dateTo || "";
  dom.groupStyle.checked = state.filters.factorGroups.has("style");
  dom.groupIndustry.checked = state.filters.factorGroups.has("industry");
  dom.groupCountry.checked = state.filters.factorGroups.has("country");
  dom.groupCustom.checked = state.filters.factorGroups.has("custom");
}

function applyDisplayFrequencyControl() {
  const freq = normalizeDisplayFrequency(state.displayFrequency);
  state.displayFrequency = freq;
  state.factorTable.frequency = freq;
  dom.displayFrequency.value = freq;
  dom.factorFrequency.value = freq;
  dom.factorFrequency.disabled = true;
}

function applyPeriodViewControls() {
  dom.periodValueMode.value = state.periodView.valueMode;
  dom.periodSortMode.value = state.periodView.sortMode;
  dom.periodShowCount.value = state.periodView.showCount;
  dom.periodGroupStyle.checked = state.periodView.factorGroups.has("style");
  dom.periodGroupIndustry.checked = state.periodView.factorGroups.has("industry");
  dom.periodGroupCountry.checked = state.periodView.factorGroups.has("country");
  dom.periodGroupCustom.checked = state.periodView.factorGroups.has("custom");
  dom.periodGroupSpecific.checked = state.periodView.factorGroups.has("specific");
}

function applyStockViewControls() {
  dom.stockFilter.value = state.stockView.query;
  dom.stockValueMode.value = state.stockView.valueMode;
  dom.stockFactorGroup.value = state.stockView.factorGroup;
  dom.stockSortKey.value = state.stockView.sortKey;
  dom.stockSortDir.value = state.stockView.sortDir;
  dom.stockOnlyPortfolioPositive.checked = state.stockView.onlyPortfolioPositive;
}

function applyFactorTableControls() {
  dom.factorFrequency.value = state.factorTable.frequency || state.displayFrequency || "monthly";
}

function applyChartViewControls() {
  dom.chartLinePortfolio.checked = Boolean(state.chartView.showPortfolio);
  dom.chartLineBenchmark.checked = Boolean(state.chartView.showBenchmark);
  dom.chartLineActive.checked = Boolean(state.chartView.showActive);
  dom.chartDateFrom.value = state.chartView.dateFrom || "";
  dom.chartDateTo.value = state.chartView.dateTo || "";
  const zoom = Math.max(100, Math.min(400, safeInt(state.chartView.zoomPct || 100)));
  state.chartView.zoomPct = zoom;
  dom.chartZoom.value = String(zoom);
  dom.chartZoomValue.textContent = `${zoom}%`;
}

function onPeriodViewChange() {
  state.periodView.valueMode = String(dom.periodValueMode.value || "active");
  state.periodView.sortMode = String(dom.periodSortMode.value || "abs_desc");
  state.periodView.showCount = String(dom.periodShowCount.value || "all");
  const groups = new Set();
  if (dom.periodGroupStyle.checked) groups.add("style");
  if (dom.periodGroupIndustry.checked) groups.add("industry");
  if (dom.periodGroupCountry.checked) groups.add("country");
  if (dom.periodGroupCustom.checked) groups.add("custom");
  if (dom.periodGroupSpecific.checked) groups.add("specific");
  state.periodView.factorGroups = groups;
  renderFactorRank();
}

function onStockViewChange() {
  state.stockView.query = String(dom.stockFilter.value || "").trim().toLowerCase();
  state.stockView.valueMode = String(dom.stockValueMode.value || "active");
  state.stockView.factorGroup = String(dom.stockFactorGroup.value || "all");
  state.stockView.sortKey = String(dom.stockSortKey.value || "asset_return");
  state.stockView.sortDir = String(dom.stockSortDir.value || "desc");
  state.stockView.onlyPortfolioPositive = Boolean(dom.stockOnlyPortfolioPositive.checked);
  renderStockPanels();
}

function onViewFilterChange() {
  state.filters.dateFrom = String(dom.filterDateFrom.value || "");
  state.filters.dateTo = String(dom.filterDateTo.value || "");
  const groups = new Set();
  if (dom.groupStyle.checked) groups.add("style");
  if (dom.groupIndustry.checked) groups.add("industry");
  if (dom.groupCountry.checked) groups.add("country");
  if (dom.groupCustom.checked) groups.add("custom");
  state.filters.factorGroups = groups;
  syncFactorTableRangeWithCurrentData(false);
  renderAll();
}

function onDisplayFrequencyChange() {
  const freq = normalizeDisplayFrequency(dom.displayFrequency.value || "monthly");
  state.displayFrequency = freq;
  state.factorTable.frequency = freq;
  state.stockCache.summaryKey = "";
  state.stockCache.summaryRows = [];
  applyDisplayFrequencyControl();
  syncFactorTableRangeWithCurrentData(true);
  renderAll();
}

function onResetViewFilters() {
  resetViewFiltersToFullRange();
  applyStateFiltersToControls();
  syncFactorTableRangeWithCurrentData(true);
  renderAll();
}

function collectAllDates() {
  const dates = [];
  for (const row of state.payload?.totals ?? []) {
    if (typeof row.date === "string" && row.date.length >= 10) {
      dates.push(row.date.slice(0, 10));
    }
  }
  for (const row of state.payload?.factor_timeseries ?? []) {
    if (typeof row.date === "string" && row.date.length >= 10) {
      dates.push(row.date.slice(0, 10));
    }
  }
  for (const row of state.payload?.risk ?? []) {
    if (typeof row.date === "string" && row.date.length >= 10) {
      dates.push(row.date.slice(0, 10));
    }
  }
  for (const row of state.payload?.stock_contributions ?? []) {
    if (typeof row.date === "string" && row.date.length >= 10) {
      dates.push(row.date.slice(0, 10));
    }
  }
  const uniq = [...new Set(dates)].sort();
  return uniq;
}

function setDateInputBounds(dates) {
  const min = dates[0] ?? "";
  const max = dates.at(-1) ?? "";
  dom.filterDateFrom.min = min;
  dom.filterDateFrom.max = max;
  dom.filterDateTo.min = min;
  dom.filterDateTo.max = max;
}

function resetViewFiltersToFullRange() {
  const dates = collectAllDates();
  setDateInputBounds(dates);
  state.filters.dateFrom = dates[0] ?? "";
  state.filters.dateTo = dates.at(-1) ?? "";
  state.filters.factorGroups = new Set(CORE_FACTOR_GROUPS);
}

function initializeViewFiltersFromPayload() {
  if (!state.payload) {
    state.filters.dateFrom = "";
    state.filters.dateTo = "";
    state.filters.factorGroups = new Set(CORE_FACTOR_GROUPS);
    applyStateFiltersToControls();
    return;
  }

  const dates = collectAllDates();
  setDateInputBounds(dates);
  const min = dates[0] ?? "";
  const max = dates.at(-1) ?? "";

  if (!state.filters.dateFrom || (min && state.filters.dateFrom < min)) {
    state.filters.dateFrom = min;
  }
  if (!state.filters.dateTo || (max && state.filters.dateTo > max)) {
    state.filters.dateTo = max;
  }
  if (state.filters.dateFrom && state.filters.dateTo && state.filters.dateFrom > state.filters.dateTo) {
    state.filters.dateFrom = min;
    state.filters.dateTo = max;
  }
  if (!(state.filters.factorGroups instanceof Set) || state.filters.factorGroups.size === 0) {
    state.filters.factorGroups = new Set(CORE_FACTOR_GROUPS);
  }
  applyStateFiltersToControls();
}

function collectFactorTableDates(rows) {
  const dates = [];
  for (const row of rows) {
    const raw = row?.date;
    if (typeof raw === "string" && raw.length >= 10) {
      dates.push(raw.slice(0, 10));
    }
  }
  return [...new Set(dates)].sort();
}

function parseYmdToUtcDate(ymd) {
  if (typeof ymd !== "string" || ymd.length < 10) return null;
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(ymd.slice(0, 10));
  if (!m) return null;
  const y = Number(m[1]);
  const mo = Number(m[2]) - 1;
  const d = Number(m[3]);
  return new Date(Date.UTC(y, mo, d));
}

function formatUtcDate(dt) {
  const y = dt.getUTCFullYear();
  const m = String(dt.getUTCMonth() + 1).padStart(2, "0");
  const d = String(dt.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function bucketDateKey(dateYmd, frequency) {
  const freq = normalizeDisplayFrequency(frequency);
  if (freq === "daily") return dateYmd;
  const dt = parseYmdToUtcDate(dateYmd);
  if (!(dt instanceof Date) || Number.isNaN(dt.getTime())) return dateYmd;
  if (freq === "weekly") {
    const day = dt.getUTCDay(); // 0=Sun ... 6=Sat
    const diffToMon = day === 0 ? -6 : 1 - day;
    dt.setUTCDate(dt.getUTCDate() + diffToMon);
    return formatUtcDate(dt);
  }
  if (freq === "monthly") {
    dt.setUTCDate(1);
    return formatUtcDate(dt);
  }
  if (freq === "quarterly") {
    const month = dt.getUTCMonth();
    const qStartMonth = Math.floor(month / 3) * 3;
    dt.setUTCMonth(qStartMonth, 1);
    return formatUtcDate(dt);
  }
  return dateYmd;
}

function normalizeDisplayFrequency(value) {
  const v = String(value ?? "").toLowerCase();
  if (v === "daily" || v === "day" || v === "1d") return "daily";
  if (v === "weekly" || v === "week" || v === "1w") return "weekly";
  if (v === "monthly" || v === "month" || v === "1mo" || v === "1m") return "monthly";
  if (v === "quarterly" || v === "quarter" || v === "1q" || v === "quarterly") return "quarterly";
  return "monthly";
}

function periodsPerYearForFrequency(frequency) {
  const freq = normalizeDisplayFrequency(frequency);
  if (freq === "daily") return 252;
  if (freq === "weekly") return 52;
  if (freq === "quarterly") return 4;
  return 12;
}

function annualizeReturnByPeriodCount(periodReturn, periodCount, frequency = state.displayFrequency) {
  const r = safeNumber(periodReturn);
  const periods = Math.max(1, safeInt(periodCount || 1));
  const periodsPerYear = periodsPerYearForFrequency(frequency);
  const onePlus = Math.max(1e-10, 1 + r);
  return Math.pow(onePlus, periodsPerYear / periods) - 1;
}

function annualizationScaleFromPeriodCount(periodCount, frequency = state.displayFrequency) {
  const periods = Math.max(1, safeInt(periodCount || 1));
  const periodsPerYear = periodsPerYearForFrequency(frequency);
  return periodsPerYear / periods;
}

function annualizeContributionByPeriodCount(periodContribution, periodCount, frequency = state.displayFrequency) {
  return safeNumber(periodContribution) * annualizationScaleFromPeriodCount(periodCount, frequency);
}

function countUniquePeriods(rows, key = "date", frequency = state.displayFrequency) {
  const buckets = new Set();
  const freq = normalizeDisplayFrequency(frequency);
  for (const row of rows ?? []) {
    const raw = row?.[key];
    if (typeof raw === "string" && raw.length >= 10) {
      const dt = raw.slice(0, 10);
      buckets.add(bucketDateKey(dt, freq));
    }
  }
  return Math.max(1, buckets.size);
}

function getSelectedPeriodCount(frequency = state.displayFrequency) {
  const totals = getTotalsRows();
  if (totals.length > 0) return countUniquePeriods(totals, "date", frequency);
  const factorRows = getFactorRows();
  if (factorRows.length > 0) return countUniquePeriods(factorRows, "date", frequency);
  const stockRows = getStockRows();
  if (stockRows.length > 0) return countUniquePeriods(stockRows, "date", frequency);
  return 1;
}

function getFactorTimeseriesRowsForFrequency() {
  const freq = normalizeDisplayFrequency(state.factorTable.frequency || state.displayFrequency || "monthly");
  const baseRows = getFactorRows();
  if (baseRows.length === 0) return [];
  const grouped = new Map();
  for (const row of baseRows) {
    const dt = String(row.date ?? "").slice(0, 10);
    if (!dt) continue;
    const fid = String(row.factor_id ?? "");
    const grp = String(row.factor_group ?? "");
    const bucket = bucketDateKey(dt, freq);
    const key = `${bucket}||${fid}||${grp}`;
    const prev = grouped.get(key) ?? {
      date: dt,
      period_start: dt,
      period_end: dt,
      period_count: 1,
      trading_days: 0,
      seen_days: new Set(),
      factor_id: fid,
      factor_group: grp,
      portfolio_period_return: 0,
      benchmark_period_return: 0,
      active_period_return: 0,
    };
    if (!prev.seen_days.has(dt)) {
      prev.seen_days.add(dt);
      prev.trading_days += 1;
      if (dt < prev.period_start) prev.period_start = dt;
      if (dt > prev.period_end) prev.period_end = dt;
    }
    const p = safeNumber(row.portfolio_contribution);
    const b = safeNumber(row.benchmark_contribution);
    const a = safeNumber(row.active_contribution);
    prev.portfolio_period_return += p;
    prev.benchmark_period_return += b;
    prev.active_period_return += a;
    grouped.set(key, prev);
  }

  return [...grouped.values()]
    .map((row) => ({
      date: row.period_end,
      period_start: row.period_start,
      period_end: row.period_end,
      period_count: 1,
      trading_days: row.trading_days,
      factor_id: row.factor_id,
      factor_group: row.factor_group,
      portfolio_period_return: row.portfolio_period_return,
      benchmark_period_return: row.benchmark_period_return,
      active_period_return: row.active_period_return,
      portfolio_annualized: annualizeContributionByPeriodCount(row.portfolio_period_return, 1, freq),
      benchmark_annualized: annualizeContributionByPeriodCount(row.benchmark_period_return, 1, freq),
      active_annualized: annualizeContributionByPeriodCount(row.active_period_return, 1, freq),
    }))
    .sort((a, b) => {
      const da = String(a.date ?? "");
      const db = String(b.date ?? "");
      if (da !== db) return da.localeCompare(db);
      return String(a.factor_id ?? "").localeCompare(String(b.factor_id ?? ""));
    });
}

function setFactorTableDateBounds(dates) {
  const min = dates[0] ?? "";
  const max = dates.at(-1) ?? "";
  dom.factorDateFrom.min = min;
  dom.factorDateFrom.max = max;
  dom.factorDateTo.min = min;
  dom.factorDateTo.max = max;
}

function syncFactorTableRangeToControls() {
  dom.factorFrequency.value = state.factorTable.frequency || state.displayFrequency || "monthly";
  dom.factorDateFrom.value = state.factorTable.dateFrom || "";
  dom.factorDateTo.value = state.factorTable.dateTo || "";
}

function syncFactorTableRangeWithCurrentData(forceLastDay = false) {
  const rows = getFactorTimeseriesRowsForFrequency();
  const dates = collectFactorTableDates(rows);
  setFactorTableDateBounds(dates);
  if (dates.length === 0) {
    state.factorTable.dateFrom = "";
    state.factorTable.dateTo = "";
    syncFactorTableRangeToControls();
    return;
  }
  const min = dates[0];
  const max = dates.at(-1);

  if (forceLastDay || !state.factorTable.dateFrom || !state.factorTable.dateTo) {
    state.factorTable.dateFrom = max;
    state.factorTable.dateTo = max;
  } else {
    if (state.factorTable.dateFrom < min) state.factorTable.dateFrom = min;
    if (state.factorTable.dateFrom > max) state.factorTable.dateFrom = max;
    if (state.factorTable.dateTo < min) state.factorTable.dateTo = min;
    if (state.factorTable.dateTo > max) state.factorTable.dateTo = max;
    if (state.factorTable.dateFrom > state.factorTable.dateTo) {
      state.factorTable.dateFrom = min;
      state.factorTable.dateTo = max;
    }
  }

  syncFactorTableRangeToControls();
}

function onFactorFrequencyChange() {
  const freq = normalizeDisplayFrequency(dom.factorFrequency.value || "monthly");
  state.factorTable.frequency = freq;
  state.displayFrequency = freq;
  applyDisplayFrequencyControl();
  state.stockCache.summaryKey = "";
  state.stockCache.summaryRows = [];
  syncFactorTableRangeWithCurrentData(true);
  renderAll();
}

function onFactorTableRangeChange() {
  state.factorTable.dateFrom = String(dom.factorDateFrom.value || "");
  state.factorTable.dateTo = String(dom.factorDateTo.value || "");
  if (state.factorTable.dateFrom && state.factorTable.dateTo && state.factorTable.dateFrom > state.factorTable.dateTo) {
    const oldFrom = state.factorTable.dateFrom;
    state.factorTable.dateFrom = state.factorTable.dateTo;
    state.factorTable.dateTo = oldFrom;
  }
  syncFactorTableRangeToControls();
  renderFactorTable();
}

function onFactorTableLatestDate() {
  syncFactorTableRangeWithCurrentData(true);
  renderFactorTable();
}

function onChartViewChange() {
  state.chartView.showPortfolio = Boolean(dom.chartLinePortfolio.checked);
  state.chartView.showBenchmark = Boolean(dom.chartLineBenchmark.checked);
  state.chartView.showActive = Boolean(dom.chartLineActive.checked);
  if (!state.chartView.showPortfolio && !state.chartView.showBenchmark && !state.chartView.showActive) {
    state.chartView.showActive = true;
    dom.chartLineActive.checked = true;
  }
  state.chartView.dateFrom = String(dom.chartDateFrom.value || "");
  state.chartView.dateTo = String(dom.chartDateTo.value || "");
  if (state.chartView.dateFrom && state.chartView.dateTo && state.chartView.dateFrom > state.chartView.dateTo) {
    const swap = state.chartView.dateFrom;
    state.chartView.dateFrom = state.chartView.dateTo;
    state.chartView.dateTo = swap;
  }
  applyChartViewControls();
  renderChart();
}

function onChartZoomInput() {
  state.chartView.zoomPct = Math.max(100, Math.min(400, safeInt(dom.chartZoom.value || 100)));
  dom.chartZoomValue.textContent = `${state.chartView.zoomPct}%`;
  renderChart();
}

function onChartRangeReset() {
  state.chartView.dateFrom = "";
  state.chartView.dateTo = "";
  renderChart();
}

function filterByDateRange(rows, key = "date") {
  const from = state.filters.dateFrom || "";
  const to = state.filters.dateTo || "";
  if (!from && !to) {
    return rows;
  }
  return rows.filter((row) => {
    const raw = row?.[key];
    if (typeof raw !== "string" || raw.length < 10) {
      return false;
    }
    const dt = raw.slice(0, 10);
    if (from && dt < from) return false;
    if (to && dt > to) return false;
    return true;
  });
}

function filterByFactorGroups(rows) {
  const selected = state.filters.factorGroups;
  if (!(selected instanceof Set) || selected.size === 0) {
    return [];
  }
  return rows.filter((row) => selected.has(normalizeFactorGroup(row.factor_group)));
}

function buildFactorGroupMap() {
  const map = new Map();
  for (const row of state.payload?.factor_timeseries ?? []) {
    const fid = String(row.factor_id ?? "");
    if (!fid) continue;
    if (!map.has(fid)) {
      map.set(fid, normalizeFactorGroup(row.factor_group));
    }
  }
  return map;
}

function currentFilterSummary() {
  const from = state.filters.dateFrom || "--";
  const to = state.filters.dateTo || "--";
  const groups = [...state.filters.factorGroups].join(", ") || "(none)";
  return `Date ${from} ~ ${to} | Groups: ${groups} | Freq: ${state.displayFrequency}`;
}

function buildActiveSpecificPeriodRow() {
  const totals = getTotalsRows();
  const freq = normalizeDisplayFrequency(state.displayFrequency);
  const periodCount = countUniquePeriods(totals, "date", freq);
  const portfolioSum = totals.reduce((acc, r) => acc + safeNumber(r.portfolio_specific), 0);
  const benchmarkSum = totals.reduce((acc, r) => acc + safeNumber(r.benchmark_specific), 0);
  const activeSum = totals.reduce((acc, r) => acc + safeNumber(r.active_specific), 0);
  return {
    factor_id: "ACTIVE_SPECIFIC",
    factor_group: "specific",
    period_count: periodCount,
    portfolio_contribution_sum: portfolioSum,
    benchmark_contribution_sum: benchmarkSum,
    active_contribution_sum: activeSum,
    portfolio_contribution_ann: annualizeContributionByPeriodCount(portfolioSum, periodCount, freq),
    benchmark_contribution_ann: annualizeContributionByPeriodCount(benchmarkSum, periodCount, freq),
    active_contribution_ann: annualizeContributionByPeriodCount(activeSum, periodCount, freq),
    is_specific: true,
  };
}

function getPeriodAttributionDisplayRows(applyLimit = true) {
  const rows = [...getPeriodRows(), buildActiveSpecificPeriodRow()];
  const selectedGroups = state.periodView.factorGroups;
  const filtered = rows.filter((r) => selectedGroups.has(normalizeFactorGroup(r.factor_group)));
  const valueMode = state.periodView.valueMode;
  for (const row of filtered) {
    const p = safeNumber(row.portfolio_contribution_ann ?? row.portfolio_contribution_sum);
    const b = safeNumber(row.benchmark_contribution_ann ?? row.benchmark_contribution_sum);
    const a = safeNumber(row.active_contribution_ann ?? row.active_contribution_sum);
    if (valueMode === "active") {
      row.display_value = a;
      row.display_secondary_value = null;
      row.bar_value = a;
      row.sort_signed_value = a;
      row.sort_abs_value = a;
    } else {
      const dominant = Math.abs(p) >= Math.abs(b) ? p : b;
      row.display_value = p;
      row.display_secondary_value = b;
      row.bar_value = dominant;
      row.sort_signed_value = p;
      row.sort_abs_value = dominant;
    }
  }
  const sortMode = state.periodView.sortMode;
  filtered.sort((a, b) => {
    const avAbs = safeNumber(a.sort_abs_value);
    const bvAbs = safeNumber(b.sort_abs_value);
    const avSigned = safeNumber(a.sort_signed_value);
    const bvSigned = safeNumber(b.sort_signed_value);
    if (sortMode === "signed_desc") return bvSigned - avSigned;
    if (sortMode === "signed_asc") return avSigned - bvSigned;
    return Math.abs(bvAbs) - Math.abs(avAbs);
  });

  const showCount = state.periodView.showCount;
  if (!applyLimit || showCount === "all") return filtered;
  const n = Math.max(1, safeInt(showCount));
  return filtered.slice(0, n);
}

function log(message, level = "info") {
  const li = document.createElement("li");
  const ts = new Date().toLocaleTimeString();
  li.textContent = `[${ts}] ${message}`;
  applyLogLevel(li, level);
  dom.logList.prepend(li);
}

function logPending(message) {
  const li = document.createElement("li");
  li.classList.add("is-pending");

  const row = document.createElement("span");
  row.className = "log-row";

  const spinner = document.createElement("span");
  spinner.className = "log-spinner";
  spinner.setAttribute("aria-hidden", "true");

  const text = document.createElement("span");
  text.className = "log-text";
  const ts = new Date().toLocaleTimeString();
  text.textContent = `[${ts}] ${message}`;

  row.append(spinner, text);
  li.append(row);
  dom.logList.prepend(li);

  return { li, text, spinner };
}

function resolvePendingLog(handle, message, level = "info") {
  if (!handle?.li || !(handle.li instanceof HTMLElement)) {
    log(message, level);
    return;
  }
  handle.li.classList.remove("is-pending");
  if (handle.spinner?.parentElement) {
    handle.spinner.parentElement.removeChild(handle.spinner);
  }
  if (handle.text instanceof HTMLElement) {
    const ts = new Date().toLocaleTimeString();
    handle.text.textContent = `[${ts}] ${message}`;
  } else {
    const ts = new Date().toLocaleTimeString();
    handle.li.textContent = `[${ts}] ${message}`;
  }
  applyLogLevel(handle.li, level);
}

function applyLogLevel(li, level = "info") {
  li.style.borderLeftColor = "#26b7c8";
  if (level === "error") {
    li.style.borderLeftColor = "#e75f5f";
  } else if (level === "success") {
    li.style.borderLeftColor = "#2eb67d";
  }
}

function readRunDurationHistory() {
  try {
    const raw = localStorage.getItem(RUN_DURATION_STORE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .map((v) => Number(v))
      .filter((v) => Number.isFinite(v) && v > 0)
      .slice(-10);
  } catch {
    return [];
  }
}

function pushRunDuration(ms) {
  if (!Number.isFinite(ms) || ms <= 0) return;
  const next = [...readRunDurationHistory(), ms].slice(-10);
  try {
    localStorage.setItem(RUN_DURATION_STORE_KEY, JSON.stringify(next));
  } catch {
    // ignore storage failure
  }
}

function estimateRunDurationMs() {
  const history = readRunDurationHistory();
  if (history.length === 0) return 60_000;
  const avg = history.reduce((acc, v) => acc + v, 0) / history.length;
  return Math.max(15_000, Math.min(300_000, avg));
}

function renderRunProgress(pct, message, elapsedMs, etaMs) {
  if (!dom.runProgressCard) return;
  const bounded = Math.max(0, Math.min(100, Number(pct) || 0));
  dom.runProgressCard.hidden = false;
  dom.runProgressBar.style.width = `${bounded.toFixed(1)}%`;
  dom.runProgressPct.textContent = `${bounded.toFixed(0)}%`;
  dom.runProgressText.textContent = message;
  dom.runProgressElapsed.textContent = `Elapsed ${formatDurationMs(elapsedMs)}`;
  if (Number.isFinite(etaMs) && etaMs >= 0) {
    dom.runProgressEta.textContent = `ETA ${formatDurationMs(etaMs)}`;
  } else {
    dom.runProgressEta.textContent = "ETA --:--";
  }
}

function startRunProgress() {
  stopRunProgressTimer();
  state.runProgress.startedAt = Date.now();
  state.runProgress.estimatedMs = estimateRunDurationMs();
  state.runProgress.progress = 5;
  renderRunProgress(5, "開始執行中...", 0, state.runProgress.estimatedMs);
  state.runProgress.timerId = window.setInterval(() => {
    const elapsed = Date.now() - state.runProgress.startedAt;
    const estimated = state.runProgress.estimatedMs || 60_000;
    const softPct = Math.min(95, 5 + (elapsed / Math.max(estimated, 1)) * 90);
    state.runProgress.progress = Math.max(state.runProgress.progress, softPct);
    const eta = Math.max(0, estimated - elapsed);
    renderRunProgress(state.runProgress.progress, "閮??脰?銝?..", elapsed, eta);
  }, 250);
}

function updateRunProgress(pct, message) {
  const elapsed = Math.max(0, Date.now() - state.runProgress.startedAt);
  const estimated = state.runProgress.estimatedMs || 60_000;
  state.runProgress.progress = Math.max(state.runProgress.progress, pct);
  renderRunProgress(state.runProgress.progress, message, elapsed, Math.max(0, estimated - elapsed));
}

function stopRunProgressTimer() {
  if (state.runProgress.timerId) {
    window.clearInterval(state.runProgress.timerId);
    state.runProgress.timerId = null;
  }
}

function finishRunProgress(success, message) {
  const elapsed = Math.max(0, Date.now() - state.runProgress.startedAt);
  stopRunProgressTimer();
  if (success) {
    pushRunDuration(elapsed);
  }
  renderRunProgress(
    success ? 100 : Math.max(state.runProgress.progress, 0),
    message,
    elapsed,
    0
  );
}

async function apiFetch(path, options = {}) {
  if (STATIC_DEMO_MODE) {
    throw new Error("Static demo mode does not call backend APIs.");
  }
  const base = dom.apiBaseUrl.value.trim().replace(/\/+$/, "");
  const url = `${base}${path}`;
  const init = {
    method: options.method ?? "GET",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers ?? {}),
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  };
  const resp = await fetch(url, init);
  const text = await resp.text();
  let data = {};
  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      data = { raw: text };
    }
  }
  if (!resp.ok) {
    const detail = typeof data.detail === "string" ? data.detail : JSON.stringify(data.detail ?? data);
    throw new Error(`${resp.status} ${resp.statusText}: ${detail}`);
  }
  return data;
}

async function onValidate() {
  try {
    const report = await apiFetch("/validate-inputs", {
      method: "POST",
      body: {
        data_dir: dom.dataDir.value.trim(),
        config_path: dom.configPath.value.trim(),
      },
    });
    if (report.ok) {
      log(`Validate 摰?嚗arnings=${(report.warnings ?? []).length}`, "success");
    } else {
      log(`Validate 憭望?: ${(report.errors ?? []).join(" | ")}`, "error");
    }
  } catch (err) {
    log(`Validate ?潛??航炊: ${err.message}`, "error");
  }
}

async function onRun() {
  if (dom.btnRun.disabled) {
    return;
  }
  const pending = logPending("撌脤閮?隢?嚗迤?刻?蝞葉...");
  const originalBtnText = dom.btnRun.textContent;
  dom.btnRun.disabled = true;
  dom.btnRun.textContent = "閮?銝?..";
  startRunProgress();
  try {
    const body = {
      data_dir: dom.dataDir.value.trim(),
      config_path: dom.configPath.value.trim(),
      output_root: dom.outputRoot.value.trim(),
      config_overrides: collectScenarioOverrides(),
    };
    const runLabel = dom.runLabel.value.trim();
    if (runLabel) {
      body.run_label = runLabel;
    }
    updateRunProgress(12, "敺垢璅∪??瑁?銝?..");
    const runResult = await apiFetch("/run-attribution", { method: "POST", body });
    updateRunProgress(85, "璅∪?摰?嚗??亙?蝡航???..");
    state.runMeta = runResult;
    dom.runId.value = runResult.run_id ?? "";
    await loadRunPayload(runResult.run_id, { silentLog: true });
    updateRunProgress(95, "?垢鞈??渡?銝?..");
    setActiveTab("portfolio");
    resolvePendingLog(pending, `Run 摰?: ${runResult.run_id}`, "success");
    finishRunProgress(true, `閮?摰?嚗?{runResult.run_id}`);
  } catch (err) {
    resolvePendingLog(pending, `Run 憭望?: ${err.message}`, "error");
    finishRunProgress(false, `閮?憭望?嚗?{err.message}`);
  } finally {
    dom.btnRun.disabled = false;
    dom.btnRun.textContent = originalBtnText;
  }
}

async function onLoadRun() {
  const runId = dom.runId.value.trim();
  if (!runId) {
    log("請先輸入 run id。", "error");
    return;
  }
  await loadRunPayload(runId);
}

async function loadRunPayload(runId, options = {}) {
  const silentLog = Boolean(options.silentLog);
  try {
    const payload = await apiFetch(`/run/${encodeURIComponent(runId)}/payload`);
    state.payload = payload;
    state.stockCache.rowsKey = "";
    state.stockCache.filteredRows = [];
    state.stockCache.summaryKey = "";
    state.stockCache.summaryRows = [];
    state.mode = "api";
    dom.dataMode.textContent = `API Run: ${runId}`;
    if (!silentLog) {
      log(`撌脰???run payload: ${runId}`, "success");
    }
    initializeViewFiltersFromPayload();
    syncFactorTableRangeWithCurrentData(true);
    state.stockView.selectedAssetId = "";
    renderAll();
    if (!silentLog) {
      setActiveTab("portfolio");
    }
  } catch (err) {
    log(`頛 run payload 憭望?: ${err.message}`, "error");
  }
}

async function onPayloadFileChange(event) {
  const [file] = event.target.files ?? [];
  if (!file) {
    return;
  }
  try {
    const text = await file.text();
    const payload = JSON.parse(text);
    state.payload = payload;
    state.stockCache.rowsKey = "";
    state.stockCache.filteredRows = [];
    state.stockCache.summaryKey = "";
    state.stockCache.summaryRows = [];
    state.mode = "local-file";
    dom.dataMode.textContent = `Local Payload: ${file.name}`;
    log(`撌脰??交璈?payload: ${file.name}`, "success");
    initializeViewFiltersFromPayload();
    syncFactorTableRangeWithCurrentData(true);
    state.stockView.selectedAssetId = "";
    renderAll();
    setActiveTab("portfolio");
  } catch (err) {
    log(`payload 閫??憭望?: ${err.message}`, "error");
  }
}

function setupStaticDemoUi() {
  const staticInputs = [
    dom.apiBaseUrl,
    dom.dataDir,
    dom.configPath,
    dom.outputRoot,
    dom.runLabel,
    dom.runId,
    dom.payloadFile,
    dom.btnValidate,
    dom.btnRun,
    dom.btnLoadRun,
  ];
  for (const el of staticInputs) {
    if (!el) continue;
    el.disabled = true;
  }

  document.getElementById("runActions")?.setAttribute("hidden", "true");
  document.getElementById("payloadUpload")?.setAttribute("hidden", "true");

  const runIdRow = dom.runId?.closest(".field.inline");
  if (runIdRow) {
    runIdRow.hidden = true;
  }

  const hint = dom.runConsole?.querySelector(".panel-hint");
  if (hint) {
    hint.textContent = "GitHub Pages static demo mode: disabled API/run/upload actions, rendering bundled sample payload only.";
  }

  dom.dataMode.textContent = "Static Sample";
}

async function loadBundledSamplePayload() {
  try {
    const resp = await fetch(STATIC_SAMPLE_PAYLOAD_URL, { cache: "no-store" });
    if (!resp.ok) {
      throw new Error(`HTTP ${resp.status} ${resp.statusText}`);
    }
    const payload = await resp.json();
    state.payload = payload;
    state.stockCache.rowsKey = "";
    state.stockCache.filteredRows = [];
    state.stockCache.summaryKey = "";
    state.stockCache.summaryRows = [];
    state.mode = "static-sample";
    dom.dataMode.textContent = "Static Sample Loaded (loading full stock data...)";
    initializeViewFiltersFromPayload();
    syncFactorTableRangeWithCurrentData(true);
    state.stockView.selectedAssetId = "";
    renderAll();
    setActiveTab("portfolio");
    log("Static sample payload loaded.", "success");
    void loadBundledStockChunks();
  } catch (err) {
    log(`Static sample payload load failed: ${err.message}`, "error");
    dom.dataMode.textContent = "Static Sample Error";
  }
}

async function loadBundledStockChunks() {
  try {
    const manifestResp = await fetch(STATIC_STOCK_CHUNKS_MANIFEST_URL, { cache: "no-store" });
    if (!manifestResp.ok) {
      throw new Error(`manifest HTTP ${manifestResp.status} ${manifestResp.statusText}`);
    }
    const manifest = await manifestResp.json();
    const chunks = Array.isArray(manifest?.chunks) ? manifest.chunks : [];
    if (chunks.length === 0) {
      dom.dataMode.textContent = "Static Sample Loaded";
      log("No stock chunks configured; keeping empty stock_contributions.", "error");
      return;
    }

    const allRows = [];
    for (let i = 0; i < chunks.length; i += 1) {
      const item = chunks[i] ?? {};
      const path = String(item.path ?? "").trim();
      if (!path) continue;
      dom.dataMode.textContent = `Static Sample Loaded (stock chunk ${i + 1}/${chunks.length})`;
      const resp = await fetch(path, { cache: "no-store" });
      if (!resp.ok) {
        throw new Error(`chunk ${i + 1} HTTP ${resp.status} ${resp.statusText}`);
      }
      const part = await resp.json();
      if (Array.isArray(part)) {
        allRows.push(...part);
      } else {
        throw new Error(`chunk ${i + 1} is not an array`);
      }
    }

    if (!state.payload || typeof state.payload !== "object") {
      state.payload = {};
    }
    state.payload.stock_contributions = allRows;
    state.stockCache.rowsKey = "";
    state.stockCache.filteredRows = [];
    state.stockCache.summaryKey = "";
    state.stockCache.summaryRows = [];
    state.stockView.selectedAssetId = "";
    dom.dataMode.textContent = `Static Sample Loaded (${allRows.length} stock rows)`;
    renderStockPanels();
    log(`Loaded full stock_contributions from chunks: ${allRows.length} rows.`, "success");
  } catch (err) {
    log(`Static stock chunk load failed: ${err.message}`, "error");
    dom.dataMode.textContent = "Static Sample Loaded (stock chunk load failed)";
  }
}
function onRiskModelSwitch(event) {
  const btn = event.target.closest("button[data-model]");
  if (!btn) {
    return;
  }
  state.riskModel = btn.dataset.model;
  for (const item of dom.riskModelSwitch.querySelectorAll("button")) {
    item.classList.toggle("active", item === btn);
  }
  renderRiskTable();
}

function renderAll() {
  renderKpi();
  renderConfigSummary();
  renderChart();
  renderPortfolioGroupSummary();
  renderFactorRank();
  renderValidation();
  renderRiskTable();
  renderFactorTable();
  renderStockPanels();
}

function getTotalsRows() {
  const rows = state.payload?.totals ?? [];
  return filterByDateRange(rows, "date");
}

function getFactorRows() {
  const rows = state.payload?.factor_timeseries ?? [];
  return filterByFactorGroups(filterByDateRange(rows, "date"));
}

function getRiskRows() {
  const rows = state.payload?.risk ?? [];
  return filterByDateRange(rows, "date");
}

function getStockRows() {
  const rows = state.payload?.stock_contributions ?? [];
  const key = `${state.filters.dateFrom}|${state.filters.dateTo}|${rows.length}`;
  if (state.stockCache.rowsKey !== key) {
    state.stockCache.rowsKey = key;
    state.stockCache.filteredRows = filterByDateRange(rows, "date");
    state.stockCache.summaryKey = "";
    state.stockCache.summaryRows = [];
  }
  return state.stockCache.filteredRows;
}

function getPeriodRows() {
  const freq = normalizeDisplayFrequency(state.displayFrequency);
  const factorRows = getFactorRows();
  if (factorRows.length > 0) {
    return derivePeriodRowsFromFactorRows(factorRows, freq);
  }
  const period = state.payload?.period_summary ?? [];
  const byDate = filterByDateRange(period, "period_start");
  const periodCount = getSelectedPeriodCount(freq);
  return filterByFactorGroups(byDate).map((r) => ({
    factor_id: r.factor_id ?? "UNKNOWN",
    factor_group: normalizeFactorGroup(r.factor_group ?? "custom"),
    period_count: periodCount,
    portfolio_contribution_sum: safeNumber(r.portfolio_contribution_sum),
    benchmark_contribution_sum: safeNumber(r.benchmark_contribution_sum),
    active_contribution_sum: safeNumber(r.active_contribution_sum),
    portfolio_contribution_ann: annualizeContributionByPeriodCount(
      safeNumber(r.portfolio_contribution_sum),
      periodCount,
      freq
    ),
    benchmark_contribution_ann: annualizeContributionByPeriodCount(
      safeNumber(r.benchmark_contribution_sum),
      periodCount,
      freq
    ),
    active_contribution_ann: annualizeContributionByPeriodCount(
      safeNumber(r.active_contribution_sum),
      periodCount,
      freq
    ),
  }));
}

function derivePeriodRowsFromFactorRows(rows, frequency = state.displayFrequency) {
  const acc = new Map();
  const freq = normalizeDisplayFrequency(frequency);
  for (const row of rows) {
    const factorId = row.factor_id ?? "UNKNOWN";
    const factorGroup = normalizeFactorGroup(row.factor_group ?? "custom");
    const key = `${factorId}||${factorGroup}`;
    const prev = acc.get(key) ?? {
      factor_id: factorId,
      factor_group: factorGroup,
      period_count: 0,
      seen_periods: new Set(),
      portfolio_contribution_sum: 0,
      benchmark_contribution_sum: 0,
      active_contribution_sum: 0,
    };
    const dt = String(row.date ?? "").slice(0, 10);
    const bucket = dt ? bucketDateKey(dt, freq) : "";
    if (bucket && !prev.seen_periods.has(bucket)) {
      prev.seen_periods.add(bucket);
      prev.period_count += 1;
    }
    prev.portfolio_contribution_sum += safeNumber(row.portfolio_contribution);
    prev.benchmark_contribution_sum += safeNumber(row.benchmark_contribution);
    prev.active_contribution_sum += safeNumber(row.active_contribution);
    acc.set(key, prev);
  }
  return [...acc.values()].map((row) => ({
    factor_id: row.factor_id,
    factor_group: row.factor_group,
    period_count: Math.max(1, row.period_count),
    portfolio_contribution_sum: row.portfolio_contribution_sum,
    benchmark_contribution_sum: row.benchmark_contribution_sum,
    active_contribution_sum: row.active_contribution_sum,
    portfolio_contribution_ann: annualizeContributionByPeriodCount(
      row.portfolio_contribution_sum,
      row.period_count,
      freq
    ),
    benchmark_contribution_ann: annualizeContributionByPeriodCount(
      row.benchmark_contribution_sum,
      row.period_count,
      freq
    ),
    active_contribution_ann: annualizeContributionByPeriodCount(
      row.active_contribution_sum,
      row.period_count,
      freq
    ),
  }));
}

function buildPeriodicTotalsSeries(rows, frequency = state.displayFrequency) {
  const freq = normalizeDisplayFrequency(frequency);
  const grouped = new Map();
  for (const row of rows ?? []) {
    const dt = String(row.date ?? "").slice(0, 10);
    if (!dt) continue;
    const bucket = bucketDateKey(dt, freq);
    const prev = grouped.get(bucket) ?? {
      bucket,
      period_end: dt,
      portfolio_mult: 1,
      benchmark_mult: 1,
      active_mult: 1,
    };
    if (dt > prev.period_end) prev.period_end = dt;
    prev.portfolio_mult *= 1 + safeNumber(row.portfolio_return);
    prev.benchmark_mult *= 1 + safeNumber(row.benchmark_return);
    prev.active_mult *= 1 + safeNumber(row.active_return);
    grouped.set(bucket, prev);
  }
  return [...grouped.values()]
    .sort((a, b) => String(a.period_end).localeCompare(String(b.period_end)))
    .map((row) => ({
      date: row.period_end,
      portfolio_return: row.portfolio_mult - 1,
      benchmark_return: row.benchmark_mult - 1,
      active_return: row.active_mult - 1,
    }));
}

function renderKpi() {
  const totals = getTotalsRows();
  const freq = normalizeDisplayFrequency(state.displayFrequency);
  const periodic = buildPeriodicTotalsSeries(totals, freq);
  const portfolioSeries = periodic.map((d) => safeNumber(d.portfolio_return));
  const benchmarkSeries = periodic.map((d) => safeNumber(d.benchmark_return));
  const activeSeries = periodic.map((d) => safeNumber(d.active_return));
  const periodsPerYear = periodsPerYearForFrequency(freq);

  const annReturnPortfolio = annualizedReturnFromSeries(portfolioSeries, freq);
  const annReturnBenchmark = annualizedReturnFromSeries(benchmarkSeries, freq);
  const annReturnActive = annualizedReturnFromSeries(activeSeries, freq);

  const varPeriodPortfolio = sampleVariance(portfolioSeries);
  const varPeriodBenchmark = sampleVariance(benchmarkSeries);
  const varPeriodActive = sampleVariance(activeSeries);

  const annVarPortfolio = varPeriodPortfolio === null ? null : varPeriodPortfolio * periodsPerYear;
  const annVarBenchmark = varPeriodBenchmark === null ? null : varPeriodBenchmark * periodsPerYear;
  const annVarActive = varPeriodActive === null ? null : varPeriodActive * periodsPerYear;

  const annVolPortfolio = annVarPortfolio === null ? null : Math.sqrt(Math.max(annVarPortfolio, 0));
  const annVolBenchmark = annVarBenchmark === null ? null : Math.sqrt(Math.max(annVarBenchmark, 0));
  const annVolActive = annVarActive === null ? null : Math.sqrt(Math.max(annVarActive, 0));

  const covDailyPB = sampleCovariance(portfolioSeries, benchmarkSeries);
  const betaPortfolio =
    varPeriodBenchmark !== null && varPeriodBenchmark > 0 && covDailyPB !== null
      ? covDailyPB / varPeriodBenchmark
      : null;
  const betaBenchmark = betaPortfolio === null ? null : 1.0;

  const sharpePortfolio =
    annReturnPortfolio !== null && annVolPortfolio !== null && annVolPortfolio > 0
      ? annReturnPortfolio / annVolPortfolio
      : null;
  const sharpeBenchmark =
    annReturnBenchmark !== null && annVolBenchmark !== null && annVolBenchmark > 0
      ? annReturnBenchmark / annVolBenchmark
      : null;

  const infoRatioPortfolio =
    annReturnActive !== null && annVolActive !== null && annVolActive > 0 ? annReturnActive / annVolActive : null;
  const infoRatioBenchmark = infoRatioPortfolio === null ? null : 0.0;

  const cards = [
    {
      label: "Annualized Return",
      value: formatPct(annReturnPortfolio),
      valueRaw: annReturnPortfolio,
      valueTone: "signed",
      note: "Portfolio",
      subRows: [
        { label: "Benchmark", value: formatPct(annReturnBenchmark), raw: annReturnBenchmark, tone: "signed" },
        { label: "Active", value: formatPct(annReturnActive), raw: annReturnActive, tone: "signed" },
      ],
    },
    {
      label: "Annualized Variance",
      value: formatNum(annVarPortfolio, 6),
      valueRaw: annVarPortfolio,
      valueTone: "neutral",
      note: "Portfolio ?簡",
      subRows: [
        { label: "Benchmark", value: formatNum(annVarBenchmark, 6), raw: annVarBenchmark, tone: "neutral" },
        { label: "Active", value: formatNum(annVarActive, 6), raw: annVarActive, tone: "neutral" },
      ],
    },
    {
      label: "Beta",
      value: formatNum(betaPortfolio, 4),
      valueRaw: betaPortfolio,
      valueTone: "neutral",
      note: "vs benchmark",
      subRows: [{ label: "Benchmark", value: formatNum(betaBenchmark, 4), raw: betaBenchmark, tone: "neutral" }],
    },
    {
      label: "Sharpe Ratio",
      value: formatNum(sharpePortfolio, 4),
      valueRaw: sharpePortfolio,
      valueTone: "signed",
      note: "rf = 0",
      subRows: [{ label: "Benchmark", value: formatNum(sharpeBenchmark, 4), raw: sharpeBenchmark, tone: "signed" }],
    },
    {
      label: "Information Ratio",
      value: formatNum(infoRatioPortfolio, 4),
      valueRaw: infoRatioPortfolio,
      valueTone: "signed",
      note: "active return / tracking error (benchmark = 0)",
      subRows: [{ label: "Benchmark", value: formatNum(infoRatioBenchmark, 4), raw: infoRatioBenchmark, tone: "neutral" }],
    },
  ];

  dom.kpiGrid.innerHTML = cards
    .map((card) => {
      const mainTone = metricToneClass(card.valueRaw, card.valueTone);
      const subRows = Array.isArray(card.subRows) ? card.subRows : [];
      return `
      <article class="kpi">
        <div class="label">${escapeHtml(card.label)}</div>
        <div class="value ${mainTone}">${escapeHtml(card.value)}</div>
        <div class="note">${escapeHtml(card.note)}</div>
        <div class="kpi-sub-grid">
          ${subRows
            .map((row) => {
              const tone = metricToneClass(row.raw, row.tone ?? "signed");
              return `<div class="kpi-sub-row">
                <span class="kpi-sub-label">${escapeHtml(row.label)}</span>
                <span class="kpi-sub-value ${tone}">${escapeHtml(row.value)}</span>
              </div>`;
            })
            .join("")}
        </div>
      </article>
    `;
    })
    .join("");
}

function renderConfigSummary() {
  const cfg = state.payload?.meta?.config;
  if (!dom.configModalContent) {
    return;
  }
  if (!cfg) {
    dom.configModalContent.innerHTML = `<p class="empty">撠頛 payload config???銵?run ????frontend_payload.json??/p>`;
    return;
  }

  const industry = cfg.industry_exposure ?? {};
  const risk = cfg.risk_model ?? {};
  const selectedGroups = [...state.filters.factorGroups].join(", ") || "(none)";
  const items = [
    ["display_frequency", state.displayFrequency || "monthly"],
    ["date_from", state.filters.dateFrom || "--"],
    ["date_to", state.filters.dateTo || "--"],
    ["factor_groups", selectedGroups],
    ["industry_mode", industry.mode],
    ["asset_weight", industry.asset_weight],
    ["sales_weight", industry.sales_weight],
    ["lookback_days", risk.lookback_days],
    ["mar", risk.mar],
    ["era_mode", risk.factor_era_mode],
    ["era_num_sim", risk.factor_era_num_simulations],
    ["era_scaled_a", risk.factor_era_scaled_a],
    ["era_ignore_head", risk.factor_era_ignore_head],
    ["factor_vra_half_life", risk.factor_vra_half_life],
    ["specific_vra_half_life", risk.specific_vra_half_life],
  ];
  dom.configModalContent.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>key</th>
          <th>value</th>
        </tr>
      </thead>
      <tbody>
        ${items
          .map(
            ([key, val]) => `
            <tr>
              <td>${escapeHtml(String(key))}</td>
              <td>${escapeHtml(String(val ?? "--"))}</td>
            </tr>
          `
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function renderChart() {
  const totals = getTotalsRows();
  let allRows = [];
  let allSeries = [];
  const hasTotals = totals.length > 0;

  if (hasTotals) {
    const ordered = totals
      .slice()
      .sort((a, b) => String(a.date ?? "").localeCompare(String(b.date ?? "")));
    let cumP = 1;
    let cumB = 1;
    allRows = ordered.map((row) => {
      cumP *= 1 + safeNumber(row.portfolio_return);
      cumB *= 1 + safeNumber(row.benchmark_return);
      const portfolio_cum = cumP - 1;
      const benchmark_cum = cumB - 1;
      return {
        date: String(row.date ?? ""),
        portfolio_cum,
        benchmark_cum,
        active_cum: portfolio_cum - benchmark_cum,
      };
    });
    allSeries = [
      { key: "portfolio_cum", label: "Portfolio Cumulative", color: "#f08b4e" },
      { key: "benchmark_cum", label: "Benchmark Cumulative", color: "#26b7c8" },
      { key: "active_cum", label: "Active Spread Cumulative", color: "#e9f2fb" },
    ];
    dom.chartTitle.textContent = "Cumulative Return Trajectory";
  } else {
    const byDate = new Map();
    for (const row of getFactorRows()) {
      const dt = String(row.date ?? "");
      byDate.set(dt, (byDate.get(dt) ?? 0) + safeNumber(row.active_contribution));
    }
    const ordered = [...byDate.entries()]
      .sort((a, b) => String(a[0]).localeCompare(String(b[0])))
      .map(([date, active_return]) => ({ date, active_return }));
    let cumA = 1;
    allRows = ordered.map((row) => {
      cumA *= 1 + safeNumber(row.active_return);
      return { date: String(row.date ?? ""), active_cum: cumA - 1 };
    });
    allSeries = [{ key: "active_cum", label: "Active Cumulative (Factor-only)", color: "#f08b4e" }];
    dom.chartTitle.textContent = "Cumulative Active Trajectory";
  }

  dom.chartLinePortfolio.disabled = !hasTotals;
  dom.chartLineBenchmark.disabled = !hasTotals;

  if (allRows.length === 0) {
    dom.returnChart.innerHTML = "";
    dom.chartLegend.innerHTML = `<p class="empty">No return data available.</p>`;
    dom.chartCaption.textContent = `No return data loaded (${currentFilterSummary()})`;
    return;
  }

  const allDates = allRows.map((r) => String(r.date ?? "")).filter((d) => d.length >= 10);
  const minDate = allDates[0] ?? "";
  const maxDate = allDates.at(-1) ?? "";
  dom.chartDateFrom.min = minDate;
  dom.chartDateFrom.max = maxDate;
  dom.chartDateTo.min = minDate;
  dom.chartDateTo.max = maxDate;

  if (!state.chartView.dateFrom || state.chartView.dateFrom < minDate || state.chartView.dateFrom > maxDate) {
    state.chartView.dateFrom = minDate;
  }
  if (!state.chartView.dateTo || state.chartView.dateTo < minDate || state.chartView.dateTo > maxDate) {
    state.chartView.dateTo = maxDate;
  }
  if (state.chartView.dateFrom > state.chartView.dateTo) {
    state.chartView.dateFrom = minDate;
    state.chartView.dateTo = maxDate;
  }
  applyChartViewControls();

  const rangedRows = allRows.filter((row) => {
    const dt = String(row.date ?? "").slice(0, 10);
    return dt >= state.chartView.dateFrom && dt <= state.chartView.dateTo;
  });
  if (rangedRows.length === 0) {
    dom.returnChart.innerHTML = "";
    dom.chartLegend.innerHTML = `<p class="empty">No data in selected chart range.</p>`;
    dom.chartCaption.textContent = `No data in selected chart range (${currentFilterSummary()})`;
    return;
  }

  const zoomPct = Math.max(100, Math.min(400, safeInt(state.chartView.zoomPct || 100)));
  state.chartView.zoomPct = zoomPct;
  dom.chartZoom.value = String(zoomPct);
  dom.chartZoomValue.textContent = `${zoomPct}%`;
  const visibleCount = Math.max(2, Math.ceil(rangedRows.length * (100 / zoomPct)));
  const dataRows = rangedRows.slice(-visibleCount);

  const want = {
    portfolio_cum: state.chartView.showPortfolio,
    benchmark_cum: state.chartView.showBenchmark,
    active_cum: state.chartView.showActive,
  };
  let series = allSeries.filter((s) => Boolean(want[s.key]));
  if (series.length === 0) {
    series = [allSeries.at(-1)];
  }

  const width = 900;
  const height = 320;
  const margin = { top: 22, right: 18, bottom: 34, left: 56 };
  const innerW = width - margin.left - margin.right;
  const innerH = height - margin.top - margin.bottom;

  const pointsBySeries = [];
  let vmin = Infinity;
  let vmax = -Infinity;
  for (const s of series) {
    const values = dataRows.map((r) => safeNumber(r[s.key]));
    for (const val of values) {
      if (Number.isFinite(val)) {
        vmin = Math.min(vmin, val);
        vmax = Math.max(vmax, val);
      }
    }
    pointsBySeries.push({ ...s, values });
  }
  if (!Number.isFinite(vmin) || !Number.isFinite(vmax)) {
    vmin = -0.02;
    vmax = 0.02;
  }
  if (Math.abs(vmax - vmin) < 1e-10) {
    vmax += 0.01;
    vmin -= 0.01;
  }
  const pad = (vmax - vmin) * 0.15;
  vmin -= pad;
  vmax += pad;

  const x = (idx) => margin.left + (idx / Math.max(1, dataRows.length - 1)) * innerW;
  const y = (val) => margin.top + (1 - (val - vmin) / (vmax - vmin)) * innerH;

  let svg = "";
  for (let i = 0; i <= 4; i++) {
    const ty = margin.top + (innerH / 4) * i;
    const val = vmax - ((vmax - vmin) / 4) * i;
    svg += `<line x1="${margin.left}" y1="${ty}" x2="${width - margin.right}" y2="${ty}" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>`;
    svg += `<text x="${margin.left - 8}" y="${ty + 4}" fill="rgba(231,240,248,0.72)" font-size="11" text-anchor="end">${formatPct(val)}</text>`;
  }

  const tickIdx = [...new Set([0, Math.floor((dataRows.length - 1) / 2), dataRows.length - 1])];
  for (const idx of tickIdx) {
    const tx = x(idx);
    const date = escapeHtml(String(dataRows[idx]?.date ?? ""));
    svg += `<line x1="${tx}" y1="${height - margin.bottom}" x2="${tx}" y2="${height - margin.bottom + 4}" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>`;
    svg += `<text x="${tx}" y="${height - 10}" fill="rgba(231,240,248,0.72)" font-size="11" text-anchor="middle">${date}</text>`;
  }
  svg += `<line x1="${margin.left}" y1="${height - margin.bottom}" x2="${width - margin.right}" y2="${height - margin.bottom}" stroke="rgba(255,255,255,0.3)" stroke-width="1.2"/>`;

  for (const s of pointsBySeries) {
    const path = s.values
      .map((val, idx) => `${idx === 0 ? "M" : "L"} ${x(idx).toFixed(2)} ${y(val).toFixed(2)}`)
      .join(" ");
    svg += `<path d="${path}" fill="none" stroke="${s.color}" stroke-width="2.6" stroke-linecap="round"/>`;
  }

  dom.returnChart.innerHTML = svg;
  dom.chartLegend.innerHTML = series
    .map(
      (s) => `
        <span class="legend-item">
          <i class="legend-swatch" style="background:${s.color}"></i>
          ${escapeHtml(s.label)}
        </span>
      `
    )
    .join("");

  const shownFrom = String(dataRows[0]?.date ?? state.chartView.dateFrom ?? "--");
  const shownTo = String(dataRows.at(-1)?.date ?? state.chartView.dateTo ?? "--");
  if (hasTotals) {
    dom.chartCaption.textContent = `Cumulative return (Portfolio / Benchmark / Active Spread) | chart ${shownFrom} ~ ${shownTo} | zoom ${zoomPct}% | ${currentFilterSummary()}`;
  } else {
    dom.chartCaption.textContent = `Factor-only reconstruction of active cumulative return | chart ${shownFrom} ~ ${shownTo} | zoom ${zoomPct}% | ${currentFilterSummary()}`;
  }
}

function renderFactorRank() {
  const totalRows = getPeriodAttributionDisplayRows(false);
  const rows = getPeriodAttributionDisplayRows(true);
  const activeMode = state.periodView.valueMode === "active";
  const sortText = state.periodView.sortMode.replace(/_/g, " ");
  const showText = state.periodView.showCount === "all" ? "all" : `top ${state.periodView.showCount}`;
  const groupsText = [...state.periodView.factorGroups].join(", ") || "(none)";
  dom.factorRankCaption.textContent = `${activeMode ? "active (A_ann)" : "non-active (P/B_ann)"} | ${sortText} | ${showText} | groups: ${groupsText} | shown ${rows.length}/${totalRows.length}`;

  if (rows.length === 0) {
    dom.factorRank.innerHTML = `<p class="empty">?桀?瘝?蝚血?蝭拚璇辣??摮飛????/p>`;
    return;
  }
  const maxAbs = Math.max(...rows.map((r) => Math.abs(safeNumber(r.bar_value))), 1e-8);
  dom.factorRank.innerHTML = rows
    .map((row) => {
      const value = safeNumber(row.display_value);
      const barBase = safeNumber(row.bar_value);
      const pct = (Math.abs(barBase) / maxAbs) * 100;
      const tone = value >= 0 ? "good" : "bad";
      const fid = row.factor_id ?? "UNKNOWN";
      const fg = normalizeFactorGroup(row.factor_group ?? "custom");
      const p = safeNumber(row.portfolio_contribution_ann ?? row.portfolio_contribution_sum);
      const b = safeNumber(row.benchmark_contribution_ann ?? row.benchmark_contribution_sum);
      const a = safeNumber(row.active_contribution_ann ?? row.active_contribution_sum);
      const valueText = activeMode ? formatPct(value) : `P ${formatPct(value)}`;
      const extra = activeMode
        ? `${value >= 0 ? "positive" : "negative"}`
        : `B ${formatPct(b)} | A ${formatPct(a)}`;
      return `
        <div class="rank-row">
          <div class="rank-top">
            <strong>${escapeHtml(fid)}</strong>
            <span class="${tone}">${valueText}</span>
          </div>
          <div class="rank-top">
            <small>${escapeHtml(fg)}</small>
            <small>${escapeHtml(extra)}</small>
          </div>
          <div class="bar"><i style="width:${pct.toFixed(2)}%"></i></div>
        </div>
      `;
    })
    .join("");
}

function renderPortfolioGroupSummary() {
  const rows = [...getPeriodRows(), buildActiveSpecificPeriodRow()];
  if (rows.length === 0) {
    dom.groupAttributionTableWrap.innerHTML = `<p class="empty">撠頛憭折???鞎Ｙ鞈???/p>`;
    return;
  }

  const order = ["style", "industry", "country", "custom", "specific"];
  const acc = new Map();
  for (const row of rows) {
    const grp = normalizeFactorGroup(row.factor_group);
    const prev = acc.get(grp) ?? {
      factor_group: grp,
      factor_count: 0,
      portfolio_contribution_ann: 0,
      benchmark_contribution_ann: 0,
      active_contribution_ann: 0,
    };
    prev.factor_count += 1;
    prev.portfolio_contribution_ann += safeNumber(row.portfolio_contribution_ann ?? row.portfolio_contribution_sum);
    prev.benchmark_contribution_ann += safeNumber(row.benchmark_contribution_ann ?? row.benchmark_contribution_sum);
    prev.active_contribution_ann += safeNumber(row.active_contribution_ann ?? row.active_contribution_sum);
    acc.set(grp, prev);
  }
  const aggRows = [...acc.values()].sort((a, b) => order.indexOf(a.factor_group) - order.indexOf(b.factor_group));
  dom.groupAttributionTableWrap.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>factor_group</th>
          <th>factor_count</th>
          <th>portfolio_ann</th>
          <th>benchmark_ann</th>
          <th>active_ann</th>
        </tr>
      </thead>
      <tbody>
        ${aggRows
          .map((row) => {
            const active = safeNumber(row.active_contribution_ann);
            const tone = active >= 0 ? "good" : "bad";
            return `<tr>
              <td>${escapeHtml(row.factor_group)}</td>
              <td>${formatNum(safeNumber(row.factor_count), 0)}</td>
              <td>${formatPct(safeNumber(row.portfolio_contribution_ann))}</td>
              <td>${formatPct(safeNumber(row.benchmark_contribution_ann))}</td>
              <td class="${tone}">${formatPct(active)}</td>
            </tr>`;
          })
          .join("")}
      </tbody>
    </table>
  `;
}

function buildStockSummaryRows(rows) {
  const byAsset = new Map();
  const seenDateAsset = new Set();
  const seenPeriodAsset = new Set();
  const freq = normalizeDisplayFrequency(state.displayFrequency);
  for (const row of rows) {
    const assetId = String(row.asset_id ?? "");
    if (!assetId) continue;
    const group = normalizeFactorGroup(row.factor_group);
    const date = String(row.date ?? "");
    const key = `${date}|${assetId}`;
    const prev = byAsset.get(assetId) ?? {
      asset_id: assetId,
      latest_date: "",
      portfolio_weight: 0,
      benchmark_weight: 0,
      active_weight: 0,
      trading_days: 0,
      period_count: 0,
      cum_return_mult: 1,
      asset_return: 0,
      asset_return_ann: 0,
      asset_return_period: 0,
      style_portfolio: 0,
      industry_portfolio: 0,
      country_portfolio: 0,
      custom_portfolio: 0,
      specific_portfolio: 0,
      total_portfolio: 0,
      style_benchmark: 0,
      industry_benchmark: 0,
      country_benchmark: 0,
      custom_benchmark: 0,
      specific_benchmark: 0,
      total_benchmark: 0,
      style_active: 0,
      industry_active: 0,
      country_active: 0,
      custom_active: 0,
      specific_active: 0,
      total_active: 0,
      return_active: 0,
      subfactor_portfolio_raw: {},
      subfactor_benchmark_raw: {},
      subfactor_active_raw: {},
      subfactor_group_map: {},
    };

    if (!seenDateAsset.has(key)) {
      seenDateAsset.add(key);
      prev.trading_days += 1;
      prev.cum_return_mult *= 1 + safeNumber(row.asset_return);
      const bucket = bucketDateKey(date, freq);
      const pkey = `${bucket}|${assetId}`;
      if (!seenPeriodAsset.has(pkey)) {
        seenPeriodAsset.add(pkey);
        prev.period_count += 1;
      }
      if (!prev.latest_date || date > prev.latest_date) {
        prev.latest_date = date;
        prev.portfolio_weight = safeNumber(row.portfolio_weight);
        prev.benchmark_weight = safeNumber(row.benchmark_weight);
        prev.active_weight = safeNumber(row.active_weight);
      }
    }

    const portfolio = safeNumber(row.portfolio_contribution);
    const benchmark = safeNumber(row.benchmark_contribution);
    const active = safeNumber(row.active_contribution);
    const factorId = String(row.factor_id ?? "");
    if (factorId) {
      prev.subfactor_portfolio_raw[factorId] = safeNumber(prev.subfactor_portfolio_raw[factorId]) + portfolio;
      prev.subfactor_benchmark_raw[factorId] = safeNumber(prev.subfactor_benchmark_raw[factorId]) + benchmark;
      prev.subfactor_active_raw[factorId] = safeNumber(prev.subfactor_active_raw[factorId]) + active;
      prev.subfactor_group_map[factorId] = group;
    }
    if (group === "style") {
      prev.style_portfolio += portfolio;
      prev.style_benchmark += benchmark;
      prev.style_active += active;
    } else if (group === "industry") {
      prev.industry_portfolio += portfolio;
      prev.industry_benchmark += benchmark;
      prev.industry_active += active;
    } else if (group === "country") {
      prev.country_portfolio += portfolio;
      prev.country_benchmark += benchmark;
      prev.country_active += active;
    } else if (group === "specific") {
      prev.specific_portfolio += portfolio;
      prev.specific_benchmark += benchmark;
      prev.specific_active += active;
    } else {
      prev.custom_portfolio += portfolio;
      prev.custom_benchmark += benchmark;
      prev.custom_active += active;
    }
    prev.total_portfolio += portfolio;
    prev.total_benchmark += benchmark;
    prev.total_active += active;
    byAsset.set(assetId, prev);
  }

  const out = [...byAsset.values()].map((row) => {
    const periodReturn = row.cum_return_mult - 1;
    const periodCount = Math.max(1, safeInt(row.period_count || 1));
    const annualizedReturn = annualizeReturnByPeriodCount(periodReturn, periodCount, freq);
    const annualizationScale = annualizationScaleFromPeriodCount(periodCount, freq);
    const totalPortfolio =
      safeNumber(row.style_portfolio) +
      safeNumber(row.industry_portfolio) +
      safeNumber(row.country_portfolio) +
      safeNumber(row.custom_portfolio) +
      safeNumber(row.specific_portfolio);
    const totalBenchmark =
      safeNumber(row.style_benchmark) +
      safeNumber(row.industry_benchmark) +
      safeNumber(row.country_benchmark) +
      safeNumber(row.custom_benchmark) +
      safeNumber(row.specific_benchmark);
    const totalActive =
      safeNumber(row.style_active) +
      safeNumber(row.industry_active) +
      safeNumber(row.country_active) +
      safeNumber(row.custom_active) +
      safeNumber(row.specific_active);
    const subfactorPortfolio = {};
    const subfactorBenchmark = {};
    const subfactorActive = {};
    for (const [fid, val] of Object.entries(row.subfactor_portfolio_raw)) {
      subfactorPortfolio[fid] = safeNumber(val) * annualizationScale;
    }
    for (const [fid, val] of Object.entries(row.subfactor_benchmark_raw)) {
      subfactorBenchmark[fid] = safeNumber(val) * annualizationScale;
    }
    for (const [fid, val] of Object.entries(row.subfactor_active_raw)) {
      subfactorActive[fid] = safeNumber(val) * annualizationScale;
    }
    return {
      ...row,
      asset_return_period: periodReturn,
      asset_return_ann: annualizedReturn,
      asset_return: annualizedReturn,
      style_portfolio: safeNumber(row.style_portfolio) * annualizationScale,
      industry_portfolio: safeNumber(row.industry_portfolio) * annualizationScale,
      country_portfolio: safeNumber(row.country_portfolio) * annualizationScale,
      custom_portfolio: safeNumber(row.custom_portfolio) * annualizationScale,
      specific_portfolio: safeNumber(row.specific_portfolio) * annualizationScale,
      style_benchmark: safeNumber(row.style_benchmark) * annualizationScale,
      industry_benchmark: safeNumber(row.industry_benchmark) * annualizationScale,
      country_benchmark: safeNumber(row.country_benchmark) * annualizationScale,
      custom_benchmark: safeNumber(row.custom_benchmark) * annualizationScale,
      specific_benchmark: safeNumber(row.specific_benchmark) * annualizationScale,
      style_active: safeNumber(row.style_active) * annualizationScale,
      industry_active: safeNumber(row.industry_active) * annualizationScale,
      country_active: safeNumber(row.country_active) * annualizationScale,
      custom_active: safeNumber(row.custom_active) * annualizationScale,
      specific_active: safeNumber(row.specific_active) * annualizationScale,
      total_portfolio: totalPortfolio * annualizationScale,
      total_benchmark: totalBenchmark * annualizationScale,
      total_active: totalActive * annualizationScale,
      return_active: totalActive * annualizationScale,
      subfactor_portfolio: subfactorPortfolio,
      subfactor_benchmark: subfactorBenchmark,
      subfactor_active: subfactorActive,
    };
  });
  return out;
}

function getCachedStockSummaryRows(rows) {
  const key = `${state.displayFrequency}|${state.filters.dateFrom}|${state.filters.dateTo}|${rows.length}`;
  if (state.stockCache.summaryKey !== key) {
    state.stockCache.summaryKey = key;
    state.stockCache.summaryRows = buildStockSummaryRows(rows);
  }
  return state.stockCache.summaryRows;
}

function getSubfactorIdsForGroup(rows, factorGroup) {
  const ids = new Set();
  const group = normalizeFactorGroup(factorGroup);
  for (const row of rows ?? []) {
    if (normalizeFactorGroup(row.factor_group) !== group) continue;
    const fid = String(row.factor_id ?? "");
    if (!fid) continue;
    ids.add(fid);
  }
  return [...ids].sort((a, b) => a.localeCompare(b));
}

function buildStockDetailRows(rows, assetId, factorGroup, annualizationPeriodCount = null) {
  if (!assetId) return [];
  const acc = new Map();
  const freq = normalizeDisplayFrequency(state.displayFrequency);
  for (const row of rows) {
    const aid = String(row.asset_id ?? "");
    if (aid !== assetId) continue;
    const group = normalizeFactorGroup(row.factor_group);
    if (factorGroup !== "all" && group !== factorGroup) continue;
    const factorId = String(row.factor_id ?? "");
    const key = `${group}||${factorId}`;
    const prev = acc.get(key) ?? {
      factor_group: group,
      factor_id: factorId,
      period_count: 0,
      seen_periods: new Set(),
      portfolio_contribution: 0,
      benchmark_contribution: 0,
      active_contribution: 0,
    };
    const dt = String(row.date ?? "").slice(0, 10);
    const bucket = dt ? bucketDateKey(dt, freq) : "";
    if (bucket && !prev.seen_periods.has(bucket)) {
      prev.seen_periods.add(bucket);
      prev.period_count += 1;
    }
    prev.portfolio_contribution += safeNumber(row.portfolio_contribution);
    prev.benchmark_contribution += safeNumber(row.benchmark_contribution);
    prev.active_contribution += safeNumber(row.active_contribution);
    acc.set(key, prev);
  }
  return [...acc.values()]
    .map((row) => {
      const scale = annualizationScaleFromPeriodCount(
        annualizationPeriodCount || row.period_count || 1,
        freq
      );
      return {
        factor_group: row.factor_group,
        factor_id: row.factor_id,
        portfolio_contribution: safeNumber(row.portfolio_contribution) * scale,
        benchmark_contribution: safeNumber(row.benchmark_contribution) * scale,
        active_contribution: safeNumber(row.active_contribution) * scale,
      };
    })
    .sort((a, b) => Math.abs(safeNumber(b.active_contribution)) - Math.abs(safeNumber(a.active_contribution)));
}

function renderStockPanels() {
  const stockRows = getStockRows();
  if (stockRows.length === 0) {
    dom.stockSummaryWrap.innerHTML =
      `<p class="empty">Static sample payload does not include stock_contributions rows.</p>`;
    dom.stockDetailCaption.textContent = "No stock-level rows in this static sample.";
    dom.stockDetailWrap.innerHTML = "";
    return;
  }

  const q = state.stockView.query;
  let summary = [...getCachedStockSummaryRows(stockRows)];
  if (q) {
    summary = summary.filter((row) => row.asset_id.toLowerCase().includes(q));
  }
  if (state.stockView.onlyPortfolioPositive) {
    summary = summary.filter((row) => safeNumber(row.portfolio_weight) > 0);
  }

  const sortKey = state.stockView.sortKey;
  const asc = state.stockView.sortDir === "asc";
  summary.sort((a, b) => {
    const av = safeNumber(a[sortKey]);
    const bv = safeNumber(b[sortKey]);
    if (av === bv) return a.asset_id.localeCompare(b.asset_id);
    return asc ? av - bv : bv - av;
  });

  if (summary.length === 0) {
    dom.stockSummaryWrap.innerHTML = `<p class="empty">?桀?瘝?蝚血?蝭拚璇辣?鞈???/p>`;
    dom.stockDetailCaption.textContent = "找不到符合條件的個股。";
    dom.stockDetailWrap.innerHTML = "";
    return;
  }

  if (!summary.some((row) => row.asset_id === state.stockView.selectedAssetId)) {
    state.stockView.selectedAssetId = summary[0].asset_id;
  }
  const selectedSummary = summary.find((row) => row.asset_id === state.stockView.selectedAssetId) ?? null;

  const stockModeActive = state.stockView.valueMode !== "non_active";
  const showSubfactorColumns = state.stockView.factorGroup !== "all";
  const subfactorGroup = showSubfactorColumns
    ? normalizeFactorGroup(state.stockView.factorGroup)
    : "all";
  const subfactorIds = showSubfactorColumns ? getSubfactorIdsForGroup(stockRows, subfactorGroup) : [];

  let contributionHeaders = "";
  if (showSubfactorColumns) {
    const suffix = stockModeActive ? "(A_ann)" : "(P/B_ann)";
    const cols =
      subfactorIds.length > 0
        ? subfactorIds.map((fid) => `<th>${escapeHtml(fid)}${suffix}</th>`).join("")
        : `<th>NO_${escapeHtml(subfactorGroup.toUpperCase())}_SUBFACTOR${suffix}</th>`;
    contributionHeaders = `${cols}<th>return${suffix}</th>`;
  } else {
    contributionHeaders = stockModeActive
      ? `
          <th>style(A_ann)</th>
          <th>industry(A_ann)</th>
          <th>country(A_ann)</th>
          <th>custom(A_ann)</th>
          <th>specific(A_ann)</th>
          <th>return(A_ann)</th>
      `
      : `
          <th>style(P/B_ann)</th>
          <th>industry(P/B_ann)</th>
          <th>country(P/B_ann)</th>
          <th>custom(P/B_ann)</th>
          <th>specific(P/B_ann)</th>
          <th>return(P/B_ann)</th>
      `;
  }

  dom.stockSummaryWrap.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>asset_id</th>
          <th>portfolio_w</th>
          <th>benchmark_w</th>
          <th>active_w</th>
          <th>return_ann</th>
          ${contributionHeaders}
        </tr>
      </thead>
      <tbody>
        ${summary
          .map((row) => {
            const selected = row.asset_id === state.stockView.selectedAssetId ? "row-selected" : "";
            let contributionCells = "";
            if (showSubfactorColumns) {
              const dynamicCells =
                subfactorIds.length > 0
                  ? subfactorIds
                      .map((fid) =>
                        stockModeActive
                          ? `<td>${formatPct(safeNumber(row.subfactor_active?.[fid]))}</td>`
                          : `<td>${formatPortfolioBenchmarkCell(
                              row.subfactor_portfolio?.[fid],
                              row.subfactor_benchmark?.[fid]
                            )}</td>`
                      )
                      .join("")
                  : stockModeActive
                    ? `<td>--</td>`
                    : `<td>${formatPortfolioBenchmarkCell(null, null)}</td>`;
              const returnCell = stockModeActive
                ? `<td>${formatPct(safeNumber(row.return_active ?? row.total_active))}</td>`
                : `<td>${formatPortfolioBenchmarkCell(row.total_portfolio, row.total_benchmark)}</td>`;
              contributionCells = `${dynamicCells}${returnCell}`;
            } else {
              contributionCells = stockModeActive
                ? `
              <td>${formatPct(safeNumber(row.style_active))}</td>
              <td>${formatPct(safeNumber(row.industry_active))}</td>
              <td>${formatPct(safeNumber(row.country_active))}</td>
              <td>${formatPct(safeNumber(row.custom_active))}</td>
              <td>${formatPct(safeNumber(row.specific_active))}</td>
              <td>${formatPct(safeNumber(row.return_active ?? row.total_active))}</td>
            `
                : `
              <td>${formatPortfolioBenchmarkCell(row.style_portfolio, row.style_benchmark)}</td>
              <td>${formatPortfolioBenchmarkCell(row.industry_portfolio, row.industry_benchmark)}</td>
              <td>${formatPortfolioBenchmarkCell(row.country_portfolio, row.country_benchmark)}</td>
              <td>${formatPortfolioBenchmarkCell(row.custom_portfolio, row.custom_benchmark)}</td>
              <td>${formatPortfolioBenchmarkCell(row.specific_portfolio, row.specific_benchmark)}</td>
              <td>${formatPortfolioBenchmarkCell(row.total_portfolio, row.total_benchmark)}</td>
            `;
            }
            return `<tr class="clickable-row ${selected}" data-stock-id="${escapeHtml(row.asset_id)}">
              <td>${escapeHtml(row.asset_id)}</td>
              <td>${formatPct(safeNumber(row.portfolio_weight))}</td>
              <td>${formatPct(safeNumber(row.benchmark_weight))}</td>
              <td>${formatPct(safeNumber(row.active_weight))}</td>
              <td>${formatPct(safeNumber(row.asset_return_ann ?? row.asset_return))}</td>
              ${contributionCells}
            </tr>`;
          })
          .join("")}
      </tbody>
    </table>
  `;

  for (const rowEl of dom.stockSummaryWrap.querySelectorAll("tr[data-stock-id]")) {
    rowEl.addEventListener("click", () => {
      state.stockView.selectedAssetId = String(rowEl.dataset.stockId || "");
      renderStockPanels();
    });
  }

  const detailRows = buildStockDetailRows(
    stockRows,
    state.stockView.selectedAssetId,
    state.stockView.factorGroup,
    selectedSummary?.period_count ?? null
  );
  dom.stockDetailCaption.textContent = `Asset: ${state.stockView.selectedAssetId} | column_view: ${
    showSubfactorColumns ? `${subfactorGroup} subfactors` : "group totals"
  } | detail_group: ${state.stockView.factorGroup} | mode: ${state.stockView.valueMode}`;
  if (detailRows.length === 0) {
    dom.stockDetailWrap.innerHTML = `<p class="empty">甇文?函??隞嗡?瘝?摮?摮???/p>`;
    return;
  }
  dom.stockDetailWrap.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>factor_group</th>
          <th>factor_id</th>
          <th>portfolio_ann</th>
          <th>benchmark_ann</th>
          <th>active_ann</th>
        </tr>
      </thead>
      <tbody>
        ${detailRows
          .map((row) => {
            const active = safeNumber(row.active_contribution);
            const tone = active >= 0 ? "good" : "bad";
            return `<tr>
              <td>${escapeHtml(row.factor_group)}</td>
              <td>${escapeHtml(row.factor_id)}</td>
              <td>${formatPct(safeNumber(row.portfolio_contribution))}</td>
              <td>${formatPct(safeNumber(row.benchmark_contribution))}</td>
              <td class="${tone}">${formatPct(active)}</td>
            </tr>`;
          })
          .join("")}
      </tbody>
    </table>
  `;
}

function renderValidation() {
  const rows = state.payload?.validation ?? [];
  if (rows.length === 0) {
    dom.validationBox.innerHTML = `<p class="empty">撠頛 validation 鞈???/p>`;
    return;
  }
  dom.validationBox.innerHTML = `
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
            const value = safeNumber(row.value);
            const tone = Math.abs(value) < 1e-8 ? "good" : "";
            return `<tr><td>${escapeHtml(String(row.metric ?? ""))}</td><td class="${tone}">${formatNum(value, 10)}</td></tr>`;
          })
          .join("")}
      </tbody>
    </table>
  `;
}

function renderRiskTable() {
  const freq = normalizeDisplayFrequency(state.displayFrequency);
  const annualScale = periodsPerYearForFrequency(freq);
  const groupMap = buildFactorGroupMap();
  const selectedGroups = state.filters.factorGroups;
  const rows = getRiskRows()
    .filter((r) => String(r.risk_model) === state.riskModel)
    .filter((r) => {
      if (String(r.component_type) !== "factor") return true;
      const fid = String(r.component_id ?? "");
      const grp = groupMap.get(fid) ?? "custom";
      return selectedGroups.has(grp);
    });
  if (rows.length === 0) {
    dom.riskTableWrap.innerHTML = `<p class="empty">撠頛 ${state.riskModel} ?◢?芣?閫????/p>`;
    return;
  }
  const latestDate = rows.map((r) => String(r.date)).sort().at(-1);
  const latestRows = rows
    .filter((r) => String(r.date) === latestDate)
    .sort(
      (a, b) =>
        Math.abs(safeNumber(b.risk_contribution) * annualScale) -
        Math.abs(safeNumber(a.risk_contribution) * annualScale)
    );

  dom.riskTableWrap.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>date</th>
          <th>component_type</th>
          <th>component_id</th>
          <th>risk_contribution_ann</th>
          <th>risk_contribution_pct</th>
        </tr>
      </thead>
      <tbody>
        ${latestRows
          .slice(0, 24)
          .map((row) => {
            const rc = safeNumber(row.risk_contribution);
            const rcAnn = rc * annualScale;
            const pct = safeNumber(row.risk_contribution_pct);
            const tone = rcAnn >= 0 ? "good" : "bad";
            return `<tr>
              <td>${escapeHtml(String(row.date ?? ""))}</td>
              <td>${escapeHtml(String(row.component_type ?? ""))}</td>
              <td>${escapeHtml(String(row.component_id ?? ""))}</td>
              <td class="${tone}">${formatNum(rcAnn, 8)}</td>
              <td>${formatPct(pct)}</td>
            </tr>`;
          })
          .join("")}
      </tbody>
    </table>
  `;
}

function filterFactorRowsByTableRange(rows) {
  const from = state.factorTable.dateFrom || "";
  const to = state.factorTable.dateTo || "";
  if (!from && !to) {
    return rows;
  }
  return rows.filter((row) => {
    const raw = row?.date;
    if (typeof raw !== "string" || raw.length < 10) {
      return false;
    }
    const dt = raw.slice(0, 10);
    if (from && dt < from) return false;
    if (to && dt > to) return false;
    return true;
  });
}

function renderFactorTable() {
  const q = dom.factorFilter.value.trim().toLowerCase();
  const freq = normalizeDisplayFrequency(state.factorTable.frequency || state.displayFrequency || "monthly");
  let rows = filterFactorRowsByTableRange(getFactorTimeseriesRowsForFrequency());
  if (q) {
    rows = rows.filter((r) => String(r.factor_id ?? "").toLowerCase().includes(q));
  }
  rows = rows
    .slice()
    .sort((a, b) => {
      const da = String(a.date ?? "");
      const db = String(b.date ?? "");
      if (da !== db) {
        return db.localeCompare(da);
      }
      return String(a.factor_id ?? "").localeCompare(String(b.factor_id ?? ""));
    });

  if (rows.length === 0) {
    dom.factorTableWrap.innerHTML = `<p class="empty">No factor timeseries rows for frequency: ${freq}.</p>`;
    return;
  }

  dom.factorTableWrap.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>period_start</th>
          <th>period_end</th>
          <th>sample_days</th>
          <th>factor_id</th>
          <th>group</th>
          <th>portfolio_contribution_ann</th>
          <th>benchmark_contribution_ann</th>
          <th>active_contribution_ann</th>
        </tr>
      </thead>
      <tbody>
        ${rows
          .map((row) => {
            const active = safeNumber(row.active_annualized);
            const tone = active >= 0 ? "good" : "bad";
            return `<tr>
              <td>${escapeHtml(String(row.period_start ?? row.date ?? ""))}</td>
              <td>${escapeHtml(String(row.period_end ?? row.date ?? ""))}</td>
              <td>${escapeHtml(String(row.trading_days ?? 1))}</td>
              <td>${escapeHtml(String(row.factor_id ?? ""))}</td>
              <td>${escapeHtml(String(row.factor_group ?? ""))}</td>
              <td>${formatPct(safeNumber(row.portfolio_annualized))}</td>
              <td>${formatPct(safeNumber(row.benchmark_annualized))}</td>
              <td class="${tone}">${formatPct(active)}</td>
            </tr>`;
          })
          .join("")}
      </tbody>
    </table>
  `;
}

function safeNumber(value) {
  const num = Number(value);
  return Number.isFinite(num) ? num : 0;
}

function safeInt(value) {
  const num = Number.parseInt(String(value), 10);
  return Number.isFinite(num) ? num : 0;
}

function compoundReturn(series) {
  if (!series || series.length === 0) {
    return null;
  }
  return series.reduce((acc, r) => acc * (1 + safeNumber(r)), 1) - 1;
}

function sampleStd(values) {
  if (!values || values.length < 2) {
    return null;
  }
  const valid = values.map(safeNumber);
  const mean = valid.reduce((a, b) => a + b, 0) / valid.length;
  const variance = valid.reduce((acc, val) => acc + (val - mean) ** 2, 0) / (valid.length - 1);
  return Math.sqrt(Math.max(variance, 0));
}

function sampleVariance(values) {
  if (!values || values.length < 2) {
    return null;
  }
  const valid = values.map(safeNumber);
  const mean = valid.reduce((a, b) => a + b, 0) / valid.length;
  return valid.reduce((acc, val) => acc + (val - mean) ** 2, 0) / (valid.length - 1);
}

function sampleCovariance(xs, ys) {
  if (!xs || !ys) {
    return null;
  }
  const n = Math.min(xs.length, ys.length);
  if (n < 2) {
    return null;
  }
  const x = xs.slice(0, n).map(safeNumber);
  const y = ys.slice(0, n).map(safeNumber);
  const meanX = x.reduce((a, b) => a + b, 0) / n;
  const meanY = y.reduce((a, b) => a + b, 0) / n;
  let cov = 0;
  for (let i = 0; i < n; i += 1) {
    cov += (x[i] - meanX) * (y[i] - meanY);
  }
  return cov / (n - 1);
}

function annualizedReturnFromSeries(series, frequency = state.displayFrequency) {
  if (!series || series.length === 0) {
    return null;
  }
  const cum = compoundReturn(series);
  if (cum === null) {
    return null;
  }
  return annualizeReturnByPeriodCount(cum, series.length, frequency);
}

function metricToneClass(value, mode = "signed") {
  if (!Number.isFinite(value)) {
    return "";
  }
  if (mode === "signed") {
    return value >= 0 ? "good" : "bad";
  }
  return "";
}

function formatDurationMs(ms) {
  if (!Number.isFinite(ms) || ms < 0) return "--:--";
  const totalSec = Math.floor(ms / 1000);
  const mm = Math.floor(totalSec / 60);
  const ss = totalSec % 60;
  return `${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}`;
}

function formatPct(value) {
  if (value === null || value === undefined || !Number.isFinite(value)) {
    return "--";
  }
  return `${(value * 100).toFixed(2)}%`;
}

function formatPortfolioBenchmarkCell(portfolioValue, benchmarkValue) {
  return `<div class="pb-inline"><span>P ${formatPct(safeNumber(portfolioValue))}</span><span>B ${formatPct(
    safeNumber(benchmarkValue)
  )}</span></div>`;
}

function formatNum(value, digits = 6) {
  if (value === null || value === undefined || !Number.isFinite(value)) {
    return "--";
  }
  return value.toFixed(digits);
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function initTabFallback() {
  const tabsRoot = document.getElementById("mainTabs");
  if (!tabsRoot) return;
  tabsRoot.addEventListener("click", (event) => {
    const btn = event.target.closest("button[data-tab]");
    if (!btn) return;
    const tab = String(btn.dataset.tab || "");
    if (!tab) return;
    const runConsole = document.getElementById("runConsole");
    const contentMain = document.getElementById("contentMain");
    const portfolioPanel = document.getElementById("portfolioTabPanel");
    const stockPanel = document.getElementById("stockTabPanel");
    const pageLayout = document.getElementById("pageLayout");

    const isInput = tab === "input";
    const isPortfolio = tab === "portfolio";
    const isStock = tab === "stock";
    if (runConsole) runConsole.hidden = !isInput;
    if (contentMain) contentMain.hidden = isInput;
    if (portfolioPanel) portfolioPanel.hidden = !isPortfolio;
    if (stockPanel) stockPanel.hidden = !isStock;
    if (pageLayout) pageLayout.classList.toggle("single-column", !isInput);

    for (const node of tabsRoot.querySelectorAll("button[data-tab]")) {
      node.classList.toggle("active", node === btn);
    }
  });
}

try {
  initialize();
} catch (err) {
  console.error("initialize failed:", err);
  initTabFallback();
}



