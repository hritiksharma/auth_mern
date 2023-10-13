import axios from "axios";

const API_URL = "https://localhost:8000/api/v1/";

const register = (firstName, lastName, email, password, phoneNumber) => {
  return axios.post(API_URL + "signup", {
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
  });
};

const login = async (email, password) => {
  const res = await axios.post(API_URL + "signin", {
    email,
    password,
  });
  if (res.data.token) {
    localStorage.setItem("user", JSON.stringify(res.data.user));
  }
  return res.data;
};

const authService = {
  register,
  login,
};
export default authService;
