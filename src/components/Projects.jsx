import React from "react";
import purpleAstro from "../assets/robotBook.png";
import game from "../assets/secretNumber.png";
import conversor from "../assets/conversor_img.png";
import literalura from "../assets/literalura_img.png";
import code from "../assets/StockCake-Coding in Progress_1756407354.jpg";
import teste from "../assets/teste.png";
import forum from "../assets/forumHub_img.png";

const ProjectCard = ({ image, title, description, link }) => {
  return (
    // Substitua 'max-w-sm' por uma largura fixa como 'w-72'
    <article className="relative w-62 shadow-sm shadow-[rgba(9,9,121,1)] bg-gray-800 rounded overflow-hidden group flex flex-col text-center">
      <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#0b2caf] rounded-full blur-3xl opacity-50 -top-5 left-10"></div>
      <div className="relative z-10 flex flex-col flex-1">
        <figure className="relative h-46">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute h-[202px] inset-0 flex items-center justify-center bg-opacity-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <button className="bg-blue-800 text-sm font-bold text-white py-2 px-4 rounded-3xl shadow hover:text-shadow-white hover:bg-[#2879d5] group-hover:opacity-90">
              Live Preview
            </button>
          </a>
        </figure>
        <div className="px-6 py-4 flex-1 flex flex-col justify-between">
          <header>
            <h3 className="text-white font-bold text-center text-mb mb-2">
              {title}
            </h3>
          </header>
          <p className="text-gray-200 text-sm">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  const listProjects = [
    {
      image: game,
      title: "Jogo do número secreto - JavaScript",
      description: "Redireciona ao Github do projeto",
      link: "https://jogo-henna-rho-92.vercel.app/",
    },
    {
      image: literalura,
      title: "Projeto Literalura",
      description: "Redireciona ao Github do projeto",
      link: "https://github.com/patriciastarck/literalura",
    },
    {
      image: conversor,
      title: "Conversor de moeda - Java",
      description: "Redireciona ao Github do projeto",
      link: "https://github.com/patriciastarck/conversor-de-moedas",
    },
    {
      image: forum,
      title: "Forum Hub - Java Spring Boot",
      description: "Redireciona ao Github do projeto",
      link: "https://github.com/patriciastarck/forumHub",
    },
    {
      image: conversor,
      title: "Portfolio Website3",
      description: "Redireciona ao Github do projeto",
    },
    // {
    //   image: teste,
    //   title: "Portfolio Website4",
    //   description: "Redireciona ao Github do projeto",
    //   link: "",
    // },
  ];

  return (
    <main className="p-4 h-sc font-[jura] bg-[linear-gradient(360deg,rgba(8,0,36,0.97)35%,rgba(9,9,121,1)99%)]">
      <section data-aos="fade-up" data-aos-delay="300">
        <header className="flex justify-center items-center h-20">
          <h1 className="h-10 text-3xl text-white sm:text-4xl font-bold">
            Meus <span className="text-[#318cf5]">Projetos</span>
          </h1>
          {/* <p className='text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quasi veniam soluta illum.
          </p> */}
        </header>
      </section>

      <section
        data-aos="fade-up"
        data-aos-delay="500"
        className="flex flex-wrap gap-4 justify-center mt-6"
      >
        {listProjects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </section>
    </main>
  );
}
