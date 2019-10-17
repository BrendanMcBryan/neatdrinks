import React from "react";
// import ReactDOM from "react-dom";
import { Button, Box, Container, TextField } from "@material-ui/core/";
import Nav from "./components/Nav";

import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";


// import Nav from "./components/Nav";

function App() {
  return (
    <Container maxWidth="sm">

      <Nav />

      <Button variant="contained" color="primary">
        Hello World
      </Button> 

      <Box color="primary.main">primary.main</Box>
      <Footer />

      <LoginForm />
      {/* <Box color="primary.main">primary.main</Box> */}

    </Container>
  );
}

export default App;
