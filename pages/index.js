import React from "react";
import BuyAnApe from "../components/BuyAnApe";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import RiseOfOutside from "../components/RiseOfOutside";
import RoadMapActivations from "../components/RoadMapActivations";
import SmartContractAddress from "../components/SmartContractAddress";
import TheBathroom from "../components/TheBathroom";
import TheSpecs from "../components/TheSpecs";
import TheTeam from "../components/TheTeam";
import WellcomeToTheClub from "../components/WellcomeToTheClub";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <RiseOfOutside />
      <BuyAnApe />
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
