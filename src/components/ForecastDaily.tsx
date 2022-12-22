import { useEffect } from "react";
import LineChart from "./LineChart";
import OpacityIcon from "@mui/icons-material/Opacity";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { sortData } from "../redux/appReducer";

export default function ForecastDaily() {
  const {
    forecast,
    day1,
    day2,
    day3,
    day4,
    day5,
    day6,
    iconsDay,
    iconsNight,
    humidities,
    weekDays,
  } = useAppSelector((state) => state.appReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
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
      {forecast !== null && (
        <div className="forecast-container">
          <div className="forecast-info daily">
            <p className="f-title">{weekDays[0].toUpperCase()}</p>
            <div className="icon-cont">
              <img
                className="topIcon"
                src={
                  process.env.PUBLIC_URL +
                  `/icons/${iconsDay[0] ? iconsDay[0][0] ?? "01d" : "01d"}.png`
                }
                alt="forecastIcon"
              />
              <div className="line"></div>
              <img
                className="bottomIcon"
                src={
                  process.env.PUBLIC_URL +
                  `/icons/${iconsNight[0] ? iconsNight[0][0] ?? "01n" : "01n"}.png`
                }
                alt="forecastIcon"
              />
            </div>
            <div className="f-humidity">
              <OpacityIcon sx={{ fontSize: "10px", color: "aqua" }} />
              {Math.round(humidities[0]?.reduce((a, b) => a + b, 0) / humidities[0]?.length)}%
            </div>
          </div>
          <div className="forecast-info daily">
            <p className="f-title">{weekDays[1]?.toUpperCase()}</p>
            <div className="icon-cont">
              <img
                className="topIcon"
                src={
                  process.env.PUBLIC_URL +
                  `/icons/${iconsDay[1] ? iconsDay[1][0] ?? "01d" : "01d"}.png`
                }
                alt="forecastIcon"
              />
              <div className="line"></div>
              <img
                className="bottomIcon"
                src={
                  process.env.PUBLIC_URL +
                  `/icons/${iconsNight[1] ? iconsNight[1][0] ?? "01n" : "01n"}.png`
                }
                alt="forecastIcon"
              />
            </div>
            <div className="f-humidity">
              <OpacityIcon sx={{ fontSize: "10px", color: "aqua" }} />
              {Math.round(humidities[1]?.reduce((a, b) => a + b, 0) / humidities[1]?.length)}%
            </div>
          </div>
          <div className="forecast-info daily">
            <p className="f-title">{weekDays[2]?.toUpperCase()}</p>
            <div className="icon-cont">
              <img
                className="topIcon"
                src={
                  process.env.PUBLIC_URL +
                  `/icons/${iconsDay[2] ? iconsDay[2][0] ?? "01d" : "01d"}.png`
                }
                alt="forecastIcon"
              />
              <div className="line"></div>
              <img
                className="bottomIcon"
                src={
                  process.env.PUBLIC_URL +
                  `/icons/${iconsNight[2] ? iconsNight[2][0] ?? "01n" : "01n"}.png`
                }
                alt="forecastIcon"
              />
            </div>
            <div className="f-humidity">
              <OpacityIcon sx={{ fontSize: "10px", color: "aqua" }} />
              {Math.round(humidities[2]?.reduce((a, b) => a + b, 0) / humidities[2]?.length)}%
            </div>
          </div>
          <div className="forecast-info daily">
            <p className="f-title">{weekDays[3]?.toUpperCase()}</p>
            <div className="icon-cont">
              <img
                className="topIcon"
                src={
                  process.env.PUBLIC_URL +
                  `/icons/${iconsDay[3] ? iconsDay[3][0] ?? "01d" : "01d"}.png`
                }
                alt="forecastIcon"
              />
              <div className="line"></div>
              <img
                className="bottomIcon"
                src={
                  process.env.PUBLIC_URL +
                  `/icons/${iconsNight[3] ? iconsNight[3][0] ?? "01n" : "01n"}.png`
                }
                alt="forecastIcon"
              />
            </div>
            <div className="f-humidity">
              <OpacityIcon sx={{ fontSize: "10px", color: "aqua" }} />
              {Math.round(humidities[3]?.reduce((a, b) => a + b, 0) / humidities[3]?.length)}%
            </div>
          </div>
          <div className="forecast-info daily">
            <p className="f-title">{weekDays[4]?.toUpperCase()}</p>
            <div className="icon-cont">
              <img
                className="topIcon"
                src={
                  process.env.PUBLIC_URL +
                  `/icons/${iconsDay[4] ? iconsDay[4][0] ?? "01d" : "01d"}.png`
                }
                alt="forecastIcon"
              />
              <div className="line"></div>
              <img
                className="bottomIcon"
                src={
                  process.env.PUBLIC_URL +
                  `/icons/${iconsNight[4] ? iconsNight[4][0] ?? "01n" : "01n"}.png`
                }
                alt="forecastIcon"
              />
            </div>
            <div className="f-humidity">
              <OpacityIcon sx={{ fontSize: "10px", color: "aqua" }} />
              {Math.round(humidities[4]?.reduce((a, b) => a + b, 0) / humidities[4]?.length)}%
            </div>
          </div>
          <div className="forecast-info daily last">
            <p className="f-title">{weekDays[5]?.toUpperCase()}</p>
            <div className="icon-cont">
              <img
                className="topIcon"
                src={
                  process.env.PUBLIC_URL +
                  `/icons/${iconsDay[5] ? iconsDay[5][0] ?? "01d" : "01d"}.png`
                }
                alt="forecastIcon"
              />
              <div className="line"></div>
              <img
                className="bottomIcon"
                src={
                  process.env.PUBLIC_URL +
                  `/icons/${iconsNight[5] ? iconsNight[5][0] ?? "01n" : "01n"}.png`
                }
                alt="forecastIcon"
              />
            </div>
            <div className="f-humidity">
              <OpacityIcon sx={{ fontSize: "10px", color: "aqua" }} />
              {Math.round(humidities[5]?.reduce((a, b) => a + b, 0) / humidities[5]?.length)}%
            </div>
          </div>
          <div className="chart-container-daily">
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
          <div className="chart-container-daily bottom">
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
      )}
    </div>
  );
}
