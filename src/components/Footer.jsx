import { footer } from "framer-motion/client";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(90deg,rgba(21, 78, 171, 1)25%,rgba(76, 25, 99, 1)77%)] text-white py-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold italic mb-4 md;mb-0">Portfolio</h1>
        <p className="text-sm text-center md:text-left">
          Patricia Starck Bernardi - 2024
        </p>
      </div>
    </footer>
  );
}
