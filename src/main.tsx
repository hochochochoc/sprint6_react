import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { RecordsProvider } from "./RecordsContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecordsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecordsProvider>
  </React.StrictMode>
);
