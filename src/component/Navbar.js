import React from "react";
import styles from "./Navbar.module.css";
import logo from "../images/React.png";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.list}>
        <li>Home</li>
        <li>Product</li>
        <li>About Us</li>
      </ul>
      <img className={styles.img} src={logo} alt="Logo of React" />
    </header>
  );
};

export default Navbar;
