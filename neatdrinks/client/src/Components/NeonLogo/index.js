import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    minWidth: 500,
    backgroundColor: 'inherit',
    boxShadow: "none",
    marginBottom: 40
  },
}));

export default function NeonLogo() {
  const classes = useStyles();

  const handleClick = () => {
    alert("You clicked the text logo.");
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardMedia
          onClick={handleClick}
          component="img"
          className={classes.media}
          image="/images/neat-Logo-text.png"
          title="neat"
        />
      </Card>
    </div>
  );
}
