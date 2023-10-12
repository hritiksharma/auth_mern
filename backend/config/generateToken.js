const jwt = require("jsonwebtoken");

const getJWTToken = (id) => {
  return jwt.sign({ _id: id }, process.env.SECRET_KEY, {
    expiresIn: "30d",
  });
};

module.export = getJWTToken;
