import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";


const Layout = ({ Children }) => {
  return (
    <>
      <Navbar />
      <Children />
      <Footer />
    </>
  );
};

export default Layout;
