import React, { Component } from "react";

import styled from "styled-components";
import { BsInstagram } from "react-icons/bs";

const Div = styled.div`
  transition: all 0.2s ease-in;
  width: 60px;
  height: 60px;
  background-color: white;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 1rem;
  :hover {
    cursor: pointer;
    transition: all 0.2s ease-in;
    background-color: ${(props) => props.HoverColor};
    .icon {
      transition: all 0.2s ease-in;
      color: ${(props) => props.IconHoverColor};
      font-size: 20px !important;
    }
  }
  .icon {
    transition: all 0.2s ease-in;
    color: ${(props) => props.IconColor};
    font-size: 30px;
  }
`;

export default class SocialMediaIcon extends Component {
  render() {
    const { IconColor, IconHoverColor, HoverColor } = this.props;
    return (
      <Div
        IconColor={IconColor}
        HoverColor={HoverColor}
        IconHoverColor={IconHoverColor}
      >
        <div className="icon">{this.props.children}</div>
      </Div>
    );
  }
}

SocialMediaIcon.defaultProps = {
  IconColor: "black",
  HoverColor: "blue",
  IconHoverColor: "white",
};
