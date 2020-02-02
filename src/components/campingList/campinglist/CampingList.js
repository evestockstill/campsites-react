import React, { Component } from 'react';
import Camping from '../../camping/Camping';
import styles from './CampingList.css';
import { campingData } from '../../../campingData';
import PropTypes from 'prop-types';

class CampingList extends Component {
  state = {
    camps: campingData
  };
  render() {
    const { camps } = this.state;
    return (
      <section className={styles.campinglist}>
        {camps.map(camp => {
          return <Camping key={camp.id} camp={camp} />;
        })}
      </section>
    );
  }
}

export default CampingList;
