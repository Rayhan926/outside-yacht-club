import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import RiseOfOutside from "../components/RiseOfOutside/RiseOfOutside";
import RoadMapActivations from "../components/RoadMapActivations/RoadMapActivations";
import SmartContractAddress from "../components/SmartContractAddress/SmartContractAddress";
import TheBathroom from "../components/TheBathroom/TheBathroom";
import TheSpecs from "../components/TheSpecs/TheSpecs";
import TheTeam from "../components/TheTeam/TheTeam";
import WellcomeToTheClub from "../components/WellcomeToTheClub/WellcomeToTheClub";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <RiseOfOutside />
      <TheSpecs />
      <WellcomeToTheClub />
      <TheBathroom />
      <RoadMapActivations />
      <TheTeam />
      <SmartContractAddress />
      <Footer />
    </>
  );
};

export default Home;
