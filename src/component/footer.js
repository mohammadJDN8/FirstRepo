import React, { Component } from 'react';
import styles from './footer.module.css'
class footer extends Component {
  render() {
    return (
      <div className={styles.container}>
        <p> 
          &copy; All Right Reserved 2023
        </p>
      </div>
    );
  }
}

export default footer;