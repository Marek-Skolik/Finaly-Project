import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Col, Form, Row } from "react-bootstrap";


const SingleProduct = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // pobranie danych produktu z serwera
    axios.get(process.env.DATABASE_URL)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // sprawdzenie czy dane produktu są pobrane
  if (!product) {
    return <div>Loading...</div>;
  }


  return (
    <Col className="my-5">
      <Row style={{ width: "25rem" }}>
        <Col md={4}>
          <img src={product.photo} alt="zdjęcie" />
        </Col>
        <Col md={8}>
          <h2>{product.name}</h2>
          <p>Cena: {product.price}zł</p>
          <Form.Label>Ilość:</Form.Label>
          <Form.Control className="my-3" style={{ width: "5rem" }} type="number" max="20" min="0" />
          <Button variant="dark">Dodaj do koszyka</Button>
            <Button href="/productPage" className="mx-2" variant="secondary">
              Pokaż
            </Button> 
        </Col>
      </Row>
    </Col>
  );
};

export default SingleProduct;