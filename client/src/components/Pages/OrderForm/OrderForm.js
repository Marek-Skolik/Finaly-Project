import { Container, Row, Col, Form, Button } from "react-bootstrap";

const OrderForm = () => {


  return (
    <Container className="py-5">
      <Row>
        <Col>
          <h2>Twoje zamówienie:</h2>
          <ul className="list-unstyled">
            Lista Produktów
          </ul>
          <p>Suma: zł</p>
        </Col>
        <Col>
          <h2>Dane do zamówienia:</h2>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Imię i nazwisko</Form.Label>
              <Form.Control
                type="text"
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Adres email</Form.Label>
              <Form.Control
                type="email"
              />
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label>Numer telefonu</Form.Label>
              <Form.Control
                type="tel"
              />
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Adres dostawy</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <Button className="mt-3" type="submit" variant="dark">
              Zamów
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderForm;