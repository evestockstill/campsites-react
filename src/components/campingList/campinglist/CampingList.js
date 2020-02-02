import React, { Component } from 'react';
import Camping from '../../camping/Camping';
import styles from './CampingList.css';
import PropTypes from 'prop-types';

class CampingList extends Component {
  render() {
    return (
      <div>
        <section>
          <Camping />
        </section>
      </div>
    );
  }
}

export default CampingList;
