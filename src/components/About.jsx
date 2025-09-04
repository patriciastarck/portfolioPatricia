// import React from 'react'
import React from "react";

import cyber from "../assets/StockCake-Cybersecurity Data Analysis_1755795948.jpg";
import work from "../assets/StockCake-Coding Workstation Ambiance_1757003024.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[linear-gradient(360deg,rgba(76,25,99,1)_20%,rgba(22,8,28,1)_54%)] min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-6"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <figure
          data-aos="fade-right"
          data-aos-delay="500"
          className="flax flex-wrap justify-center gap-4 relative"
        >
          {/* <div className='"h-[200px] sm:h-[300px] w-[300px] sm:w-[400px] lg:h-[300px] lg:w-[500px] bg-gradient-to-l
                from-[#6d2897] via-[#6c95f5] to-[#bb61c5] absolute transform rotate-12 z-0 right-5 -top-2
                md:top-10 rounded-full'></div> */}
          {/* <img 
                src={robot} 
                alt="about robot image" 
                className='absolute -top-2 left-5 sm:left-10 transform -translate-y-12 z-20 w-24 h-24 sm:w-32 sm:h-32
                rounded-3xl shadow-lg' /> */}
          {/* <img 
                src={baloom} 
                alt="about robot image"
                className='relative z-10 w-36 h-44 sm:w-40 sm:h-40 md:w-72 md:h-96 roudended-lg shadow-lg'
                /> */}

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
            <div
              className="absolute z-0 w-40 h-40 sm:w-11/12 sm:h-11/12 bg-[#990dc7] rounded-full blur-3xl opacity-30
                -top-5 left-1"
            ></div>
            {/* <div
              className="absolute z-0 w-40 h-40 sm:w-90 sm:h-20 bg-[#6F00FF] rounded-full blur-3xl opacity-50
                bottom-0 left-1/2 transform -translate-x-1/2"
            ></div> */}
          </figure>
        </figure>

        <article
          data-aos="fade-left"
          data-aos-delay="500"
          className="text-center lg:text-left relative"
        >
          {/* <div
            className="absolute z-0 w-40 h-40 sm:w-90 sm:h-20 bg-[#990dc7] rounded-full blur-3xl opacity-60
                -top-5 left-1"
          ></div> */}

          <header>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Sobre mim
            </h1>
          </header>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6s sm:mb-8 leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            corporis delectus dolorem tenetur a voluptatum molestias.
          </p>
          <footer>
            <button
              className="inline-flex text-white border-2 py-2 px-4 sm:px-6 focus:outline-none w-30
                    hover:bg-[#6F00FF] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-sm:text-lg"
            >
              Saiba mais
            </button>
          </footer>
        </article>
      </div>
      <div></div>
    </section>
  );
}
