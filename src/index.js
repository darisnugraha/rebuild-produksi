import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./application/store";
import services from "./infrastructure/services";
import App from "./app.jsx";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

// css
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-quill/dist/quill.snow.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "simple-line-icons/css/simple-line-icons.css";
import "flag-icon-css/css/flag-icon.min.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "./index.css";
import "./infrastructure/scss/react.scss";
import "bootstrap-social/bootstrap-social.css";

// ========================================

ReactDOM.render(
  // <BrowserRouter basename="/project-color">
  // <BrowserRouter basename="/amg-cadp-production">
  <BrowserRouter>
    <Provider store={configureStore(services)}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorkerRegistration.register({
  onUpdate: (registration) => {
    const waitingServiceWorker = registration.waiting;

    if (waitingServiceWorker) {
      waitingServiceWorker.addEventListener("statechange", (event) => {
        if (event.target.state === "activated") {
          window.location.reload();
        }
      });
      waitingServiceWorker.postMessage({ type: "SKIP_WAITING" });
    }
  },
});

reportWebVitals();
