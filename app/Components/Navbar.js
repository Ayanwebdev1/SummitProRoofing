"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Home } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // current route

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    ["HOME", "/"],
    ["ABOUT US", "/about"],
    ["SERVICES", "/services"],
    ["PROJECTS", "/projects"],
    ["REVIEWS", "/reviews"],
    ["CONTACT US", "/contact"],
  ];

  return (
    <>
      <nav className="bg-white/70 backdrop-blur sticky top-0 z-50 border-gray-200 shadow h-[90px] flex items-center justify-between px-10">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center h-full gap-2 cursor-pointer" aria-label="SummitPro Roofing Home">
            <Home className="w-8 h-8 text-white bg-orange-600 rounded-[5px] p-1" />
            <h1 className="text-[25px] font-bold text-[#004099]">
              SUMMITPRO<span className="text-[#e85b30]">ROOFING</span>
            </h1>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-[15px] font-semibold text-gray-700">
          {navLinks.map(([name, link]) => (
            <Link key={name} href={link}>
              <li className="hover:text-orange-600 cursor-pointer transition">{name}</li>
            </Link>
          ))}
        </ul>

        {/* Hamburger & Mobile Menu */}
        <div className="flex items-center gap-6 md:hidden">
          <button
            onClick={toggleMenu}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            name={isOpen ? "Close Menu Button" : "Open Menu Button"}
            className="text-gray-700 hover:text-green-600 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop GET A QUOTE */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/getaquote">
            <button
              name="Get a Quote Button"
              aria-label="Get a Quote"
              className="bg-orange-500 cursor-pointer text-white font-semibold px-5 py-2 rounded-md hover:bg-orange-600 transition"
            >
              GET A QUOTE
            </button>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-0 right-0 z-50 bg-white w-[80%] max-w-[300px] h-full shadow-lg overflow-auto">
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
              name="Close Menu Button"
              className="text-gray-700 hover:text-green-600"
            >
              <X size={28} />
            </button>
          </div>

          {/* Menu Items */}
          <ul className="flex flex-col gap-4 px-5 py-2 text-gray-700 font-semibold">
            {navLinks.map(([name, link]) => (
              <Link key={name} href={link} onClick={() => setIsOpen(false)}>
                <li
                  className={`cursor-pointer transition px-3 py-2 rounded-md ${
                    pathname === link ? "bg-orange-600 text-white" : "hover:bg-green-100"
                  }`}
                >
                  {name}
                </li>
              </Link>
            ))}

            {/* Mobile GET A QUOTE */}
            <Link href="/getaquote">
              <button
                name="Get a Quote Button"
                aria-label="Get a Quote"
                className="bg-orange-500 cursor-pointer text-white font-semibold px-5 py-2 rounded-md hover:bg-orange-600 transition mt-2"
              >
                GET A QUOTE
              </button>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
