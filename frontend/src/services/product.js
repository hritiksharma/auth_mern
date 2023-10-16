import axios from "axios";

const API_URL = "http://localhost:8000/api/v1/product";

const addProduct = (name, description, price, category, quantity) => {
  return axios.post(API_URL + "add-product", {
    name,
    description,
    price,
    category,
    quantity,
  });
};

const getProducts = async () => {
  const res = await axios.get(API_URL + "getProducts");
  console.log("response", res.data);
};

const productService = {
  addProduct,
  getProducts,
};

export default productService;
