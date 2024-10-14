// Navbar.tsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar flex justify-center bg-blue-400 rounded-full p-4 space-x-8 m-auto shadow-md w-1/2">
      <div className="text-white text-2xl">home</div>
      <div className="text-white text-2xl">about</div>
      <div className="text-white text-2xl">contact</div>
      <div className="text-white text-2xl">login</div>
    </nav>
  );
};

export default Navbar;
