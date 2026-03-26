"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Bell, ExternalLink, Menu, Mail, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import ApplicationForm from "../components/AplicationForm";

export default function Navbar() {
  const [showForm, setShowForm] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showForm]);

  const menuItems = [
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
    <div>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-900 text-white py-2.5 px-4 border-b border-indigo-700">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-xs sm:text-sm">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              +91 9451769783
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" />
              gp.sonbhadra@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-green-500 text-white rounded-full font-semibold text-xs">
              AICTE APPROVED
            </span>
            <span className="hidden sm:inline px-3 py-1 bg-blue-500 text-white rounded-full font-semibold text-xs">
              BTEUP AFFILIATED
            </span>
          </div>
        </div>
      </div>
      <motion.nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-xl"
            : "bg-white/95 backdrop-blur-sm shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                <Link href="/">
                  <img
                    src="https://www.gpsonbhadra.in/LOGO5.png"
                    alt="Government Polytechnic Aurai logo"
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-indigo-900 text-md leading-tight">
                  Government Polytechnic Sonbhadra
                </div>
                <div className="text-xs text-gray-600">
                  Sonbhadra, Uttar Pradesh
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6 transition-all ">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="text-gray-700 hover:text-indigo-600 font-medium transition-colors relative group"
                >
                  {item.name}

                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex">
              <motion.button
                onClick={() => setShowForm(true)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-1.5 bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg shadow-indigo-500/40"
              >
                Apply Now
              </motion.button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="lg:hidden p-2 text-gray-700 hover:text-indigo-600"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden py-4 border-t border-gray-200"
            >
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="block py-3 px-4 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <button
                onClick={() => {
                  setShowForm(true);
                  setIsMenuOpen(false);
                }}
                className="w-full mt-4 px-3 py-1.25 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold"
              >
                Apply Now
              </button>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Anti-Ragging Notice Banner */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-3">
            <Bell className="w-5 h-5 animate-pulse" />
            <span className="font-semibold">Important Notice:</span>
            <span className="text-sm">
              Prevention And Prohibition Of Ragging In Technical Institutions
            </span>
          </div>
          <a
            href="https://drive.google.com/file/d/16j2HywtKnHDChgb-mNM7fPFRNbBR3XJM/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-1.5 bg-white text-red-600 rounded-full font-semibold text-sm hover:bg-red-50 transition-colors"
          >
            Click here
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          {/* Click outside to close */}
          <div
            className="absolute inset-0"
            onClick={() => setShowForm(false)}
          />

          {/* Modal Box */}
          <div className="relative bg-white w-full max-w-2xl mx-4 rounded-2xl shadow-2xl p-6 z-10 animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl"
            >
              ✕
            </button>

            <ApplicationForm />
          </div>
        </div>
      )}
    </div>
  );
}
