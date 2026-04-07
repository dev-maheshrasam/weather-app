import { useState } from "react";

function App() {
  const [data, setData] = useState(null);

  const fetchWeather = async () => {
    try {
      const res = await fetch(
        "https://83fqk58o4m.execute-api.ap-south-1.amazonaws.com/weather?city=Mumbai"
      );
      const result = await res.json();
      setData(result);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Weather App 🌦️</h1>
      <button onClick={fetchWeather}>Get Weather</button>

      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default App;