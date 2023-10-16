const Product = require("../models/productSchema");

const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, quantity } = req.body;

    if (!name || !description || !price || !category || !quantity) {
      console.log("all fields are required");
      res
        .status(400)
        .json({ success: false, message: "all fields are required" });
    }

    const product = await Product.create({
      name,
      description,
      price,
      category,
      quantity,
    });

    if (product) {
      res.status(200).json({ success: true, product });
    }
  } catch (error) {
    console.log("error");
    throw new Error("error", error);
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (products) {
      res.status(200).json({ success: true, products });
    } else {
      res.status(404).json({ success: false, message: "no Products found" });
    }
  } catch (error) {
    console.log("error", error);
    throw new Error("error", error);
  }
};

module.exports = { getAllProducts, addProduct };
