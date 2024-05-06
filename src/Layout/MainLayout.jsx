import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>

      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
