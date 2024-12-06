"use client"; // Add this line to mark the component as a Client Component

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaTimes, FaBars, FaChevronDown, FaChevronUp } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ServiceSubLink {
  href: string;
  label: string;
  id: string;
}

interface NavLink {
  href?: string;
  label: string;
  id: string;
  hasDropdown?: boolean;
}

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] =
    useState<boolean>(false);
  const pathname = usePathname();

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
    // Close service dropdown when closing menu
    if (!isMenuOpen) {
      setIsServiceDropdownOpen(false);
    }
  };

  const handleLinkClick = (link: string): void => {
    setActiveLink(link);
    setIsMenuOpen(false);
    setIsServiceDropdownOpen(false);
  };

  const serviceSubLinks: ServiceSubLink[] = [
    {
      href: "/service/financial-advisory-services",
      label: "Financial Advisory Services",
      id: "financial-advisory",
    },
    {
      href: "/service/fund-portfolio-management",
      label: "Fund/Portfolio Management",
      id: "portfolio-management",
    },
    {
      href: "/service/securities-commodities-trading",
      label: "Securities & Commodities Trading",
      id: "securities-trading",
    },
    {
      href: "/service/structured-finance",
      label: "Project/Structured Finance",
      id: "structured-finance",
    },
    {
      href: "/service/corporate-finance",
      label: "Investment Banking",
      id: "corporate-finance",
    },
    {
      href: "/service/venture-capital",
      label: "Venture Capital Management",
      id: "venture-capital",
    },
  ];

  const navLinks: NavLink[] = [
    { href: "/", label: "Home", id: "home" },
    { href: "/about", label: "About", id: "about" },
    {
      label: "Our Services",
      id: "service",
      hasDropdown: true,
    },
    { href: "/contact", label: "Contact Us", id: "contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      const dropdown = document.getElementById("service-dropdown");
      const serviceButton = document.getElementById("service-button");
      const mobileMenu = document.getElementById("mobile-menu");
      const mobileButton = document.getElementById("mobile-button");

      // Handle desktop dropdown
      if (
        dropdown &&
        !dropdown.contains(event.target as Node) &&
        !serviceButton?.contains(event.target as Node)
      ) {
        setIsServiceDropdownOpen(false);
      }

      // Handle mobile menu
      if (
        mobileMenu &&
        !mobileMenu.contains(event.target as Node) &&
        !mobileButton?.contains(event.target as Node) &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
        setIsServiceDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const renderServiceDropdown = (): JSX.Element => {
    const clickableLinks = [
      "financial-advisory",
      "portfolio-management",
      "securities-trading",
    ];

    return (
      <div
        id="service-dropdown"
        className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg border border-gray-200 z-50 min-w-[250px]"
      >
        {serviceSubLinks.map((subLink) => {
          const isClickable = clickableLinks.includes(subLink.id);
          return isClickable ? (
            <Link
              key={subLink.id}
              href={subLink.href}
              className="block px-4 py-2 hover:bg-gray-100 text-gray-800 text-sm"
              onClick={() => {
                handleLinkClick(subLink.id);
                setIsServiceDropdownOpen(false);
              }}
            >
              {subLink.label}
            </Link>
          ) : (
            <span
              key={subLink.id}
              className="block px-4 py-2 text-gray-400 text-sm cursor-not-allowed"
            >
              {subLink.label}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 shadow-sm ${
        pathname === "/service" ? "bg-blue-500" : "bg-white"
      }`}
    >
      <div className="relative flex justify-between items-center px-5 md:px-10 w-full py-4">
        <Link href="/" className="relative z-20">
          <Image src="/icon.svg" width={99} height={32} alt="icon" priority />
        </Link>

        <div className="md:hidden flex items-center ml-auto">
          <button
            id="mobile-button"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="text-black relative z-20"
            type="button"
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
          id="mobile-menu"
          className={`fixed md:hidden left-0 right-0 top-0 bg-white transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          style={{ top: "70px", height: "calc(90vh - 72px - 100px)" }}
        >
          <div className="flex flex-col h-full overflow-y-auto">
            {navLinks.map((link) => (
              <div
                key={link.id}
                className={`border-b ${
                  activeLink === link.id ? "bg-green-100" : ""
                }`}
              >
                {link.hasDropdown ? (
                  <div className="flex flex-col">
                    <button
                      type="button"
                      onClick={() =>
                        setIsServiceDropdownOpen(!isServiceDropdownOpen)
                      }
                      className="flex items-center justify-between w-full py-4 px-5 hover:bg-gray-50 transition-colors duration-200 text-black"
                    >
                      <span>{link.label}</span>
                      {isServiceDropdownOpen ? (
                        <FaChevronUp className="transition-transform duration-200" />
                      ) : (
                        <FaChevronDown className="transition-transform duration-200" />
                      )}
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isServiceDropdownOpen ? "max-h-48" : "max-h-0"
                      }`}
                    >
                      {serviceSubLinks
                        .filter((subLink) =>
                          [
                            "financial-advisory",
                            "portfolio-management",
                            "securities-trading",
                          ].includes(subLink.id)
                        )
                        .map((subLink) => (
                          <Link
                            key={subLink.id}
                            href={subLink.href}
                            className="block py-3 text-black px-8 hover:bg-gray-50 text-sm border-t"
                            onClick={() => {
                              handleLinkClick(subLink.id);
                              setIsServiceDropdownOpen(false);
                            }}
                          >
                            {subLink.label}
                          </Link>
                        ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href || "#"}
                    className="block py-4 w-full text-left px-5 hover:bg-gray-50 transition-colors duration-200 text-black"
                    onClick={() => handleLinkClick(link.id)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:flex-grow justify-end space-x-10 text-sm relative">
          {navLinks.map((link) => (
            <div key={link.id} className="relative">
              {link.hasDropdown ? (
                <button
                  type="button"
                  id="service-button"
                  onClick={() =>
                    setIsServiceDropdownOpen(!isServiceDropdownOpen)
                  }
                  className={`text-black hover:text-gray-700 transition-colors duration-200 flex items-center ${
                    link.id === "service" && pathname.startsWith("/service/") // Apply bg-green-100 only for the "service" link
                      ? "bg-green-100 px-2 py-1 rounded-md"
                      : activeLink === link.id
                      ? "bg-green-100 px-2 py-1 rounded-md"
                      : ""
                  }`}
                >
                  {link.label}
                  <FaChevronDown
                    className={`ml-2 transition-transform duration-200 ${
                      isServiceDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ) : (
                <Link
                  href={link.href || "#"}
                  className={`text-black hover:text-gray-700 transition-colors duration-200 ${
                    link.id === "service" && pathname.startsWith("/service/") // Apply bg-green-100 only for the "service" link
                      ? "bg-green-100 px-2 py-1 rounded-md"
                      : activeLink === link.id
                      ? "bg-green-100 px-2 py-1 rounded-md"
                      : ""
                  }`}
                  onClick={() => handleLinkClick(link.id)}
                >
                  {link.label}
                </Link>
              )}
              {isServiceDropdownOpen &&
                link.id === "service" &&
                renderServiceDropdown()}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
