import React from "react";
import Header from "../components/Header";
import RegistrationForm from "../components/RegistrationForm";
import "./SignUp.css";
const SignUp = () => {
  return (
    <div>
      <Header title="SignUp" />
      <div className="form-container">
        <RegistrationForm />
      </div>
    </div>
  );
};

export default SignUp;
