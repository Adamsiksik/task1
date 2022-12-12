import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "../styles/Navbar.module.css";
import Seachbar from "../components/searchbar";

function NavigationBar(props) {
  return (
    <Navbar
      className={styles.bar}
      collapseOnSelect
      expand="lg"
      bg="white"
      variant="white"
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Navbar.Brand className={styles.navhead} href="/">
              Omega
            </Navbar.Brand>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link className={styles.navLink} href="/">
              Main Page
            </Nav.Link>
            <Nav.Link className={styles.navLink} href="crypto">
              Crypto
            </Nav.Link>
          </Nav>

          <Nav className="ms-auto">
            {props.type ? <Seachbar handleClick={props.handleClick} /> : <div style={{width:"350px"}}></div>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
