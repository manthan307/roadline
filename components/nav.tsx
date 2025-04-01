"use client";
import { useState, useEffect } from "react";
import Truck from "@/public/truck.svg";
import Link from "next/link";

const Nav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const navoptions = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact Us", href: "#contact" },
  ];

  const handleScrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close the menu if it's open
    }
  };

  return (
    <nav
      className={`fixed inset-x-0 mx-auto top-5 rounded-2xl w-11/12 p-2 bg-[#fff] text-foreground shadow-xl z-30 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-96"
      }`}
    >
      <div className="flex justify-between items-center px-4 py-2">
        <Link href={"/"}>
          <Truck className="w-8 h-8 mr-2" />
        </Link>
        <ul className="hidden sm:block">
          {navoptions.map((navoption, index) => (
            <li key={index} className="inline-block mx-4 hover:border-b">
              <button
                onClick={() => handleScrollToSection(navoption.href)}
                className="hover:text-accent"
              >
                {navoption.name}
              </button>
            </li>
          ))}
        </ul>
        <Link
          href="/"
          className="text-accent border border-accent rounded-lg p-2 hidden md:block"
        >
          Track Delivery
        </Link>
        <button
          className="w-8 h-8 text-center md:hidden p-1 hover:border hover:border-[#ccc] focus:border focus:border-[#ccc] rounded-sm"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute rounded-b-2xl top-full left-0 w-full bg-[#fff] shadow-md transition-transform duration-300 ${
          isMenuOpen ? "-translate-y-3" : "-translate-y-96"
        }`}
      >
        <ul className="flex flex-col items-center py-4">
          {navoptions.map((navoption, index) => (
            <li key={index} className="py-2">
              <button
                onClick={() => handleScrollToSection(navoption.href)}
                className="text-lg hover:text-accent"
              >
                {navoption.name}
              </button>
            </li>
          ))}
          <li className="py-2">
            <Link href={"/"} className="text-lg hover:text-accent">
              Track Delivery
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
