import React from 'react';
import Hero from '../components/Hero/Hero';
import LatestCollection from '../components/LatestCollection/LatestCollection';
import BestSeller from '../components/BestSeller/BestSeller';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <LatestCollection></LatestCollection>
            <BestSeller></BestSeller>
            
        </div>
    );
};

export default Home;