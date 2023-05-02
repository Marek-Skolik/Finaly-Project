import React from 'react';
import { Carousel } from 'react-bootstrap';

const ProductPage = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <Carousel>
              <Carousel.Item>
                <img alt="zdjęcie" className="d-block w-100"/>
              </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-md-6">
          <h2>Nazwa</h2>
          <h3 className="text-success">Cena $</h3>
          <p>Opis</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;