import React , {useState} from 'react';

import styles from "../styles/Chickens.module.css";

import Food from './Food';

import chickenSalad from "../assets/foods/chicken-salad.jpg";
import barbecuedChicken from "../assets/foods/barbecued-chicken.jpg";
import beefRice from "../assets/foods/beef-rice-bowl.webp";

const RiceBowls = () => {

    const [data] = useState([
        {id: 1 , image: chickenSalad , type: "Salads $ Rice Bowls" , name: "Chicken Salad" , oldPrice: "$15.00" , newPrice: "$12.00" , quantity: 0},
        {id: 2 , image: barbecuedChicken , type: "Salads $ Rice Bowls" , name: "Barbecued Chicken" , oldPrice: "$22.00" , newPrice: "$18.00" , quantity: 0},
        {id: 3 , image: beefRice , type: "Salads $ Rice Bowls" , name: "Beef Rice Bowl" , oldPrice: "$30.00" , newPrice: "$24.00" , quantity: 0}
    ])

    return (
        <div className={styles.container}>
            {
                data.map(item => <Food key={item.id} data={item}/>)
            }
        </div>
    );
};

export default RiceBowls;