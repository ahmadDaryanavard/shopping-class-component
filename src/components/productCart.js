import React, { Component } from "react";
import Countable from "./Countable";

import getProduct from "./../api/products/getProduct";

import "bootstrap/dist/css/bootstrap.css";

import styled from "styled-components";

const DIV = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.3s linear;

  height: ${(props) => (props.deleted ? "0" : "auto")};
  max-height: 60px;

  transform: ${(props) =>
    props.deleted ? "translateX(100%)" : "translateX(0)"};

  :hover {
    background-color: #bbbbbb;
  }

  .productImage {
    flex: 1;
    display: flex;
  }
  .productImageImg {
    width: 100%;
  }

  .productSummary {
    flex: 3;
  }
  .productTitle {
    font-weight: bold;
    margin-left: 5px;
    width: 15ch;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .productPrice {
    margin-left: 5px;

    color: #555555;
  }

  .actions {
    flex: 1;
  }
`;
class productCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleted: false,
      product: {},
    };
  }

  deleteProductFromCart = () => {
    this.setState({ deleted: true }, () => {
      this.props.deleteFromCart();
    });
  };
  componentDidMount() {
    getProduct(this.props.idNum).then((product) => {
      this.setState({ product: product });
    });
  }

  render() {
    //console.log(this.props.idNum);
    //console.log(this.state.product.id);
    return (
      <DIV deleted={this.state.deleted} className="shadow-sm">
        <div className="productImage">
          <img
            className="productImageImg"
            src={this.state.product.image}
            alt=""
          />
        </div>

        <div className="productSummary">
          <div className="productTitle">{this.state.product.title}</div>
          <div className="productPrice">{this.state.product.price} $</div>
        </div>

        <div className="actions">
          <button
            onClick={this.deleteProductFromCart}
            type="button"
            className="btn btn-danger"
          >
            delete
          </button>
        </div>
      </DIV>
    );
  }
}

export default Countable(productCart);
