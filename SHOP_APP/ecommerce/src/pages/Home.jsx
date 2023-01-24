import React from "react";
import Announcements from "../components/Announcements";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Wrapper from "../components/Wrapper";
import Work from "../components/Work";

const Home = () => {
  return (
    <div>
      <Announcements />
      <Navbar />
      <Slider />
      <Categories />
      <Products/>
      <Work/>
      <Wrapper/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;