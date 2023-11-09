import React from "react";
import ReactDOM from "react-dom/client";
import "./custom.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "react-bootstrap/ThemeProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="xxs"
      >
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
