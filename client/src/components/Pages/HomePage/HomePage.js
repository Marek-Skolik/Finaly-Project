import {  Container, Row } from "react-bootstrap"
import SingleProduct from "../SingleProduct/SingleProduct";
import SalesSection from "./Sections/SalesSection/SalesSection";

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
            <SalesSection />
        </Container>
    )
}

export default HomePage;