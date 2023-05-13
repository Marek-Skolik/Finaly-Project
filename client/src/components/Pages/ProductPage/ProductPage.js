import React from 'react';
import { Carousel } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import initialState from '../../../redux/initialState';

const ProductPage = () => {
  const { productId } = useParams();
  const product = initialState.product.find(item => item.id === Number(productId));

  const { name, price, description, photo, photo2 } = product;
  const photoPath = process.env.PUBLIC_URL + '/uploads/photos/';

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-4 text-center">
          <Carousel>
            <Carousel.Item>
              <img
                alt="Zdjęcie 1"
                className="d-block"
                src={photoPath + photo}
                style={{ maxWidth: '100%', maxHeight: '450px', objectFit: 'cover' }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                alt="Zdjęcie 2"
                className="d-block"
                src={photoPath + photo2}
                style={{ maxWidth: '100%', maxHeight: '450px', objectFit: 'cover' }}
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-md-8">
          <h2>{name}</h2>
          <h3 className="text-success">Cena: {price} zł</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;