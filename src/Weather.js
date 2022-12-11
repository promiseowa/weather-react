import React from "react";

export default function Weather(props) {
  return (
    <div className="container">
      <form>
        <input
          type="text"
          placeholder="enter city..."
          autofocus="on"
          autocomplete="off"
          id="city-input"
          class="form-control shadow-sm"
        />
        <button type="submit" class="btn btn-outline-danger">
          Search
        </button>
        <button id="button2" type="button" class="btn btn-outline-info">
          Current
        </button>
      </form>
      <p>
        <h2 id="city">
          <strong> </strong>
        </h2>

        <h3> Thursday 16:58 </h3>

        <h5 id="description">cloudy</h5>
        <h4>
          <span id="temp"></span>
          <span class="unit"></span>
        </h4>
      </p>

      <div class="row">
        <div class="col">Fri</div>
        <div class="col">Sat</div>
        <div class="col">Sun</div>
        <div class="col">Mon</div>
        <div class="col">Tue</div>
      </div>

      <div class="row">
        <div class="col">
          <span> ☀️ </span>
        </div>
        <div class="col">
          <span> ⛅ </span>
        </div>
        <div class="col">
          <span> ☁️ </span>
        </div>
        <div class="col">
          <span> ⛈️ </span>
        </div>
        <div class="col">
          <span> ☀️ </span>
        </div>
      </div>

      <div class="row">
        <div class="col">25°</div>
        <div class="col">27°</div>
        <div class="col">25°</div>
        <div class="col">23°</div>
        <div class="col">24°</div>
      </div>
    </div>
  );
}
