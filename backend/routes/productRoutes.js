const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  addProduct,
} = require("../controllers/productControllers");

router.get("/getProducts", getAllProducts);
router.post("/addProduct", addProduct);

module.exports = router;
