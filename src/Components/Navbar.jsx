import React, { useState } from 'react';
import {Link} from "react-router-dom";

import styles from "../styles/Navbar.module.css";

import logo from "../assets/icons/chicken.png";
import shopify from "../assets/icons/shopify.png";
import menu from "../assets/icons/menu.png";
import close from "../assets/icons/close.png";

const Navbar = () => {

    const [toggle , setToggle] = useState(false);

    const toggleHandler = () => {
        setToggle(!toggle);
    }

    return (
        <div className={styles.container}>
            <img className={styles.logo} src={logo} alt="logo" />
            <div className={`${styles.menu} ${toggle && styles.active}`}>
                <div className={styles.close}>
                    <img onClick={toggleHandler} src={close} alt="close"/>
                </div>
                <ul>
                    <li><a className={styles.order} href='@'>Order Now</a></li>
                    <li><a href='@'>About</a></li>
                    <li><a href='@'>Location</a></li>
                    <li><a href='@'>Menu</a></li>
                    <li><a href='@'>Franchise</a></li>
                </ul>
            </div>
            <div className={styles.shopify}>
                <Link to="@">
                    <img src={shopify} alt="shopify"/>
                    <span>0</span>
                </Link>
            </div>
            <img className={styles.hambergurMenu} onClick={toggleHandler} src={menu} alt='menu'/>
        </div>
    );
};

export default Navbar;