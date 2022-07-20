import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";

const Div = styled.div`
  position: fixed;
  top: 1rem;
  right: 2rem;
  display: none;
  z-index: 25;
  flex-direction: column;

  @media (max-width: 768px) {
    display: flex;
  }

  div {
    background-color: ${(props) => (props.menuOpen ? "white" : "blue")};
    margin: 0.2rem;
    width: 2rem;
    height: 5px;

    border-radius: 10px;
    transform-origin: 0;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${(props) => (props.menuOpen ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${(props) =>
        props.menuOpen ? "translateX(-100%)" : "translateX(0)"};
      opacity: ${(props) => (props.menuOpen ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${(props) =>
        props.menuOpen ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`;

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      cartChange: false,
    };
  }
  menuClick = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };
  render() {
    return (
      <>
        <Div menuOpen={this.state.menuOpen} onClick={this.menuClick}>
          <div></div>
          <div></div>
          <div></div>
        </Div>

        <Menu menuOpen={this.state.menuOpen} />
      </>
    );
  }
}
