import React from "react";
// import { Button, Box, TextField } from "@material-ui/core/";
import Nav from "../../components/Nav";
import LoginForm from "../../components/LoginForm";
import Footer from "../../components/Footer";
import DrinkCard from "../../components/DrinkCard";


function Landing() {
  return (
    <div>
      <Nav />
      <LoginForm />
      <DrinkCard />
      <Footer />
    </div>
  );
}

export default Landing;
