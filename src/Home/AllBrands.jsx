import React from "react";
import { Link } from 'react-router-dom';
import styles from "./css/AllBrands.module.css";
import Audi from "./Audi.jpg";
import BMW from "./BMW.jpg";
import Mercedes from "./Mercedes.jpg";
const allBrands = () => {
  return(
          <div className={styles.allBrandsPage}>
            <h3>All Brands</h3>
            <div className={styles.allBrands}>
              <div className={styles.individualCategory}>
                <div className={styles.divcss5}>
                  <img src={Audi} alt="Audi" title="Audi"></img>
                  <a href="/AllBrands/Audi" className={styles.now}></a>
                  <span>See Audi</span>
                </div>
                
                <Link  className={styles.link} to="/AllBrands/Audi" >
                  <div>Audi</div>
                </Link>
              </div>

              <div className={styles.individualCategory}>
                <div className={styles.divcss5}>
                  <img src={BMW} alt="BMW" title="BMW"></img>
                  <a href="/AllBrands/BMW" className={styles.now}></a>
                  <span>See BMW</span>
                </div>
                <Link  className={styles.link} to="/AllBrands/BMW" >
                  <div>BMW</div>
                </Link>
              </div>

              <div className={styles.individualCategory}>
                <div className={styles.divcss5}>
                  <img className={styles.img} src={Mercedes} alt="Mercedes" title="Mercedes"></img>
                  <a href="/AllBrands/Mercedes" className={styles.now}></a>
                  <span>See Mercedess</span>
                </div>
                <Link  className={styles.link} to="/AllBrands/Mercedes" >
                  <div>Mercedess</div>
                </Link>
              </div>

            </div>
        </div>
  )
}

export default allBrands;