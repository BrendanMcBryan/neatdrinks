import React from "react";
// import { Button, Box, TextField } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

// import Nav from "../../components/Nav";
import LogoText from "../../components/LogoText";
import RecipeForm from "../../components/RecipeForm";
import RecipeFormDetail from "../../components/RecipeFormDetail";
import Footer from "../../components/Footer";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import DrinkCardList from "../../components/DrinkCardList";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: 3
  }
}));
export default function User() {
  const classes = useStyles();
  return (
    <div>
      <LogoText />

      <Paper className={classes.root}>
        <Typography variant="h5" component="h1" color="primary">
          Tom Cruise
        </Typography>
        <Typography variant="h7" component="h5" color="secondary">
          …enjoys getting caught in the rain
        </Typography>
      </Paper>
      <Paper className={classes.root}>
        Your rated Drinks are below
      </Paper>
      <Paper className={classes.root}>
        <DrinkCardList/>
      </Paper>
      <Footer />
    </div>
  );
}
