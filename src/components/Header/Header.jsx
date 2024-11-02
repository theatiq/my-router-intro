import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1 className="text-center">My React Router Project</h1>
      <nav className="flex justify-evenly">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/allPosts">All Posts</NavLink>
        <NavLink to="/services">Our Services</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <NavLink to="/posting">Posting</NavLink>
      </nav>
    </div>
  );
};

export default Header;
