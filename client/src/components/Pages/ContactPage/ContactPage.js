import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formName = e.target.formName.value;
    const formEmail = e.target.formEmail.value;
    const formMessage = e.target.formMessage.value;
    if (formName && formEmail && formMessage) {
      alert('Wysłano wiadomość!');
      e.target.formName.value = '';
      e.target.formEmail.value = '';
      e.target.formMessage.value = '';
    } else {
      alert('Wypełnij wszystkie pola!');
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h1 className="text-center mb-4">Kontakt</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="my-3" controlId="formName">
              <Form.Label>Imię i nazwisko</Form.Label>
              <Form.Control type="text" placeholder="Wpisz imię i nazwisko" />
            </Form.Group>
            <Form.Group className="my-3" controlId="formEmail">
              <Form.Label>Adres e-mail</Form.Label>
              <Form.Control type="email" placeholder="Wpisz adres e-mail" />
            </Form.Group>
            <Form.Group className="my-3" controlId="formMessage">
              <Form.Label>Wiadomość</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Wpisz swoją wiadomość" />
            </Form.Group>
            <Button className="my-3" variant="dark" type="submit">
              Wyślij
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;