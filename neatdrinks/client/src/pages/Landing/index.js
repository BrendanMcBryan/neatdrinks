import React from "react";
import { Button, Box, TextField } from "@material-ui/core/";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

function Landing() {
  return (
    <div>
      <Nav />

      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <form noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="Name"
          // className={classes.textField}
          // value={values.name}
          // onChange={handleChange("name")}
          margin="normal"
        />
      </form>

      <Box color="primary.main">primary.main</Box>
      <Footer />
    </div>
  );
}

export default Landing;
