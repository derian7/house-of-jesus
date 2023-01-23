import React from "react";
import HomeAboutSection from './HomeAboutSection';
import HomeHero from "./HomeHero";
import HomeStatBanner from './HomeStatBanner';

const HomePage = () => {
  return (
    <React.Fragment>
      <HomeHero />
      <HomeStatBanner />
      <HomeAboutSection />
    </React.Fragment>
  );
};

export default HomePage;
