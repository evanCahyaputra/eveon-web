import React, { useContext } from "react";
import Layout from "../components/Layout";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import CTAThree from "../components/CTAThree";
import Contact from "../components/Contact";
import Services from "../components/Services";
import CTAOne from "../components/CTAOne";
import CTATwo from "../components/CTATwo";
import FunFact from "../components/FunFact";
import MenuContextProvider from "../context/MenuContext";

const HomePage = () => {
  return (
    <MenuContextProvider>
      <Preloader />

      <Layout pageTitle="Eveon | Home Page">
        <Header
          btnClass="main-nav__btn"
          extraClassName="site-header-one__fixed-top"
        />
        <Banner />
        <Services />
        <FunFact />
        <CTATwo />
        <CTAOne />
        <Contact />
        <CTAThree />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default HomePage;
