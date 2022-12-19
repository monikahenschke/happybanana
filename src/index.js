import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalFontStyles } from "./styles/fontStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalFontStyles />
    <App />
  </React.StrictMode>
);
