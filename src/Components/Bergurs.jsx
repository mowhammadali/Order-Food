import React , {useState} from 'react';

import styles from "../styles/Chickens.module.css";

import Food from './Food';

import ubetchaBurger from "../assets/foods/ubetcha-bergur.jpg";
import pitaWrap from "../assets/foods/pita-wrap.jpg";
import chickenBurger from "../assets/foods/chicken-burger.webp";

const Bergurs = () => {

    const [data] = useState([
        {id: 1 , image: ubetchaBurger , type: "Burgers & Pita Wrap" , name: "Ubetcha Bergur" , oldPrice: "$12.00" , newPrice: "$8.00" , quantity: 0},
        {id: 2 , image: pitaWrap , type: "Burgers & Pita Wrap" , name: "Pita Wrap" , oldPrice: "$14.00" , newPrice: "$11.00" , quantity: 0},
        {id: 3 , image: chickenBurger , type: "Burgers & Pita Wrap" , name: "Chicken Bergur" , oldPrice: "$14.00" , newPrice: "$12.00" , quantity: 0}
    ])

    return (
        <div className={styles.container}>
            {
                data.map(item => <Food key={item.id} data={item}/>)
            }
        </div>
    );
};

export default Bergurs;