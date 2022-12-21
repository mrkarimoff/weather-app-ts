export type InitialState = {
  isOpen: boolean;
  citiesData: City[];
  currentWeather: null | GetForecastSuccessPayload;
  forecast: null | GetForecastSuccessPayload;
  months: string[];
  weeks: string[];
  day: string;
  month: string;
  time: string;
  dayNum: number;
  day1: number[];
  day2: number[];
  day3: number[];
  day4: number[];
  day5: number[];
  day6: number[];
  iconsDay: string[][];
  iconsNight: string[][];
  humidities: number[][];
  weekDays: string[];
  interval: any;
};

export type UpdateStatePayload = {
  stateName: string;
  value: any;
};

export type City = {
  label: string;
  value: string;
};

export type ChartData = {
  y: number;
  label: string;
  symbol: string;
};

export type ChartProps = {
  data: ChartData[];
};

export type GetForecastPayload = {
  lat: string;
  lon: string;
  city: string;
};

export type GetForecastSuccessPayload = {
  city: string;
  data: any;
};

export type SortData = {
  currentMonth: number;
  currentDay: number;
  currentYear: number;
};
