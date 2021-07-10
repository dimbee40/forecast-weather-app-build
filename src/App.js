  
import "./App.css";
import WeatherSearch from "./WeatherSearch";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <WeatherSearch />
      <Forecast />
    </div>
  );
}