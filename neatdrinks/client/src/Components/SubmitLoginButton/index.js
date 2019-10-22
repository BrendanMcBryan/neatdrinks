import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none',
  },
}));
  
  export default function SubmitLoginButton() {
    const classes = useStyles();
  
    // const handleClick = () => {
    //   alert("this should submit the login info");
    // };
  
    return (
      <div>
        <Button className={classes.button}
        // onClick={handleClick}
        fullWidth="true"
        href="/search"
        color="primary"
        type="submit"
        >submit</Button>
      </div>
    );
  }
  