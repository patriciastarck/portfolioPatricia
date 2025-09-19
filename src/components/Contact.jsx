import React from "react";
import finger from "../assets/StockCake-Future At Fingertips_1756229011.jpg";

export default function Contact() {
  return (
    <section
      id="contato"
      className=" min-h-screen overflow-hidden flex justify-center items-center p-6 mt-10 relative"
    >
      <article className="shadow-lg rounded-lg flex flex-col md:flex-row max-w-4x1 w-full relative">
        <aside
          data-aos="fade-right"
          data-aos-delay="300"
          className="w-full md:w-1/2 relative flex justify-center"
        >
          <img
            src={finger}
            alt="Contato"
            className="w-4/6 h-[250px] sm:h-[300px] md:h-[300px] sm:w-[480px] object-cover rounded-lg"
          />
        </aside>
        {/*Contact form */}
        <section
          data-aos="fade-left"
          data-aos-delay="300"
          ection
          className="p-8 md:w-auto"
        >
          <header className="mb-6">
            <h2 className="text-4xl font-bold text-center text-white">
              Contato
            </h2>
          </header>

          <form
            action="https://formspree.io/f/mdklbpnb"
            method="POST"
            className="space-y-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-gray-300 font-medium mb-2"
              >
                Nome
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Seu nome"
                className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none"
              />
            </div>
            <input type="text" name="_gotcha" style={{ display: "none" }} />
            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="name"
                placeholder="Seu email"
                className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none"
              />
            </div>
            <div>
              <label
                html-for="Message"
                className="block text-gray-300 font-medium mb-2"
              >
                Mensagem
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Sua mensagem"
                className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c]
                      rounded-full text-lg"
            >
              Enviar Mensagem
            </button>
            <div
              className=" sm:w-120 sm:h-20 bg-[#cd3cf5] rounded-full blur-3xl opacity-50
                          bottom-0 left-1/2 transform -translate-x-1/2"
            ></div>
          </form>
        </section>
      </article>
    </section>
  );
}
