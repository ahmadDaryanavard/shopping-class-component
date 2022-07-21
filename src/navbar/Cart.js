import React, { Component } from "react";

import styled from "styled-components";

import { FaShoppingBag } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.css";
import ProductCart from "../components/productCart";

import "react-perfect-scrollbar/dist/css/styles.css";

import PerfectScrollbar from "react-perfect-scrollbar";

import thisCart from "./../api/cart/Cart";
import { useEffect } from "react";

const cart = new thisCart();
const useEffectClone = (func, focus) => {
  useEffect(() => func(), [focus]);
};
const Div = styled.div`
  margin: 0px 40px;
  position: relative;

  .cartSummaryBtn {
    font-size: 25px;
    display: flex;
    align-items: center;
    box-shadow: 0 0 7px 0px #888888;
    border-radius: 0.5rem;
    padding: 0.5rem;
    color: #0d6efd;
  }
  .cart-icon {
    color: #0d6efd;
  }
  .cartSummary {
    width: 300px;
    height: 350px;
    position: absolute;
    top: 35px;
    left: 0px;
    background-color: white;
    display: ${(props) => (props.show ? "flex" : "none")};
    flex-direction: column;
    overflow: hidden;
    transition: 0.3s linear;
  }

  .cartProducts {
    flex: 1;
  }
`;
export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartSumShow: false,
      cart: [],
    };
  }

  componentDidMount() {
    this.setState({ cart: cart.getCartList() });
  }

  updateCartShow() {
    this.setState((prevState) => ({ cart: cart.getCartList() }));
  }

  render() {
    console.log(this.state.cart);
    return (
      <Div
        show={this.state.cartSumShow}
        onMouseEnter={() => {
          this.setState({ cartSumShow: true });
          this.updateCartShow();
        }}
        onMouseLeave={() => this.setState({ cartSumShow: false })}
      >
        <div className="cartSummaryBtn">
          <FaShoppingBag className="cart-icon" />
        </div>
        <div className="cartSummary rounded shadow-sm p-1">
          <div className="cartProducts">
            <div>
              {this.state.cart.length !== 0 &&
                this.state.cart.map((product) => {
                  return (
                    <ProductCart
                      key={product.productId}
                      idNum={product.productId}
                    />
                  );
                })}

              {this.state.cart.length === 0 && (
                <div className="w-100 mt-4 text-center">
                  there is no item in cart
                </div>
              )}
            </div>
          </div>
        </div>
      </Div>
    );
  }
}
