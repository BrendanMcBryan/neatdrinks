import React from "react";
// import ReactDOM from "react-dom";
import { Button, Box, Container, TextField } from "@material-ui/core/";
import Nav from "./components/Nav";



// import Nav from "./components/Nav";

function App() {
  return (
    <Container maxWidth="sm">
      <Nav></Nav>

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
    </Container>
  );
}

export default App;
