import React from "react";
import styles from "../styles/Header.module.css";
import Button from 'react-bootstrap/Button';
export default function App() {
  return (
    <header className={styles.header}>
    <p>Omega</p>
    <h3>The Number One Stock Exchange Market</h3>
    <h5>Join Us Today</h5>
    <Button className={styles.button} size="lg" active>
        Sign Up
      </Button>{' '}
    </header>
  );
}
