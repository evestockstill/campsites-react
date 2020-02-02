import React, { Component } from 'react';
import styles from './Camping.css';
import Delete from '../../img/delete.png';
import PropTypes from 'prop-types';

class CampingList extends Component {
  render() {
    return (
      <article className={styles.tour}>
        <div className={styles.img_container}>
          <img
            width='200'
            src='https://images.pexels.com/photos/3415401/pexels-photo-3415401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            alt=''
          />
          <span className={styles.xBtn}>
            <img src={Delete} alt="delete" />
           
          </span>
        </div>
      </article>
    );
  }
}

CampingList.propTypes = {};

export default CampingList;
