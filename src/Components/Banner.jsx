import React from 'react';

import styles from "../styles/Banner.module.css";

import chicken from "../assets/png/chicken.png"
import rosemary from "../assets/png/rosemary.png";
import redPepper from "../assets/png/red-pepper1.png";
import basil from "../assets/png/basil.png";

const Banner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h1>Peri Set Go!</h1>
                <h3>We invite you experience the fire that brings us all together.</h3>
                <a href='@'>Order Now</a>
            </div>
            <div className={styles.images}>
                <img className={styles.chicken} src={chicken} alt='chicken'/>
                <img className={styles.rosemary} src={rosemary} alt='rosemary'/>
                <img className={styles.pepper} src={redPepper} alt='pepper'/>
                <img className={styles.basil} src={basil} alt='basil'/>
            </div>
        </div>
    );
};

export default Banner;