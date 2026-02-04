import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 fixed bottom-0">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Government Polytechnic Aurai
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            Empowering students with job-ready skills in Web, App & Emerging
            Technologies.
          </p>
          <div className="flex gap-4 mt-4">
            <Facebook className="hover:text-blue-500 cursor-pointer" />
            <Instagram className="hover:text-pink-500 cursor-pointer" />
            <Linkedin className="hover:text-blue-400 cursor-pointer" />
          </div>
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Courses</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Web Development</li>
            <li className="hover:text-white cursor-pointer">App Development</li>
            <li className="hover:text-white cursor-pointer">Data Science</li>
            <li className="hover:text-white cursor-pointer">AI & ML</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Admissions</li>
            <li className="hover:text-white cursor-pointer">Placements</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} /> +91 73551 92647
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> principalgpaurai@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} />
              NEAR UGAPUR MARKET,AURAI, BHADOHI-221301
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        &copy; {new Date().getFullYear()} Government Polytechnic Aurai. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
