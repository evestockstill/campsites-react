import React, { Component } from 'react';
import styles from './Camping.css';
import Delete from '../../../public/img/delete.png';
import Arrow from '../../../public/img/arrow.png';
import PropTypes from 'prop-types';



class Camping extends Component {
  state = {
    showInfo: false
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  }
  render() {
    const { id, state, img, place, info, campsiteName } = this.props.camp;
    const { removeCampsite } = this.props;
    return (
      <article className={styles.camping}>
        <div className={styles.img_container}>
          <img className={styles.campimage} src={img} alt={campsiteName} />
          <span className={styles.xBtn} onClick={() => {removeCampsite(id);}}>
            <img src={Delete} alt='delete' />
          </span>
        </div>
        <div className={styles.camping_info}>
          <h3>{state}</h3>
          <h5 className={styles.place}>{place}</h5>
          <h4>{campsiteName}</h4>
          <h5>
            info{' '}
            <span onClick={this.handleInfo}>
              <img src={Arrow} />
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
Camping.propTypes = {
  state: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  campsiteName: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};


export default Camping;
