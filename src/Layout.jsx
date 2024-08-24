import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="pt-[4.3rem]">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
