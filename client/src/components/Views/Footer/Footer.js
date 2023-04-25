import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light py-3 my-5">
      <Container>
        <Row>
          <Col md={4} className="text-center text-md-start">
            <h6>Obsługa zamówienia</h6>
            <Nav>
                <Nav.Link href="/delivery" style={{ color: 'gray', textDecoration: 'underline' }}>Dostawa</Nav.Link>
                <Nav.Link href="/returns" style={{ color: 'gray', textDecoration: 'underline' }}>Zwroty</Nav.Link>
                <Nav.Link href="/payments" style={{ color: 'gray', textDecoration: 'underline' }}>Płatność</Nav.Link>
            </Nav>
          </Col>
          <Col md={4} className="text-center">
            <h6>Kontakt</h6>
            <p>123-456-789</p>
            <p>example@example.com</p>
            <Nav.Link href="/contact" style={{ color: 'gray', textDecoration: 'underline' }}>Przejdź do formularza</Nav.Link>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <h6>Informacje</h6>
            <p>Copyright © 2023</p>
            <p>Wszelkie prawa zastrzeżone.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;