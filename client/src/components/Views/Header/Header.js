import { Navbar, Container, Nav, Button, Image } from 'react-bootstrap';
import logo from './logo.png';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="bg-light">
      <Container>
        <Nav.Link className={styles.navlink} variant="dark" to="/">SECOND HAND</Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Navbar.Brand to="/">
                <Image className={styles.logo} src={logo} alt="logo" height={40} />
            </Navbar.Brand>
          </Nav>
          <Nav>
            <Button href="/cart" variant="dark">
              Koszyk
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;




