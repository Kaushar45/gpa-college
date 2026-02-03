"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Tabs() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navlinks = [
    { path: "/", name: "Home" },
    { path: "/academic", name: "Academic & Admissions" },
    { path: "/departments", name: "Departments" },
    { path: "/faculties", name: "Faculties" },
    { path: "/about", name: "About" },
    { path: "/placements", name: "Placements" },
    { path: "/gallery", name: "Gallery" },
    { path: "/students", name: "Students" },
  ];

  return (
    <header
      className={`fixed left-0 w-full z-50 transition-all duration-300
    ${scrolled ? "top-0 bg-white shadow-md py-4" : "top-0 md:top-18  bg-transparent py-6"}
  `}
    >
      <div className="flex items-center md:justify-center justify-between px-6 md:px-12">
        {/* Logo / Brand Placeholder */}
        <div className="text-xl font-bold text-white md:text-black"></div>

        {/* Desktop links */}
        <nav className="hidden md:flex gap-6 transition-all duration-300">
          {navlinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`transition hover:text-yellow-400
            ${
              pathname === link.path
                ? "text-yellow-400"
                : scrolled
                  ? "text-black"
                  : "text-white"
            }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center justify-center w-10 h-10 text-black"
          >
            <Menu />
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <nav className="flex flex-col gap-4 px-6 py-4 bg-white shadow-md md:hidden">
          {navlinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setMenuOpen(false)}
              className={`transition hover:text-yellow-400
            ${pathname === link.path ? "text-yellow-400" : "text-black"}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
