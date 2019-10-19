import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    width: 500,
    backgroundColor: "inherit",
    textAlign: "center"
  },
  card: {
    maxWidth: 415,
    backgroundColor: "inherit",
    boxShadow: "none",
    height: 300,
    marginLeft: 35
  }
});

export default function Logo() {
  const classes = useStyles();

  const handleClick = () => {
    alert("You clicked the birb.");
  };

  return (
    <div>
        <Card className={classes.card}>
          <CardMedia
            onClick={handleClick}
            component="img"
            className={classes.media}
            image="/images/neat-Logo.png"
            title="neat"
          />
        </Card>
    </div>
  );
}
