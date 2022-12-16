import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appReducer";
import appSaga from "./appSaga";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({ appReducer });

const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
});

saga.run(appSaga);
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch; 
