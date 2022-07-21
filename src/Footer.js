import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import styled from "styled-components";
import { Link } from "react-router-dom";
import SocialMediaIcon from "./components/footer/SocialMediaIcon";

import { BsInstagram, BsFacebook } from "react-icons/bs";
import { GrTwitter } from "react-icons/gr";
const Div = styled.div`
  background-color: #333333;
  min-height: 300px;
  width: 100%;
  div {
    color: white;
  }
  .col-lg-4 {
    display: flex;
    align-items: center;
    padding-top: 2rem;
    flex-direction: column;
  }
  .link {
    margin: 0.3rem 0;
    color: white;
    text-decoration: none;
    transition: all 0.3s linear;
  }
  .link:hover {
    color: blue;
    transition: all 0.3s linear;
  }
`;

export default class Footer extends Component {
  render() {
    return (
      <Div className="row p-0 m-0">
        <div className="col-lg-4 flex-row align-items-center justify-content-center">
          <SocialMediaIcon>
            <BsInstagram />
          </SocialMediaIcon>
          <SocialMediaIcon>
            <BsFacebook />
          </SocialMediaIcon>
          <SocialMediaIcon>
            <GrTwitter />
          </SocialMediaIcon>
        </div>
        <div className="col-lg-4 justify-content-end pb-3">
          Eiusmod non eiusmod ad esse ea irure culpa ullamco.
        </div>
        <div className="col-lg-4">
          <h3>Website Pages</h3>
          <Link className="link" to="./">
            Home
          </Link>
          <Link className="link" to="/products">
            Products
          </Link>
          <Link className="link" to="/about">
            About Us
          </Link>
          <Link className="link" to="/contact">
            Contact Us
          </Link>
        </div>
      </Div>
    );
  }
}
