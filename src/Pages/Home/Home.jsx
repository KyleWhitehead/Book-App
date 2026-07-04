import React from "react";
import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";
import HomeNavbar from "../../components/HomeNavbar/HomeNavbar";
import Landing from "../../components/Landing/Landing";
import Numbers from "../../components/Numbers/Numbers";
import Reviews from "../../components/Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <HomeNavbar />
      <Landing />
      <Features />
      <Footer />
      <Numbers />
      <Reviews />
    </div>
  );
};

export default Home;
