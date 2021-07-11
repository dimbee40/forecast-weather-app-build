
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import axios from "axios";

export default function Forecast(props){

    function handleResponse (response){console.log (response.data);};
    let apiKey= "3ec119a7b4622feedeeba843b106eb0a";
    let longitude= props.coordinates.lon;
    let latitude= props.coordinates.lat;
    let apiURL= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
console.log (props);
    axios.get(apiUrl).then(handleResponse);
    return(<div className="Forecast">Hello there
    <div className="row">
        <div className="col">
        <div className="WeatherForecast-day">Thu</div>
          ICON
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
        <div className="col">
        <div className="WeatherForecast-day">Fri</div>
          ICON
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
        <div className="col">
        <div className="WeatherForecast-day">Sat</div>
          ICON
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
        <div className="col">
        <div className="WeatherForecast-day">Sun</div>
          ICON
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
        <div className="col">
        <div className="WeatherForecast-day">Mon</div>
          ICON
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
    </div>
    
    
    </div>
    )

}