import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { getCities, getCitiesSuccess } from "./appReducer";
import { AxiosResponse } from "axios";
import { apiCall } from "./apiCall";
import { City } from "./models";

function* workGetCities(action: PayloadAction<string>) {
  try {
    const response: AxiosResponse = yield call(apiCall, action.payload);
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

function* appSaga() {
  yield takeLatest(getCities.type, workGetCities);
}

export default appSaga;
