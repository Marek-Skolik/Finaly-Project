import { Container, Row, Col } from 'react-bootstrap';
import styles from './OpportunitySection.module.scss';

function OpportunitySection() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <div className={styles.opportunity}>
            <p className="mx-5">Koszule</p>
            <p className="mx-5">Spodnie</p>
            <p className="mx-5">Obuwie</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default OpportunitySection;