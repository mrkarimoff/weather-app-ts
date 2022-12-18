import React from "react";
import LineChart from "./LineChart";
import OpacityIcon from "@mui/icons-material/Opacity";

export default function ForecastDaily() {
  return (
    <div className="forecast">
      <span className="heading">DAILY</span>
      <div className="forecast-container">
        <div className="forecast-info daily">
          <p className="f-title">TODAY</p>
          <img width={40} src={process.env.PUBLIC_URL + "/img/sun.png"} alt="forecastIcon" />
          <div className="f-humidity">
            <OpacityIcon sx={{ fontSize: "10px", color: "aqua" }} /> 0%
          </div>
        </div>
        <div className="forecast-info daily">
          <p className="f-title">SUN</p>
          <img width={40} src={process.env.PUBLIC_URL + "/img/sun.png"} alt="forecastIcon" />
          <div className="f-humidity">
            <OpacityIcon sx={{ fontSize: "10px", color: "aqua" }} /> 1%
          </div>
        </div>
        <div className="forecast-info daily">
          <p className="f-title">MON</p>
          <img width={40} src={process.env.PUBLIC_URL + "/img/sun.png"} alt="forecastIcon" />
          <div className="f-humidity">
            <OpacityIcon sx={{ fontSize: "10px", color: "aqua" }} /> 0%
          </div>
        </div>
        <div className="forecast-info daily">
          <p className="f-title">TUE</p>
          <img width={40} src={process.env.PUBLIC_URL + "/img/sun.png"} alt="forecastIcon" />
          <div className="f-humidity">
            <OpacityIcon sx={{ fontSize: "10px", color: "aqua" }} /> 1%
          </div>
        </div>
        <div className="forecast-info daily">
          <p className="f-title">WED</p>
          <img width={40} src={process.env.PUBLIC_URL + "/img/sun.png"} alt="forecastIcon" />
          <div className="f-humidity">
            <OpacityIcon sx={{ fontSize: "10px", color: "aqua" }} /> 60%
          </div>
        </div>
        <div className="forecast-info daily last">
          <p className="f-title">THU</p>
          <img width={40} src={process.env.PUBLIC_URL + "/img/sun.png"} alt="forecastIcon" />
          <div className="f-humidity">
            <OpacityIcon sx={{ fontSize: "10px", color: "aqua" }} /> 0%
          </div>
        </div>
        <div className="chart-container">
          <LineChart
            data={[
              { y: 8, label: "8°", symbol: "diamond" },
              { y: 11, label: "11°", symbol: "diamond" },
              { y: 10, label: "10°", symbol: "diamond" },
              { y: 4, label: "4°", symbol: "diamond" },
              { y: 3, label: "3°", symbol: "diamond" },
              { y: 2, label: "2°", symbol: "diamond" },
            ]}
          />
        </div>
        <div className="chart-container daily">
          <LineChart
            data={[
              { y: -1, label: "-1°", symbol: "diamond" },
              { y: -1, label: "-1°", symbol: "diamond" },
              { y: -2, label: "-2°", symbol: "diamond" },
              { y: -3, label: "-3°", symbol: "diamond" },
              { y: -4, label: "-4°", symbol: "diamond" },
              { y: -4, label: "-4°", symbol: "diamond" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
