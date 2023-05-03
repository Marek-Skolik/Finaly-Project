import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Col, Form, Row } from "react-bootstrap";
import { API_URL } from "../../../config";


const SingleProduct = (props) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(API_URL + '/product/')
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }


  return (
    <Col className="my-5">
      <Row style={{ width: "25rem" }}>
        <Col md={4}>
          <img src={`./images/products/${props.photo}`} alt="zdjęcie" />
        </Col>
        <Col md={8}>
          <h2>{props.name}</h2>
          <p>Cena: {props.price}zł</p>
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