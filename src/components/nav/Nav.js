import React, { Component } from 'react';
import styles from './Nav.css';
import logo from '../../img/campLogo.jpeg';
// import PropTypes from 'prop-types';

export default class Nav extends Component {
  render() {
    return (
      <nav className={styles.nav}>
        <img src={logo} alt="camping logo" />
        <ul className={styles.nav_links}>
          <li> 
            <a href="/" className={styles.nav_link}>
              home
            </a>
          </li>
          <li> 
            <a href="/" className={styles.nav_link}>
             about
            </a>
          </li>
          <li> 
            <a href="/" className={styles.nav_link}>
             campgrounds
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}




