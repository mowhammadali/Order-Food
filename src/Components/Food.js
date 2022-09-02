import React, { useState } from 'react';

import styles from "../styles/Food.module.css";

import medal from "../assets/icons/medal2.png";
import heart from "../assets/icons/heart.png";
import trash from "../assets/icons/trash.svg";

const Food = ({data}) => {

    const {image , type , name , oldPrice , newPrice , quantity} = data; 

    const [count , setCount] = useState(quantity);

    const quantityHandler = (event) => {
        if(event.target.name === "order"){
            setCount(1);
        }

        else if(event.target.name === "plus"){
            setCount(prevCount => prevCount + 1);
        }

        else if(event.target.name === "minus"){
            setCount(prevCount => prevCount - 1);
        }

        else if(event.currentTarget.name === "trash"){
            setCount(0);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.images}>
                <img className={styles.foodImg} src={image} alt='food'/>
                <img className={styles.medal} src={medal} alt='medal'/>
            </div>
            <span className={styles.type}>{type}</span>
            <h3>{name}</h3>
            <div className={styles.prices}>
                <p>{oldPrice}</p>
                <p>{newPrice}</p>
            </div>
            <div className={styles.buttons}>
                {
                    count === 0 && <button name="order" onClick={quantityHandler} className={styles.order}>Order Now</button>
                }
                {
                    count > 0 &&
                    <div className={styles.actions}>
                        {count > 1 ? <button className={styles.minus} name="minus" onClick={quantityHandler}>-</button> : <button className={styles.trash} name="trash" onClick={quantityHandler}><img src={trash} alt='trash'/></button>}
                        <span className={styles.count}>{count}</span>
                        <button className={styles.plus} name="plus" onClick={quantityHandler}>+</button>
                    </div>
                }
                <img className={styles.heart} src={heart} alt="heart"/>
            </div>
        </div>
    );
};

export default Food;