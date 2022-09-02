import React, { useState } from 'react';

import styles from "../styles/Chickens.module.css";

import Food from './Food';

import chickenLeg from "../assets/foods/chicken-leg.jpg";
import wholeChicken from "../assets/foods/whole-chicken.jpg";
import chickenSizzler from "../assets/foods/chicken-sizzler.jpg";

const Chickens = () => {

    const [data] = useState([
        {id: 1 , image: chickenLeg , type: "Peri Peri Chicken" , name: "Chicken Leg" , oldPrice: "$14.00" , newPrice: "$10.00", quantity: 0},
        {id: 2 , image: wholeChicken , type: "Peri Peri Chicken" , name: "Roasted Chicken" , oldPrice: "$26.00" , newPrice: "$20.00", quantity: 0},
        {id: 3 , image: chickenSizzler , type: "Peri Peri Chicken" , name: "Chicken Sizzler" , oldPrice: "$18.00" , newPrice: "$16.00", quantity: 0}
    ])

    return (
        <div className={styles.container}>
            {
                data.map(item => <Food key={item.id} data={item}/>)
            }
        </div>
    );
};

export default Chickens;