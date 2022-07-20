import React, { Component } from "react";
import styled from "styled-components";

const Loading = styled.div`
  z-index: 100;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background-color: #4343aa;
  transition: all 0.6s ease;
  display: flex;
  opacity: ${(props) => (props.show === true ? "1" : "0")};

  justify-content: center;
  align-items: center;
  .chase {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 110;
    background-color: red;
  }
  .chase:after,
  .chase:before {
    content: "";
    height: 30px;
    width: 30px;
    display: block;
    -webkit-animation: out 0.5s backwards, spin 1.25s 0.5s infinite ease;
    animation: out 0.5s backwards, spin 1.25s 0.5s infinite ease;
    border: 5px solid #ffffff;
    border-radius: 100%;
    -webkit-box-shadow: 0 -40px 0 -5px #ffffff;
    box-shadow: 0 -40px 0 -5px #ffffff;
    position: absolute;
  }
  .chase:after {
    -webkit-animation-delay: 0s, 1.25s;
    animation-delay: 0s, 1.25s;
  }

  @-webkit-keyframes out {
    from {
      -webkit-box-shadow: 0 0 0 -5px #ffffff;
      box-shadow: 0 0 0 -5px #ffffff;
    }
  }

  @keyframes out {
    from {
      -webkit-box-shadow: 0 0 0 -5px #ffffff;
      box-shadow: 0 0 0 -5px #ffffff;
    }
  }

  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
export default class LoadingPage extends Component {
  constructor(props) {
    super(props);
    this.state = { deleteElement: false };
  }
  delElem = () => {
    setTimeout(() => this.setState({ deleteElement: true }), 600);
  };
  render() {
    if (this.props.show === false) {
      this.delElem();
    }
    if (this.state.deleteElement === false) {
      return (
        <Loading show={this.props.show}>
          <div className="chase"></div>
        </Loading>
      );
    } else {
      return <></>;
    }
  }
}
