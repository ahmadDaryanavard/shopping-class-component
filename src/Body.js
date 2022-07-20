import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import axios, { Axios } from "axios";
import URL from "./api/Connect";
import getProducts from "./api/products/getProducts";
import Product from "./pages/Product";
const WrappedProductsComponent = (props) => {
  const navigate = useNavigate();

  return <Products navigate={navigate} {...props} />;
};

const WrappedProductComponent = (props) => {
  const navigate = useNavigate();
  const thisParams = useParams();

  return <Product navigate={navigate} params={thisParams} {...props} />;
};

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  render() {
    return (
      <div className="" style={{ marginTop: "4.2rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<WrappedProductsComponent />} />
          <Route path="/product/:id" element={<WrappedProductComponent />} />
        </Routes>
      </div>
    );
  }
}
