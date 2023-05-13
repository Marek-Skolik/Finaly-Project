import { Card, Button, Form, Container } from "react-bootstrap";

function Cart() {

  return (
    <Container>
        <div className="container mt-3 mb-5">
        <Card className="text-center" style={{ width: "auto" }}>
            <Card.Img variant="top" />
            <Card.Body>
            <Card.Title>Produkt</Card.Title>
            <Card.Text>
                <Form.Group style={{ width: "5rem", margin: "auto" }} controlId="quantity">
                <Form.Label>Ilość</Form.Label>
                <Form.Control
                    type="number"
                    max="20"
                    min="0"
                />
                </Form.Group>
                <p>Cena za sztukę: zł</p>
                <p>Cena całkowita: zł</p>
            </Card.Text>
            <Button href="/orderForm" variant="dark" className="mx-3">
                Przejdź do zamówienia
            </Button>
            <Button variant="danger">
                Usuń produkt
            </Button>
            </Card.Body>
        </Card>
        </div>
    </Container>
  );
}

export default Cart;








