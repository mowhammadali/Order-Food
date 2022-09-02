import React from 'react';

import styles from "../styles/About.module.css";

import logo from "../assets/icons/chicken.png";
import pepper1 from "../assets/png/red-pepper2.png";
import pepper2 from "../assets/png/red-pepper3.png";
import pepper3 from "../assets/png/red-pepper4.png";

const About = () => {
    return (
        <div className={styles.container}>
            <img src={logo} alt='logo'/>
            <h1>Peri Restaurant</h1>
            <p>Peri Peri is a cuisine based off of the African Bird's-eye chilli pepper.
                 For many Years, this elusive pepper was tucked away in Southern Africa,
                until it was discovered by Portuguese explorers in the 20th century.
                they infused their dishes with the irresisible qualities of this pepper
                and ignited taste buds all around the world.<br /> Until now, the United States
                has remained in the dark about peri peri. Tribos would like to introduce you
                to the chilli that set the world ablaze.
            </p>
            <img className={styles.pepper1} src={pepper1} alt='pepper'/>
            <img className={styles.pepper2} src={pepper2} alt='pepper'/>
            <img className={styles.pepper3} src={pepper3} alt='pepper'/>
        </div>
    );
};

export default About;