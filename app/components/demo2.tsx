'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  Microscope, 
  Briefcase, 
  Scale, 
  Heart, 
  Palette,
  Users,
  Award,
  BookOpen,
  DollarSign,
  Globe,
  Building,
  Handshake,
  ArrowRight,
  Menu,
  X,
  ChevronRight,
  Star,
  Sparkles,
  ChevronLeft,
  Play,
  Pause
} from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: string;
  gradient: string;
}

interface Stat {
  icon: React.ElementType;
  number: string;
  label: string;
  color: string;
}

interface Program {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  gradient: string;
}

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

export default function CollegeHomepage() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeProgram, setActiveProgram] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-play slider
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  // Slider data
  const slides: Slide[] = [
    {
      id: 1,
      title: 'Transform Your Future',
      subtitle: 'Where Innovation Meets Tradition',
      description: 'Join a community of scholars, leaders, and changemakers shaping tomorrow\'s world.',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=800&fit=crop',
      cta: 'Explore Programs',
      gradient: 'from-indigo-600 to-purple-600'
    },
    {
      id: 2,
      title: 'World-Class Research',
      subtitle: 'Pioneer the Next Breakthrough',
      description: 'Collaborate with leading researchers and access state-of-the-art facilities.',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&h=800&fit=crop',
      cta: 'Research Opportunities',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      id: 3,
      title: 'Global Community',
      subtitle: 'Connect Across Borders',
      description: 'Study abroad in 50+ countries and build lifelong international connections.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=800&fit=crop',
      cta: 'Global Programs',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      id: 4,
      title: 'Career Excellence',
      subtitle: '95% Placement Rate',
      description: 'Launch your career with top employers seeking our graduates.',
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1200&h=800&fit=crop',
      cta: 'Career Services',
      gradient: 'from-orange-600 to-red-600'
    }
  ];

  const stats: Stat[] = [
    { icon: Users, number: '12,000+', label: 'Students Enrolled', color: '#4f46e5' },
    { icon: Award, number: '95%', label: 'Career Placement', color: '#10b981' },
    { icon: BookOpen, number: '150+', label: 'Degree Programs', color: '#f59e0b' },
    { icon: DollarSign, number: '$45M', label: 'Research Funding', color: '#ec4899' }
  ];

  const programs: Program[] = [
    {
      icon: GraduationCap,
      title: 'Arts & Humanities',
      description: 'Explore human culture, creativity, and expression through literature, history, philosophy, and the arts.',
      color: '#c084fc',
      gradient: 'linear-gradient(135deg, #c084fc 0%, #7c3aed 100%)'
    },
    {
      icon: Microscope,
      title: 'Science & Technology',
      description: 'Push the boundaries of knowledge with cutting-edge research in STEM fields and emerging technologies.',
      color: '#38bdf8',
      gradient: 'linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)'
    },
    {
      icon: Briefcase,
      title: 'Business & Economics',
      description: 'Develop leadership skills and business acumen to thrive in the global marketplace.',
      color: '#fb923c',
      gradient: 'linear-gradient(135deg, #fb923c 0%, #ea580c 100%)'
    },
    {
      icon: Scale,
      title: 'Social Sciences',
      description: 'Understand human behavior, society, and institutions through psychology, sociology, and political science.',
      color: '#34d399',
      gradient: 'linear-gradient(135deg, #34d399 0%, #059669 100%)'
    },
    {
      icon: Heart,
      title: 'Health & Medicine',
      description: 'Make a difference in people\'s lives through our comprehensive health science and pre-medical programs.',
      color: '#f472b6',
      gradient: 'linear-gradient(135deg, #f472b6 0%, #db2777 100%)'
    },
    {
      icon: Palette,
      title: 'Design & Media',
      description: 'Create compelling visual narratives and innovative designs that shape culture and communication.',
      color: '#fbbf24',
      gradient: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)'
    }
  ];

  const features: Feature[] = [
    { 
      icon: Building, 
      title: 'Historic Campus', 
      description: 'Beautiful 250-acre campus with state-of-the-art facilities' 
    },
    { 
      icon: Globe, 
      title: 'Global Perspective', 
      description: 'Study abroad programs in over 50 countries worldwide' 
    },
    { 
      icon: Handshake, 
      title: 'Supportive Community', 
      description: 'Dedicated faculty and staff committed to your success' 
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="overflow-x-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-slate-200/50' 
            : 'bg-white/70 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Riverside
              </span>
            </motion.div>

            <div className="hidden md:flex items-center gap-8">
              {['Programs', 'Admissions', 'Campus', 'Research', 'About'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-700 hover:text-indigo-600 font-medium transition-colors relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 transition-all"
            >
              Apply Now
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2 text-slate-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 py-4 border-t border-slate-200"
            >
              {['Programs', 'Admissions', 'Campus', 'Research', 'About'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-3 text-slate-700 hover:text-indigo-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full mt-4 px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold">
                Apply Now
              </button>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Slider */}
      <section className="relative h-screen pt-20 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 7, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img 
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].gradient} opacity-80`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-6 w-full">
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
                      EST. 1892 ✨
                    </span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
                  >
                    {slides[currentSlide].title}
                  </motion.h1>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-2xl lg:text-3xl text-white/90 mb-6 font-light"
                  >
                    {slides[currentSlide].subtitle}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-xl text-white/80 mb-8 leading-relaxed"
                  >
                    {slides[currentSlide].description}
                  </motion.p>

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 bg-white text-indigo-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/20 transition-all flex items-center gap-3 group"
                  >
                    {slides[currentSlide].cta}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slider Controls */}
        <div className="absolute bottom-8 left-0 right-0 z-30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between">
              {/* Navigation Arrows */}
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevSlide}
                  className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextSlide}
                  className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Dots Indicator */}
              <div className="flex gap-3">
                {slides.map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => goToSlide(index)}
                    className="relative"
                  >
                    <div className={`w-12 h-1.5 rounded-full transition-all ${
                      index === currentSlide 
                        ? 'bg-white' 
                        : 'bg-white/30'
                    }`}>
                      {index === currentSlide && (
                        <motion.div
                          className="h-full bg-white rounded-full"
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 5, ease: "linear" }}
                        />
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Play/Pause */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                {isAutoPlay ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="text-center text-white"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4"
                  >
                    <Icon className="w-8 h-8" />
                  </motion.div>
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
                    className="text-5xl font-bold mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-white/90 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-full text-indigo-600 font-semibold text-sm tracking-wide">
                ACADEMIC EXCELLENCE
              </span>
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Discover Your Path
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From liberal arts to advanced sciences, our comprehensive programs prepare you for success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onHoverStart={() => setActiveProgram(index)}
                  onHoverEnd={() => setActiveProgram(null)}
                  className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: program.gradient }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors"
                      style={{ 
                        background: activeProgram === index ? 'rgba(255,255,255,0.2)' : program.gradient 
                      }}
                    >
                      <Icon 
                        className={`w-8 h-8 transition-colors ${
                          activeProgram === index ? 'text-white' : 'text-white'
                        }`} 
                      />
                    </motion.div>

                    <h3 className={`text-2xl font-bold mb-4 transition-colors ${
                      activeProgram === index ? 'text-white' : 'text-slate-900'
                    }`}>
                      {program.title}
                    </h3>

                    <p className={`mb-6 leading-relaxed transition-colors ${
                      activeProgram === index ? 'text-white/90' : 'text-slate-600'
                    }`}>
                      {program.description}
                    </p>

                    <motion.div
                      whileHover={{ x: 5 }}
                      className={`flex items-center gap-2 font-semibold transition-colors ${
                        activeProgram === index ? 'text-white' : 'text-indigo-600'
                      }`}
                    >
                      Learn More
                      <ChevronRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-2xl font-bold">Riverside</span>
              </div>
              <p className="text-slate-400 mb-4">
                Empowering minds, transforming lives since 1892.
              </p>
              <p className="text-slate-400 text-sm">
                123 College Avenue<br />
                Riverside, CA 92521<br />
                (951) 555-0100
              </p>
            </div>

            {[
              {
                title: 'Quick Links',
                links: ['Admissions', 'Financial Aid', 'Academic Calendar', 'Campus Map']
              },
              {
                title: 'Resources',
                links: ['Student Portal', 'Library', 'Career Services', 'Alumni Network']
              },
              {
                title: 'Connect',
                links: ['News & Events', 'Contact Us', 'Give to Riverside', 'Employment']
              }
            ].map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-bold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <motion.a
                        href="#"
                        whileHover={{ x: 5 }}
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        {link}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2026 Riverside College. All rights reserved. | Privacy Policy | Terms of Use</p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          box-sizing: border-box;
        }
        
        body {
          margin: 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
      `}</style>
    </div>
  );
}