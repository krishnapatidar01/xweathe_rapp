import React from "react";
import "./WeatherCard.css"; // optional for styling

function WeatherCard({ data }) {
  return (
    <>
      <div className="weather-card">
        <h3>Temperature</h3>
        <p>{data.current.temp_c} °C</p>
      </div>
      <div className="weather-card">
        <h3>Humidity</h3>
        <p>{data.current.humidity} %</p>
      </div>
      <div className="weather-card">
        <h3>Condition</h3>
        <p>{data.current.condition.text}</p>
      </div>
      <div className="weather-card">
        <h3>Wind Speed</h3>
        <p>{data.current.wind_kph} kph</p>
      </div>
    </>
  );
}

export default WeatherCard;
