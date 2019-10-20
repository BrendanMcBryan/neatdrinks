import React from "react";
// import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "@material-ui/core/";


import Landing from "./pages/Landing";
import Search from "./pages/Search";
import Recipe from "./pages/Recipe"



function App() {
  return (
    <Router>
      <Container maxWidth="sm">
        <Route exact path="/" component={Landing} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/recipe" component={Recipe} />
      </Container>
    </Router>
  );
}

export default App;
