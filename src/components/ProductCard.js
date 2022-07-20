import React, { Component } from "react";

import styled from "styled-components";
import ChangeCount from "./changeCount/normalChangeCount";

import "bootstrap/dist/css/bootstrap.css";
import Countable from "./Countable";
import { useNavigate } from "react-router-dom";

const Card = styled.div`
  border-radius: 10px;
  height: 25rem;
  justify-content: center;
  padding: 0.5rem;

  .imagePlace {
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
  }

  .mainImage {
    height: 13rem;
  }
`;
class ProductCard extends Component {
  goToProductPage = (e) => {
    this.props.navigate(`../product/${this.props.idNum}`);
    //this.props.history.push(`product/${this.props.key}`);
  };
  render() {
    return (
      <div>
        <Card onClick={this.goToProductPage} className="shadow-sm">
          <div className="header"></div>
          <div className="body">
            <div className="imagePlace">
              <img src={this.props.image} alt="Product" className="mainImage" />
            </div>
          </div>
          <div className="w-100 mt-2 d-flex justify-content-center">
            <div
              className="bg-light shadow-sm w-75"
              style={{ height: 3 }}
            ></div>
          </div>
          <div className="footer pt-3">
            <div className="w-100 text-center text-secondary">
              {this.props.name}
            </div>
            <div className="shopDetails">
              <div
                className="price w-100 text-center mt-3 text-lg fw-bold"
                style={{ fontSize: 24 }}
              >
                {this.props.price} $
              </div>
              <div className="shopCount mt-4">
                <ChangeCount
                  onIncrease={this.props.increase}
                  onDecrease={this.props.decrease}
                  count={this.props.countInCart}
                  toCart={this.props.toCart}
                  onDelete={this.props.deleteFromCart}
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
export default Countable(ProductCard);
//making it countable component
