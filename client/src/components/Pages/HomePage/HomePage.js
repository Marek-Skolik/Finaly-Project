import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import SingleProduct from '../SingleProduct/SingleProduct';
import SalesSection from '../Sections/SalesSection/SalesSection';
import CarouselSection from '../Sections/CarouselSection/CarouselSection';
import SummerSection from '../Sections/SummerSection/SummerSection';
import CategorySection from '../Sections/CategorySection/CategorySection';

const HomePage = () => {
  const products = useSelector((state) => state.product);

  return (
    <Container>
      <SummerSection />
      <Row>
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
            <SingleProduct product={product} />
          </Col>
        ))}
      </Row>
      <SalesSection />
      <CategorySection />
      <CarouselSection />
    </Container>
  );
};

export default HomePage;
