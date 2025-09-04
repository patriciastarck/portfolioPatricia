import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      if (homeSection) {
        const homeHeight = homeSection.offsetHeight;
        if (window.scrollY > homeHeight / 2) {
          setShowLogo(false);
        } else {
          setShowLogo(true);
        }
      } else {
        setShowLogo(window.scrollY < 100);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavbarLinks = [
    { id: 1, name: "Home", link: "#home" },
    { id: 2, name: "About", link: "#about" },
    { id: 3, name: "Skills", link: "#skills" },
    { id: 4, name: "My Projects", link: "#projects" },
  ];

  return (
    <header
      className=" w-full z-20 flex h-20 "
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="container mx-auto flex items-center justify-end">
        {/* <a
          href="#home"
          className={`text-4xl font-[poppins] font-medium text-white transition-opacity duration-300`}
        >
          Portfolio
        </a> */}

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FiX className="w-8 h-8 text-white" />
          ) : (
            <FiMenu className="w-8 h-8 text-white" />
          )}
        </button>

        <nav className="hidden md:flex items-center gap-6">
          <div className="flex gap-6 font-[lato] text-red-500">
            {NavbarLinks.map((link) => (
              <a
                key={link.id}
                href={link.link}
                className="hover:text-gray-200 text-lg"
              >
                {link.name}
              </a>
            ))}
          </div>
          <button className="inline-flex justify-center text-white border-2 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded-full text-lg w-20">
            contact
          </button>
        </nav>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-[#801b9c] absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 pt-16`}
      >
        <button
          className="absolute top-5 right-5"
          onClick={() => setIsOpen(false)}
        >
          <FiX className="w-8 h-8" />
        </button>
        {NavbarLinks.map((link) => (
          <a
            key={link.id}
            href={link.link}
            className="text-lg text-white hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <button className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded-full text-lg">
          Contato
        </button>
      </div>
    </header>
  );
}
