"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Tabs() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

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
        ${scrolled ? "top-0 bg-white shadow-md py-6" : "top-18 bg-transparent py-6"}
      `}
    >
      {/* NAVIGATION */}
      <nav
        className={`flex gap-6 transition-all duration-300 justify-center px-6`}
      >
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
    </header>
  );
}
