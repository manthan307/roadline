"use client";
import { useState, useEffect } from "react";
import Truck from "@/public/truck.svg";

const Nav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    document.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup scroll event listener
      document.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const navoptions = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
  ];

  return (
    <nav
      className={`fixed inset-x-0 mx-auto top-5 rounded-2xl w-11/12 p-2 bg-[#fff] text-foreground shadow-xl z-30 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center px-4 py-2">
        <Truck className="w-8 h-8" />
        <ul className="hidden sm:block">
          {navoptions.map((navoption, index) => (
            <li key={index} className="inline-block mx-4 hover:border-b">
              <a href={navoption.href} className="hover:text-accent">
                {navoption.name}
              </a>
            </li>
          ))}
        </ul>
        <span className="w-3"></span>
        <button
          className="w-8 h-8 text-center md:hidden p-1 hover:border hover:border-[#ccc] focus:border focus:border-[#ccc] rounded-sm"
          onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu
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
        className={`w-full bg-[#fff] overflow-hidden ${
          isMenuOpen ? "h-auto" : "h-0"
        }`}
      >
        <ul className="flex flex-col items-center py-4">
          {navoptions.map((navoption, index) => (
            <li key={index} className="py-2">
              <a
                href={navoption.href}
                className="text-lg hover:text-accent"
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                {navoption.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
