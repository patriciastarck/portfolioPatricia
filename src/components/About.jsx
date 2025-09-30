import cyber from "../assets/StockCake-Cybersecurity Data Analysis_1755795948.jpg";
import { useLanguage } from "../context/LanguageContext"; // Importe o hook

export default function About() {
  const { t } = useLanguage(); // Obtenha a função de tradução

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
          <header className="font-[jura]">
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              {t("ABOUT_TITLE")}
            </h1>
          </header>
          <p className="h-60 text-base sm:text-sm md:text-md text-gray-300 mb-6s sm:mb-8 leading-relaxed text-justify">
            {t("ABOUT_TEXT")}
          </p>
          <footer>
            <a
              className="inline-flex text-white border-2 py-2 px-4 sm:px-6 focus:outline-none w-40 justify-center
                    hover:bg-[#990dc7] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-sm:text-lg"
              href="/public/curriculoAtualizado.pdf"
            >
              {t("ABOUT_DOWNLOAD_CV")}
            </a>

            {/* <button
              className="inline-flex text-white border-2 py-2 px-4 sm:px-6 focus:outline-none w-30
                    hover:bg-[#990dc7] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-sm:text-lg"
            >
              currículo
            </button> */}
          </footer>
        </article>
      </div>
      <div></div>
    </section>
  );
}
