import React, { Component } from 'react';
import styles from './logos.module.css'
import oneLogo from '../images/03Image A_large.jpg'

class logos extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div>
        <img src={oneLogo} alt='logo of oneplus' />
        </div>
      </div>
    );
  }
}

export default logos;