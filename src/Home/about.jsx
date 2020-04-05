import React from 'react';
import styles from "./css/about.module.css";
const about = (props) => {
    return (
        <div className={styles.body}>
            <h3 className={styles.title}>About</h3>
        <div className={styles.story}>
            <h4 className={styles.storytitle}>Our Story</h4>
        <p>
            Gathering Fans of Cars
        </p>
        </div>

        <div className={styles.news}>
            <h5 className={styles.newstitle}>News</h5>
        <p> 
            Audi 
            BMW
            Mercedes-Benz
        </p>
        </div>
        </div>

    );
};

export default about;