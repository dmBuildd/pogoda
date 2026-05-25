import { useState } from "react";
import axios from "axios";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const apiKey = "58a39f5840aaad2ded2614e690904774";

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pl`
      );
      setWeather(response.data);
    } catch (error) {
      alert("Nie znaleziono miasta!");
    }
  };

  const styles = {
    backgroundColor: darkMode ? "#121212" : "#f5f5f5",
    color: darkMode ? "#ffffff" : "#000000",
    height: "100vh",
    textAlign: "center",
    paddingTop: "50px",
    transition: "0.3s"
  };

  return (
    <div style={styles}>
      <h1>🌦️ Pogoda</h1>

      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Tryb dzienny" : "🌙 Tryb nocny"}
      </button>

      <br /><br />

      <input
        type="text"
        placeholder="Wpisz miasto"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>Sprawdź</button>

      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>🌡️ {weather.main.temp} °C</p>
          <p>☁️ {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;