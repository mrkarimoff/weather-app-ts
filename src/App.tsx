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
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
          },
          "&:focus-within .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
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
