import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Cart from "./Cart";

const Div = styled.div`
  z-index: 15;
  position: fixed;
  top: 0;
  display: flex;
  background-color: #eeeeee;
  width: 100%;
  padding: 10px;
  align-items: center;
  min-height: 60px;
`;
const Ul = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  li {
    padding: 10px 20px;
  }

  a {
    decoration: none;
    text-decoration: none;
    padding: 10px;
    transition: all 0.2s linear;
    border-radius: 5px;
    color: #030303;
  }
  a:hover {
    background-color: #fff;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    width: 300px;
    position: fixed;
    top: 0;
    right: 0;
    margin: 0;
    height: 100vh;
    background-color: #5555bb;
    color: #fff;

    padding-top: 3.5rem;
    transition: all 0.3s linear;
    transform: ${(props) =>
      props.menuOpen ? "translateX(0)" : "translateX(100%)"};
  }
`;
export default class Menu extends Component {
  render() {
    return (
      <Div>
        <Cart />
        <Ul menuOpen={this.props.menuOpen}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </Ul>
      </Div>
    );
  }
}
