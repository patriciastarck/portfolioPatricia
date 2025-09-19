import React from "react";
import Java from "../assets/java.png";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import React_logo from "../assets/react.png";
import Tailwind_logo from "../assets/tailwind.png";
import SpringBoot_logo from "../assets/icons8-spring-boot-144.png";
import JavaScript_logo from "../assets/icons8-javascript-144.png";
import Postgres_logo from "../assets/icons8-postgres-144.png";
import dig from "../assets/StockCake-Digital Consciousness Evolution_1756406659.jpg";

const skillsData = [
  {
    id: 1,
    image: Java,
    title: "Java",
    // description: "Lorem jjkifkkf ooofofofofo",
  },
  {
    id: 2,
    image: SpringBoot_logo,
    title: "Spring Boot",
    // description: "Lorem jjkifkkf ooofofofofo",
  },
  {
    id: 3,
    image: Postgres_logo,
    title: "Postgresql",
    // description: "Lorem jjkifkkf ooofofofofo ",
  },
  {
    id: 4,
    image: JavaScript_logo,
    title: "JavaScript",
    // description: "Lorem jjkifkkf ",
  },
  {
    id: 5,
    image: React_logo,
    title: "React",
    // description: "Lorem jjkifkkf ooofofofofo foofoofof 0ofofoofofof oofoofi",
  },
  {
    id: 6,
    image: Html,
    // title: "HTML",
    // description: "Lorem jjkifkkf ooofofofofo foofoofof 0ofofoofofof oofoofi",
  },
  {
    id: 7,
    image: Css,
    // title: "CSS",
    // description: "Lorem jjkifkkf ooofofofofo foofoofof 0ofofoofofof oofoofi",
  },
  {
    id: 8,
    image: Tailwind_logo,
    title: "Tailwind CSS",
    // description: "Lorem jjkifkkf ooofofofofo foofoofof 0ofofoofofof oofoofi",
  },
];

const SkillBox = ({ image, title, description }) => (
  <div className="flex justify-center">
    <article className="bg-[#000000] w-52 h-30 sm:p-6 hover:bg-[#990dc7] transition-all duration-300">
      <figure className="flex justify-center ">
        {/* Corrigido 'flex-justify-cente' para 'flex justify-center' */}
        <img src={image} alt={title} className="w-16 h-16 sm:w-20 sm:h-20" />
      </figure>
      <header>
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
      </header>
      <p className="text-gray-400 text-sm sm:text-base">{description}</p>
    </article>
  </div>
);

export default function skills() {
  return (
    <section
      id="habilidades"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10"
    >
      {
        <img
          src={dig}
          alt="background picture"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      }
      <div
        data-aos="fade-up"
        data-aos-delay="800"
        className="relative z-20 text-center space-y-6 sm:space-y-10 flex flex-col items-center justify-items-center"
      >
        <header className="min-h-22 flex justify-start items-center">
          <div className="flex items-start justify-center gap-4 sm:gap-8">
            <h1 className="font-[jura] text-3xl sm:text-4xl font-extrabold text-center bg-black/70 tracking-wider">
              Minhas{" "}
              <span className="text-[#990dc7] font-extrabold">Habilidades</span>
            </h1>
          </div>
        </header>
        <section
          data-aos="fade-up"
          data-aos-delay="500"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4"
        >
          {/* Corrigido 'sm>:gap-6' para 'gap-6' */}
          {skillsData.map((skill) => (
            <SkillBox
              key={skill.id}
              image={skill.image}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </section>
      </div>
    </section>
  );
}
