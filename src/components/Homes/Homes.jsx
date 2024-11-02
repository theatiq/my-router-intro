import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/footer";
import { Outlet } from "react-router-dom";

const Homes = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Homes;
