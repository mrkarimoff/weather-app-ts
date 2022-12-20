import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  InitialState,
  UpdateStatePayload,
  City,
  GetForecastPayload,
  GetForecastSuccessPayload,
  SortData,
} from "./models";

const initialState: InitialState = {
  isOpen: false,
  citiesData: [],
  currentWeather: null,
  forecast: null,
  interval: null,

  months: [
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
  ],
  weeks: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  day: "",
  month: "",
  time: "",
  dayNum: 0,
  day1: [0],
  day2: [0],
  day3: [0],
  day4: [0],
  day5: [0],
  day6: [0],
  iconsDay: [[""]],
  iconsNight: [[""]],
  humidities: [[0]],
  weekDays: [""],
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

    sortData: (state, action: PayloadAction<SortData>) => {
      const { currentDay, currentMonth, currentYear } = action.payload;
      let a: string[] = [];
      let iconsDay: string[][] = [[], [], [], [], [], []];
      let iconsNight: string[][] = [[], [], [], [], [], []];
      let humidities: number[][] = [[], [], [], [], [], []];
      let weekDays: string[] = [];

      for (let i = 0; i < 6; i++) {
        let date = new Date();
        date.setDate(date.getDate() + i);
        let d = date
          .toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })
          .replace("/", "-")
          .replace("/", "-");

        a.push(d.slice(6, 10) + "-" + d.slice(0, 2) + "-" + d.slice(3, 5));
      }

      for (let i = 0; i < a.length; i++) {
        state.forecast?.data.list.map((item: any) => {
          if (a[i] === item.dt_txt.slice(0, 10)) {
            if (item.weather[0].icon.slice(2) === "d") {
              iconsDay[i].push(item.weather[0].icon);
            }
          }
        });
      }

      for (let i = 0; i < a.length; i++) {
        state.forecast?.data.list.map((item: any) => {
          if (a[i] === item.dt_txt.slice(0, 10)) {
            if (item.weather[0].icon.slice(2) === "n") {
              iconsNight[i].push(item.weather[0].icon);
            }
          }
        });
      }

      for (let i = 0; i < a.length; i++) {
        state.forecast?.data.list.map((item: any) => {
          if (a[i] === item.dt_txt.slice(0, 10)) {
            humidities[i].push(item.main.humidity);
          }
        });
      }

      for (let i = 0; i < a.length; i++) {
        const date = new Date(a[i]);
        if (`${currentYear}-${currentMonth}-${currentDay}` === a[i]) {
          weekDays.push("Today");
        } else {
          weekDays.push(
            date.toLocaleDateString("en-US", {
              weekday: "short",
            })
          );
        }
      }

      state.iconsDay = iconsDay;
      state.iconsNight = iconsNight;
      state.humidities = humidities;
      state.weekDays = weekDays;

      state.day1 = state.forecast?.data.list
        .map((item: any) => {
          if (`${currentYear}-${currentMonth}-${currentDay}` === item.dt_txt.slice(0, 10)) {
            return item.main.temp;
          }
          return null;
        })
        .filter((item: any) => item !== null);

      state.day2 = state.forecast?.data.list
        .map((item: any) => {
          const listYear = Number(item.dt_txt.slice(0, 4));
          const listMonth = Number(item.dt_txt.slice(5, 7));
          const listDay = Number(item.dt_txt.slice(8, 10));
          if (currentDay + 1 === listDay) {
            return item.main.temp;
          } else if (listDay - 1 === 0 && (currentYear < listYear || currentMonth < listMonth)) {
            return item.main.temp;
          }
          return null;
        })
        .filter((item: any) => item !== null);

      state.day3 = state.forecast?.data.list
        .map((item: any) => {
          const listYear = Number(item.dt_txt.slice(0, 4));
          const listMonth = Number(item.dt_txt.slice(5, 7));
          const listDay = Number(item.dt_txt.slice(8, 10));
          if (currentDay + 2 === listDay) {
            return item.main.temp;
          } else if (listDay - 2 === 0 && (currentYear < listYear || currentMonth < listMonth)) {
            return item.main.temp;
          }
          return null;
        })
        .filter((item: any) => item !== null);

      state.day4 = state.forecast?.data.list
        .map((item: any) => {
          const listYear = Number(item.dt_txt.slice(0, 4));
          const listMonth = Number(item.dt_txt.slice(5, 7));
          const listDay = Number(item.dt_txt.slice(8, 10));
          if (currentDay + 3 === listDay) {
            return item.main.temp;
          } else if (listDay - 3 === 0 && (currentYear < listYear || currentMonth < listMonth)) {
            return item.main.temp;
          }
          return null;
        })
        .filter((item: any) => item !== null);

      state.day5 = state.forecast?.data.list
        .map((item: any) => {
          const listYear = Number(item.dt_txt.slice(0, 4));
          const listMonth = Number(item.dt_txt.slice(5, 7));
          const listDay = Number(item.dt_txt.slice(8, 10));
          if (currentDay + 4 === listDay) {
            return item.main.temp;
          } else if (listDay - 4 === 0 && (currentYear < listYear || currentMonth < listMonth)) {
            return item.main.temp;
          }
          return null;
        })
        .filter((item: any) => item !== null);

      state.day6 = state.forecast?.data.list
        .map((item: any) => {
          const listYear = Number(item.dt_txt.slice(0, 4));
          const listMonth = Number(item.dt_txt.slice(5, 7));
          const listDay = Number(item.dt_txt.slice(8, 10));
          if (currentDay + 5 === listDay) {
            return item.main.temp;
          } else if (listDay - 5 === 0 && (currentYear < listYear || currentMonth < listMonth)) {
            return item.main.temp;
          }
          return null;
        })
        .filter((item: any) => item !== null);
    },
  },
});

export const {
  updateState,
  getCities,
  getCitiesSuccess,
  getWeatherForecast,
  getWeatherForecastSuccess,
  sortData,
} = appSlice.actions;
export default appSlice.reducer;
