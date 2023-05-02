import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import SingleProduct from "../SingleProduct/SingleProduct";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <Container>
      <Row>
        {products.map((product) => (
          <SingleProduct key={product.id} productId={product.id} name={product.name} price={product.price} photo={product.photo} />
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;