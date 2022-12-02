import { b as base } from './paths-aa23c6e2.js';

const locs_url = `${base}/data/places.csv`;
const redirect_url = `${base}/data/redirects.csv`;
const layers_url = `${base}/data/layers.json`;
const sheets_url = `${base}/data/sheets.json`;
const statuses = {
  Remaining: {
    name: "Remaining",
    color: "#7ac943",
    selected: true
  },
  Depopulated: {
    name: "Depopulated",
    color: "#fcee21",
    selected: true
  },
  Appropriated: {
    name: "Depopulated & appropriated",
    color: "#f7931e",
    selected: true
  },
  "Built over": {
    name: "Depopulated & built over",
    color: "#ff0000",
    selected: true
  },
  Abandoned: {
    name: "Abandoned",
    color: "#0099ff",
    selected: false
  },
  "Newly built": {
    name: "New locality",
    color: "#777777",
    selected: false
  }
};
const pages = [
  {
    key: "about",
    label: "About",
    icon: "info",
    id: { en: 3, ar: 7 }
  },
  {
    key: "get-involved",
    label: "Get involved",
    icon: "hand",
    id: { en: 6, ar: 9 }
  }
];
const texts = {
  "ar": {
    "Palestine Open Maps": "\u062E\u0631\u0627\u0626\u0637 \u0641\u0644\u0633\u0637\u064A\u0646 \u0627\u0644\u0645\u0641\u062A\u0648\u062D\u0629",
    "Base maps": "\u0627\u0644\u062E\u0631\u0627\u0626\u0637",
    "Overlays": "\u0627\u0644\u0637\u0628\u0642\u0627\u062A \u0627\u0644\u0623\u062E\u0631\u0649",
    "Places": "\u0627\u0644\u0628\u0644\u062F\u0627\u062A",
    "Get updates": "\u062A\u0627\u0628\u0639\u0648\u0627 \u0622\u062E\u0631 \u0627\u0644\u062A\u062D\u062F\u064A\u062B\u0627\u062A",
    "Download maps": "\u062A\u0646\u0632\u064A\u0644 \u0627\u0644\u062E\u0631\u0627\u0626\u0637",
    "Home": "\u0635\u0641\u062D\u0629 \u0631\u0626\u064A\u0633\u064A\u0629",
    "About": "\u0639\u0646 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",
    "Get involved": "\u0627\u0644\u0627\u0646\u062E\u0631\u0627\u0637",
    "Blog": "\u0645\u062F\u0648\u0646\u0629",
    "Contact": "\u0627\u062A\u0635\u0627\u0644",
    "Project vision": "\u0631\u0624\u064A\u062A\u0646\u0627 \u0644\u0644\u0645\u0634\u0631\u0648\u0639",
    "Support us": "\u062F\u0639\u0645 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",
    "Explore maps": "\u0627\u0644\u062E\u0631\u0627\u0626\u0637",
    "Toggle split-screen": "\u062A\u0628\u062F\u064A\u0644 \u062A\u0642\u0633\u064A\u0645 \u0627\u0644\u0634\u0627\u0634\u0629",
    "Toggle 3D": "\u062A\u0628\u062F\u064A\u0644 \u062B\u0644\u0627\u062B\u064A \u0627\u0644\u0623\u0628\u0639\u0627\u062F",
    "Find a place": "\u0627\u0628\u062D\u062B \u0639\u0646 \u0645\u0643\u0627\u0646",
    "Change since 1948": "\u0627\u0644\u062A\u063A\u064A\u064A\u0631 \u0645\u0646\u0630 1948",
    "Population": "\u0639\u062F\u062F \u0627\u0644\u0633\u0643\u0627\u0646",
    "Population by group": "\u0639\u062F\u062F \u0627\u0644\u0633\u0643\u0627\u0646 \u062D\u0633\u0628 \u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0629",
    "on other sites": "\u0639\u0644\u0649 \u0645\u0648\u0627\u0642\u0639 \u0623\u062E\u0631\u0649",
    "Palestine Remembered": "\u0641\u0644\u0633\u0637\u064A\u0646 \u0641\u064A \u0627\u0644\u0630\u0627\u0643\u0631\u0629",
    "Palestine, Today": "\u0641\u0644\u0633\u0637\u064A\u0646\u060C \u0627\u0644\u064A\u0648\u0645",
    "Zochrot": "\u0630\u0627\u0643\u0631\u0627\u062A",
    "Initiated and supported by": "\u0628\u062F\u0623\u062A \u0648\u062F\u0639\u0645\u062A \u0645\u0646 \u062E\u0644\u0627\u0644",
    "No data": "\u0644\u0627\u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A",
    "Palestinian": "\u0641\u0644\u0633\u0637\u064A\u0646\u064A",
    "Jewish": "\u064A\u0647\u0648\u062F\u064A",
    "Other": "\u0622\u062E\u0631",
    "N/A": "\u063A\u064A\u0631 \u0645\u062A\u0627\u062D",
    "Key dates": "\u062A\u0648\u0627\u0631\u064A\u062E \u0645\u0647\u0645\u0629",
    "Depopulated": "\u0645\u0647\u062C\u0648\u0631",
    "in": "\u0641\u064A",
    "sub-district": "\u0642\u0636\u0627\u0621",
    "Village": "\u0642\u0631\u064A\u0629",
    "City": "\u0645\u062F\u064A\u0646\u0629",
    "Illegal settlement": "\u0645\u0633\u062A\u0648\u0637\u0646\u0629 \u063A\u064A\u0631 \u0642\u0627\u0646\u0648\u0646\u064A\u0629",
    "Mixed": "\u0645\u062E\u062A\u0644\u0637\u0629",
    "Built over": "\u0628\u0646\u064A\u062A \u0641\u0648\u0642",
    "Acre": "\u0639\u0643\u0627"
  }
};

export { locs_url as a, sheets_url as b, layers_url as l, pages as p, redirect_url as r, statuses as s, texts as t };
//# sourceMappingURL=config-1e093cb8.js.map
