import React , {useState} from 'react';

import styles from "../styles/Chickens.module.css";

import Food from './Food';

import pepperoniPizza from "../assets/foods/pepperoni-pizza.jpg";
import veggiePizza from "../assets/foods/veggie-pizza.jpg";
import chickenPizza from "../assets/foods/chicken-pizza.jpg";

const Pizza = () => {

    const [data] = useState([
        {id: 1 , image: pepperoniPizza , type: "Peri Peri Pizza" , name: "Pepperoni Pizza" , oldPrice: "$46.00" , newPrice: "$42.00" , quantity: 0},
        {id: 2 , image: veggiePizza , type: "Peri Peri Pizza" , name: "Veggie Pizza" , oldPrice: "$32.00" , newPrice: "$30.00" , quantity: 0},
        {id: 3 , image: chickenPizza , type: "Peri Peri Pizza" , name: "Chicken Pizza" , oldPrice: "$40.00" , newPrice: "$36.00" , quantity: 0}
    ])

    return (
        <div className={styles.container}>
            {
                data.map(item => <Food key={item.id} data={item}/>)
            }
        </div>
    );
};

export default Pizza;