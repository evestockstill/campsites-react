import React, { Component } from 'react';
import styles from './Camping.css';
import Delete from '../../img/delete.png';
import Arrow from '../../img/arrow.png';
import PropTypes from 'prop-types';

class Camping extends Component {
  render() {
    return (
      <article className={styles.camping}>
        <div className={styles.img_container}>
          <img
            width='200'
            src='https://images.pexels.com/photos/3415401/pexels-photo-3415401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            alt=''
          />
          <span className={styles.xBtn}>
            <img src={Delete} alt='delete' />
          </span>
        </div>
        <div className='camping_info'>
          <h3>state</h3>
          <h5>Place</h5>
          <h4>campsiteName</h4>
          <h5>
            info{' '}
            <span>
              <img src={Arrow} />
            </span>
          </h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem animi velit sint perferendis consectetur magni aliquid, molestias recusandae? Aliquam labore accusantium alias excepturi temporibus repellat?</p>
        </div>
      </article>
    );
  }
}

Camping.propTypes = {};

export default Camping;
