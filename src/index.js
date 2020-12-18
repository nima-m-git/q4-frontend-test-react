import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import { ReportsWidget } from "./components/ReportsWidget/ReportsWidget";
import initializeData from "./initializeData";

const dataFilePath = "./dataset.js";
const reports = initializeData(dataFilePath);

ReactDOM.render(
  <React.StrictMode>
    <main className="layout">
      <div className="layout_inner">
        <header className="layout_header">
          <h1 className="layout_title">Annual reports</h1>
        </header>
        <section className="layout_container">
          <div className="reports">
            {reports.map((report, i) => (
              <ReportsWidget report={report} key={i} />
            ))}
          </div>
        </section>
      </div>
    </main>
  </React.StrictMode>,
  document.getElementById("root")
);
