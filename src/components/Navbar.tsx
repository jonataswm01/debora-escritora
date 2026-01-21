"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[90%] md:w-auto ${
          scrolled ? "top-4" : "top-6"
        }`}
      >
        <div
          className={`
            px-6 md:px-8 py-4 rounded-full
            backdrop-blur-xl
            border border-white/20
            shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]
            transition-all duration-300
            ${mobileMenuOpen ? "bg-white/95" : scrolled ? "bg-white/90" : "bg-white/80"}
          `}
        >
          <div className="flex items-center justify-between md:gap-8">
            {/* Logo/Nome */}
            <Link href="/" className="group">
              <span className="text-lg font-playfair font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#B898C8] via-[#8AA5D9] to-[#B898C8] group-hover:from-[#A888B8] group-hover:via-[#7A95C9] group-hover:to-[#A888B8] transition-all duration-300">
                Débora Rayane
              </span>
            </Link>

            {/* Links de Navegação - Desktop */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/#sobre"
                className="relative text-sm font-inter font-medium text-foreground/80 transition-colors duration-300 group"
              >
                <span className="relative">
                  Sobre
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#D8BFD8] to-[#B0C4DE] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
              <Link
                href="/#livros"
                className="relative text-sm font-inter font-medium text-foreground/80 transition-colors duration-300 group"
              >
                <span className="relative">
                  Livros
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#D8BFD8] to-[#B0C4DE] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
              <Link
                href="/#blog"
                className="relative text-sm font-inter font-medium text-foreground/80 transition-colors duration-300 group"
              >
                <span className="relative">
                  Blog
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#D8BFD8] to-[#B0C4DE] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
              <Link
                href="/contato"
                className="text-sm font-inter font-medium px-6 py-2 bg-gradient-to-r from-[#D8BFD8] to-[#B0C4DE] text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Contato
              </Link>
            </div>

            {/* Botão Hamburger - Mobile (2 traços sofisticado) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-[6px] group"
              aria-label="Menu"
            >
              <span
                className={`w-6 h-[2px] bg-gradient-to-r from-[#B898C8] to-[#8AA5D9] rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-[4px]" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-[2px] bg-gradient-to-r from-[#B898C8] to-[#8AA5D9] rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-[4px]" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Mobile */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={closeMenu}
        ></div>

        {/* Menu Content */}
        <div
          className={`absolute top-24 left-1/2 -translate-x-1/2 w-[85%] max-w-sm bg-white/95 backdrop-blur-xl rounded-[32px] border border-white/40 shadow-2xl transition-all duration-300 ${
            mobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="p-8 space-y-6">
            <Link
              href="/#sobre"
              onClick={closeMenu}
              className="block text-center text-base font-inter font-medium text-foreground/80 hover:text-[#B898C8] transition-colors py-2"
            >
              Sobre
            </Link>
            <Link
              href="/#livros"
              onClick={closeMenu}
              className="block text-center text-base font-inter font-medium text-foreground/80 hover:text-[#B898C8] transition-colors py-2"
            >
              Livros
            </Link>
            <Link
              href="/#blog"
              onClick={closeMenu}
              className="block text-center text-base font-inter font-medium text-foreground/80 hover:text-[#B898C8] transition-colors py-2"
            >
              Blog
            </Link>
            <Link
              href="/contato"
              onClick={closeMenu}
              className="block text-center text-base font-inter font-medium px-6 py-3 bg-gradient-to-r from-[#D8BFD8] to-[#B0C4DE] text-white rounded-full hover:shadow-lg transition-all duration-300 mt-4"
            >
              Contato
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
