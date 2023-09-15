// import mobileNav from "./modules/mobile-nav.js";
// mobileNav();
import showCountries from "./modules/autoComplete";
showCountries();

import { easepick, AmpPlugin } from "@easepick/bundle";
// import { AmpPlugin } from "@easepick/amp-plugin";

const picker = new easepick.create({
  element: document.getElementById("date_time"),
  css: ["https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css"],
  format: "DD MMM YYYY",
  AmpPlugin: {
    dropdown: {
      years: true,
      minYear: 2023,
      maxYear: 2070,
    },
    darkMode: false,
  },
  plugins: [AmpPlugin],
});
