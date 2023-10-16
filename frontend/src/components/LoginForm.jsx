import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../slices/auth";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [successfull, setSuccessfull] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessfull(false);

    try {
      const res = await dispatch(login({ email, password }));
      if (res) {
        setSuccessfull(true);
        console.log("response from login#########", res);
        navigate("/home");
      }
    } catch (error) {}
  };

  return (
    <div className="form">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          type="email"
          variant="outlined"
          color="secondary"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          type="password"
          variant="outlined"
          color="secondary"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <Button variant="outlined" color="secondary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
