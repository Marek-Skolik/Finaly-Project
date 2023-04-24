import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import applePay from './applepay.png';
import blik from './blik.png';
import p24 from './przelewy24.png'
import payU from './payu.png';
import styles from './Payments.module.scss';

const Payments = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <Card>
            <Card.Img className={styles.imgPay} variant="top" src={applePay} />
            <Card.Body>
              <Card.Title>Apple Pay</Card.Title>
              <Card.Text>
                Szybka i łatwa płatność za pomocą urządzeń Apple.
                Brak potrzeby podawania numeru karty i innych danych.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img className={styles.imgPay} variant="top" src={blik} />
            <Card.Body>
              <Card.Title>BLIK</Card.Title>
              <Card.Text>
                Szybka i bezpieczna płatność za pomocą aplikacji mobilnej.
                Możliwość płatności w sklepach stacjonarnych i online.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img className={styles.imgPay} variant="top" src={p24} />
            <Card.Body>
              <Card.Title>Przelewy24</Card.Title>
              <Card.Text>
                Bezpieczna i wygodna płatność za pomocą przelewu online.
                Szybkie potwierdzenie przelewu i realizacja zamówienia.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img className={styles.imgPay} variant="top" src={payU} />
            <Card.Body>
              <Card.Title>PayU</Card.Title>
              <Card.Text>
                Bezpieczna i wygodna płatność za pomocą karty lub przelewu online.
                Obsługa wielu walut i możliwość płatności w wielu sklepach.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Payments;