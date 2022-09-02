import React from 'react';

import styles from "../styles/Footer.module.css";

import instagram from "../assets/icons/white-instagram.png";
import twitter from "../assets/icons/white-twitter.png";
import facebook from "../assets/icons/white-facebook.png";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <h1 className={styles.title}>Peri Peri</h1>
                <p>Tribos brings innovative flair to world famous Peri Peri cuisine.
                    We invite you to experience the fire that brings us all together.
                </p>
            </div>
            <div className={styles.navbar}>
                <ul className={styles.menu}>
                    <li>Our Menu</li>
                    <li>About</li>
                    <li>Location</li>
                    <li>Menu</li>
                    <li>Franchise</li>
                </ul>
                <ul className={styles.resources}>
                    <li>Resource</li>
                    <li>Careers</li>
                    <li>Press</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className={styles.socialMedia}>
                <h5>Social Media</h5>
                <div className={styles.icons}>
                    <img src={facebook} alt='facebook'/>
                    <img src={twitter} alt='twitter'/>
                    <img src={instagram} alt='instagram'/>
                </div>
            </div>
        </div>
    );
};

export default Footer;