import { createTheme, Grid, Typography } from "@mui/material";
import React from "react";
import "./App.css";
import SearchInput from "./components/SearchInput";
import { ThemeProvider } from "@emotion/react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import CurrentWeather from "./components/CurrentWeather";

const theme = createTheme({
  typography: {
    fontFamily: "MartianMono",
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "#fff",
          borderColor: "#fff",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
          },
          "&:focus-within .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
          },
        },
      },
    },
    // the bellow is a classname and '& just means "and(space in css)" '
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "greenyellow",
          "&.Mui-focused": {
            color: "greenyellow",
          },
        },
      },
    },
  },
});

function App() {
  const dispatch = useAppDispatch();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Grid container alignItems="center" flexDirection="column" sx={{ paddingInline: "10px" }}>
          <Grid className="searchInp" item xs={5}>
            <h1 className="title">Weather App</h1>
            <SearchInput />
          </Grid>
          <Grid className="gridItem" item xs={5}>
            <CurrentWeather />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
