"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Users,
  Award,
  Building2,
  Calendar,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  ExternalLink,
  Menu,
  X,
  Bell,
  FileText,
  Briefcase,
  Target,
  Lightbulb,
  TrendingUp,
  Globe,
  School,
  MapPin,
  Download,
  Clock,
} from "lucide-react";
import Tabs from "./Tabs";
import Navbar from "./Navbar";
import Footer from "./Footer";

import Link from "next/link";

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface Notice {
  id: number;
  title: string;
  date?: string;
  link: string;
  isNew: boolean;
}

interface Course {
  code: string;
  name: string;
  duration: string;
  icon: React.ElementType;
  isLateral?: boolean;
}

export default function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);
  const { scrollY } = useScroll();

  // Parallax transforms
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const statsY = useTransform(scrollY, [300, 800], [100, -50]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-play slider
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const slides: Slide[] = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=1600&h=900&fit=crop",
      title: "Welcome to Government Polytechnic Sonbhadra",
      description:
        "Government Polytechnic Sonbhadra - Excellence in Technical Education",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&h=900&fit=crop",
      title: "Modern Infrastructure",
      description: "State-of-the-Art Labs and Learning Facilities",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&h=900&fit=crop",
      title: "AICTE Approved Programs",
      description: "Quality Technical Education Since 2010",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1600&h=900&fit=crop",
      title: "Career Excellence",
      description: "Building Tomorrow's Engineers Today",
    },
  ];

  const notices: Notice[] = [
    {
      id: 1,
      title: "One Library All of India - National Digital Library Access",
      link: "https://ndl.iitkgp.ac.in/ndl_nw",
      isNew: true,
    },
    {
      id: 2,
      title: "Virtual Labs - Now Available for All Students",
      link: "https://www.vlab.co.in/",
      isNew: true,
    },
    {
      id: 3,
      title: "Hostel List First Year 2025-26",
      link: "./hostel list first year1.pdf",
      isNew: true,
    },
    {
      id: 4,
      title: "Hostel List Second Year 2025-26",
      link: "./hostel list second year1.pdf",
      isNew: true,
    },
    {
      id: 5,
      title: "Hostel List Third Year 2025-26",
      link: "./hostel list third year1.pdf",
      isNew: true,
    },
    {
      id: 6,
      title: "1st Round Choice Filling (UP State) - 27/06/2025 to 02/07/2025",
      date: "27 Jun 2025",
      link: "#",
      isNew: false,
    },
    {
      id: 7,
      title: "1st Round Seat Allotment - 03/07/2025",
      date: "03 Jul 2025",
      link: "#",
      isNew: false,
    },
    {
      id: 8,
      title: "Counselling Started for 2025-26 Session",
      link: "https://jeecup.admissions.nic.in/",
      isNew: true,
    },
    {
      id: 9,
      title: "Prevention and Prohibition of Ragging in Technical Institutions",
      link: "https://drive.google.com/file/d/16j2HywtKnHDChgb-mNM7fPFRNbBR3XJM/view",
      isNew: true,
    },
    {
      id: 10,
      title: "Commencement of Classes for Session 2025-26 - 01/08/2025",
      date: "01 Aug 2025",
      link: "#",
      isNew: false,
    },
  ];

  const courses: Course[] = [
    {
      code: "355",
      name: "Production",
      duration: "3 Years",
      icon: BookOpen,
      isLateral: false,
    },

    {
      code: "330",
      name: "Electrical",
      duration: "3 Years",
      icon: Target,
      isLateral: false,
    },
    {
      code: "389",
      name: "Chemical",
      duration: "3 Years",
      icon: TrendingUp,
      isLateral: true,
    },
  ];

  const stats = [
    { icon: Users, value: "2000+", label: "Students" },
    { icon: Award, value: "30+", label: "Faculty" },
    { icon: TrendingUp, value: "85%", label: "Placement" },
    { icon: Building2, value: "15+", label: "Labs" },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Academic Excellence",
      description:
        "Fostering future engineering leaders through innovative education",
    },
    {
      icon: BookOpen,
      title: "Modern Curriculum",
      description:
        "Industry-aligned programs with hands-on learning experiences",
    },
    {
      icon: Users,
      title: "Vibrant Community",
      description: "Join a diverse network of innovative minds and achievers",
    },
    {
      icon: Briefcase,
      title: "Industry Recognition",
      description: "Our graduates are preferred by leading companies",
    },
    {
      icon: Target,
      title: "Career Focus",
      description: "Dedicated placement cell for career development",
    },
    {
      icon: Lightbulb,
      title: "Research Excellence",
      description: "Cutting-edge research facilities and expert guidance",
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Navbar /> */}

      {/* Hero Slider with Parallax */}
      <section className="relative h-[500px] sm:h-[600px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            {/* Background Image with Parallax */}
            <motion.div
              style={{ y: heroY }}
              className="absolute inset-0 scale-110"
            >
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/85 via-blue-900/75 to-purple-900/70" />
            </motion.div>

            {/* Content */}
            <motion.div
              style={{ opacity: heroOpacity }}
              className="relative h-full flex items-center"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="max-w-3xl"
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="inline-block mb-4"
                  >
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white font-semibold text-sm tracking-wide">
                      ESTABLISHED 2010 ✨
                    </span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight"
                  >
                    {slides[currentSlide].title}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-lg sm:text-xl text-white/90 mb-8"
                  >
                    {slides[currentSlide].description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex flex-wrap gap-4"
                  >
                    <button className="px-6 sm:px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-indigo-50 transition-colors shadow-2xl flex items-center gap-2">
                      Explore Programs
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button className="px-6 sm:px-8 py-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-semibold hover:bg-white/20 transition-colors">
                      JEECUP Portal
                    </button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Slider Controls */}
        <div className="absolute bottom-6 left-0 right-0 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="hidden sm:flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className="relative group"
                  >
                    <div
                      className={`h-1 rounded-full transition-all ${
                        index === currentSlide
                          ? "w-12 bg-white"
                          : "w-8 bg-white/40 group-hover:bg-white/60"
                      }`}
                    />
                  </button>
                ))}
              </div>

              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className="w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                {isAutoPlay ? (
                  <Pause className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4 ml-0.5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Parallax */}
      <motion.section style={{ y: statsY }} className="relative -mt-16 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all cursor-pointer border-t-4 border-indigo-600"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-3 shadow-lg">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Main Content Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col lg:flex-row gap-18 mb-12">
            {/* Left side: two images stacked vertically */}
            <div className="flex flex-col gap-6 lg:w-1/3 items-center">
              {/* Image 1 */}
              <div className="flex flex-col items-center">
                <img
                  src="https://www.gpsonbhadra.in/narendra.jpg"
                  alt="Shri Narendra Bhooshan (IAS)"
                  className="w-48 h-48 rounded-2xl object-cover shadow-xl border-4 border-indigo-100"
                />
                <h3 className="mt-4 text-lg font-bold text-gray-900 text-center">
                  Shri Narendra Bhooshan (IAS)
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  Add. Chief Secretary, Technical Education, Uttar Pradesh
                </p>
              </div>

              {/* Image 2 */}
              <div className="flex flex-col items-center">
                <img
                  src="https://www.gpsonbhadra.in/aziz.jpg"
                  alt="Shri Aziz Ahmad"
                  className="w-48 h-48 rounded-2xl object-cover shadow-xl border-4 border-indigo-100"
                />
                <h3 className="mt-4 text-lg font-bold text-gray-900 text-center">
                  Shri Aziz Ahmad
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  Director, Directorate of Technical Education, Uttar Pradesh
                </p>
              </div>
            </div>

            {/* Right side: institute description */}
            <div className="lg:w-2/3 flex flex-col ">
              <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 px-6 py-4">
                <h2 className="text-2xl font-bold text-white mb-4 ">
                  GOVERNMENT POLYTECHNIC SONBHADRA
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Government Polytechnic Sonbhadra, established in 2009, is a
                renowned polytechnic institute in Uttar Pradesh. It is
                affiliated with the Board of Technical Education, Uttar Pradesh
                (BTEUP), Lucknow, and offers undergraduate diplomas in
                Mechanical Production Engineering, Electrical Engineering and
                Chemical Engineering. The institution is recognized as one of
                the best government polytechnic institutes in Uttar Pradesh. In
                addition to its academic programs, Government Polytechnic
                Sonbhadra emphasizes co-curricular activities, including sports,
                cultural events, and social service, fostering a well-rounded
                educational experience for its students.
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Principal's Desk */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
            >
              <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 px-6 py-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  Principal's Desk
                </h2>
              </div>

              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src="https://www.gpsonbhadra.in/pramod%20new.jpg"
                      alt="Principal"
                      className="w-48 h-48 rounded-2xl object-cover shadow-xl border-4 border-indigo-100"
                    />
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-lg text-sm">
                        <Phone className="w-4 h-4 text-indigo-600" />
                        <span className="text-gray-700">+91 9451769783</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-lg text-sm">
                        <Mail className="w-4 h-4 text-indigo-600" />
                        <span className="text-gray-700">
                          gp.sonbhadra@gmail.com
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      Pramod Kumar
                    </h3>
                    <p className="text-indigo-600 font-semibold mb-2">
                      Principal, Government Polytechnic Sonbhadra
                    </p>

                    <div className="prose prose-sm max-w-none">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">
                        Welcome to Government Polytechnic Sonbhadra
                      </h4>

                      <p className="text-gray-600 leading-relaxed mb-4">
                        Education plays a key role in the overall development of
                        the society. The role of education is definitely not
                        limited to giving and grasping knowledge and theory. The
                        true goal of education transcends much beyond just
                        awarding degree and certificate to the students.The
                        ultimate goal of education is the discovery of the
                        meaning of life and the fulfillment of life and all
                        mankind as well as for oneself. The quest of education
                        is knowledge, humanity, culture, wisdom and sharpness
                        but it should be noted that knowledge is not given but
                        earned and character is not granted but cultivated. GPS
                        not only focuses on the theoretical curriculum, but also
                        help in the development of a student personality,
                        extra-curricular activities and over all perspective.I
                        wish all the students a grand sucess in their career and
                        prosperity in their future life.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-4">
                      <span className="px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-700 rounded-lg text-sm font-semibold">
                        15+ Years Experience
                      </span>
                      <span className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-blue-700 rounded-lg text-sm font-semibold">
                        AICTE Approved
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Notice Board */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden h-fit border border-gray-100"
            >
              <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 px-6 py-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Bell className="w-6 h-6 animate-pulse" />
                  Notice Board
                </h2>
              </div>
              <div className="p-4 max-h-[600px] overflow-y-auto custom-scrollbar">
                {notices.map((notice) => (
                  <motion.a
                    key={notice.id}
                    href={notice.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="block p-3 mb-2 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 rounded-xl transition-all group border border-transparent hover:border-orange-200"
                  >
                    <div className="flex items-start gap-3">
                      {notice.isNew && (
                        <span className="flex-shrink-0 px-2.5 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-md animate-pulse shadow-lg">
                          NEW
                        </span>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-700 group-hover:text-indigo-600 transition-colors leading-relaxed font-medium">
                          {notice.title}
                        </p>
                        {notice.date && (
                          <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {notice.date}
                          </p>
                        )}
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 flex-shrink-0 mt-1" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Courses Section with Parallax */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Parallax Background Pattern */}
        <motion.div
          style={{ y: useTransform(scrollY, [800, 1400], [0, -100]) }}
          className="absolute inset-0 opacity-20"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, #6366f1 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="px-4 py-2 bg-white border border-indigo-200 text-indigo-700 rounded-full text-sm font-semibold tracking-wide shadow-lg">
              COURSES BOARD
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 mb-4">
              Our Popular Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AICTE approved diploma programs with JEECUP admission - Building
              careers in technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <motion.div
                  key={course.code}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer group border border-gray-100 overflow-hidden relative"
                >
                  {course.isLateral && (
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full shadow-lg">
                        Lateral Entry
                      </span>
                    </div>
                  )}

                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors leading-tight">
                    {course.name}
                  </h3>

                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1.5 font-semibold">
                      <FileText className="w-4 h-4 text-indigo-600" />
                      Code: {course.code}
                    </span>
                    <span className="flex items-center gap-1.5 font-semibold">
                      <Calendar className="w-4 h-4 text-indigo-600" />
                      {course.duration}
                    </span>
                  </div>

                  <button className="w-full py-2.5 border-2 border-indigo-600 text-indigo-600 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white transition-all shadow-md hover:shadow-xl">
                    View Syllabus
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us with Parallax */}
      <section className="py-24 relative overflow-hidden">
        <motion.div
          style={{ y: useTransform(scrollY, [1600, 2200], [0, -150]) }}
          className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900"
        />

        {/* Animated particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20"
              animate={{
                y: [0, -1000],
                x: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: "100%",
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Excellence in Engineering Education - Shaping Tomorrow's Engineers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all shadow-xl"
                >
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-blue-100 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Begin Your Journey at GP sonbhadra
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-white/90 mb-10"
          >
            Join our prestigious institution and transform your engineering
            aspirations into reality. Your success story begins here.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-orange-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/20 transition-all"
            >
              Apply for 2025-26
            </motion.button>
            <motion.a
              href="https://jeecup.admissions.nic.in/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center gap-2"
            >
              JEECUP Portal
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #6366f1, #8b5cf6);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #4f46e5, #7c3aed);
        }
      `}</style>
    </div>
  );
}
