import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "../styles/Navbar.module.css";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/router";

function NavigationBar() {

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
          <Nav className="mx-auto">
        
            <Nav.Link className={styles.navLink} href="/">
              Main Page
            </Nav.Link>
            <Nav.Link className={styles.navLink} href="crypto">
              Crypto
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className={styles.navLink} href="signup">
              Sign up
            </Nav.Link>
            <Button onClick={buttonHandler} variant="primary" size="sm">
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
