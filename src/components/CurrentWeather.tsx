import React, { useEffect, useState } from "react";
import PlaceIcon from "@mui/icons-material/Place";
import img from "./sun.png";

export default function CurrentWeather() {
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

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setDay(weeks[date.getDay()]);
      setMonth(months[date.getMonth()]);
      setDayNum(date.getDate());
      setTime(date.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true }));
    }, 1000);
  }, []);

  return (
    <div className="currentWeather">
      <PlaceIcon fontSize="small" />
      <div>Bukhara,UZ</div>
      <div className="date">
        {day}, {month} {dayNum} {time}
      </div>
      <div className="current">
        <div className="main-temp">
          <img src={process.env.PUBLIC_URL + "/img/sun.png"} alt="Icon" />
          <div>
            7°<span>C</span>
          </div>
        </div>
        <span className="real-feel">15°/1° | RealFeel 8°</span>
        <h4>Clear</h4>
      </div>
      <hr />
    </div>
  );
}
