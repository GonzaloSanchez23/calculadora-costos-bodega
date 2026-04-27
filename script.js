const generalFieldIds = [
  "quoteName",
  "importCode",
  "warehouseLocation",
  "finalDestination",
  "supplierName",
  "currency",
  "exchangeRate",
  "incoterm",
  "transportType",
  "originCountry",
  "originPort",
  "destinationPort",
  "containerSize",
  "exportCost",
  "internalFreight",
  "internationalFreight",
  "insuranceCost",
  "entryPort",
  "daiRate",
  "customsFees",
  "documentFees",
  "extraFees",
  "warehouseCost",
  "localFreight",
  "handlingCost"
];

const productFieldIds = [
  "category",
  "format",
  "productName",
  "body",
  "finish",
  "edge",
  "thickness",
  "quality",
  "unitMeasure",
  "unitCost",
  "quantity",
  "packagingCost",
  "marginRate",
  "notes"
];

const allFieldIds = [...generalFieldIds, ...productFieldIds];
const storageKey = "gt-import-cost-quotes";

const supplierCatalog = [
  { supplierName: "ARGENTA CERAMICA SL ESP", family: "PORCELANATO", originCountry: "España", currency: "EUR", incoterm: "EXW", exportCost: 47.25, internalFreight: 384.3, daiRate: 0, originPort: "Valencia, España", destinationPort: "Santo Tomas de Castilla", containerSize: "20 pies", transportType: "Maritimo" },
  { supplierName: "ECOCERAMIC SLU ESP", family: "PORCELANATO", originCountry: "España", currency: "EUR", incoterm: "EXW", exportCost: 47.25, internalFreight: 384.3, daiRate: 0, originPort: "Valencia, España", destinationPort: "Santo Tomas de Castilla", containerSize: "20 pies", transportType: "Maritimo" },
  { supplierName: "EXAGRES SA ESP", family: "TORELOS Y PELDANOS", originCountry: "España", currency: "EUR", incoterm: "EXW", exportCost: 47.25, internalFreight: 384.3, daiRate: 0, originPort: "Valencia, España", destinationPort: "Santo Tomas de Castilla", containerSize: "20 pies", transportType: "Maritimo" },
  { supplierName: "EUROSHRINK SA ESP", family: "PERFILES PVC Y ALUMINIO", originCountry: "España", currency: "EUR", incoterm: "EXW", exportCost: 47.25, internalFreight: 384.3, daiRate: 0, originPort: "Valencia, España", destinationPort: "Santo Tomas de Castilla", containerSize: "20 pies", transportType: "Maritimo" },
  { supplierName: "GLOBAL BRIDGE TRADING S.A.C PERU", family: "PORCELANATO", originCountry: "Peru", currency: "USD", incoterm: "FOB", exportCost: 0, internalFreight: 0, daiRate: 15, originPort: "Callao, Peru", destinationPort: "Puerto Quetzal", containerSize: "20 pies", transportType: "Maritimo" },
  { supplierName: "FILA CHEMICALS USA, CORP. USA", family: "PRODUCTOS DE LIMPIEZA", originCountry: "Estados Unidos", currency: "USD", incoterm: "EXW", exportCost: 0, internalFreight: 330, daiRate: 15, originPort: "Miami, USA", destinationPort: "Almacenadora, Santo Tomas", containerSize: "FRGN", transportType: "Terrestre" },
  { supplierName: "XIAMEN ZHONGGUANSHI STONE CO., LIMITED CHINA", family: "CUARZO GRANDES FORMATOS", originCountry: "China", currency: "USD", incoterm: "FOB", exportCost: 0, internalFreight: 0, daiRate: 15, originPort: "Yunfu, China", destinationPort: "Puerto Quetzal", containerSize: "20 pies", transportType: "Maritimo" },
  { supplierName: "NEWARK CERAMIC INDIA", family: "PORCELANATO", originCountry: "India", currency: "USD", incoterm: "FOB", exportCost: 0, internalFreight: 0, daiRate: 15, originPort: "Mundra, India", destinationPort: "Puerto Quetzal", containerSize: "20 pies", transportType: "Maritimo" },
  { supplierName: "TAIZHOU XUBO WATER CHINA", family: "GRIFERIA", originCountry: "China", currency: "USD", incoterm: "FOB", exportCost: 0, internalFreight: 0, daiRate: 15, originPort: "Ningbo, China", destinationPort: "Puerto Quetzal", containerSize: "40 HC", transportType: "Maritimo" },
  { supplierName: "OVERSEAS MERCHANT INTERNATIONAL CHINA", family: "GRIFERIA", originCountry: "China", currency: "USD", incoterm: "FOB", exportCost: 0, internalFreight: 0, daiRate: 15, originPort: "Ningbo, China", destinationPort: "Puerto Quetzal", containerSize: "40 HC", transportType: "Maritimo" },
  { supplierName: "TAIZHOU FEIGEER IMPORT & EXPORT CHINA", family: "GRIFERIA", originCountry: "China", currency: "USD", incoterm: "FOB", exportCost: 0, internalFreight: 0, daiRate: 15, originPort: "Ningbo, China", destinationPort: "Puerto Quetzal", containerSize: "40 HC", transportType: "Maritimo" },
  { supplierName: "CHAOZHOU FENGXI MEITAO CERAMICS MANUFACTORY CHINA", family: "LOZA SANITARIA", originCountry: "China", currency: "USD", incoterm: "FOB", exportCost: 0, internalFreight: 0, daiRate: 15, originPort: "Shekou, China", destinationPort: "Puerto Quetzal", containerSize: "40 HC", transportType: "Maritimo" },
  { supplierName: "SPANISH TILE FRON NULES SAU España", family: "PORCELANATO", originCountry: "España", currency: "EUR", incoterm: "EXW", exportCost: 47.25, internalFreight: 384.3, daiRate: 0, originPort: "Valencia, España", destinationPort: "Santo Tomas de Castilla", containerSize: "20 pies", transportType: "Maritimo" },
  { supplierName: "GETTING AIMS TEAM", family: "ANTIDESLISANTE", originCountry: "España", currency: "EUR", incoterm: "EXW", exportCost: 0, internalFreight: 225, daiRate: 0, originPort: "Barcelona, España", destinationPort: "Santo Tomas de Castilla", containerSize: "20 pies", transportType: "Maritimo" },
  { supplierName: "IMA GROUP", family: "PORCELANATO", originCountry: "China", currency: "USD", incoterm: "FOB", exportCost: 0, internalFreight: 0, daiRate: 15, originPort: "Sanshui, China", destinationPort: "Puerto Quetzal", containerSize: "20 pies", transportType: "Maritimo" },
  { supplierName: "WUHAN HONGYANTENG TECHNOLOGY", family: "CUARZO", originCountry: "China", currency: "USD", incoterm: "FOB", exportCost: 0, internalFreight: 0, daiRate: 15, originPort: "Qingdao, China", destinationPort: "Puerto Quetzal", containerSize: "20 pies", transportType: "Maritimo" },
  { supplierName: "MARMO BRAND", family: "GRANITO", originCountry: "Egipto", currency: "USD", incoterm: "FOB", exportCost: 0, internalFreight: 0, daiRate: 15, originPort: "Damietta, Egipto", destinationPort: "Puerto Quetzal", containerSize: "20 pies", transportType: "Maritimo" },
  { supplierName: "MAPEI DE México", family: "ADHESIVO", originCountry: "México", currency: "USD", incoterm: "FCA", exportCost: 0, internalFreight: 0, daiRate: 0, originPort: "Ciudad Hidalgo, México", destinationPort: "Tecun Uman, Guatemala", containerSize: "FRGN", transportType: "Terrestre" },
  { supplierName: "GUANGDONG OVS TECHNOLOGY CO LTD", family: "HIDROMASAJE", originCountry: "China", currency: "USD", incoterm: "FOB", exportCost: 0, internalFreight: 0, daiRate: 15, originPort: "Jiujiang, China", destinationPort: "Puerto Quetzal", containerSize: "40 HC", transportType: "Maritimo" },
  { supplierName: "KAIPING JUNYUAN IMPORT AND EXPORT TRADING CO LTD", family: "FREGADERO DE COCINA", originCountry: "China", currency: "USD", incoterm: "FOB", exportCost: 0, internalFreight: 0, daiRate: 15, originPort: "Jiujiang, China", destinationPort: "Puerto Quetzal", containerSize: "40 HC", transportType: "Maritimo" },
  { supplierName: "JOMOLA INDUSTRY (HK) CO TD", family: "LAVAMANOS LAVATRASTOS", originCountry: "China", currency: "USD", incoterm: "FOB", exportCost: 0, internalFreight: 0, daiRate: 15, originPort: "Jiujiang, China", destinationPort: "Puerto Quetzal", containerSize: "40 HC", transportType: "Maritimo" },
  { supplierName: "ALPHA CERAMICA. CATO", family: "LOZA SANITARIA", originCountry: "México", currency: "USD", incoterm: "FCA", exportCost: 0, internalFreight: 0, daiRate: 0, originPort: "Ciudad Hidalgo, México", destinationPort: "Tecun Uman, Guatemala", containerSize: "FRGN", transportType: "Terrestre" },
  { supplierName: "RUBI TOOLS", family: "ACCESORIOS PARA INSTALACION DE PISO", originCountry: "España", currency: "EUR", incoterm: "FCA", exportCost: 0, internalFreight: 0, daiRate: 0, originPort: "Barcelona, España", destinationPort: "Santo Tomas de Castilla", containerSize: "20 pies", transportType: "Maritimo" },
  { supplierName: "GEOTILES", family: "PORCELANATO", originCountry: "España", currency: "EUR", incoterm: "EXW", exportCost: 47.25, internalFreight: 384.3, daiRate: 0, originPort: "Valencia, España", destinationPort: "Santo Tomas de Castilla", containerSize: "20 pies", transportType: "Maritimo" },
  { supplierName: "HALCON CERAMICAS", family: "PORCELANATO", originCountry: "España", currency: "EUR", incoterm: "EXW", exportCost: 47.25, internalFreight: 384.3, daiRate: 0, originPort: "Valencia, España", destinationPort: "Santo Tomas de Castilla", containerSize: "20 pies", transportType: "Maritimo" },
  { supplierName: "NAVARTI CERAMICA", family: "PORCELANATO", originCountry: "España", currency: "EUR", incoterm: "EXW", exportCost: 47.25, internalFreight: 384.3, daiRate: 0, originPort: "Valencia, España", destinationPort: "Santo Tomas de Castilla", containerSize: "20 pies", transportType: "Maritimo" },
  { supplierName: "PORCELANOSA", family: "PORCELANATO", originCountry: "España", currency: "EUR", incoterm: "EXW", exportCost: 47.25, internalFreight: 384.3, daiRate: 0, originPort: "Valencia, España", destinationPort: "Santo Tomas de Castilla", containerSize: "20 pies", transportType: "Maritimo" },
  { supplierName: "DILMUN EMPRESARIAL", family: "TABLA CERAMICA", originCountry: "España", currency: "EUR", incoterm: "EXW", exportCost: 47.25, internalFreight: 384.3, daiRate: 0, originPort: "Valencia, España", destinationPort: "Santo Tomas de Castilla", containerSize: "20 pies", transportType: "Maritimo" },
  { supplierName: "COOPERATIVA CERAMICA D' IMOLA", family: "TABLA CERAMICA", originCountry: "Italia", currency: "EUR", incoterm: "EXW", exportCost: 47.25, internalFreight: 1522.5, daiRate: 0, originPort: "Livorno, Italia", destinationPort: "Santo Tomas de Castilla", containerSize: "20 pies", transportType: "Maritimo" },
  { supplierName: "MARAZZI GROUP", family: "PORCELANATO", originCountry: "Italia", currency: "EUR", incoterm: "EXW", exportCost: 47.25, internalFreight: 1522.5, daiRate: 0, originPort: "Livorno, Italia", destinationPort: "Santo Tomas de Castilla", containerSize: "20 pies", transportType: "Maritimo" },
  { supplierName: "PANARIA GROUP", family: "TABLA CERAMICA", originCountry: "Italia", currency: "EUR", incoterm: "EXW", exportCost: 47.25, internalFreight: 1522.5, daiRate: 0, originPort: "Livorno, Italia", destinationPort: "Santo Tomas de Castilla", containerSize: "20 pies", transportType: "Maritimo" },
  { supplierName: "THESIZE SURFACES", family: "TABLA CERAMICA", originCountry: "España", currency: "EUR", incoterm: "EXW", exportCost: 47.25, internalFreight: 384.3, daiRate: 0, originPort: "Valencia, España", destinationPort: "Santo Tomas de Castilla", containerSize: "20 pies", transportType: "Maritimo" },
  { supplierName: "GUANGDONG OVERLAND", family: "PORCELANATO", originCountry: "China", currency: "USD", incoterm: "FOB", exportCost: 0, internalFreight: 0, daiRate: 15, originPort: "Sanshui, China", destinationPort: "Puerto Quetzal", containerSize: "20 pies", transportType: "Maritimo" },
  { supplierName: "FOSHAN YINGKANGSHUN", family: "MALLAS", originCountry: "China", currency: "USD", incoterm: "FOB", exportCost: 0, internalFreight: 0, daiRate: 15, originPort: "Foshan, China", destinationPort: "Puerto Quetzal", containerSize: "20 pies", transportType: "Maritimo" },
  { supplierName: "DELTA FAUCET", family: "GRIFERIA", originCountry: "Estados Unidos", currency: "USD", incoterm: "FCA", exportCost: 0, internalFreight: 160, daiRate: 0, originPort: "Miami, USA", destinationPort: "Almacenadora, Santo Tomas", containerSize: "FRGN", transportType: "Terrestre" },
  { supplierName: "ROCA SANITARIOS BRASIL", family: "LOZA SANITARIA", originCountry: "Brasil", currency: "USD", incoterm: "FOB", exportCost: 0, internalFreight: 0, daiRate: 15, originPort: "Santos, Brasil", destinationPort: "Santo Tomas de Castilla", containerSize: "40 HC", transportType: "Maritimo" }
];

const familyToCategoryMap = {
  PORCELANATO: "Porcelanato",
  CERAMICA: "Ceramica",
  GRIFERIA: "Griferia",
  "CUARZO GRANDES FORMATOS": "Grandes formatos",
  "TABLA CERAMICA": "Grandes formatos",
  LOZA: "Losa",
  "LOZA SANITARIA": "Losa",
  "CUARZO": "Grandes formatos",
  "GRANITO": "Grandes formatos"
};

const portCatalogByCountry = {
  China: [
    { name: "Shanghai", surchargeFactor: 0.19 },
    { name: "Shenzhen", surchargeFactor: 0.17 },
    { name: "Ningbo", surchargeFactor: 0.16 },
    { name: "Guangzhou", surchargeFactor: 0.17 },
    { name: "Beijing Capital", surchargeFactor: 0.28 }
  ],
  India: [
    { name: "Nhava Sheva", surchargeFactor: 0.16 },
    { name: "Mundra", surchargeFactor: 0.15 },
    { name: "Chennai", surchargeFactor: 0.16 },
    { name: "Delhi", surchargeFactor: 0.26 }
  ],
  Peru: [
    { name: "Callao, Peru", surchargeFactor: 0.11 }
  ],
  México: [
    { name: "Manzanillo MX", surchargeFactor: 0.08 },
    { name: "Altamira", surchargeFactor: 0.07 },
    { name: "Veracruz", surchargeFactor: 0.07 },
    { name: "Ciudad de México AICM", surchargeFactor: 0.18 },
    { name: "Ciudad Hidalgo, México", surchargeFactor: 0.06 }
  ],
  "Estados Unidos": [
    { name: "Miami", surchargeFactor: 0.1 },
    { name: "Miami, USA", surchargeFactor: 0.1 },
    { name: "Los Angeles", surchargeFactor: 0.12 },
    { name: "Houston", surchargeFactor: 0.1 },
    { name: "New York JFK", surchargeFactor: 0.2 }
  ],
  España: [
    { name: "Valencia", surchargeFactor: 0.14 },
    { name: "Barcelona", surchargeFactor: 0.15 },
    { name: "Algeciras", surchargeFactor: 0.14 },
    { name: "Madrid", surchargeFactor: 0.23 }
  ],
  Italia: [
    { name: "Genova", surchargeFactor: 0.15 },
    { name: "La Spezia", surchargeFactor: 0.16 },
    { name: "Livorno", surchargeFactor: 0.15 },
    { name: "Livorno", surchargeFactor: 0.15 },
    { name: "Milan Malpensa", surchargeFactor: 0.24 }
  ],
  Brasil: [
    { name: "Santos", surchargeFactor: 0.12 },
    { name: "Itajai", surchargeFactor: 0.12 },
    { name: "Rio de Janeiro", surchargeFactor: 0.13 },
    { name: "Sao Paulo Guarulhos", surchargeFactor: 0.21 }
  ],
  Egipto: [
    { name: "Damietta, Egipto", surchargeFactor: 0.18 }
  ],
  Colombia: [
    { name: "Cartagena", surchargeFactor: 0.06 },
    { name: "Buenaventura", surchargeFactor: 0.08 },
    { name: "Barranquilla", surchargeFactor: 0.07 },
    { name: "Bogota El Dorado", surchargeFactor: 0.18 }
  ],
  Turquia: [
    { name: "Ambarli", surchargeFactor: 0.17 },
    { name: "Izmir", surchargeFactor: 0.18 },
    { name: "Mersin", surchargeFactor: 0.18 },
    { name: "Estambul IST", surchargeFactor: 0.26 }
  ],
  Otro: [
    { name: "Otro", surchargeFactor: 0.12 }
  ]
};

const countryBaseFactor = {
  China: 0.24,
  India: 0.21,
  Peru: 0.1,
  México: 0.09,
  "Estados Unidos": 0.12,
  España: 0.17,
  Italia: 0.18,
  Brasil: 0.14,
  Egipto: 0.2,
  Colombia: 0.08,
  Turquia: 0.19,
  Otro: 0.12
};

const containerProfiles = {
  "20 pies": { volumeM3: 33, weightMT: 21.7, palletSlots: 10, routeBaseGTQ: 9500 },
  "40 pies": { volumeM3: 67, weightMT: 26.5, palletSlots: 21, routeBaseGTQ: 14500 },
  "40 HC": { volumeM3: 76, weightMT: 26.5, palletSlots: 21, routeBaseGTQ: 15800 },
  LCL: { volumeM3: 15, weightMT: 8, palletSlots: 6, routeBaseGTQ: 6200 },
  DEFAULT: { volumeM3: 25, weightMT: 12, palletSlots: 8, routeBaseGTQ: 8000 }
};

const transportMultipliers = {
  Maritimo: 1,
  Aereo: 1.7,
  Terrestre: 0.72,
  Courier: 1.95
};

const densityByCategory = {
  Porcelanato: 2.25,
  Ceramica: 2.05,
  Griferia: 1.1,
  "Grandes formatos": 2.2,
  Losa: 2.15
};

const packagingFactorByCategory = {
  Porcelanato: 1.12,
  Ceramica: 1.15,
  Griferia: 1.25,
  "Grandes formatos": 1.18,
  Losa: 1.12
};

const unitPresets = {
  Caja: { volumeM3: 0.055, weightMT: 0.035 },
  Pallet: { volumeM3: 1.8, weightMT: 1.2, palletSlots: 1 },
  Unidad: { volumeM3: 0.02, weightMT: 0.01 }
};

const els = Object.fromEntries(allFieldIds.map((id) => [id, document.getElementById(id)]));

const labels = {
  productCount: document.getElementById("productCountLabel"),
  productTotal: document.getElementById("productTotalLabel"),
  cifTotal: document.getElementById("cifTotalLabel"),
  daiTotal: document.getElementById("daiTotalLabel"),
  localCharges: document.getElementById("localChargesLabel"),
  landedTotal: document.getElementById("landedTotalLabel"),
  suggestedPrice: document.getElementById("suggestedPriceLabel"),
  containerFolio: document.getElementById("containerFolioLabel"),
  quickSupplier: document.getElementById("quickSupplier"),
  quickTransport: document.getElementById("quickTransport"),
  usedCapacitySummary: document.getElementById("usedCapacitySummary"),
  remainingCapacitySummary: document.getElementById("remainingCapacitySummary"),
  draftCapacityLabel: document.getElementById("draftCapacityLabel"),
  remainingCapacityLabel: document.getElementById("remainingCapacityLabel"),
  capacityHint: document.getElementById("capacityHint"),
  capacityProgress: document.getElementById("capacityProgress"),
  productsList: document.getElementById("productsList"),
  productCountBadge: document.getElementById("productCountBadge"),
  savedQuotes: document.getElementById("savedQuotes")
};

const saveQuoteBtn = document.getElementById("saveQuoteBtn");
const resetBtn = document.getElementById("resetBtn");
const clearSavedBtn = document.getElementById("clearSavedBtn");
const addProductBtn = document.getElementById("addProductBtn");
const clearProductBtn = document.getElementById("clearProductBtn");
const FLOW_SAVE_URL = "https://7e55d88804bae045b253b2537135e3.0d.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/9050380bc99f45b5a5ff8cae21634782/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=bE6ktvvRmH3dT6YafXddAfXBL-qXEEE5ELYHQQCOH0Y";
const AUTH_STORAGE_KEY = "samboro-prorrateo-session";
const AUTH_USERS = [
  { email: "izcoatlsanchez@outlook.com", password: "1234Izco" },
  { email: "gonzalo.sanchez@londoncg.com", password: "GonzaloProrrateo1234" },
  { email: "powerbi@samborogt.onmicrosoft.com", password: "PowerBIProrarteo1234" }
];

const loginScreen = document.getElementById("loginScreen");
const mainApp = document.getElementById("mainApp");
const loginForm = document.getElementById("loginForm");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const loginError = document.getElementById("loginError");
const togglePasswordBtn = document.getElementById("togglePasswordBtn");

const state = {
  products: [],
  currentFolio: ""
};

function toNumber(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function isAuthenticated() {
  return sessionStorage.getItem(AUTH_STORAGE_KEY) === "authenticated";
}

function showMainApp() {
  loginScreen.hidden = true;
  mainApp.hidden = false;
}

function showLogin() {
  loginScreen.hidden = false;
  mainApp.hidden = true;
}

function handleLogin(event) {
  event.preventDefault();

  const email = normalizeEmail(loginEmail.value);
  const password = loginPassword.value;
  const user = AUTH_USERS.find((item) => normalizeEmail(item.email) === email && item.password === password);

  if (!user) {
    loginError.hidden = false;
    loginPassword.value = "";
    return;
  }

  sessionStorage.setItem(AUTH_STORAGE_KEY, "authenticated");
  loginError.hidden = true;
  showMainApp();
}

function togglePasswordVisibility() {
  const isPassword = loginPassword.type === "password";
  loginPassword.type = isPassword ? "text" : "password";
  togglePasswordBtn.textContent = isPassword ? "👁" : "👁";
  togglePasswordBtn.setAttribute(
    "aria-label",
    isPassword ? "Ocultar contraseña" : "Mostrar contraseña"
  );
}

function formatGTQ(value) {
  return new Intl.NumberFormat("es-GT", {
    style: "currency",
    currency: "GTQ",
    minimumFractionDigits: 2
  }).format(value || 0);
}

function formatPercent(value) {
  return `${(value * 100).toFixed(2)}%`;
}

function padNumber(value, length) {
  return String(value).padStart(length, "0");
}

function createContainerFolio() {
  const now = new Date();
  const datePart = `${now.getFullYear()}${padNumber(now.getMonth() + 1, 2)}${padNumber(now.getDate(), 2)}`;
  const timePart = `${padNumber(now.getHours(), 2)}${padNumber(now.getMinutes(), 2)}${padNumber(now.getSeconds(), 2)}`;
  return `CTN-${datePart}-${timePart}`;
}

function ensureContainerFolio() {
  if (!state.currentFolio) {
    state.currentFolio = createContainerFolio();
  }

  return state.currentFolio;
}

function getContainerProfile(containerSize) {
  return containerProfiles[containerSize] || containerProfiles.DEFAULT;
}

function ensureSelectOption(selectElement, value) {
  if (!value) {
    return;
  }

  const existingOption = Array.from(selectElement.options).find((option) => option.value === value);
  if (existingOption) {
    return;
  }

  const option = document.createElement("option");
  option.value = value;
  option.textContent = value;
  selectElement.appendChild(option);
}

function populateSupplierOptions() {
  const uniqueSuppliers = [...new Set(supplierCatalog.map((supplier) => supplier.supplierName))].sort();
  uniqueSuppliers.forEach((supplierName) => {
    const option = document.createElement("option");
    option.value = supplierName;
    option.textContent = supplierName;
    els.supplierName.appendChild(option);
  });
}

function getSupplierConfig(supplierName) {
  return supplierCatalog.find((supplier) => supplier.supplierName === supplierName) || null;
}

function getGeneralData() {
  return Object.fromEntries(generalFieldIds.map((id) => [id, els[id].value]));
}

function getProductDraft() {
  return Object.fromEntries(productFieldIds.map((id) => [id, els[id].value]));
}

function parseThicknessMeters(thickness) {
  const value = toNumber(String(thickness).replace(/[^\d.]/g, ""));
  return value > 0 ? value / 1000 : 0.01;
}

function parseFormatAreaM2(format) {
  const match = format.match(/(\d+(?:\.\d+)?)x(\d+(?:\.\d+)?)/i);
  if (!match) {
    return 1;
  }

  const widthM = toNumber(match[1]) / 100;
  const lengthM = toNumber(match[2]) / 100;
  return widthM * lengthM;
}

function getDensity(product) {
  return densityByCategory[product.category] || 1.5;
}

function getPackagingFactor(product) {
  return packagingFactorByCategory[product.category] || 1.12;
}

function estimateProductCapacity(product, generalData) {
  const profile = getContainerProfile(generalData.containerSize);
  const quantity = toNumber(product.quantity);
  const unitMeasure = product.unitMeasure;
  const thicknessM = parseThicknessMeters(product.thickness);
  const areaM2 = parseFormatAreaM2(product.format);
  const density = getDensity(product);
  const packagingFactor = getPackagingFactor(product);

  let volumeM3 = 0;
  let weightMT = 0;
  let palletSlots = 0;

  if (unitMeasure === "M2") {
    volumeM3 = quantity * thicknessM * packagingFactor;
    weightMT = volumeM3 * density;
  } else if (unitMeasure === "M3") {
    volumeM3 = quantity * packagingFactor;
    weightMT = volumeM3 * density;
  } else if (unitMeasure === "MT") {
    weightMT = quantity;
    volumeM3 = quantity / Math.max(density, 0.1);
  } else if (unitMeasure === "Caja") {
    const preset = unitPresets.Caja;
    volumeM3 = quantity * preset.volumeM3;
    weightMT = quantity * preset.weightMT;
  } else if (unitMeasure === "Pallet") {
    const preset = unitPresets.Pallet;
    volumeM3 = quantity * preset.volumeM3;
    weightMT = quantity * preset.weightMT;
    palletSlots = quantity * preset.palletSlots;
  } else if (unitMeasure === "Unidad") {
    const preset = unitPresets.Unidad;
    const isTileLike = ["Porcelanato", "Ceramica", "Grandes formatos", "Losa"].includes(product.category);
    if (isTileLike) {
      volumeM3 = quantity * areaM2 * thicknessM * packagingFactor;
      weightMT = volumeM3 * density;
    } else {
      volumeM3 = quantity * preset.volumeM3;
      weightMT = quantity * preset.weightMT;
    }
  }

  const volumeRatio = volumeM3 / profile.volumeM3;
  const weightRatio = weightMT / profile.weightMT;
  const palletRatio = profile.palletSlots ? palletSlots / profile.palletSlots : 0;
  const occupancyRatio = Math.max(volumeRatio, weightRatio, palletRatio);

  return {
    volumeM3,
    weightMT,
    palletSlots,
    occupancyRatio: Math.max(occupancyRatio, 0)
  };
}

function getPortFactor(portName) {
  const allPorts = Object.values(portCatalogByCountry).flat();
  return allPorts.find((port) => port.name === portName)?.surchargeFactor || 0;
}

function getRouteAdjustmentGTQ(generalData, totalOccupancyRatio) {
  const profile = getContainerProfile(generalData.containerSize);
  const countryFactor = countryBaseFactor[generalData.originCountry] || 0;
  const portFactor = getPortFactor(generalData.originPort);
  const transportMultiplier = transportMultipliers[generalData.transportType] || 1;
  const effectiveOccupancy = Math.min(Math.max(totalOccupancyRatio, 0), 1.25);
  return profile.routeBaseGTQ * (countryFactor + portFactor) * transportMultiplier * effectiveOccupancy;
}

function getDraftProductMetrics() {
  const draft = getProductDraft();
  return estimateProductCapacity(draft, getGeneralData());
}

function getContainerMetrics(products, generalData) {
  const exchangeRate = toNumber(generalData.exchangeRate) || 1;
  const daiRate = toNumber(generalData.daiRate) / 100;
  const localChargesGTQ =
    toNumber(generalData.customsFees) +
    toNumber(generalData.documentFees) +
    toNumber(generalData.extraFees) +
    toNumber(generalData.warehouseCost) +
    toNumber(generalData.localFreight) +
    toNumber(generalData.handlingCost);

  const productsWithMetrics = products.map((product) => {
    const capacity = estimateProductCapacity(product, generalData);
    const productValueForeign = toNumber(product.quantity) * toNumber(product.unitCost);
    const productValueGTQ = productValueForeign * exchangeRate;
    const packagingGTQ = toNumber(product.packagingCost) * exchangeRate;
    const baseGTQ = productValueGTQ + packagingGTQ;
    const marginRate = toNumber(product.marginRate) / 100;

    return {
      ...product,
      capacity,
      productValueGTQ,
      packagingGTQ,
      baseGTQ,
      marginRate
    };
  });

  const totalOccupancy = productsWithMetrics.reduce((sum, product) => sum + product.capacity.occupancyRatio, 0);
  const totalBaseGTQ = productsWithMetrics.reduce((sum, product) => sum + product.baseGTQ, 0);
  const totalLogisticsGTQ =
    (toNumber(generalData.exportCost) +
      toNumber(generalData.internalFreight) +
      toNumber(generalData.internationalFreight) +
      toNumber(generalData.insuranceCost)) * exchangeRate;
  const routeAdjustmentGTQ = getRouteAdjustmentGTQ(generalData, totalOccupancy);
  const occupancyBase = totalOccupancy > 0 ? totalOccupancy : 1;

  const detailedProducts = productsWithMetrics.map((product, index) => {
    const occupancyShare = product.capacity.occupancyRatio / occupancyBase;
    const sharedInternationalGTQ = (totalLogisticsGTQ + routeAdjustmentGTQ) * occupancyShare;
    const cifGTQ = product.baseGTQ + sharedInternationalGTQ;
    const daiGTQ = cifGTQ * daiRate;
    const localShareGTQ = localChargesGTQ * occupancyShare;
    const landedGTQ = cifGTQ + daiGTQ + localShareGTQ;
    const quantity = Math.max(toNumber(product.quantity), 1);
    const landedPerUnitGTQ = landedGTQ / quantity;
    const suggestedPerUnitGTQ = landedPerUnitGTQ * (1 + product.marginRate);

    return {
      ...product,
      index,
      occupancyShare,
      sharedInternationalGTQ,
      cifGTQ,
      daiGTQ,
      localShareGTQ,
      landedGTQ,
      landedPerUnitGTQ,
      suggestedPerUnitGTQ
    };
  });

  const totalCIFGTQ = detailedProducts.reduce((sum, product) => sum + product.cifGTQ, 0);
  const totalDAIGTQ = detailedProducts.reduce((sum, product) => sum + product.daiGTQ, 0);
  const totalLandedGTQ = detailedProducts.reduce((sum, product) => sum + product.landedGTQ, 0);
  const suggestedAverageGTQ =
    detailedProducts.length > 0
      ? detailedProducts.reduce((sum, product) => sum + product.suggestedPerUnitGTQ, 0) / detailedProducts.length
      : 0;

  return {
    products: detailedProducts,
    totalOccupancy,
    totalBaseGTQ,
    totalLogisticsGTQ,
    routeAdjustmentGTQ,
    totalCIFGTQ,
    totalDAIGTQ,
    localChargesGTQ,
    totalLandedGTQ,
    suggestedAverageGTQ
  };
}

function updateCapacityPreview() {
  const generalData = getGeneralData();
  const draftMetrics = getDraftProductMetrics();
  const currentMetrics = getContainerMetrics(state.products, generalData);
  const projectedOccupancy = currentMetrics.totalOccupancy + draftMetrics.occupancyRatio;
  const remaining = Math.max(1 - projectedOccupancy, 0);

  labels.draftCapacityLabel.textContent = formatPercent(draftMetrics.occupancyRatio);
  labels.remainingCapacityLabel.textContent = formatPercent(remaining);
  labels.capacityProgress.style.width = `${Math.min(projectedOccupancy, 1) * 100}%`;
  labels.capacityProgress.classList.toggle("is-danger", projectedOccupancy > 1);

  if (!state.products.length) {
    labels.capacityHint.textContent = "Agrega productos hasta completar la capacidad del contenedor.";
  } else if (projectedOccupancy > 1) {
    labels.capacityHint.textContent = "Este producto supera la capacidad estimada del contenedor.";
  } else if (projectedOccupancy > 0.92) {
    labels.capacityHint.textContent = "El contenedor esta casi lleno. Revisa si deseas cerrar la corrida.";
  } else {
    labels.capacityHint.textContent = "Todavia puedes agregar otro producto al mismo contenedor.";
  }
}

function renderProducts() {
  const metrics = getContainerMetrics(state.products, getGeneralData());
  labels.productsList.innerHTML = "";
  labels.productCountBadge.textContent = `${state.products.length} productos`;

  if (!metrics.products.length) {
    labels.productsList.innerHTML = '<p class="empty-state">Aun no hay productos agregados al contenedor.</p>';
    return;
  }

  metrics.products.forEach((product) => {
    const item = document.createElement("div");
    item.className = "product-item";
    item.innerHTML = `
      <div class="product-item-head">
        <div>
          <strong>${product.productName || "Producto sin nombre"}</strong>
          <small>${product.category || "-"} · ${product.unitMeasure || "-"} · ${product.quantity || "0"}</small>
        </div>
        <button class="chip-btn danger" type="button" data-remove-index="${product.index}">Eliminar</button>
      </div>
      <div class="product-metrics">
        <div><span>Ocupacion</span><strong>${formatPercent(product.capacity.occupancyRatio)}</strong></div>
        <div><span>CIF</span><strong>${formatGTQ(product.cifGTQ)}</strong></div>
        <div><span>DAI</span><strong>${formatGTQ(product.daiGTQ)}</strong></div>
        <div><span>Costo en bodega</span><strong>${formatGTQ(product.landedGTQ)}</strong></div>
        <div><span>Costo unitario GTQ</span><strong>${formatGTQ(product.landedPerUnitGTQ)}</strong></div>
        <div><span>Precio sugerido</span><strong>${formatGTQ(product.suggestedPerUnitGTQ)}</strong></div>
      </div>
    `;

    labels.productsList.appendChild(item);
  });

  labels.productsList.querySelectorAll("[data-remove-index]").forEach((button) => {
    button.addEventListener("click", () => {
      removeProduct(Number(button.dataset.removeIndex));
    });
  });
}

function renderSummary() {
  const generalData = getGeneralData();
  const metrics = getContainerMetrics(state.products, generalData);

  labels.productCount.textContent = String(state.products.length);
  labels.productTotal.textContent = formatGTQ(metrics.totalBaseGTQ);
  labels.cifTotal.textContent = formatGTQ(metrics.totalCIFGTQ);
  labels.daiTotal.textContent = formatGTQ(metrics.totalDAIGTQ);
  labels.localCharges.textContent = formatGTQ(metrics.localChargesGTQ);
  labels.landedTotal.textContent = formatGTQ(metrics.totalLandedGTQ);
  labels.suggestedPrice.textContent = formatGTQ(metrics.suggestedAverageGTQ);
  labels.containerFolio.textContent = state.currentFolio || "Pendiente";
  labels.quickSupplier.textContent = generalData.supplierName || "-";
  labels.quickTransport.textContent = generalData.transportType || "-";
  labels.usedCapacitySummary.textContent = formatPercent(metrics.totalOccupancy);
  labels.remainingCapacitySummary.textContent = formatPercent(Math.max(1 - metrics.totalOccupancy, 0));

  renderProducts();
  updateCapacityPreview();
}

function clearProductForm() {
  productFieldIds.forEach((id) => {
    const element = els[id];
    if (element.tagName === "SELECT") {
      element.selectedIndex = 0;
      return;
    }

    if (element.type === "number") {
      element.value = element.defaultValue || "0";
      return;
    }

    element.value = "";
  });

  els.marginRate.value = "25";
  renderSummary();
}

function populateOriginPorts(country, selectedPort = "") {
  const catalogPorts = portCatalogByCountry[country] || [];
  const supplierPorts = supplierCatalog
    .filter((supplier) => supplier.originCountry === country)
    .map((supplier) => supplier.originPort);
  const ports = [
    ...catalogPorts.map((port) => port.name),
    ...supplierPorts
  ].filter((port, index, array) => port && array.indexOf(port) === index);
  els.originPort.innerHTML = "";

  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "Seleccionar origen";
  els.originPort.appendChild(placeholder);

  ports.forEach((port) => {
    const option = document.createElement("option");
    option.value = port;
    option.textContent = port;
    els.originPort.appendChild(option);
  });

  if (selectedPort && ports.includes(selectedPort)) {
    els.originPort.value = selectedPort;
  }
}

function applySupplierDefaults() {
  const supplier = getSupplierConfig(els.supplierName.value);
  if (!supplier || els.supplierName.value === "MANUAL") {
    renderSummary();
    return;
  }

  ensureContainerFolio();
  ensureSelectOption(els.originCountry, supplier.originCountry);
  els.currency.value = supplier.currency;
  els.incoterm.value = supplier.incoterm;
  els.originCountry.value = supplier.originCountry;
  populateOriginPorts(supplier.originCountry, supplier.originPort);
  ensureSelectOption(els.destinationPort, supplier.destinationPort);
  ensureSelectOption(els.entryPort, supplier.destinationPort);
  ensureSelectOption(els.containerSize, supplier.containerSize);

  els.originPort.value = supplier.originPort;
  els.destinationPort.value = supplier.destinationPort;
  els.entryPort.value = supplier.destinationPort;
  els.containerSize.value = supplier.containerSize;
  els.transportType.value = supplier.transportType;
  els.exportCost.value = String(supplier.exportCost);
  els.internalFreight.value = String(supplier.internalFreight);
  els.daiRate.value = String(supplier.daiRate);

  const mappedCategory = familyToCategoryMap[supplier.family];
  if (mappedCategory) {
    els.category.value = mappedCategory;
  }

  renderSummary();
}

function syncEntryPort() {
  els.entryPort.value = els.destinationPort.value;
}

function validateProductBeforeAdd() {
  const product = getProductDraft();
  if (!product.productName.trim()) {
    window.alert("Ingresa el nombre del producto antes de agregarlo.");
    return null;
  }

  if (toNumber(product.quantity) <= 0) {
    window.alert("La cantidad del producto debe ser mayor a cero.");
    return null;
  }

  const projectedOccupancy =
    getContainerMetrics(state.products, getGeneralData()).totalOccupancy +
    estimateProductCapacity(product, getGeneralData()).occupancyRatio;

  if (projectedOccupancy > 1.02) {
    window.alert("Este producto supera la capacidad estimada del contenedor.");
    return null;
  }

  return product;
}

function addProductToContainer() {
  const product = validateProductBeforeAdd();
  if (!product) {
    return;
  }

  ensureContainerFolio();
  state.products.push(product);
  renderSummary();

  const wantsAnother = window.confirm(
    "Producto agregado al contenedor. Deseas agregar otro producto a esta misma corrida?"
  );

  clearProductForm();

  if (!wantsAnother) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function removeProduct(index) {
  state.products = state.products.filter((_, itemIndex) => itemIndex !== index);
  renderSummary();
}

function getSavedQuotes() {
  try {
    return JSON.parse(localStorage.getItem(storageKey) || "[]");
  } catch {
    return [];
  }
}

function normalizeSavedQuote(quote) {
  if (quote.generalData && Array.isArray(quote.products)) {
    return {
      ...quote,
      containerFolio: quote.containerFolio || createContainerFolio(),
      sharePointLineItems: quote.sharePointLineItems || []
    };
  }

  return {
    id: quote.id || crypto.randomUUID(),
    containerFolio: quote.containerFolio || createContainerFolio(),
    savedAt: quote.savedAt || Date.now(),
    generalData: quote.data || {},
    products: quote.data
      ? [
          Object.fromEntries(productFieldIds.map((fieldId) => [fieldId, quote.data[fieldId] ?? ""]))
        ]
      : [],
    calculations: quote.calculations || {},
    sharePointLineItems: quote.sharePointLineItems || []
  };
}

function setSavedQuotes(quotes) {
  localStorage.setItem(storageKey, JSON.stringify(quotes));
}

function buildSharePointLineItems(payload) {
  return payload.products.map((product, index) => ({
    title: `${payload.containerFolio}-L${padNumber(index + 1, 3)}`,
    containerFolio: payload.containerFolio,
    lineNumber: index + 1,
    quoteName: payload.generalData.quoteName || "",
    importCode: payload.generalData.importCode || "",
    supplierName: payload.generalData.supplierName || "",
    currency: payload.generalData.currency || "",
    exchangeRate: toNumber(payload.generalData.exchangeRate),
    incoterm: payload.generalData.incoterm || "",
    transportType: payload.generalData.transportType || "",
    originCountry: payload.generalData.originCountry || "",
    originPort: payload.generalData.originPort || "",
    destinationPort: payload.generalData.destinationPort || "",
    entryPort: payload.generalData.entryPort || "",
    containerSize: payload.generalData.containerSize || "",
    warehouseLocation: payload.generalData.warehouseLocation || "",
    finalDestination: payload.generalData.finalDestination || "",
    productName: product.productName || "",
    category: product.category || "",
    format: product.format || "",
    body: product.body || "",
    finish: product.finish || "",
    edge: product.edge || "",
    thickness: product.thickness || "",
    quality: product.quality || "",
    unitMeasure: product.unitMeasure || "",
    quantity: toNumber(product.quantity),
    unitCostForeign: toNumber(product.unitCost),
    packagingCostForeign: toNumber(product.packagingCost),
    occupancyRatio: product.capacity?.occupancyRatio || 0,
    occupancyPercent: (product.capacity?.occupancyRatio || 0) * 100,
    productValueGTQ: product.productValueGTQ || 0,
    packagingGTQ: product.packagingGTQ || 0,
    sharedInternationalGTQ: product.sharedInternationalGTQ || 0,
    cifGTQ: product.cifGTQ || 0,
    daiGTQ: product.daiGTQ || 0,
    localShareGTQ: product.localShareGTQ || 0,
    landedGTQ: product.landedGTQ || 0,
    landedPerUnitGTQ: product.landedPerUnitGTQ || 0,
    suggestedPerUnitGTQ: product.suggestedPerUnitGTQ || 0,
    marginRate: toNumber(product.marginRate) * 100,
    notes: product.notes || "",
    savedAt: payload.savedAt
  }));
}

function getQuotePayload() {
  const generalData = getGeneralData();
  const calculations = getContainerMetrics(state.products, generalData);
  const savedAt = Date.now();
  const containerFolio = ensureContainerFolio();

  return {
    id: crypto.randomUUID(),
    containerFolio,
    savedAt,
    generalData,
    products: state.products,
    calculations,
    sharePointLineItems: buildSharePointLineItems({
      containerFolio,
      savedAt,
      generalData,
      products: calculations.products
    })
  };
}

async function saveQuote() {
  const payload = {
    id: crypto.randomUUID(),
    containerFolio: ensureContainerFolio(),
    savedAt: Date.now(),
    generalData: {
      quoteName: els.quoteName.value || "",
      importCode: els.importCode.value || "",
      supplierName: els.supplierName.value || ""
    }
  };

  if (!payload.generalData.quoteName.trim()) {
    window.alert("Ingresa al menos el nombre de la cotización.");
    return;
  }

  try {
    saveQuoteBtn.disabled = true;
    saveQuoteBtn.textContent = "Guardando...";

    const response = await fetch(FLOW_SAVE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    window.alert("Solicitud enviada correctamente. Revisa SharePoint y el historial del flujo.");
  } catch (error) {
    console.error("Error al guardar en Power Automate:", error);
    window.alert("Error al guardar. Revisa la URL del flujo y la ejecución en Power Automate.");
  } finally {
    saveQuoteBtn.disabled = false;
    saveQuoteBtn.textContent = "Guardar cotización";
  }
}

function renderSavedQuotes() {
  const quotes = getSavedQuotes().map(normalizeSavedQuote);
  labels.savedQuotes.innerHTML = "";

  if (!quotes.length) {
    labels.savedQuotes.innerHTML = '<p class="empty-state">Aun no hay cotizaciones guardadas.</p>';
    return;
  }

  quotes
    .sort((a, b) => b.savedAt - a.savedAt)
    .forEach((quote) => {
      const item = document.createElement("div");
      item.className = "saved-item";
      const totalLandedGTQ = quote.calculations.totalLandedGTQ || quote.calculations.landedTotalGTQ || 0;
      item.innerHTML = `
        <div class="saved-item-meta">
          <strong>${quote.generalData.quoteName || "Cotizacion sin nombre"}</strong>
          <small>${quote.containerFolio || "Sin folio"} · ${quote.products.length} productos · ${formatGTQ(totalLandedGTQ)}</small>
        </div>
        <div class="saved-item-actions">
          <button class="chip-btn" type="button" data-load-id="${quote.id}">Cargar</button>
          <button class="chip-btn danger" type="button" data-delete-id="${quote.id}">Eliminar</button>
        </div>
      `;

      labels.savedQuotes.appendChild(item);
    });

  labels.savedQuotes.querySelectorAll("[data-load-id]").forEach((button) => {
    button.addEventListener("click", () => {
      loadQuote(button.dataset.loadId);
    });
  });

  labels.savedQuotes.querySelectorAll("[data-delete-id]").forEach((button) => {
    button.addEventListener("click", () => {
      deleteQuote(button.dataset.deleteId);
    });
  });
}

function loadQuote(id) {
  const quote = getSavedQuotes().map(normalizeSavedQuote).find((item) => item.id === id);
  if (!quote) {
    return;
  }

  generalFieldIds.forEach((fieldId) => {
    if (fieldId === "originPort") {
      return;
    }

    if (fieldId === "supplierName") {
      ensureSelectOption(els.supplierName, quote.generalData[fieldId] ?? "");
    }

    els[fieldId].value = quote.generalData[fieldId] ?? "";
  });

  populateOriginPorts(quote.generalData.originCountry, quote.generalData.originPort);
  els.originPort.value = quote.generalData.originPort || "";
  syncEntryPort();
  state.currentFolio = quote.containerFolio || "";
  state.products = quote.products || [];
  clearProductForm();
  renderSummary();
}

function deleteQuote(id) {
  const filtered = getSavedQuotes().filter((item) => item.id !== id);
  setSavedQuotes(filtered);
  renderSavedQuotes();
}

function clearAllSavedQuotes() {
  localStorage.removeItem(storageKey);
  renderSavedQuotes();
}

function resetAll() {
  allFieldIds.forEach((id) => {
    const element = els[id];
    if (element.tagName === "SELECT") {
      element.selectedIndex = 0;
      return;
    }

    if (element.type === "number") {
      element.value = element.defaultValue || "0";
      return;
    }

    element.value = "";
  });

  els.exchangeRate.value = "7.8";
  els.daiRate.value = "12";
  els.marginRate.value = "25";
  state.products = [];
  state.currentFolio = "";
  populateOriginPorts("");
  syncEntryPort();
  renderSummary();
}

els.originCountry.addEventListener("change", () => {
  populateOriginPorts(els.originCountry.value);
  renderSummary();
});

els.supplierName.addEventListener("change", applySupplierDefaults);

els.destinationPort.addEventListener("change", () => {
  syncEntryPort();
  renderSummary();
});

allFieldIds.forEach((id) => {
  els[id].addEventListener("input", renderSummary);
  els[id].addEventListener("change", renderSummary);
});

addProductBtn.addEventListener("click", addProductToContainer);
clearProductBtn.addEventListener("click", clearProductForm);
saveQuoteBtn.addEventListener("click", saveQuote);
resetBtn.addEventListener("click", resetAll);
clearSavedBtn.addEventListener("click", clearAllSavedQuotes);
loginForm.addEventListener("submit", handleLogin);
togglePasswordBtn.addEventListener("click", togglePasswordVisibility);

populateSupplierOptions();
populateOriginPorts("");
syncEntryPort();
renderSummary();
renderSavedQuotes();

if (isAuthenticated()) {
  showMainApp();
} else {
  showLogin();
}
