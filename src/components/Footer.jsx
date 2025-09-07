import { footer } from "framer-motion/client";
import React from "react";

export default function Footer() {
  return (
    <footer className="font-[jura] text-white py-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold italic md:mb-0">Portfolio</h1>
        <p className="text-sm text-center md:text-left">
          Patricia Starck Bernardi - 2025
        </p>
      </div>
    </footer>
  );
}
