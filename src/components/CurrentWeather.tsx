import React, { useEffect, useState } from "react";
import PlaceIcon from "@mui/icons-material/Place";
import { useAppSelector, useAppDispatch } from "../redux/hooks";

export default function CurrentWeather() {
  const { currentWeather, forecast } = useAppSelector((state) => state.appReducer);
  const dispatch = useAppDispatch();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [dayNum, setDayNum] = useState(0);
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    console.log(currentWeather);
    console.log(forecast);

    setInterval(() => {
      const date = new Date();
      setDay(weeks[date.getDay()]);
      setMonth(months[date.getMonth()]);
      setDayNum(date.getDate());
      setTime(date.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true }));
      setDate(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
    }, 1000);
  }, [currentWeather]);

  return (
    <div className="currentWeather">
      <PlaceIcon fontSize="small" />
      <div>{currentWeather?.city}</div>
      <div className="date">
        {day}, {month} {dayNum} {time} {date}
      </div>
      <div className="current">
        <div className="main-temp">
          <img
            src={process.env.PUBLIC_URL + `/icons/${currentWeather?.data.weather[0].icon}.png`}
            alt="Icon"
          />
          <div>
            {Math.round(currentWeather?.data.main.temp)}°<span>C</span>
          </div>
        </div>
        <span className="real-feel">
          {Math.round(currentWeather?.data.main.temp_max)}°/
          {Math.round(currentWeather?.data.main.temp_min)}° | RealFeel{" "}
          {Math.round(currentWeather?.data.main.feels_like)}°
        </span>
        <h4>{currentWeather?.data.weather[0].main}</h4>
      </div>
    </div>
  );
}
