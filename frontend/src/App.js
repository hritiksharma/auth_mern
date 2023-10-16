import "./App.css";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

import { createRoot } from "react-dom/client";
import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      {/* <Container> */}
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
      {/* </Container> */}
    </div>
  );
}

export default App;
