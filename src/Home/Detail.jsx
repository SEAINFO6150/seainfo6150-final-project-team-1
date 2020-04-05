import React from "react";
import styles from "./css/Detail.module.css";
const AudiDetails = require('../data/Audi.json');
const BMWDetails = require('../data/BMW.json');
const MercedesDetails = require('../data/Mercedes.json');

export const Detail = ({item, back}) => {

    const ingredients = [];
    for(const [index,value] of item.ingredients.entries()){
        ingredients.push(
        <li key={index}>
            <label>
                <input type="checkbox" className={styles.cb}/>
                <span className={styles.mark}></span>
                <span className={styles.con}>{value}</span>
            </label>
        </li>);}

    const instructions = [];

    for(const [index, value] of item.directions.entries()){
        instructions.push(
        <li key={index}>
            <label>
                <input type="checkbox" className={styles.cb}/>
                <span className={styles.mark}></span>
                <span className={styles.con}>{value}</span>
            </label>
        </li>
    );}

    return(
        <div>
            <div className={styles.detailPage}>
                <h4>{item.name}</h4>
                <img className={styles.itemImage} src={item.image._url} alt={item.name}/>
                <h5>Ingredients</h5>
                <p>{ingredients}</p>
                <h5>Instructions</h5>
                <p>{instructions}</p>
            </div>
        </div>
    );
};

const Analyse = (props) =>{
    if (props.individual === "Audi"){
        const item = AudiDetails.find(f => f.id === props.info);
        return <Detail item={item} back={props.individual}/>
    }
    if (props.individual === "BMWCourse"){
        const item = BMWDetails.find(f => f.id === props.info);
        return <Detail item={item} back={props.individual}/>
    }
    if (props.individual === "Mercedes"){
        const item = MercedesDetails.find(f => f.id === props.info);
        return <Detail item={item} back={props.individual}/>
    }
}


export default Analyse;
// export default Detail;