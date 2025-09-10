import { useEffect } from "react";

export default function VLibras() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // se já inicializou, não faz nada
    if (window.__VLIBRAS_INIT__) return;

    // evita duplicar script
    if (!document.getElementById("vlibras-plugin")) {
      const script = document.createElement("script");
      script.id = "vlibras-plugin";
      script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
      script.async = true;
      script.onload = () => {
        if (window.VLibras) {
          new window.VLibras.Widget("https://vlibras.gov.br/app");
          window.__VLIBRAS_INIT__ = true;
          console.log("VLibras inicializado ✅");
        }
      };
      document.body.appendChild(script);
    } else {
      // se o script já existe, inicializa direto
      if (window.VLibras) {
        new window.VLibras.Widget("https://vlibras.gov.br/app");
        window.__VLIBRAS_INIT__ = true;
      }
    }
  }, []);

  return (
    <div vw="true" className="fixed bottom-6 right-6 z-[9999]">
      <div vw-access-button="true"></div>
      <div vw-plugin-wrapper="true">
        <div className="vw-plugin-top-wrapper"></div>
      </div>
    </div>
  );
}
