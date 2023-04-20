import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";

const SingleProduct = () => {
  return (
    <Col className="my-3">
      <Row style={{width: "25rem"}}>
        <Col md={4}>
          <img  />
        </Col>
        <Col md={8}>
          <h2>Nazwa</h2>
          <p>Cena: zł</p>
          <Form.Label>Ilość</Form.Label>
                <Form.Control
                    className="my-3"
                    style={{ width: "5rem" }}
                    type="number"
                    max="20"
                    min="0"
                />
          <Button variant="dark">Dodaj do koszyka</Button>
          <Button className="mx-2" variant="secondary" href="/productPage">Pokaż</Button>
        </Col>
      </Row>
    </Col>
  );
};

export default SingleProduct;