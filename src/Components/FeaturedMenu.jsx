import React , {useEffect , useRef} from 'react';
import {Link , Routes , Route, Navigate} from "react-router-dom";

import Chickens from './Chickens';
import RiceBowls from './RiceBowls';
import Bergurs from './Bergurs';
import Pizza from './Pizza';

import styles from "../styles/FeaturedMenu.module.css";

const FeaturedMenu = () => {

    useEffect(() => {
        
        const pathName = window.location.pathname;

        if(pathName === link1.current.pathname){
            link1.current.setAttribute("style" , "color: #d51010 ; border-bottom: 4px solid #d51010");
        }
        else if(pathName === link2.current.pathname){
            link2.current.setAttribute("style" , "color: #d51010 ; border-bottom: 4px solid #d51010");
        }
        else if(pathName === link3.current.pathname){
            link3.current.setAttribute("style" , "color: #d51010 ; border-bottom: 4px solid #d51010");
        }
        else if(pathName === link4.current.pathname){
            link4.current.setAttribute("style" , "color: #d51010 ; border-bottom: 4px solid #d51010");
        }

    } , [])

    const link1 = useRef(null);
    const link2 = useRef(null);
    const link3 = useRef(null);
    const link4 = useRef(null);

    const clickHandler = (e) => {

        const links = document.querySelectorAll(`a[name="link"]`);

        links.forEach((item) => {
            item.setAttribute("style" , "color: #272727; border: none")
        })
        
        const ele = e.target;
        ele.setAttribute("style" , "color: #d51010 ; border-bottom: 4px solid #d51010");
    }

    return (
        <div className={styles.container}>
            <h1>Featured Menu</h1>
            <div className={styles.foodTypes}>
                <Link name="link" onClick={clickHandler} ref={link1} to="/chickens">Peri Peri Chickens</Link>
                <Link name="link" onClick={clickHandler} ref={link2} to="/salads&rice">Salads & Rice Bowls</Link>
                <Link name="link" onClick={clickHandler} ref={link3} to="/burgers">Burgers , Pitas & Wraps</Link>
                <Link name="link" onClick={clickHandler} ref={link4} to="/pizza">Peri Peri Pizza</Link>
            </div>
            <Routes>
                <Route path='/chickens' element={<Chickens />}/>
                <Route path='/salads&rice' element={<RiceBowls />}/>
                <Route path='/burgers' element={<Bergurs />}/>
                <Route path='/pizza' element={<Pizza />}/>
                <Route path='*' element={<Navigate to="/chickens" replace/>} />
            </Routes>
            <a href='@' className={styles.more}>More Menu</a>
        </div>
    );
};

export default FeaturedMenu;