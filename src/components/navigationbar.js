import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "../styles/Navbar.module.css";
import { useRouter } from "next/router";
import Seachbar from "../components/searchbar";

function NavigationBar(props) {
  const router = useRouter();
  const buttonHandler = () => {
    router.push("/login");
  };
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
        <Nav className="ms-auto">
          
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
            <Seachbar handleClick={props.handleClick} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
