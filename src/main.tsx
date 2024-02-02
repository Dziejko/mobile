import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <App />
    </HashRouter>
  </React.StrictMode>
);
