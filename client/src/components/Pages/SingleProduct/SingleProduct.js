import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const SingleProduct = ({name, price, photo, id}) => {
 

  return (
    <Col className="my-5">
      <Row style={{ width: "25rem" }}>
        <Col md={4}>
          <img src={`./uploads/${photo}`} alt="zdjęcie" />
        </Col>
        <Col md={8}>
          <h2>{name}</h2>
          <p>Cena: {price}zł</p>
          <Form.Label>Ilość:</Form.Label>
          <Form.Control className="my-3" style={{ width: "5rem" }} type="number" max="20" min="0" />
          <Button variant="dark">Dodaj do koszyka</Button>
            <Button href={`/productPage/${id}`} className="mx-2" variant="secondary">
              Pokaż
            </Button> 
        </Col>
      </Row>
    </Col>
  );
};

export default SingleProduct;