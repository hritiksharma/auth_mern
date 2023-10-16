import { Button, Stack, TextField, Snackbar, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { register } from "../slices/auth";

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [successfull, setSuccessfull] = useState("");
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseSnackBar}
      >
        <CloseIcon />
      </IconButton>
    </>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessfull(false);
    if (password !== confirmPassword) {
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleCloseSnackBar}
        message="password and confirm Password not matched"
        action={action}
      />;
      return;
    }

    try {
      const res = await dispatch(
        register({ firstName, lastName, email, password, phoneNumber })
      );
      if (res) {
        setSuccessfull(true);
      }
    } catch (error) {
      setSuccessfull(false);
    }
  };

  return (
    <div className="form">
      <h2> Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            fullWidth
            required
          />
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            fullWidth
            required
          />
        </Stack>
        <TextField
          type="email"
          variant="outlined"
          color="secondary"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
          sx={{ mb: 4 }}
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
        <TextField
          type="password"
          variant="outlined"
          color="secondary"
          label="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          type="number"
          variant="outlined"
          color="secondary"
          label="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
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

export default RegistrationForm;
