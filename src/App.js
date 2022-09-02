import React from 'react';

import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import About from './Components/About';
import FeaturedMenu from './Components/FeaturedMenu';
import SocialMedia from './Components/SocialMedia';
import Footer from './Components/Footer';

const App = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <About />
            <FeaturedMenu />
            <SocialMedia />
            <Footer />
        </div>
    );
};

export default App;