import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import orange from "@material-ui/core/colors/orange";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: green
  },
  typography: {
    useNextVariants: true
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />{" "}
  </MuiThemeProvider>,
  document.querySelector("#root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
