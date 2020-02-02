import React, { Component } from 'react';
import Camping from '../../camping/Camping';
import styles from './CampingList.css';
import { campingData } from '../../campingData';
import PropTypes from 'prop-types';

class CampingList extends Component {
  state = {
    camps: campingData
  };
  removeCampsite = id => {
    const { camps } = this.state;
    const filterCamps = camps.filter(camp=> camp.id !== id);
    this.setState({
      camps:filterCamps
    })
  }
  render() {
    const { camps } = this.state;
    
    return (
      <section className={styles.campinglist}>
        {camps.map(camp => {
          return <Camping key={camp.id} camp={camp} removeCampsite={this.removeCampsite} />;
        })}
      </section>
    );
  }
}

export default CampingList;
