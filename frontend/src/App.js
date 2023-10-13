import "./App.css";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

import { createRoot } from "react-dom/client";
import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
function App() {
  return (
    <div>
      <Container>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
