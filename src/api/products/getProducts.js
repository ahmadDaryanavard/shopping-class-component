import axios from "axios";
import React, { useState } from "react";
import URL from "../Connect";
const Products = async () => {
  
  return axios.get(`${URL}/products`).then((produts) => produts.data);

  
};

export default Products;
