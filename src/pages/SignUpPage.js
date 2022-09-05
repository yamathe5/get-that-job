import React from "react";
import Header from "../components/CommonComponents/Header";
import SignUpForm from "../components/SignUpForm";

import "./signup-page.scss";

export default function SignUpPage() {
  return (
    <>
      <Header></Header>
      <SignUpForm></SignUpForm>
    </>
  );
}
