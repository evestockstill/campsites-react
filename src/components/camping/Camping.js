import React, { Component } from 'react';
import styles from './Camping.css';
import Delete from '../../../public/img/delete.png';
import Arrow from '../../../public/img/arrow.png';


class Camping extends Component {
  render() {
    const { state, img, place, info, campsiteName } = this.props.camp;
    return (
      <article className={styles.camping}>
        <div className={styles.img_container}>
          <img className={styles.campimage}
            src={img}
            alt={campsiteName}
          />
          <span className={styles.xBtn}>
            <img src={Delete} alt='delete' />
          </span>
        </div>
        <div className={styles.camping_info}>
          <h3>{state}</h3>
          <h5>{place}</h5>
          <h4>{campsiteName}</h4>
          <h5>
            info{' '}
            <span>
              <img src={Arrow} />
            </span>
          </h5>
          <p>{info}</p>
        </div>
      </article>
    );
  }
}



export default Camping;
