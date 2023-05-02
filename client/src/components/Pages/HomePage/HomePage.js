import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import SingleProduct from "../SingleProduct/SingleProduct";
import { API_URL } from "../../../config";
import { getAll } from "../../../redux/productsRedux";

const HomePage = () => {
  useEffect(() => fetchData(), []);

  function fetchData() {
    fetch(`${API_URL}/api/products`)
      .then((res) => res.json())
  }

  const products = useSelector(getAll);

  return (
    <Container>
      <Row>
        {products.map((product) => (<Col key={product.id}><SingleProduct {...product} /></Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;