import React from "react";
// import { Button, Box, TextField } from "@material-ui/core/";
// import Nav from "../../components/Nav";
import Logo from "../../components/Logo";
import LoginForm from "../../components/LoginForm";
import DrinkCardList from "../../components/DrinkCardList";
import NewAccountButton from "../../components/NewAccountButton";
import Footer from "../../components/Footer";


export default function Landing() {
  return (
    <div>
      {/* <Nav /> */}
        <Logo />
        <LoginForm />
        <DrinkCardList />
        <NewAccountButton />
        <Footer />
    </div>
  );
}
