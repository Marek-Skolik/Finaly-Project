import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleProduct from "../SingleProduct/SingleProduct";
import SalesSection from "../Sections/SalesSection/SalesSection";
import CarouselSection from "../Sections/CarouselSection/CarouselSection";

const HomePage = () => {

  return (
    <Container>
      <SalesSection />
      <Row>
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
      </Row>
      <CarouselSection />
    </Container>
  );
};

export default HomePage;