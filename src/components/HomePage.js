import React from "react";
import HomeAboutSection from './HomeAboutSection';
import HomeDonationSection from './HomeDonationSection';
import HomeHero from "./HomeHero";
import HomeStatBanner from './HomeStatBanner';
import VerseBanner from './VerseBanner';

const HomePage = () => {
  return (
    <React.Fragment>
      <HomeHero />
      <HomeStatBanner />
      <HomeAboutSection />
      <VerseBanner />
      <HomeDonationSection />
    </React.Fragment>
  );
};

export default HomePage;
