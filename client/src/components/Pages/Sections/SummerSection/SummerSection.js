import React from "react";
import { Container, Button } from "react-bootstrap";
import summerPic from './summer.png'
import styles from "./SummerSection.module.scss";

const SummerSection = () => {
  return (
    <div className={styles.summerSection} style={{ backgroundImage: `url(${summerPic})` }}>
      <Container className={styles.container}>
        <Button variant="dark" size="lg" className={styles.button}>Sprawdź</Button>
      </Container>
    </div>
  );
};

export default SummerSection;