import React from 'react';

import styles from "../styles/SocialMedia.module.css";

import foodImg from "../assets/foods/food-bg.jpg";
import instagram from "../assets/icons/instagram.png";
import twitter from "../assets/icons/twitter.png";
import facebook from "../assets/icons/facebook.png";

const SocialMedia = () => {
    return (
        <div className={styles.container}>
            <div className={styles.socialMedia}>
                <h1>Follow Our Social Media</h1>
                <button><img src={instagram} alt="instagram"/>instagram.com/periresto</button>
                <button><img src={twitter} alt="twitter"/>twitter.com/periresto</button>
                <button><img src={facebook} alt="facebook"/>facebook.com/perirestaurant</button>
            </div>
            <div className={styles.image}>
                <img src={foodImg} alt="food"/>
            </div>
        </div>
    );
};

export default SocialMedia;