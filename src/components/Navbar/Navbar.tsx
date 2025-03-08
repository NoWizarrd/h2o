import React from "react";
import styles from "./Navbar.module.scss";
import arrowRight from '../../assets/arrow_right.svg'
import arrowLeft from '../../assets/arrow_left.svg'
import avatar from '../../assets/avatar.png'

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navigation}>
        <button className={styles.navButton}>
          <img src={arrowLeft} alt="left"/>
        </button>
        <button className={styles.navButton}>
          <img src={arrowRight} alt="right"/>
        </button>
        <ul className={styles.menu}>
          <li>Свод данных по сотрудникам</li>
          <li className={styles.active}>Сводный отчет внутри компании</li>
          <li>Сводный отчет по сделкам</li>
        </ul>
      </div>
      <div className={styles.profile}>
        <div className={styles.accSection}>
          <img
            src={avatar} 
            alt="User"
            className={styles.avatar}
          />
          <div className={styles.text}>
            <p className={styles.name}>Kristina 🐰</p>
            <p>менеджер продаж</p>
          </div>
        </div>
        <button className={styles.profileButton}>
          <img src={arrowRight} alt="right" width={8}/>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
