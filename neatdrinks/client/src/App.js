import React from "react";
// import ReactDOM from "react-dom";
import { Button, Box, Container, TextField } from "@material-ui/core/";
import Nav from "./components/Nav";
import LoginForm from "./components/LoginForm";

// import Nav from "./components/Nav";

function App() {
  return (
    <Container maxWidth="sm">
      <Nav></Nav>
{/* 
      <Button variant="contained" color="primary">
        Hello World
      </Button> */}

      <LoginForm />
      {/* <Box color="primary.main">primary.main</Box> */}
    </Container>
  );
}

export default App;
