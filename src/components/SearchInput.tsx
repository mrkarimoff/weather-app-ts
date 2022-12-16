import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import InputAdornment from "@mui/material/InputAdornment";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { updateState, getCities } from "../redux/appReducer";
import { City } from "../redux/models";

export default function SearchInput() {
  const { isOpen, citiesData } = useAppSelector((state) => state.appReducer);
  const dispatch = useAppDispatch();

  // Debounce function is used to wait for the user input
  const debounce = (fn: Function, ms = 300) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function (this: any, ...args: any[]) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
  };

  const handleInputChange = debounce((a: string) => implementChange(a), 2000);

  function implementChange(inpVal: string) {
    let trimmedValue = inpVal.trim();
    if (trimmedValue !== "") {
      console.log(trimmedValue);
      dispatch(getCities(trimmedValue));
    }
  }

  const handleOpen = () => {
    dispatch(updateState({ stateName: "isOpen", value: true }));
  };
  const handleClose = () => {
    dispatch(updateState({ stateName: "isOpen", value: false }));
  };

  const handleChange = (value: string | City | null) => {};

  return (
    <Autocomplete
      fullWidth
      size="small"
      sx={{ marginBlock: "15px" }}
      forcePopupIcon
      onOpen={handleOpen}
      onClose={handleClose}
      freeSolo
      disableClearable={false}
      onChange={(event, value) => handleChange(value)}
      clearIcon={<ClearIcon fontSize="small" sx={{ color: "#fff" }} />}
      options={citiesData}
      popupIcon={<ArrowDropDownIcon sx={{ color: "#fff" }} />}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search for city"
          onChange={(e) => handleInputChange(e.target.value)}
          InputProps={{
            ...params.InputProps,
            startAdornment: isOpen && (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#fff" }} />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
}
