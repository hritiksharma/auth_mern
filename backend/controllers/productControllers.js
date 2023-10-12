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

    res.status(200).json({ success: true, product });
  } catch (error) {
    console.log("error");
    throw new Error("error", error);
  }
};

const getAllProducts = (req, res) => {
  const products = Product.find();
};

module.exports = { getAllProducts, addProduct };
