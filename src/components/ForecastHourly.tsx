import React from "react";
import LineChart from "./LineChart";
import OpacityIcon from "@mui/icons-material/Opacity";

export default function ForecastHourly() {
  return (
    <div className="forecast">
      <span className="heading">HOURLY</span>
      <div className="forecast-container">
        <div className="forecast-info">
          <p className="f-title">09:00</p>
          <img width={40} src={process.env.PUBLIC_URL + "/img/sun.png"} alt="forecastIcon" />
          <div className="f-humidity">
            <OpacityIcon sx={{ fontSize: "10px", color: "aqua" }} /> 0%
          </div>
        </div>
        <div className="forecast-info">
          <p className="f-title">09:00</p>
          <img width={40} src={process.env.PUBLIC_URL + "/img/sun.png"} alt="forecastIcon" />
          <div className="f-humidity">
            <OpacityIcon sx={{ fontSize: "10px", color: "aqua" }} /> 0%
          </div>
        </div>
        <div className="forecast-info">
          <p className="f-title">09:00</p>
          <img width={40} src={process.env.PUBLIC_URL + "/img/sun.png"} alt="forecastIcon" />
          <div className="f-humidity">
            <OpacityIcon sx={{ fontSize: "10px", color: "aqua" }} /> 0%
          </div>
        </div>
        <div className="forecast-info">
          <p className="f-title">09:00</p>
          <img width={40} src={process.env.PUBLIC_URL + "/img/sun.png"} alt="forecastIcon" />
          <div className="f-humidity">
            <OpacityIcon sx={{ fontSize: "10px", color: "aqua" }} /> 0%
          </div>
        </div>
        <div className="forecast-info">
          <p className="f-title">09:00</p>
          <img width={40} src={process.env.PUBLIC_URL + "/img/sun.png"} alt="forecastIcon" />
          <div className="f-humidity">
            <OpacityIcon sx={{ fontSize: "10px", color: "aqua" }} /> 0%
          </div>
        </div>
        <div className="forecast-info last">
          <p className="f-title">09:00</p>
          <img width={40} src={process.env.PUBLIC_URL + "/img/sun.png"} alt="forecastIcon" />
          <div className="f-humidity">
            <OpacityIcon sx={{ fontSize: "10px", color: "aqua" }} /> 0%
          </div>
        </div>
        <div className="chart-container">
          <LineChart
            data={[
              { y: 4, label: "4°", symbol: "diamond" },
              { y: 6, label: "6°", symbol: "diamond" },
              { y: 8, label: "8°", symbol: "diamond" },
              { y: 4, label: "4°", symbol: "diamond" },
              { y: 3, label: "3°", symbol: "diamond" },
              { y: 1, label: "1°", symbol: "diamond" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
