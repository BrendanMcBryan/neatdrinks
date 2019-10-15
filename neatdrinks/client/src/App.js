import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import Nav from "./components/Nav";

// import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav></Nav>
      Hello World
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
}

export default App;
