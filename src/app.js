import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="container">
      <Weather defaultCity="New York" />
      <a
        href="https://github.com/promiseowa/weather-react"
        target="_blank"
        rel="noreferrer"
      >
        Open Source Code
      </a>{" "}
      <span class="coder">by Promise Owa</span>
    </div>
  );
}
