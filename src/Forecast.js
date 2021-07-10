import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Forecast(){
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