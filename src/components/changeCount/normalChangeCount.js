import React, { Component } from "react";

import styled from "styled-components";

import "bootstrap/dist/css/bootstrap.css";

import { FaTrashAlt, FaCartPlus } from "react-icons/fa";

const Div = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;

  width: 200%;
  transition: all 0.3s ease-in-out;
  transform: ${(props) =>
    props.count === 0 ? "translateX(-50%)" : "translateX(0)"};

  .countSection {
    display: flex;
    flex: 1;
    justify-content: center;
  }
  .addCartSection {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  div div {
    padding: 5px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .decrease {
    border-radius: 5px 0px 0px 5px !important;
    width: 50px;
  }

  .increase {
    border-radius: 0px 5px 5px 0px;
    width: 50px;
  }

  .delete {
    margin-left: 10px !important;
  }
`;
export default class normalChangeCount extends Component {
  increase = (e) => {
    this.props.onIncrease(e);
  };

  decrease = (e) => {
    this.props.onDecrease(e);
  };
  render() {
    return (
      <div style={{ width: "100%", overflow: "hidden", ...this.props.style }}>
        <Div count={this.props.count}>
          <div className="countSection">
            <button
              onClick={this.decrease}
              className="btn shadow-sm btn-secondary decrease"
            >
              -
            </button>
            <div className="count">{this.props.count}</div>
            <button
              onClick={this.increase}
              className="btn btn-secondary shadow-sm increase"
            >
              +
            </button>

            <div
              onClick={this.props.onDelete}
              className="btn btn-danger delete"
            >
              <FaTrashAlt />
            </div>
          </div>

          <div className="addCartSection">
            <button className="btn btn-primary" onClick={this.props.toCart}>
              add to cart <FaCartPlus />
            </button>
          </div>
        </Div>
      </div>
    );
  }
}
