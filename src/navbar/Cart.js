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
    transition: all 0.5s linear;
    padding: 10px;
    border-radius: 10px;
    background-color: ${(props) => (props.show ? "#eee" : "#fff")};
    border: 1px solid #888;
    display: flex;
    align-items: center;
  }
  .cartSummaryBtn:hover {
    cursor: pointer;
  }
  .cartSummary {
    transition: all 0.3s linear;
    width: 300px;
    height: 350px;
    position: absolute;
    top: 39px;
    left: 0px;
    background-color: white;
    display: ${(props) => (props.show ? "flex" : "none")};
    flex-direction: column;
    overflow: hidden;
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
          <div style={{ marginRight: 10 }}>My Cart</div>
          <FaShoppingBag size="24" color="gray" style={{ marginTop: -4 }} />
        </div>
        <div className="cartSummary rounded shadow-sm p-1">
          <div className="cartProducts">
            <div>
              {this.state.cart.map((product) => {
                return (
                  <ProductCart
                    key={product.productId}
                    idNum={product.productId}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Div>
    );
  }
}
