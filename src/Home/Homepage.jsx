import React from "react";
import styles from "./css/Homepage.module.css";
import logo from "./logo.jpg";

const Homepage = () => {
	return (
		<div className={styles.homepage}>
			<div className={styles.logo}>
				<img className={styles.img} src={logo} alt="logo" title="logo"></img>
			</div>
		</div>
	);
}

export default Homepage;
