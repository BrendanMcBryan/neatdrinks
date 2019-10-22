import React from "react";
import Logo from "../../components/Logo";
import LoginForm from "../../components/LoginForm";
import Footer from "../../components/Footer";
import DialogBox from "../../components/Dialog";
import SubmitLoginButton from "../../components/SubmitLoginButton";


export default function Landing() {
  return (
    <div>
        <Logo />
        <LoginForm />
        <SubmitLoginButton />{<br></br>}
        <DialogBox />
        <Footer />
    </div>
  );
}
