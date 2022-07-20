import React, { Component } from "react";
import styled from "styled-components";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const ImageSlider = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  background-color: red;
  overflow: hidden;

  .next {
    position: absolute;
    left: 180px;
    top: 90px;
  }

  .prev {
    position: absolute;
    right: 180px;
    top: 90px;
  }

  .imageSlide {
    width: 200px;
    height: 200px;
    background-color: #f0f0f0;
    display: flex;
    flex-direction: row;
    overflow: hidden;
  }

  .imagePlace {
    width: 200px;
    height: 200px;
    background-color: #f0f0f0;
  }
`;
export default class MainImageSlider extends Component {
  render() {
    return (
      <div className="slide-container" {...this.props}>
        <Slide>
          {this.props.images.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <div
                style={{
                  backgroundImage: `url(${slideImage.url})`,
                  height: "350px",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                }}
              >
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    );
  }
}
