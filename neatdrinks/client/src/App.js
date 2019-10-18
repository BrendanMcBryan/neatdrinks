import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Container} from "@material-ui/core/";

import Landing from "./pages/Landing"

function App() {
  return (
    <Router>
      <Container maxWidth="sm">
      <Route exact path="/" component={Landing} />
      </Container>
    </Router>
  );
}

export default App;
