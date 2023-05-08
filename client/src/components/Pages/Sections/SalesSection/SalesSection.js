import { Col, Container, Row, Button } from "react-bootstrap";


const SalesSection = () => {
  return (
    <section className="py-5 my-5 bg-dark text-white">
      <Container>
        <Row className='text-center'>
          <Col>
            <h1 className="display-4 mb-4"><b>BLACK FRIDAY !</b></h1>
            <p className="lead mb-5">
              Nie pomiń swietnych promocji! <b>-25%</b> na każdy produkt!
            </p>
            <Button variant="light" size="lg">Sprawdź</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SalesSection;