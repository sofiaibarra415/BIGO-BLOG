"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Image from 'next/image';

export default function Navigation() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (e: MouseEvent) => {
    // Verifica si el clic fue fuera del menú desplegable
    if (dropdownRef.current) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    // Añade el event listener cuando el componente se monta
    document.addEventListener("mousedown", handleClickOutside);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-4  p-2">
      <div className="flex justify-between items-center ">
        {/* Logo que desplaza hacia arriba */}
        <Link
          href="/"
          className="text-2xl font-bold text-primary-400 cursor-pointer scroll-smooth"
        >
          <Image src="/logo_desc_violeta.png" alt="logo" width={65} height={65} ></Image>
        </Link>

        <ul className="flex space-x-9 pr-6 items-center">
          <li>
            <Link href="/" className="hover:text-primary-500">
              Inicio
            </Link>
          </li>
          {/* <li className="relative" ref={dropdownRef}>
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
          </li> */}
        </ul>
      </div>
    </nav>
  );
}
