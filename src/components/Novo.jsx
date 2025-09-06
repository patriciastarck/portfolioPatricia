import React from "react";
import globo from "../assets/globo.jpeg";
import "../index.css";

import Navbar from "./Navbar";
import gitHub from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

export default function Novo() {
  return (
    <div className="bg-[linear-gradient(1deg,rgba(2,0,36,0.97)_35%,rgba(9,9,121,1)_99%)] min-h-screen flex flex-col w-full gap-10">
      <Navbar />

      <main
        id="home"
        className="flex flex-col justify-around items-center md:flex-row  px-4 md:px-20 lg:px-32 xl:px-52 gap-6"
      >
        {/* ESQUERDA */}
        <section
          className="w-3/6 flex justify-center  "
          // data-aos="fade-down"
          data-aos-delay="800"
        >
          <div className="sm:p-6 md:p-8 flex flex-col w-full gap-4 sm:gap-6  ">
            <header className="flex flex-col w-full gap-7">
              <h1 className="font-[roboto] text-[rgb(240,248,255)] text-lg lg:text-5xl lg:text-left font-bold">
                Patricia Starck Bernardi
              </h1>
              <h2 className="text-md font-[jura] text-[#F0F8FF] sm:text-center lg:text-left font-bold">
                Analista de Sistemas e Full Stack Developer
              </h2>
              <p className="font-extralight tes text-[#F0F8FF] text-sm  sm:text-center ">
                Java | Spring Boot | JavaScript | React | Tailwind{" "}
              </p>
            </header>

            <div className="flex items-center justify-center md:justify-start space-x-4 mt-4">
              <a
                href="https://github.com/patriciastarck"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={gitHub}
                  alt="github"
                  className="w-9 h-9 sm:w-11 sm:h-11 hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/patricia-starck-bernardi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedin}
                  alt="linkedin"
                  className="w-9 h-9 sm:w-11 sm:h-11 hover:scale-110 transition-transform"
                />
              </a>
            </div>
          </div>
        </section>
        <div className="w-4/12 flex flex-col">
          <section className="w-full apresentacao flex justify-center">
            <div className="globo-img "></div>
          </section>
        </div>
      </main>
    </div>
  );
}
