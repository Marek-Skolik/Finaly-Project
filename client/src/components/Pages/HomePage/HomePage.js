import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleProduct from "../SingleProduct/SingleProduct";
import SalesSection from "../Sections/SalesSection/SalesSection";
import CarouselSection from "../Sections/CarouselSection/CarouselSection";
import { getAll } from "../../../redux/productsRedux";
import { useSelector } from "react-redux";

const HomePage = () => {

  const allProducts = useSelector(getAll);

  return (
    <Container>
      <SalesSection />
      <Row>
        {allProducts.map((product) => (
          <Col key={product.id}>
            <SingleProduct {...product} />
          </Col>
        ))}
      </Row>
      <CarouselSection />
    </Container>
  );
};

export default HomePage;