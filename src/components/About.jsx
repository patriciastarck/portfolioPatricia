// import React from 'react'
import React from "react";

import cyber from "../assets/StockCake-Cybersecurity Data Analysis_1755795948.jpg";
import work from "../assets/StockCake-Coding Workstation Ambiance_1757003024.jpg";

export default function About() {
  return (
    <section
      id="sobre"
      className="bg-[linear-gradient(360deg,rgba(76,25,99,1)_20%,rgba(22,8,28,1)_54%)] min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-6"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <figure
          data-aos="fade-right"
          data-aos-delay="500"
          className="flax flex-wrap justify-center gap-4 relative"
        >
          <figure
            data-aos="fade-right"
            data-aos-delay="1000"
            className="flex-1 flex justify-center md:justify-center mt-0"
          >
            <img
              src={cyber}
              alt="teclado iluminado"
              class="w-4/6"
              className="h-[330px] sm:h-[440px] md:h-[440px] w-[450px] sm:w-[380px] object-cover rounded-lg shadow-xl "
            />
          </figure>
        </figure>

        <article
          data-aos="fade-left"
          data-aos-delay="500"
          className="sm:text lg:w-8/10 text-center lg:text-left relative"
        >
          {/* <div
            className="absolute z-0 w-40 h-40 sm:w-90 sm:h-20 bg-[#990dc7] rounded-full blur-3xl opacity-60
                -top-5 left-1"
          ></div> */}

          <header className="font-[jura]">
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Sobre mim
            </h1>
          </header>
          <p className="text-base sm:text-sm md:text-md text-gray-300 mb-6s sm:mb-8 leading-relaxed text-justify">
            Analista de sistemas e desenvolvedora full stack com olhar
            direcionado para a inovação. Minha experiência na área de nutrição
            me ensinou a importância da análise detalhada, da resolução de
            problemas e da criação de soluções personalizadas. Hoje, aplico
            essas habilidades para desenvolver sistemas eficientes, assegurando
            que cada projeto seja elaborado com precisão e propósito.
          </p>
          <footer>
            {/* <button
              className="inline-flex text-white border-2 py-2 px-4 sm:px-6 focus:outline-none w-30
                    hover:bg-[#6F00FF] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-sm:text-lg"
            >
              Saiba mais
            </button> */}
          </footer>
        </article>
      </div>
      <div></div>
    </section>
  );
}
