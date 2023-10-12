const express = require("express");
const router = express.Router();
const { signUp, signIn } = require("../controllers/authControllers");
router.post("/signup", signUp);
router.post("/login", signIn);

module.exports = router;
