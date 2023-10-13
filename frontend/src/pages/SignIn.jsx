import React from "react";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import "./SignIn.css";
const SignUp = () => {
  return (
    <div>
      <Header title="SignIn" />
      <div className="form-container">
        <LoginForm />
      </div>
    </div>
  );
};

export default SignUp;
