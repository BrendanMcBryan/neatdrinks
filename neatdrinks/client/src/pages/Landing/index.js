import React from "react";
import Logo from "../../components/Logo";
import LoginForm from "../../components/LoginForm";
import DrinkCard from "../../components/DrinkCard";
import NewAccountButton from "../../components/NewAccountButton";
import Footer from "../../components/Footer";


export default function Landing() {
  return (
    <div>
      <Logo />
      <LoginForm />
      <DrinkCard />
      <NewAccountButton />
      <Footer />
    </div>
  );
}
