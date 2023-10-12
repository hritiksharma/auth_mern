const express = require("express");
const authRoutes = require("./routes/authRoutes");
const productRotes = require("./routes/productRoutes");
const dotenv = require("dotenv/config");
const connectDB = require("./config/dbConnection");
const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("APP is workings");
});
connectDB();
app.use("/api/v1/", authRoutes);
app.use("/api/v1/", productRotes);

app.listen(port, () => {
  console.log(`SERVER IS RUNNING OR PORT ${port}`);
});
