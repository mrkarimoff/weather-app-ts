import { createTheme, Grid, Typography } from "@mui/material";
import React from "react";
import "./App.css";
import SearchInput from "./components/SearchInput";
import { ThemeProvider } from "@emotion/react";

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
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Grid container justifyContent={"center"}>
          <Grid className="searchInp" item>
            <SearchInput />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
