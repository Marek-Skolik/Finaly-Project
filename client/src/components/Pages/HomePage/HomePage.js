import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleProduct from "../SingleProduct/SingleProduct";
import SalesSection from "../Sections/SalesSection/SalesSection";
import CarouselSection from "../Sections/CarouselSection/CarouselSection";
import SummerSection from "../Sections/SummerSection/SummerSection";
import CategorySection from "../Sections/CategorySection/CategorySection";


const HomePage = () => {

  return (
    <Container>
      <SummerSection />
          <Row>
              <SingleProduct />
              <SingleProduct />
              <SingleProduct />
              <SingleProduct />
              <SingleProduct />
              <SingleProduct />
          </Row>
      <SalesSection />
      <CategorySection />
      <CarouselSection />
    </Container>
  );
};

export default HomePage;