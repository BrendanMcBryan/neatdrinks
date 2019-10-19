import React from "react";
import TextField from "@material-ui/core/TextField";
const inputProps = {
  color: "white"
};

export default function ColorForm() {
  return <TextField id="time" type="time" inputProps={inputProps} />;
}
