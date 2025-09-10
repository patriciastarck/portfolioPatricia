import VLibras from "@djpfs/react-vlibras";
import { footer } from "framer-motion/client";
import React from "react";

export default function Footer() {
  return (
    <footer class="bg-[#181717] text-white p-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
      <div class="font-[jura] font-black text-lg">
        <VLibras />
      </div>

      <div class="flex space-x-6 text-xl gap-4">
        <a
          href="https://www.linkedin.com/in/patricia-starck-bernardi/"
          target="_blank"
          class="hover:text-[#801b9c] transition-colors duration-300"
        >
          <i class="fab fa-linkedin"></i>{" "}
        </a>
        <a
          href="https://github.com/patriciastarck"
          target="_blank"
          class="hover:text-[#801b9c] transition-colors duration-300"
        >
          <i class="fab fa-github"></i>{" "}
        </a>
      </div>
      <div class="text-sm text-gray-400">© 2025 Patricia Starck Bernardi</div>
    </footer>
  );
}
