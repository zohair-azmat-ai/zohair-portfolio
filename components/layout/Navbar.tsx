"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import { siteConfig } from "@/data/portfolio";

const navLinks = [
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl shadow-sm shadow-black/20">
      <Container>
        <div className="flex h-14 items-center justify-between">

          {/* Brand */}
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="text-sm font-bold tracking-tight text-zinc-100 transition-colors hover:text-zinc-400"
          >
            {siteConfig.name}
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 sm:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm md:text-base font-medium text-white/85 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="flex h-8 w-8 flex-col items-center justify-center gap-[5px] rounded-md sm:hidden"
          >
            <span
              className={`h-px w-5 bg-zinc-300 transition-all duration-300 ${
                isOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-5 bg-zinc-300 transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px w-5 bg-zinc-300 transition-all duration-300 ${
                isOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </button>

        </div>
      </Container>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-zinc-800/60 bg-zinc-900/95 backdrop-blur-md sm:hidden">
          <Container>
            <nav className="flex flex-col py-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-3 text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
