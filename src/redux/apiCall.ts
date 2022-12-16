import axios from "axios";
const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const apiCall = (city: string) =>
  axios.get(`${GEO_API_URL}/cities?minPopulation=1000&namePrefix=${city}`, {
    headers: {
      "X-RapidAPI-Key": "3d98f45156mshb5abef7de1a7fdep10b030jsnda204fb9751f",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  });
