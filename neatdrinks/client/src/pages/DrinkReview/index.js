import React from "react";
// import { Button, Box, TextField } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

// import Nav from "../../components/Nav";
import LogoText from "../../components/LogoText";
import NewDrinkButton from "../../components/NewDrinkButton";
import RatingSlider from "../../components/RatingSlider";
import Footer from "../../components/Footer";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import DrinkReviewList from "../../components/DrinkReviewList";
import { typography } from "@material-ui/system";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: 3
  }
}));
export default function DrinkReview() {
  const classes = useStyles();
  return (
    <div>
      <LogoText />

      <Paper className={classes.root}>
        <Typography variant="h5" component="h1" color="error">
          Piñacolada
        </Typography>
        <Typography align="right" variant="h7" component="h5" color="secondary">
          from Seven Seas Bar
        </Typography>
      </Paper>
      <Paper className={classes.root}>
        Cocktail Average
        <Typography align="right" variant="h2" component="h2" color="secondary">
          89.5
        </Typography>
      </Paper>
      <Paper className={classes.root}>
        Your Rating
        <RatingSlider />
      </Paper>
      <Paper className={classes.root}>
        <DrinkReviewList />
      </Paper>
      <Footer />
    </div>
  );
}
