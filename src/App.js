import React, { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    setWeather(null);
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=76f50a8fc19846dc902151014253105&q=${city}`
      );
      const data = await res.json();

      if (data && data.location) {
        setWeather(data);
      } else {
        alert("Failed to fetch weather data");
      }
    } catch (err) {
      alert("Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>XWeatherApp</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button aria-label="Unzoom image" data-rmiz-btn-close="true" onClick={fetchWeather}>Search</button>
      </div>
      {loading && <p>Loading data...</p> }
      <div className="weather-cards">
        {weather && <WeatherCard data={weather} />}
      </div>
    </div>
  );
}

export default App;
