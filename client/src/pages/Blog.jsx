import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Navbar></Navbar>
      <main className="min-h-screen flex align-items-center justify-center align-middle">
        <h2 className="text-black text-4xl font-bold">Blog Page</h2>
      </main>
      <Footer></Footer>
    </>
  );
}

export default HomePage;
