import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import robotCafeImage from "../assets/robotCafe.png";
import liter from "../assets/literalutaImagem.jpg";
import secret from "../assets/secretNumber.png";
import secretNum from "../assets/secret_number_p_gemini.png";
import literal from "../assets/Gemini_Generated_Image_liter.png";
import conversorMoedas from "../assets/conversorDeMoedasJava.png";
import javaImg from "../assets/Gemini_Java.png";
import javaImg2 from "../assets/Gemini_Java2.png";

const ProjectCarousel = () => {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    rows: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  const projects = [
    {
      id: 1,
      img: secretNum,
      title: "Jogo do Numero Secreto - JavaScript",
    },
    { id: 2, img: literal, title: "Buscador de Livros - Java 17 Spring Boot" },
    { id: 3, img: conversorMoedas, title: "Conversor de Moedas - Java 21" },
    { id: 4, img: javaImg, title: "Projeto 3" },
    { id: 5, img: javaImg2, title: "Projeto 3" },
  ];

  return (
    // Contêiner principal com posicionamento relativo para os filhos.
    <div className="relative min-h-screen flex flex-col items-center justify-evenly bg-[linear-gradient(360deg,rgba(8,0,36,0.97)35%,rgba(9,9,121,1)99%)]">
      <h1 className="text-3xl sm:text-4xl font-bold text-white">
        My <span className="text-purple-400">Projects</span>
      </h1>

      {/* Contêiner do carrossel */}
      <div className=" relative z-10 w-full md:w-3/12">
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id} className="p-4">
              <div className="text-center text-white">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <h3 className="mt-4 text-xl font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProjectCarousel;
