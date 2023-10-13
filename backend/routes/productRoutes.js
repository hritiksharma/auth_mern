const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  addProduct,
} = require("../controllers/productControllers");

router.get("/getProducts", getAllProducts);
router.post("/add-Product", addProduct);

module.exports = router;
