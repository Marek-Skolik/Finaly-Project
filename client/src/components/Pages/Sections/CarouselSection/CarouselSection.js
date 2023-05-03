import React from "react";
import { Carousel } from "react-bootstrap";
import pic1 from './carousel1.png';
import pic2 from './carousel2.png';
import pic3 from './carousel3.png';
import './CarouselSection.module.scss';

const CarouselSection = () => {
  return (
    <Carousel interval={3000} wrap={true}>
      <Carousel.Item>
        <img
          className="d-block mx-auto"
          src={pic1}
          alt="First pic"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto my-auto"
          src={pic2}
          alt="Second pic"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto my-auto"
          src={pic3}
          alt="Third pic"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselSection;