import React, { useEffect, useState } from "react";
import PlaceIcon from "@mui/icons-material/Place";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { updateState } from "../redux/appReducer";

export default function CurrentWeather() {
  const [isScale, setIsScale] = useState(false);
  const { currentWeather, day, dayNum, month, months, time, weeks } = useAppSelector(
    (state) => state.appReducer
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    setInterval(() => {
      setIsScale(true);
      const date = new Date();
      dispatch(updateState({ stateName: "day", value: weeks[date.getDay()] }));
      dispatch(updateState({ stateName: "month", value: months[date.getMonth()] }));
      dispatch(updateState({ stateName: "dayNum", value: date.getDate() }));
      dispatch(
        updateState({
          stateName: "time",
          value: date.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: false,
          }),
        })
      );
    }, 1000);

    setInterval(() => {
      setIsScale(false);
    }, 1500);
  }, []);

  return (
    <div className="currentWeather">
      <PlaceIcon fontSize="small" />
      {currentWeather !== null && (
        <div>
          <div>
            {currentWeather?.data.name},{currentWeather?.data.sys.country}
          </div>
          <div className="date">
            {day}, {month} {dayNum} {time}
          </div>
          <div className="current">
            <div className="main-temp">
              <img
                className={"main-icon " + (isScale ? "scale" : "")}
                src={process.env.PUBLIC_URL + `/icons/${currentWeather?.data.weather[0].icon}.png`}
                alt="Icon"
              />
              <div>
                <span className="main-temp-numb">
                  {Math.round(currentWeather?.data.main.temp)}
                  <sup>°c</sup>
                </span>
              </div>
            </div>
            <span className="real-feel">
              {Math.round(currentWeather?.data.main.temp_max)}°/
              {Math.round(currentWeather?.data.main.temp_min)}° | RealFeel
              {Math.round(currentWeather?.data.main.feels_like)}°
            </span>
            <h4>{currentWeather?.data.weather[0].main}</h4>
          </div>
        </div>
      )}
    </div>
  );
}
