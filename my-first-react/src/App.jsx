import React, { useState } from "react"
import "./styles/App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (city === "") {
      alert("Please enter a city name");
      return;
    }

    try {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.error) {
        setError("City not found");
        setWeather(null);
      } else {
        setWeather(data);
        setError("");
      }
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <div className="app">
      <h1>🌦️ Weather App</h1>

      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onFocus={() => {
          setWeather(null);
          setError("");
  }}
      />

      <button onClick={getWeather}>Get Weather</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div className="result">
          <h2>{weather.location.name}</h2>
          <p>Temperature: {weather.current.temp_c} °C</p>
          <p>Condition: {weather.current.condition.text}</p>
        </div>
      )}
    </div>
  );
}

export default App;






