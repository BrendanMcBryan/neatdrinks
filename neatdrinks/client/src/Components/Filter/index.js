import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginLeft: 200,
    marginBottom: 30
  }
}));

export default function Filter() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    checked: false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <FormGroup row className={classes.root}>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checked}
            onChange={handleChange("checked")}
            value="No ABV"
            color="primary"
          />
        }
        label="No ABV"
      />
    </FormGroup>
  );
}
