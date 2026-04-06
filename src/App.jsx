import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = import.meta.env.VITE_WEATHER_BASE_URL;

export default function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {
    setLoading(true);
    setError("");
    setWeather(null);
    try {
      const { data } = await axios.get(`${BASE_URL}/weather`, {
        params: { q: city, appid: API_KEY, units: "metric" },
      });
      setWeather(data);
    } catch (err) {
      setError(
        err.response?.status === 404
          ? "City not found. Try again."
          : "Something went wrong. Please try later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <SearchBar onSearch={fetchWeather} loading={loading} />
      <ErrorMessage message={error} />
      <WeatherCard data={weather} />
    </div>
  );
}