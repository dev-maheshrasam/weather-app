export default function WeatherCard({ data }) {
  if (!data) return null;

  const {
    name,
    sys: { country },
    main: { temp, feels_like, humidity },
    weather: [{ description, icon }],
    wind: { speed },
  } = data;

  return (
    <div className="weather-card">
      <div className="city">
        {name}, {country}
      </div>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />
      <div className="temp">{Math.round(temp)}°C</div>
      <div className="desc">{description}</div>
      <div className="details">
        <div>
          <span>Feels like</span>
          <strong>{Math.round(feels_like)}°C</strong>
        </div>
        <div>
          <span>Humidity</span>
          <strong>{humidity}%</strong>
        </div>
        <div>
          <span>Wind</span>
          <strong>{speed} m/s</strong>
        </div>
      </div>
    </div>
  );
}