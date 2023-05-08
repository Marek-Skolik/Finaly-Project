import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import pic1 from "./t-shirt.png";
import pic2 from "./koszula.png";
import pic3 from "./kurtka.png";
import pic4 from "./spodnie.png";
import pic5 from "./buty.png";
import pic6 from "./bielizna.png";
import styles from './CategorySection.module.scss';


const CategorySection = () => {
  const categories = [
    {
      image: pic1,
    },
    {
      image: pic2,
    },
    {
      image: pic3,
    },
    {
      image: pic4,
    },
    {
      image: pic5,
    },
    {
      image: pic6,
    },
  ];

  return (
      <Container className="my-5">
        <h2 className="text-center mb-5">KATEGORIE</h2>
        <Row>
          {categories.map((category, index) => (
            <Col md={4} key={index} className="mb-4">
              <Button variant="light" className={styles.btn-category} style={{ width: '400px', height: '450px' }}>
                <img src={category.image} alt='nazwa' className={styles.imgFluid} style={{ width: '350px', height: '400px' }} />
                {category.name}
              </Button>
            </Col>
          ))}
        </Row>
      </Container>
  );
};


export default CategorySection;