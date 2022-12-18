import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  InitialState,
  UpdateStatePayload,
  City,
  GetForecastPayload,
  GetForecastSuccessPayload,
} from "./models";

const initialState: InitialState = {
  isOpen: false,
  citiesData: [],
  currentWeather: null,
  forecast: null,
};

export const appSlice = createSlice({
  name: "appReducer",
  initialState,
  reducers: {
    updateState: (state: any, action: PayloadAction<UpdateStatePayload>) => {
      state[action.payload.stateName] = action.payload.value;
    },
    getCities: (state, action: PayloadAction<string>) => {},
    getCitiesSuccess: (state: any, action: PayloadAction<City[]>) => {
      state.citiesData = action.payload;
    },
    getWeatherForecast: (state, action: PayloadAction<GetForecastPayload>) => {},
    getWeatherForecastSuccess: (state, action: PayloadAction<GetForecastSuccessPayload[]>) => {
      state.currentWeather = action.payload[0];
      state.forecast = action.payload[1];
    },
  },
});

export const {
  updateState,
  getCities,
  getCitiesSuccess,
  getWeatherForecast,
  getWeatherForecastSuccess,
} = appSlice.actions;
export default appSlice.reducer;
