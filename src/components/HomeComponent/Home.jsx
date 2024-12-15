// import PropTypes from 'prop-types';

import axios from "axios";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import HomeHeroSection from "./HomeHeroSection";
import TopRatedGamesSection from "./TopRatedGamesSection";
// import TrandingGamesSection from "./TrandingGamesSection";
// import StatsSection from "./StatsSection";

const Home = () => {
  return (
    <main className="space-y-16">
      <Helmet>
        <title>Home | CHILL GAMER</title>
      </Helmet>
      <HomeHeroSection />
      <TopRatedGamesSection />
      {/* <TrandingGamesSection />
      <StatsSection /> */}
    </main>
  );
};

// Home.propTypes = {

// };

export default Home;
