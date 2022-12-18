import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  getCities,
  getCitiesSuccess,
  getWeatherForecast,
  getWeatherForecastSuccess,
} from "./appReducer";
import { AxiosResponse } from "axios";
import { callCities, callForecast } from "./apiCall";
import { City, GetForecastPayload } from "./models";

function* workGetCities(action: PayloadAction<string>) {
  try {
    const response: AxiosResponse = yield call(callCities, action.payload);
    const citiesData = response.data.data.map(
      (city: any): City => ({
        value: `${city.latitude} ${city.longitude}`,
        label: `${city.name} ${city.countryCode}`,
      })
    );

    yield put(getCitiesSuccess(citiesData));
  } catch (error) {
    console.log(error);
  }
}

function* workGetForecast(action: PayloadAction<GetForecastPayload>) {
  try {
    const responses: AxiosResponse[] = yield call(callForecast, action.payload);
    yield put(
      getWeatherForecastSuccess([
        { city: action.payload.city, data: responses[0].data },
        { city: action.payload.city, data: responses[1].data },
      ])
    );
  } catch (error) {
    console.log(error);
  }
}

function* appSaga() {
  yield takeLatest(getCities.type, workGetCities);
  yield takeLatest(getWeatherForecast.type, workGetForecast);
}

export default appSaga;
