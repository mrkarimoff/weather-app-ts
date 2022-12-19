import React, { useEffect } from "react";
import LineChart from "./LineChart";
import OpacityIcon from "@mui/icons-material/Opacity";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { sortData } from "../redux/appReducer";

export default function ForecastDaily() {
  const { forecast, day1, day2, day3, day4, day5, day6 } = useAppSelector(
    (state) => state.appReducer
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(forecast);
    const date = new Date();

    if (forecast) {
      dispatch(
        sortData({
          currentMonth: Number(date.getMonth()) + 1,
          currentDay: Number(date.getDate()),
          currentYear: Number(date.getFullYear()),
        })
      );
    }
  }, [forecast]);

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
              {
                y: Math.round(Math.max(...day1)),
                label: `${Math.round(Math.max(...day1))}°`,
                symbol: "diamond",
              },
              {
                y: Math.round(Math.max(...day2)),
                label: `${Math.round(Math.max(...day2))}°`,
                symbol: "diamond",
              },
              {
                y: Math.round(Math.max(...day3)),
                label: `${Math.round(Math.max(...day3))}°`,
                symbol: "diamond",
              },
              {
                y: Math.round(Math.max(...day4)),
                label: `${Math.round(Math.max(...day4))}°`,
                symbol: "diamond",
              },
              {
                y: Math.round(Math.max(...day5)),
                label: `${Math.round(Math.max(...day5))}°`,
                symbol: "diamond",
              },
              {
                y: Math.round(Math.max(...day6)),
                label: `${Math.round(Math.max(...day6))}°`,
                symbol: "diamond",
              },
            ]}
          />
        </div>
        <div className="chart-container daily">
          <LineChart
            data={[
              {
                y: Math.round(Math.min(...day1)),
                label: `${Math.round(Math.min(...day1))}°`,
                symbol: "diamond",
              },
              {
                y: Math.round(Math.min(...day2)),
                label: `${Math.round(Math.min(...day2))}°`,
                symbol: "diamond",
              },
              {
                y: Math.round(Math.min(...day3)),
                label: `${Math.round(Math.min(...day3))}°`,
                symbol: "diamond",
              },
              {
                y: Math.round(Math.min(...day4)),
                label: `${Math.round(Math.min(...day4))}°`,
                symbol: "diamond",
              },
              {
                y: Math.round(Math.min(...day5)),
                label: `${Math.round(Math.min(...day5))}°`,
                symbol: "diamond",
              },
              {
                y: Math.round(Math.min(...day6)),
                label: `${Math.round(Math.min(...day6))}°`,
                symbol: "diamond",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
