import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Returns = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h1>Polityka zwrotów</h1>
          <p>
            Wszystkie produkty zakupione w naszym sklepie internetowym objęte są 14-dniowym prawem zwrotu. 
            Oznacza to, że masz 14 dni na odstąpienie od umowy i zwrócenie zakupionych produktów.
          </p>
          <p>
            Warunkiem zwrotu jest zachowanie produktu w stanie nienaruszonym, w oryginalnym opakowaniu, 
            z kompletem dokumentów oraz bez śladów użytkowania.
          </p>
          <p>
            Jeśli zdecydujesz się na zwrot zakupionych produktów, skontaktuj się z nami drogą e-mailową 
            lub za pośrednictwem formularza kontaktowego na stronie sklepu.
          </p>
          <p>
            Zwracany produkt musi zostać dostarczony na adres podany w regulaminie sklepu, 
            a koszty przesyłki ponosi Klient.
          </p>
          <p>
            Po otrzymaniu zwracanego produktu, zwrócimy Ci pieniądze za zakupione produkty oraz 
            koszty przesyłki (w przypadku zwrotu całego zamówienia).
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Returns;