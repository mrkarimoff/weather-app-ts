import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type InitialState = {
  isOpen: boolean;
  name: string;
};

type UpdateStatePayload = {
  stateName: string;
  value: any;
};

const initialState: InitialState = {
  isOpen: false,
  name: "Mirfayz Karimov",
};

export const appSlice = createSlice({
  name: "appReducer",
  initialState,
  reducers: {
    updateState: (state: any, action: PayloadAction<UpdateStatePayload>) => {
      state[action.payload.stateName] = action.payload.value;
    },
  },
});

export const { updateState } = appSlice.actions;
export default appSlice.reducer;
