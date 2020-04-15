import React from "react";
import styles from "./css/Detail.module.css";
const AudiDetails = require('../data/Audi.json');
const BMWDetails = require('../data/BMW.json');
const MercedesDetails = require('../data/Mercedes.json');

export const Detail = ({item, back}) => {

    const Price = [];
    for(const [index,value] of item.Price.entries()){
        Price.push(
        <li key={index}>
            <label>
                <input type="checkbox" className={styles.cb}/>
                <span className={styles.mark}></span>
                <span className={styles.con}>{value}</span>
            </label>
        </li>);}

    const Features = [];

    for(const [index, value] of item.Features.entries()){
        Features.push(
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
                <h5>Price</h5>
                <p>{Price}</p>
                <h5>Features</h5>
                <p>{Features}</p>
            </div>
        </div>
    );
};

const Analyse = (props) =>{
    if (props.individual === "Audi"){
        const item = AudiDetails.find(f => f.id === props.info);
        return <Detail item={item} back={props.individual}/>
    }
    if (props.individual === "BMW"){
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