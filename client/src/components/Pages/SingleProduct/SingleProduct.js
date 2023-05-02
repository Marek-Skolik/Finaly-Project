import React from "react";
import { Row, Button, Form, Col } from "react-bootstrap";

const SingleProduct = ({ id, name, photo, price }) => {

  return (
    <Col className="my-5">
      <Row style={{ width: "25rem" }}>
        <Col md={4}>
          <img src={photo} alt="zdjęcie" />
        </Col>
        <Col md={8}>
          <h2>{name}</h2>
          <p>Cena: {price}zł</p>
          <Form.Label>Ilość</Form.Label>
          <Form.Control className="my-3" style={{ width: "5rem" }} type="number" max="20" min="0" />
          <Button variant="dark">Dodaj do koszyka</Button>
          <Button className="mx-2" variant="secondary" href={'/productPage/' + id}>
            Pokaż
          </Button>
        </Col>
      </Row>
    </Col>
  );
};

export default SingleProduct;