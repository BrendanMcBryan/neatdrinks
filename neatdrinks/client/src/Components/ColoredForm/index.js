import React from "react";
import TextField from "@material-ui/core/TextField";
const inputProps = {
  color: "white"
};


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default function ColorForm() {
  return <TextField id="time" type="time" inputProps={inputProps} />;
}
