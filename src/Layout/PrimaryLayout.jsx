import React from "react";
import Nav from "../Pages/Shared/Nav/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";

const PrimaryLayout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PrimaryLayout;
