export type InitialState = {
  isOpen: boolean;
  citiesData: City[];
  currentWeather: null | GetForecastSuccessPayload;
  forecast: null | GetForecastSuccessPayload;
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
