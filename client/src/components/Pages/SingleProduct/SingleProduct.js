import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Button, Form } from "react-bootstrap";

const SingleProduct = ({ productId }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`/products/${productId}`).then((response) => {
      setProduct(response.data);
    });
  }, [productId]);

  return (
    <Col className="my-5">
      <Row style={{ width: "25rem" }}>
        <Col md={4}>
          <img src={product.photo} alt="zdjęcie" />
        </Col>
        <Col md={8}>
          <h2>{product.name}</h2>
          <p>Cena: {product.price}zł</p>
          <Form.Label>Ilość</Form.Label>
          <Form.Control className="my-3" style={{ width: "5rem" }} type="number" max="20" min="0" />
          <Button variant="dark">Dodaj do koszyka</Button>
          <Button className="mx-2" variant="secondary" href="/productPage">
            Pokaż
          </Button>
        </Col>
      </Row>
    </Col>
  );
};

export default SingleProduct;