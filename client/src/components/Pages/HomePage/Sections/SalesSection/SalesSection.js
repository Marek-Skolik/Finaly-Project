import { Container, Row, Col } from 'react-bootstrap';
import blackfriday from './blackfriday.png';

function SalesSection() {
  return (
    <Container className="my-5">
      <Row className="my-5">
        <Col className="text-center">
          <img src={blackfriday} alt="black friday" />
        </Col>
      </Row>
    </Container>
  );
}

export default SalesSection;