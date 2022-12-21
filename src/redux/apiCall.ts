import axios from "axios";
import { GetForecastPayload } from "./models";
const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
const OPEN_WEATHER_URL = "https://api.openweathermap.org/data/2.5";
const OPEN_WEATHER_API_KEY = "3e7a476d3a90a255967e13fa4053cc3b";

export const callCities = (city: string) =>
  axios.get(`${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${city}`, {
    headers: {
      "X-RapidAPI-Key": "3d98f45156mshb5abef7de1a7fdep10b030jsnda204fb9751f",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  });

export const callForecast = (obj: GetForecastPayload) => {
  const currentWeatherReq = axios.get(
    `${OPEN_WEATHER_URL}/weather?lat=${obj.lat}&lon=${obj.lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
  );
  const forecastReq = axios.get(
    `${OPEN_WEATHER_URL}/forecast?lat=${obj.lat}&lon=${obj.lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
  );

  return axios.all([currentWeatherReq, forecastReq]);
};
