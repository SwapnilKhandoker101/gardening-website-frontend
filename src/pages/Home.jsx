import React from "react";
import Hero from "../components/Hero/Hero";
import LatestCollection from "../components/LatestCollection/LatestCollection";
import BestSeller from "../components/BestSeller/BestSeller";
import OurPolicy from "../components/OurPolicy/OurPolicy";
import NewsLetter from "../components/NewsLetter/NewsLetter";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <LatestCollection></LatestCollection>
      <BestSeller></BestSeller>
      <OurPolicy></OurPolicy>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
