import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import dhl from './dhl.png';
import ups from './ups.png';
import inpost from './inpost.png';
import styles from './Delivery.module.scss';

const Delivery = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <Card>
            <Card.Img className={styles.img} variant="top" src={dhl}/>
            <Card.Body>
              <Card.Title>DHL</Card.Title>
              <Card.Text>
                Szybka i bezpieczna dostawa na terenie całego kraju.
                Możliwość śledzenia przesyłki oraz płatności online.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img className={styles.img} variant="top" src={ups} />
            <Card.Body>
              <Card.Title>UPS</Card.Title>
              <Card.Text>
                Szybka i niezawodna dostawa na terenie całego kraju.
                Możliwość śledzenia przesyłki oraz płatności online.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img className={styles.img} variant="top" src={inpost} />
            <Card.Body>
              <Card.Title>InPost</Card.Title>
              <Card.Text>
                Odbierz przesyłkę w jednym z wielu punktów na terenie całego kraju.
                Szybka i wygodna dostawa bez konieczności oczekiwania na kuriera.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Delivery;