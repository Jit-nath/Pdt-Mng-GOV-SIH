import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="h-[90px] bg-blue-400 flex items-center justify-between px-12 shadow-md">
            <h1 className="text-3xl font-bold text-gray-800">
                Coal India Contractor Portal
            </h1>
            <ul className="flex space-x-10 text-lxl text-black">
                <li className="hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                    <Link to="/">Home</Link>
                </li>
                <li className="hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                    <Link to="/about">About</Link>
                </li>
                <li className="hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                    <Link to="/contact">Contact</Link>
                </li>
                <li className="hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;

