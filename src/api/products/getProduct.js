import axios from "axios";
import URL from "../Connect";
const Product = async (id) => {
  
  return axios.get(`${URL}/products/${id}`).then((product) => product.data);

  
};

export default Product;
