"use client";
import { useState, useEffect } from "react";
import Truck from "@/public/truck.svg";

const Nav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const navoptions = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
  ];

  return (
    <nav
      className={`fixed w-full py-3 bg-background text-foreground shadow-md transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center px-4 py-2">
        <Truck className="w-8 h-8" />
        <ul className="hidden sm:block">
          {navoptions.map((navoption, index) => (
            <li
              key={index}
              className="inline-block mx-4 hover:border-b transition-discrete ease-in-out "
            >
              <a href={navoption.href} className="hover:text-accent">
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
