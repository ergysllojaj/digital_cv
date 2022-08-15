import React from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { useState } from "react";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]  text-gray-300">
      <img src={Logo} alt="Logo" style={{ width: "50px" }} />

      {/* Menu */}
      <ul className="hidden md:flex ">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">Work</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? (
          <FaBars className="text-3xl z-10" />
        ) : (
          <FaTimes className="text-3xl z-10" />
        )}
      </div>

      {/* Mobile Menu */}

      <ul
        className={
          !nav
            ? "hidden"
            : "md:hidden absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <a href="#">Home</a>
        </li>
        <li className="py-6 text-4xl">
          <a href="#">About</a>
        </li>
        <li className="py-6 text-4xl">
          <a href="#">Skills</a>
        </li>
        <li className="py-6 text-4xl">
          <a href="#">Work</a>
        </li>
        <li className="py-6 text-4xl">
          <a href="#">Contact</a>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="flex fixed flex-col top-[35%] left-0">
        <ul>
          <li>
            <a href="/">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="/">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="/">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="/">
              <HiOutlineMail />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
