import {  Container, Row } from "react-bootstrap"
import SingleProduct from "../SingleProduct/SingleProduct";

const HomePage = () => {
    
    return (
        <Container>
            <Row className="mx-1">
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
            </Row>
        </Container>
    )
}

export default HomePage;