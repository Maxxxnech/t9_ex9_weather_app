import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";

import Weather from "./components/Weather";

const API_KEY = "e68c55bc0be4635dc7475014a6ac872b";

const gettingWeather = async (cityName) => {
  const api_url = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
  );
  const data = await api_url.json();
  return data;
};

function App() {
  const [cityWeather, setCityWeather] = useState(null);

  const weatherHandler = async (getWeather, city) => {
    const weather = await getWeather(city);
    console.log(cityWeather);
    setCityWeather(weather);
  };

  return (
    <div className="App">
      <h1>t9, задание 9: Форма + weather api</h1>
      <Form weatherMethod={weatherHandler.bind(null, gettingWeather)} />
      <div>
        <Weather weather={cityWeather} />
      </div>
    </div>
  );
}

export default App;
