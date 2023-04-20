import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import logo from './logo.png';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="bg-light">
      <Container>
        <Nav.Link className={styles.navlink} variant="dark" href="/"><h3>SECOND HAND FOR MEN</h3></Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Navbar.Brand>
                <Image className={styles.logo} src={logo} alt="logo" height={40} />
            </Navbar.Brand>
          </Nav>
          <Nav className="col me-auto">
            <Nav.Link href="/">Strona Główna</Nav.Link>
            <Nav.Link href="/aboutUsPage">O nas</Nav.Link>
            <Nav.Link href="/contact">Kontakt</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/cart">
              <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;




