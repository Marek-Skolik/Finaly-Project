import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleProduct from "../SingleProduct/SingleProduct";
import SalesSection from "../Sections/SalesSection/SalesSection";
import CarouselSection from "../Sections/CarouselSection/CarouselSection";
import { getAll, updateProducts } from "../../../redux/productsRedux";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from '../../../config';

const HomePage = () => {

  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => fetchData(), []);

  function fetchData() {
    fetch(`${API_URL}/product`)
      .then((res) => res.json())
      .then(async (products) => {
        dispatch(updateProducts(products));
      });
  }


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