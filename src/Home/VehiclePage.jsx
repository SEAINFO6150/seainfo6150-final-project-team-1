import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./css/VehiclePage.module.css";
const AudiDetails = require('../data/Audi.json');
const BMWDetails = require('../data/BMW.json');
const MercedesDetails = require('../data/Mercedes.json');

export const VehiclePage  = ({head, paras}) => {
	return(
		<div className={styles.vehiclePage}>
			<h3>{head}</h3>
			<div className={styles.allVehicles}>
				{paras.map(para =>(
					<div className={styles.individualVehicle} key={para.id}>
						<a href={`/AllBrands/${head}/${para.id}`}><img className={styles.img} src={para.image._url} alt="name" title="name"></img></a>
						<Link className={styles.link} to={`/AllBrands/${head}/${para.id}`}>
						<div>{para.name}</div>
						</Link>
					</div>
				))}
			</div>
			{/*<div>This is {head}!</div>*/}
		</div>
	)
}


const IndividualPage = (props) => {
	if (props.individual === "Audi"){
		return <VehiclePage head={props.individual} paras={AudiDetails}/>
	}
	if (props.individual === "BMW"){
		return <VehiclePage head={props.individual} paras={BMWDetails}/>
	}
	if (props.individual === "Mercedes"){
		return <VehiclePage head={props.individual} paras={MercedesDetails}/>
	}	
}


export default IndividualPage;