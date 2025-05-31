import React from "react";
import "./WeatherCard.css";

function WeatherCard({ data }) {
  const { location, current } = data;
  return (
    <div className="weather-card">
      <h2>{location.name}, {location.country}</h2>
      <p>Temperature: {current.temp_c}°C</p>
      <p>Humidity: {current.humidity}%</p>
      <p>Condition: {current.condition.text}</p>
      <p>Wind Speed: {current.wind_kph} kph</p>
    </div>
  );
}

export default WeatherCard;
