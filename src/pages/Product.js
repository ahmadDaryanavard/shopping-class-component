import { gsap } from "gsap";
import React, { Component } from "react";
import LoadingPage from "../components/LoadingPage";

import getProduct from "./../api/products/getProduct";

import thisCart from "./../api/cart/Cart";

import ChangeCount from "./../components/changeCount/normalChangeCount";
import styled from "styled-components";
import MainImageSlider from "../components/imageSlider/MainImageSlider";

const cart = new thisCart();

const ProductInfo = styled.div`
  min-height: 460px;
  background-color: #fafafa;

  .body {
    width: 100%;
    height: 100%;
  }

  .imageFrame {
    overflow: hidden;
    border-radius: 10px;
    background-color: #f0f0f0;
    width: 350px;
    padding: 10px;
    height: 360px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .image {
    height: 100%;
  }

  .cartDetails {
    min-width: 300px;
    border-radius: 10px;
    min-height: 400px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      count: 0,
    };
    this.body = React.createRef();
    this.productId = this.props.params.id;
  }

  componentDidMount() {
    getProduct(this.props.params.id).then((product) =>
      this.setState({ product: product })
    );
    let productId = this.props.params.id;
    if (cart.isInCart(productId)) {
      this.setState({ count: cart.getCountCart(productId) });
    }

    //this.setState({ product: { id: "1" } });
  }

  increaseCount = () => {
    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
      }),
      () => cart.changeCount(this.productId, this.state.count)
    );
  };
  decreaseCount = () => {
    this.setState(
      (prevState) => ({
        count: prevState.count > 1 ? prevState.count - 1 : prevState.count,
      }),
      () => cart.changeCount(this.productId, this.state.count)
    );
  };

  addToCart = () => {
    this.setState({ count: 1 });
    cart.addToCart(this.productId, 1);
  };

  deleteFromCart = () => {
    this.setState({ count: 0 });
    cart.deleteFromCart(this.productId);
  };

  render() {
    let { product } = this.state;

    const imagess = [
      {
        url: product.image,
        caption: "Slide 1",
      },
      {
        url: "assets/img2.jpg",
        caption: "Slide 2",
      },
      {
        url: "assets/img3.jpg",
        caption: "Slide 3",
      },
      {
        url: "assets/img4.jpg",
        caption: "Slide 4",
      },
    ];

    return (
      <div>
        <LoadingPage show={Object.keys(this.state.product).length === 0} />
        <div
          className="container-fluid"
          ref={this.body}
          style={{ width: "100%", minHeight: "100vh" }}
        >
          <ProductInfo className="w-100 p-4 shadow-sm">
            <div style={{ height: "350px", width: "300px;" }}></div>
            <div className="body row m-0">
              <div className="col-lg-4 col-sm-6 d-flex justify-content-center">
                <div className="imageFrame shadow">
                  <img className="image" src={product.image} />
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div style={{ fontSize: 20, fontWeight: "bold" }}>{}</div>
                {product.title}
                <div style={{ marginTop: 60 }}>{product.description}</div>
              </div>

              <div className="col-lg-4 mt-4 col-sm-12 d-flex justify-content-center align-items-center">
                <div className="cartDetails shadow-sm">
                  <div className="cartText mt-5 mb-2 fw-bold">Cart</div>
                  <div className="productPrice mt-4">
                    price : {this.state.product.price}$
                  </div>
                  <ChangeCount
                    style={{ marginTop: "2.5rem" }}
                    onIncrease={this.increaseCount}
                    onDecrease={this.decreaseCount}
                    count={this.state.count}
                    toCart={this.addToCart}
                    onDelete={this.deleteFromCart}
                  />
                  <div className="totalPrice mt-5">
                    {this.state.count === 0
                      ? "This item is not in your Cart"
                      : `Total : ${
                          this.state.product.price * this.state.count
                        }$`}
                  </div>
                </div>
              </div>
            </div>
          </ProductInfo>
        </div>
      </div>
    );
  }
}
