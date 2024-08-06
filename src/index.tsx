import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../src/App.css"; // 폰트 CSS 파일을 임포트합니다.
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.Fragment>
    <Router>
      <App />
    </Router>
  </React.Fragment>
);
