import React, { Component } from "react";
import ProductCard from "../components/ProductCard";

import styled from "styled-components";

import getProducts from "./../api/products/getProducts";
import thisCart from "./../api/cart/Cart";

import "bootstrap/dist/css/bootstrap.css";

const cart = new thisCart();
const Head = styled.div`
  div h1 {
    transition: all 0.6s ease-in-out;
    transform: ${(props) => {
      return props.mounted ? "translateY(0px)" : "translateY(400px)";
    }};
  }

  div h4 {
    transition: all 0.8s ease-in-out;
    transform: ${(props) => {
      return props.mounted ? "translateY(0px)" : "translateY(400px)";
    }};
  }

  div h6 {
    transition: all 1s ease-in-out;
    transform: ${(props) => {
      return props.mounted ? "translateY(0px)" : "translateY(400px)";
    }};
  }

  div h1,
  div h4,
  div h6 {
    margin-top: 10px;
  }
`;
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
      products: [],
    };
  }

  componentDidMount() {
    this.showHeadText();
    getProducts().then((products) => this.setState({ products: products }));
  }

  showHeadText = () => {
    setTimeout(() => {
      this.setState({ mounted: true });
    }, 1000);
  };
  render() {
    return (
      <>
        <Head
          mounted={this.state.mounted}
          className="textOnPicture overflow-hidden position-relative"
        >
          <img
            src={require("./../content/home1.jpg")}
            className="w-100"
            alt="accessories"
          />
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              backgroundColor: "rgba(40,40,40,0.8)",
              top: 0,
              right: 0,
              color: "rgba(255,255,255,1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "10px",
            }}
          >
            <h1>
              loremEnim fugiat dolor proident occaecat incididunt est labore.
            </h1>
            <h4>
              Sit elit aliquip commodo pariatur sit elit occaecat pariatur.
            </h4>
            <h6>
              Anim minim veniam est laboris nisi ipsum qui nulla incididunt
              velit pariatur sunt pariatur ut.
            </h6>
          </div>
        </Head>
        <div className="container mt-3">
          <div className="row">
            {this.state.products.slice(0, 8).map((product) => (
              <div key={product.id} className="col-lg-3 col-sm-6 col-12 my-3">
                <ProductCard
                  navigate={this.props.navigate}
                  key={product.id}
                  idNum={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
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
