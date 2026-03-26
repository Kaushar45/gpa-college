import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* College Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Link href="/">
                    <img
                      src="https://tse4.mm.bing.net/th/id/OIP.aNy5bthnT-AUuUUcPImdQgHaIA?rs=1&pid=ImgDetMain&o=7&rm=3"
                      alt="Government Polytechnic sonbhadra logo"
                      className="w-full h-full object-cover "
                    />
                  </Link>
                </div>
                <div>
                  <div className="font-bold text-lg leading-tight">
                    GP sonbhadra
                  </div>
                  <div className="text-xs text-gray-400">Est. 2010</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Babu Paras Nath Maurya Government Polytechnic sonbhadra -
                Excellence in Technical Education
              </p>
              <div className="flex gap-3">
                <span className="px-3 py-1 bg-green-600 text-white text-xs font-bold rounded-full">
                  AICTE
                </span>
                <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                  BTEUP
                </span>
              </div>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">
                Useful Links
              </h3>
              <ul className="space-y-2">
                {[
                  "Register Yourself",
                  "About us",
                  "Placements",
                  "Faculties",
                  "E-Learning",
                  "Departments",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full group-hover:bg-indigo-400 transition-colors" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">
                Important Links
              </h3>
              <ul className="space-y-2">
                {[
                  { name: "JEECUP Portal", url: "http://jeecup.org/" },
                  { name: "BTEUP Official", url: "http://bteup.ac.in/" },
                  { name: "BTEUP Results", url: "http://upbte.in/" },
                  {
                    name: "Vidya Lakshmi",
                    url: "https://www.vidyalakshmi.co.in/Students/",
                  },
                  { name: "DTE UP", url: "http://dte.up.nic.in/" },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                    >
                      <ExternalLink className="w-3 h-3 text-indigo-500 group-hover:text-indigo-400" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">
                Contact Address
              </h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-1" />
                  <span>NEAR UGAPUR MARKET, sonbhadra, BHADOHI-221301</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <a
                    href="mailto:principalgpsonbhadra@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    principalgpsonbhadra@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <a
                    href="tel:+919451846978"
                    className="hover:text-white transition-colors"
                  >
                    +91 9451846978
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>
              ©2026 Babu Paras Nath Maurya Government Polytechnic sonbhadra. All
              rights reserved
            </p>
            <p className="mt-2">
              Privacy Policy | Terms of Use | Community guidelines
            </p>
            <p className="mt-2">
              Website developed & maintained by{" "}
              <a
                href="https://www.inflection.org.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300"
              >
                Inflection ORG Pvt Ltd.
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
