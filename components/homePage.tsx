import React from "react";
import HeroSection from "./homePageContent/heroSection";
import QuickLinks from "./homePageContent/quickLinks";
import LatestUpdates from "./homePageContent/latestUpdates";
import ThingsToKnow from "./homePageContent/thingsToKnow";

const HomePage = () => {
  return (
    <div>
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Quick Links Section */}
        <QuickLinks />

        {/* Latest Updates Section */}
        <LatestUpdates />

        {/* Things To Know Section */}
        <ThingsToKnow />
      </main>
    </div>
  );
};

export default HomePage;
