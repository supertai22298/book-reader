import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CssBaseline } from "@mui/material";

import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RecoilRoot>
      <React.Fragment>
        <CssBaseline />
        <App />
      </React.Fragment>
    </RecoilRoot>
  </>
);
