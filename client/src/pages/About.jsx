import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Team from "../components/Team";
import AboutUsDiv from "../components/AboutUsDiv";

function HomePage() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <AboutUsDiv></AboutUsDiv>
        <Team></Team>
      </main>
      <Footer></Footer>
    </>
  );
}

export default HomePage;
