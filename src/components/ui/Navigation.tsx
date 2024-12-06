"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogoClick = () => {
    // Usamos scrollIntoView para desplazamiento suave
    document.documentElement.scrollIntoView({
      behavior: "smooth",
      block: "start", // Asegura que se desplace al inicio de la página
    });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 p-4">
      <div className="flex justify-between items-center">
        {/* Logo que desplaza hacia arriba */}
        <Link
          href="/"
          className="text-2xl font-bold text-primary-400 cursor-pointer"
          onClick={handleLogoClick}
        >
          PetBlog
        </Link>

        <ul className="flex space-x-9 pr-6 items-center">
          <li>
            <Link href="/" className="hover:text-primary-500">
              Inicio
            </Link>
          </li>
          <li className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="hover:text-primary-500 focus:outline-none"
            >
              Artículos
            </button>
            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-50">
                <li>
                  <Link
                    href="/articulos/cuidados"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-500"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Cuidados
                  </Link>
                </li>
                <li>
                  <Link
                    href="/articulos/alimentacion"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-500"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Alimentación
                  </Link>
                </li>
                <li>
                  <Link
                    href="/articulos/entrenamiento"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-500"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Entrenamiento
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
