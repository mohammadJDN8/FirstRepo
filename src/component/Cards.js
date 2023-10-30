import React, { Component } from "react";
import styles from "./Cards.module.css";
import Card from "./Card";
import oneplus11 from "../images/oneplus-11-black-back.webp";
import oneplus10pro from "../images/oneplus-10-pro-black-back.webp";
import oneplus9pro from "../images/oneplus-9-pro-silver-back.webp";
import oneplus8 from "../images/fc9babce-6f52-42b5-8b72-6f7ee1f22e87.webp";
class Cards extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Card image={oneplus11} name="Oneplus 11" cost="699 $" />
        <Card image={oneplus10pro} name="Oneplus 10 pro" cost="599 $" />
        <Card image={oneplus9pro} name="Oneplus 9 pro" cost="550 $" />
        <Card image={oneplus8} name="Oneplus 8" cost="499 $" />
      </div>
    );
  }
}

export default Cards;
