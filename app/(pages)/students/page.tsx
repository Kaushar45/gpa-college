"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  Award,
  Users,
  Calendar,
  FileText,
  Download,
  ExternalLink,
  School,
  Laptop,
  Home,
  Utensils,
  Bus,
  Library,
  Wifi,
  Heart,
  Trophy,
  Music,
  Camera,
  Dumbbell,
  Newspaper,
  Shield,
  AlertCircle,
  Clock,
  MapPin,
  Phone,
  Mail,
  CreditCard,
  BookMarked,
  Briefcase,
  Globe,
  CheckCircle,
  ChevronRight,
  Bell,
  FileDown,
  Lightbulb,
  Target,
  UserCircle,
  Settings,
} from "lucide-react";

interface QuickLink {
  title: string;
  description: string;
  icon: React.ElementType;
  link: string;
  color: string;
}

interface Facility {
  name: string;
  description: string;
  icon: React.ElementType;
  features: string[];
}

interface Club {
  name: string;
  description: string;
  icon: React.ElementType;
  coordinator: string;
}

interface Resource {
  title: string;
  description: string;
  icon: React.ElementType;
  link: string;
}

interface AntiRaggingInfo {
  title: string;
  contact: string;
  phone: string;
  email: string;
}

export default function StudentsPage() {
  const [activeSection, setActiveSection] = useState<string>("resources");

  const quickLinks: QuickLink[] = [
    {
      title: "Student Portal",
      description: "Access your academic records, attendance, and grades",
      icon: Laptop,
      link: "http://upbte.in/",
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "BTEUP Results",
      description: "Check your semester examination results",
      icon: Award,
      link: "http://upbte.in/",
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Digital Library",
      description: "Access e-books, journals, and online resources",
      icon: BookOpen,
      link: "https://ndl.iitkgp.ac.in/ndl_nw",
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "Virtual Labs",
      description: "Practice with online laboratory experiments",
      icon: Globe,
      link: "https://www.vlab.co.in/",
      color: "from-orange-500 to-red-600",
    },
    {
      title: "Time Table",
      description: "View your class schedule and exam dates",
      icon: Calendar,
      link: "#",
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Fee Payment",
      description: "Pay semester fees and download receipts",
      icon: CreditCard,
      link: "#",
      color: "from-indigo-500 to-purple-600",
    },
  ];

  const facilities: Facility[] = [
    {
      name: "Hostel Accommodation",
      description: "Separate hostels for boys and girls with modern amenities",
      icon: Home,
      features: [
        "Well-furnished rooms with comfortable beds",
        "Common areas for study and recreation",
        "24/7 security and CCTV surveillance",
        "Regular cleaning and maintenance",
        "Warden supervision",
        "Wi-Fi connectivity",
      ],
    },
    {
      name: "Canteen & Mess",
      description: "Hygienic food with variety of options",
      icon: Utensils,
      features: [
        "Nutritious and affordable meals",
        "Vegetarian and non-vegetarian options",
        "Clean and spacious dining area",
        "Regular quality checks",
        "Special meals on festivals",
        "Snacks and beverages available",
      ],
    },
    {
      name: "Library",
      description: "Well-stocked library with extensive collection",
      icon: Library,
      features: [
        "10,000+ books across all subjects",
        "Technical journals and magazines",
        "Digital library access",
        "Reading room with peaceful environment",
        "Book issue and return facility",
        "Reference section for competitive exams",
      ],
    },
    {
      name: "Transportation",
      description: "College bus service for students",
      icon: Bus,
      features: [
        "Multiple routes covering nearby areas",
        "Safe and comfortable travel",
        "Affordable transportation fees",
        "Regular maintenance of vehicles",
        "Experienced and verified drivers",
        "GPS tracking for safety",
      ],
    },
    {
      name: "Internet & WiFi",
      description: "High-speed internet connectivity",
      icon: Wifi,
      features: [
        "WiFi coverage in campus",
        "Computer labs with internet",
        "Access to online learning platforms",
        "Digital resources and e-learning",
        "Research and project work support",
        "Technical support available",
      ],
    },
    {
      name: "Health & Medical",
      description: "Basic medical facilities on campus",
      icon: Heart,
      features: [
        "First aid facilities",
        "Tie-up with nearby hospitals",
        "Emergency medical assistance",
        "Health awareness programs",
        "Annual health checkups",
        "Counseling services available",
      ],
    },
  ];

  const clubs: Club[] = [
    {
      name: "Technical Society",
      description: "Workshops, hackathons, and coding competitions",
      icon: Laptop,
      coordinator: "Prof. Ravish Kumar Yadav",
    },
    {
      name: "Cultural Club",
      description: "Dance, music, drama, and cultural events",
      icon: Music,
      coordinator: "Prof. Namrata Singh",
    },
    {
      name: "Sports Committee",
      description: "Cricket, football, volleyball, and athletics",
      icon: Trophy,
      coordinator: "Prof. Avaneesh Kumar",
    },
    {
      name: "Photography Club",
      description: "Campus events coverage and photo exhibitions",
      icon: Camera,
      coordinator: "Prof. Amod Mishra",
    },
    {
      name: "Literary Society",
      description: "Debates, creative writing, and quiz competitions",
      icon: BookMarked,
      coordinator: "Dr. Deepak Kumar Sonkar",
    },
    {
      name: "Fitness Club",
      description: "Gym facilities and wellness activities",
      icon: Dumbbell,
      coordinator: "Prof. Dhirendra Tripathi",
    },
  ];

  const resources: Resource[] = [
    {
      title: "Academic Calendar 2025-26",
      description: "Complete academic schedule with exam dates",
      icon: Calendar,
      link: "#",
    },
    {
      title: "Syllabus & Curriculum",
      description: "Download semester-wise syllabus",
      icon: BookOpen,
      link: "#",
    },
    {
      title: "Previous Year Papers",
      description: "Question papers for exam preparation",
      icon: FileText,
      link: "#",
    },
    {
      title: "Study Materials",
      description: "Notes and reference materials",
      icon: BookMarked,
      link: "#",
    },
    {
      title: "Project Guidelines",
      description: "Guidelines for final year projects",
      icon: Lightbulb,
      link: "#",
    },
    {
      title: "Internship Opportunities",
      description: "Industry internship programs",
      icon: Briefcase,
      link: "#",
    },
  ];

  const antiRaggingContacts: AntiRaggingInfo[] = [
    {
      title: "Principal & First Appellate Officer",
      contact: "S.P. Srivastava",
      phone: "+91 9451846978",
      email: "principalgpaurai@gmail.com",
    },
    {
      title: "Anti-Ragging Committee Head",
      contact: "Prof. Chandra Bhan Pal",
      phone: "+91 9451846978",
      email: "principalgpaurai@gmail.com",
    },
    {
      title: "Student Welfare Officer",
      contact: "Prof. P S Arya",
      phone: "+91 9451846978",
      email: "principalgpaurai@gmail.com",
    },
  ];

  const importantLinks = [
    {
      name: "Anti-Ragging Affidavit",
      url: "https://drive.google.com/file/d/16j2HywtKnHDChgb-mNM7fPFRNbBR3XJM/view",
    },
    { name: "Grievance Redressal Form", url: "#" },
    { name: "Leave Application Form", url: "#" },
    { name: "No Objection Certificate (NOC)", url: "#" },
    { name: "Bonafide Certificate Request", url: "#" },
    { name: "Library Card Application", url: "#" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <section className="relative bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-semibold">
                STUDENT CORNER
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Student Resources
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Everything you need for a successful academic journey at GP Aurai
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="relative -mt-16 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.title}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all group cursor-pointer"
                >
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${link.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{link.description}</p>
                  <div className="flex items-center text-indigo-600 font-semibold group-hover:gap-2 transition-all">
                    Access Now
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Anti-Ragging Notice */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Ragging is Strictly Prohibited
                </h3>
                <p className="text-gray-700 mb-4">
                  GP Aurai has ZERO TOLERANCE policy towards ragging. Any form
                  of ragging is a punishable offense. Students can report
                  incidents confidentially to the Anti-Ragging Committee.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://drive.google.com/file/d/16j2HywtKnHDChgb-mNM7fPFRNbBR3XJM/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Anti-Ragging Guidelines
                  </a>
                  <a
                    href="tel:1800-180-5522"
                    className="px-6 py-2 bg-white border-2 border-red-500 text-red-500 rounded-lg font-semibold hover:bg-red-50 transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    24x7 Helpline: 1800-180-5522
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Campus Facilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Campus Facilities
            </h2>
            <p className="text-xl text-gray-600">
              Modern amenities for a comfortable student life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <motion.div
                  key={facility.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {facility.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{facility.description}</p>
                  <ul className="space-y-2">
                    {facility.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hostel Information */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hostel Information
            </h2>
            <p className="text-xl text-gray-600">
              Safe and comfortable accommodation for students
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Boys Hostel
                  </h3>
                  <p className="text-gray-600">
                    Separate block with modern facilities
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Capacity: 150+ students</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">2-3 sharing rooms</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Common room with TV</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">
                    24/7 security & warden supervision
                  </span>
                </li>
              </ul>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all"
              >
                Download Hostel List
                <Download className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Girls Hostel
                  </h3>
                  <p className="text-gray-600">Safe and secure accommodation</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Capacity: 100+ students</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">2-3 sharing rooms</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">
                    Study room & recreation area
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">
                    Female warden & strict security
                  </span>
                </li>
              </ul>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all"
              >
                Download Hostel List
                <Download className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6"
          >
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-yellow-900 mb-2">
                  Hostel Admission Note
                </h4>
                <p className="text-yellow-800 text-sm">
                  Hostel accommodation is provided on first-come-first-served
                  basis. Students need to apply separately for hostel admission
                  after securing college admission. Hostel fees are separate
                  from tuition fees.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Student Clubs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Student Clubs & Activities
            </h2>
            <p className="text-xl text-gray-600">
              Explore your interests beyond academics
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.map((club, index) => {
              const Icon = club.icon;
              return (
                <motion.div
                  key={club.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-t-4 border-indigo-600"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {club.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{club.description}</p>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500">Coordinator</p>
                    <p className="font-semibold text-indigo-600">
                      {club.coordinator}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Academic Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Academic Resources
            </h2>
            <p className="text-xl text-gray-600">
              Download important documents and study materials
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <motion.a
                  key={resource.title}
                  href={resource.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all group cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {resource.description}
                      </p>
                    </div>
                    <FileDown className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Anti-Ragging Contacts */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-4">
              <Shield className="w-16 h-16 text-red-500 mx-auto" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Anti-Ragging Committee
            </h2>
            <p className="text-xl text-gray-600">
              Report any incident confidentially
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {antiRaggingContacts.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCircle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {contact.title}
                </h3>
                <p className="text-indigo-600 font-semibold mb-4">
                  {contact.contact}
                </p>
                <div className="space-y-2 text-sm">
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex items-center justify-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {contact.phone}
                  </a>
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center justify-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    {contact.email}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Forms */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Important Forms & Links
            </h2>
            <p className="text-xl text-gray-600">
              Download forms and access important portals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {importantLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all group"
              >
                <FileDown className="w-5 h-5 text-indigo-600 group-hover:scale-110 transition-transform" />
                <span className="text-gray-900 font-medium group-hover:text-indigo-600 transition-colors flex-1">
                  {link.name}
                </span>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <MapPin className="w-6 h-6 text-indigo-400" />
              <div>
                <p className="text-sm text-gray-400">Address</p>
                <p className="font-semibold">
                  Near Ugapur Market, Aurai, Bhadohi-221301
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Phone className="w-6 h-6 text-indigo-400" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="font-semibold">+91 9451846978</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Mail className="w-6 h-6 text-indigo-400" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-semibold">principalgpaurai@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
