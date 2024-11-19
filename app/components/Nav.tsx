"use client";

import Image from "next/image";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import Link from "next/link";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home", id: "home" },
    { href: "/about", label: "About", id: "about" },
    { href: "/service", label: "Our Services", id: "service" },
    { href: "/contact", label: "Contact Us", id: "contact" },
  ];

  return (
    <div className="relative flex justify-between items-center px-5 md:px-10 w-full pt-5">
      <Link href="/">
        <Image src="/icon.svg" width={99} height={32} alt="icon" priority />
      </Link>

      <div className="md:hidden flex items-center ml-auto">
        <button
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-black"
        >
          {isMenuOpen ? (
            <FaTimes className="text-2xl text-black transition-all duration-200 ease-in-out" />
          ) : (
            <FaBars className="text-2xl text-black transition-all duration-200 ease-in-out" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white text-center shadow-lg rounded-md transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "flex flex-col" : "hidden"
        }`}
      >
        {navLinks.map((link) => (
          <div
            key={link.id}
            className={`border-b ${
              activeLink === link.id ? "bg-green-100" : ""
            }`}
          >
            <Link
              href={link.href}
              className="block py-3 w-full text-left px-5 hover:bg-gray-100 transition-colors duration-200 text-black"
              onClick={() => handleLinkClick(link.id)}
            >
              {link.label}
            </Link>
          </div>
        ))}
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex md:flex-grow justify-end space-x-10 text-sm">
        {navLinks.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className={`text-black hover:text-gray-700 transition-colors duration-200 ${
              activeLink === link.id ? "bg-green-100 px-2 py-1 rounded-md" : ""
            }`}
            onClick={() => handleLinkClick(link.id)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Nav;
