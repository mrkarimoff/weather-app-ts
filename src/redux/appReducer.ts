import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState, UpdateStatePayload, City } from "./models";

const initialState: InitialState = {
  isOpen: false,
  citiesData: [],
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
  },
});

export const { updateState, getCities, getCitiesSuccess } = appSlice.actions;
export default appSlice.reducer;
