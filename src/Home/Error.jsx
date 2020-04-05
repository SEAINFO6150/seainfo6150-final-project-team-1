import React from 'react';
import error from "./404.jpg"
import styles from "./css/Error.module.css";
import {Link} from "react-router-dom";

const Error = () => {
    return (
        <div className={styles.body}>
            <p>Oops!</p>
            <p>We can't seem to find the page you're looking for.</p>
            <p>Error code: 404</p>
            <p>Here are some helpful links instead:</p>
            <img className={styles.img} src={error} alt="404" title="404"></img>
            <p>
            <Link className={styles.link_blue} to="/">
					Return to home
			</Link>
            </p>
            <p>
            <Link className={styles.link_blue} to="/AllBrands/Audi">
					Return to Audi
			</Link>
            </p>
            <Link className={styles.link_blue} to="/AllBrands/BMW">
					Return to BMW
			</Link>
            <p>
            <Link className={styles.link_blue} to="/AllBrands/Mercedes">
					Return to Mercedes
			</Link>
            </p>

        </div>
    )
}

export default Error;