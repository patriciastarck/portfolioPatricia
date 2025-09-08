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
    { id: 2, name: "Sobre", link: "#sobre" },
    { id: 3, name: "Habilidades", link: "#habilidades" },
    { id: 4, name: "Meus Projetos", link: "#meus-projetos" },
    { id: 5, name: "Contato", link: "#contato" },
  ];

  return (
    <div className="w-screen flex items-center justify-center">
      <header
        className="z-20 flex h-20 w-11/12 items-center justify-center "
        // data-aos="fade-up"
        data-aos-delay="300"
      >
        <h1 className="text-4xl font-[jura] font-bold italic text-white mr-3.5vvg">
          Portfolio
        </h1>
        <div className="container mx-auto flex items-center justify-end">
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
            <div className="flex gap-6 font-[jura] font-bold text-white">
              {NavbarLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.link}
                  className="hover:text-blue-400 text-lg"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </nav>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden bg-[linear-gradient(1deg,rgba(2,0,36,0.97)_35%,rgba(9,9,121,1)_99%)] absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center gap-2.5 space-y-8 pt-16`}
        >
          <button
            className="absolute top-5 right-5 text-white"
            onClick={() => setIsOpen(false)}
          >
            <FiX className="w-8 h-8" />
          </button>
          {NavbarLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="text-lg text-white hover:text-blue-400"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </header>
    </div>
  );
}
