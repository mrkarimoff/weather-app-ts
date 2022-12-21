import LineChart from "./LineChart";
import OpacityIcon from "@mui/icons-material/Opacity";
import { useAppSelector } from "../redux/hooks";

export default function ForecastHourly() {
  const { forecast } = useAppSelector((state) => state.appReducer);

  return (
    <div className="forecast">
      <span className="heading">HOURLY</span>
      {forecast !== null && (
        <div className="forecast-container">
          {forecast?.data.list.slice(1, 7).map((item: any, index: number) => (
            <div key={index} className={`forecast-info ${index === 5 && " last"}`}>
              <p className="f-title">{item.dt_txt.slice(-8, -3)}</p>
              <img
                width={40}
                src={process.env.PUBLIC_URL + `/icons/${item.weather[0].icon}.png`}
                alt="forecastIcon"
              />
              <div className="f-humidity">
                <OpacityIcon sx={{ fontSize: "10px", color: "aqua" }} /> {item.main.humidity}%
              </div>
            </div>
          ))}

          <div className="chart-container">
            <LineChart
              data={forecast?.data.list.slice(1, 7).map((item: any) => ({
                y: Math.round(item.main.temp),
                label: `${Math.round(item.main.temp)}°`,
                symbol: "diamond",
              }))}
            />
          </div>
        </div>
      )}
    </div>
  );
}
