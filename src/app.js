import React from "react";
import Weather from "./weather";

export default function App() {
  return (
    <div className="container">
      <Weather defaultCity="Abuja" />
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
