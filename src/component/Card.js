import React, { Component } from "react";
import styles from "./Card.module.css";
class Card extends Component {
  render() {
    const { image , name,cost } = this.props;
    return (
      <div className={styles.container}>
        <img src={image} />
        <h1>{name}</h1>
        <p>{cost}</p>
      </div>
    );
  }
}

export default Card;
