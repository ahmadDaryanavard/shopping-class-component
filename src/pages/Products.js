import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.css";

import thisCart from "./../api/cart/Cart";

import getProducts from "./../api/products/getProducts";
import ProductCard from "../components/ProductCard";
import LoadingPage from "../components/LoadingPage";

const cart = new thisCart();
export default class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
    this.cartValue = cart.getCartList();
  }

  componentDidMount() {
    getProducts().then((products) => this.setState({ products: products }));
  }

  render() {
    return (
      <>
        <LoadingPage show={this.state.products.length === 0} />

        <div className="container">
          <div className="row">
            {this.state.products.map((product) => (
              <div key={product.id} className="col-lg-3 col-sm-6 col-12">
                <ProductCard
                  navigate={this.props.navigate}
                  key={product.id}
                  idNum={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  title={product.title}
                  count={
                    cart.isInCart(product.id.toString())
                      ? cart.getCountCart(product.id.toString())
                      : 0
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
