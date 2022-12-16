export type InitialState = {
  isOpen: boolean;
  citiesData: City[];
};

export type UpdateStatePayload = {
  stateName: string;
  value: any;
};

export type City = {
  label: string;
  value: string;
};
