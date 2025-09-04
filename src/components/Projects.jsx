import React from "react";
import purpleAstro from "../assets/robotBook.png";
import secretN from "../assets/secret_number_p_gemini.png";
import literalura from "../assets/literalutaImagem.jpg";
import conversorMoedas from "../assets/conversorDeMoedasJava.png";
import code from "../assets/StockCake-Coding in Progress_1756407354.jpg";

const ProjectCard = ({ image, title, description, link }) => {
  return (
    // Substitua 'max-w-sm' por uma largura fixa como 'w-72'
    <article className="relative w-72 bg-green-500 rounded overflow-hidden shadow-lg group flex flex-col">
      <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10"></div>
      <div className="relative z-10 flex flex-col flex-1">
        <figure className="relative h-56">
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
            <button className="bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-shadow-white hover:bg-[#2879d5] group-hover:opacity-90">
              Live Preview
            </button>
          </a>
        </figure>
        <div className="px-6 py-4 flex-1 flex flex-col justify-between">
          <header>
            <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
          </header>
          <p className="text-gray-200 text-base">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  const listProjects = [
    {
      image: literalura,
      title: "Projeto Literalura",
      description: "Redireciona ao Github do projeto",
      link: "https://github.com/patriciastarck/literalura",
    },
    {
      image: secretN,
      title: "Jogo do número secreto",
      description: "Lorem ipsum dolor uhu ihijiioj",
      link: "https://jogo-henna-rho-92.vercel.app/",
    },
    {
      image: conversorMoedas,
      title: "Conversor de Moedas",
      description:
        "Conversor de moedas em Java 21, ExchangeRate-API e Biblioteca GSON",
      link: "",
    },
    {
      image: purpleAstro,
      title: "Portfolio Website4",
      description: "Lorem ipsum dolor uhu ihijiioj",
      link: "",
    },
    {
      image: purpleAstro,
      title: "Portfolio Website3",
      description: "Lorem ipsum dolor uhu ihijiioj",
      link: "",
    },
    {
      image: purpleAstro,
      title: "Portfolio Website4",
      description: "Lorem ipsum dolor uhu ihijiioj",
      link: "",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-900">
      <section data-aos="fade-up" data-aos-delay="300">
        <header className="text-center">
          <h1 className="text-3xl text-white sm:text-4xl font-bold mb-6">
            My <span className="text-purple-400">Projects</span>
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
