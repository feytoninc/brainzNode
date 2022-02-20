import React from "react";
import Footer from "../components/Footer";
import HomeHero from "../components/HomeHero";
import Navbar from "../components/Navbar";
import WhyCard from "../components/why";
import "./css/hero.css";

function HomePage() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <HomeHero></HomeHero>
        <WhyCard></WhyCard>
      </main>

      <Footer></Footer>
    </>
  );
}

export default HomePage;
