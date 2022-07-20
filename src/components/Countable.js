import React, { Component } from "react";

import thisCart from "./../api/cart/Cart";

const cart = new thisCart();

const Countable = (component) => {
  class MakeCountable extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    componentDidMount() {
      this.setState({ count: this.props.count ? this.props.count : 0 });
    }

    addCount = (e) => {
      e.stopPropagation();
      this.setState({ count: this.state.count + 1 }, () => {
        cart.changeCount(this.props.idNum.toString(), this.state.count);
      });
    };
    decCount = (e) => {
      e.stopPropagation();
      this.setState(
        {
          count: this.state.count > 1 ? this.state.count - 1 : this.state.count,
        },
        () => {
          cart.changeCount(this.props.idNum.toString(), this.state.count);
        }
      );
    };

    addToCart = (e) => {
      e.stopPropagation();
      this.setState({ count: 1 }, () => {
        cart.addToCart(this.props.idNum.toString(), 1);
      });
      //console.log(this.state.count);
    };

    deleteFromCart = (e = null) => {
      if (e !== null) {
        e.stopPropagation();
      }

      this.setState({ count: 0 }, () => {
        cart.deleteFromCart(this.props.idNum.toString());
      });
    };
    render() {
      const PrevComponent = component;
      return (
        <PrevComponent
          increase={this.addCount}
          decrease={this.decCount}
          countInCart={this.state.count}
          toCart={this.addToCart}
          deleteFromCart={this.deleteFromCart}
          {...this.props}
        />
      );
    }
  }
  return MakeCountable;
};

export default Countable;
