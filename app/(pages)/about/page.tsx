"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  School,
  Target,
  Eye,
  Award,
  Users,
  BookOpen,
  Building2,
  MapPin,
  Phone,
  Mail,
  Globe,
  Calendar,
  CheckCircle,
  TrendingUp,
  Heart,
  Lightbulb,
  Trophy,
  GraduationCap,
  Briefcase,
  Shield,
  Star,
  Layers,
  Zap,
  Cpu,
  Code,
  Laptop,
  Database,
  Network,
  FileText,
  Clock,
  Users2,
  Building,
  Leaf,
  Lock,
  Search,
  UserCircle,
} from "lucide-react";

interface Milestone {
  year: string;
  title: string;
  description: string;
}

interface CoreValue {
  title: string;
  description: string;
  icon: React.ElementType;
}

interface Accreditation {
  name: string;
  authority: string;
  icon: React.ElementType;
  year: string;
}

interface Leadership {
  name: string;
  designation: string;
  department?: string;
  qualification: string;
  experience: string;
  photo: string;
}

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"vision" | "mission" | "values">(
    "vision",
  );

  const milestones: Milestone[] = [
    {
      year: "2010",
      title: "Establishment",
      description:
        "Government Polytechnic Aurai established under BTEUP with AICTE approval",
    },
    {
      year: "2011",
      title: "First Batch",
      description:
        "Welcomed first batch of students in CSE, IT, and Electronics Engineering",
    },
    {
      year: "2013",
      title: "Infrastructure Expansion",
      description: "New laboratory buildings and hostel facilities constructed",
    },
    {
      year: "2015",
      title: "Lateral Entry Programs",
      description:
        "Introduced lateral entry programs for diploma holders and 12th pass students",
    },
    {
      year: "2018",
      title: "Digital Transformation",
      description: "Campus-wide WiFi and smart classroom implementation",
    },
    {
      year: "2020",
      title: "Industry Partnerships",
      description:
        "Collaborations with leading IT companies for training and placements",
    },
    {
      year: "2023",
      title: "Academic Excellence",
      description:
        "Achieved 85% placement rate and expanded to 360 student capacity",
    },
  ];

  const coreValues: CoreValue[] = [
    {
      title: "Excellence",
      description:
        "Commitment to highest standards in technical education and research",
      icon: Trophy,
    },
    {
      title: "Innovation",
      description: "Fostering creative thinking and technological advancement",
      icon: Lightbulb,
    },
    {
      title: "Integrity",
      description:
        "Upholding ethical practices and moral values in all endeavors",
      icon: Shield,
    },
    {
      title: "Inclusivity",
      description:
        "Creating equal opportunities for students from all backgrounds",
      icon: Users2,
    },
    {
      title: "Collaboration",
      description: "Promoting teamwork between students, faculty, and industry",
      icon: Heart,
    },
    {
      title: "Sustainability",
      description:
        "Environmental consciousness and responsible resource utilization",
      icon: Leaf,
    },
  ];

  const accreditations: Accreditation[] = [
    {
      name: "AICTE Approved",
      authority: "All India Council for Technical Education",
      icon: Award,
      year: "2010",
    },
    {
      name: "BTEUP Affiliated",
      authority: "Board of Technical Education, Uttar Pradesh",
      icon: GraduationCap,
      year: "2010",
    },
    {
      name: "Government Recognized",
      authority: "Government of Uttar Pradesh",
      icon: Building,
      year: "2010",
    },
  ];

  const leadership: Leadership[] = [
    {
      name: "S.P. Srivastava",
      designation: "Principal",
      qualification: "M.Tech",
      experience: "15+ Years",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
    {
      name: "Chandra Bhan Pal",
      designation: "Head of Department",
      department: "Computer Science & Engineering",
      qualification: "M.Tech",
      experience: "15+ Years",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "P S Arya",
      designation: "Head of Department",
      department: "Information Technology",
      qualification: "M.Tech",
      experience: "15+ Years",
      photo:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
      name: "Rajan Srivastava",
      designation: "Head of Department",
      department: "Electronics Engineering",
      qualification: "M.Tech",
      experience: "15+ Years",
      photo:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    },
  ];

  const statistics = [
    {
      icon: Users,
      value: "2000+",
      label: "Students Enrolled",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Users2,
      value: "30+",
      label: "Qualified Faculty",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Building2,
      value: "15+",
      label: "Modern Labs",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: TrendingUp,
      value: "85%",
      label: "Placement Rate",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: BookOpen,
      value: "6",
      label: "Diploma Programs",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: Trophy,
      value: "14+",
      label: "Years of Excellence",
      color: "from-indigo-500 to-purple-600",
    },
  ];

  const departments = [
    {
      name: "Computer Science & Engineering",
      icon: Laptop,
      description:
        "Software development, programming, and modern computing technologies",
      labs: 6,
    },
    {
      name: "Information Technology",
      icon: Code,
      description: "IT infrastructure, networking, and system administration",
      labs: 6,
    },
    {
      name: "Electronics Engineering",
      icon: Cpu,
      description: "Electronic devices, circuits, and communication systems",
      labs: 6,
    },
  ];

  const facilities = [
    {
      icon: Building2,
      title: "Modern Campus",
      description: "Spread across acres with state-of-the-art infrastructure",
    },
    {
      icon: BookOpen,
      title: "Library",
      description: "10,000+ books and digital resources",
    },
    {
      icon: Network,
      title: "WiFi Campus",
      description: "High-speed internet connectivity",
    },
    {
      icon: Users,
      title: "Hostels",
      description: "Separate accommodation for boys and girls",
    },
    {
      icon: Briefcase,
      title: "Placement Cell",
      description: "Dedicated career guidance and placement support",
    },
    {
      icon: Trophy,
      title: "Sports Facilities",
      description: "Indoor and outdoor sports activities",
    },
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
                ABOUT US
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Babu Paras Nath Maurya
              <br />
              Government Polytechnic Aurai
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Excellence in Technical Education Since 2010
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                <Award className="w-4 h-4" />
                <span>AICTE Approved</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                <GraduationCap className="w-4 h-4" />
                <span>BTEUP Affiliated</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                <Building className="w-4 h-4" />
                <span>Government Institute</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">
                  OUR STORY
                </span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Shaping Engineers for Tomorrow
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>
                    Babu Paras Nath Maurya Government Polytechnic Aurai
                  </strong>
                  , located in Ugapur, Bhadohi, Uttar Pradesh, was established
                  in 2010 with a vision to provide quality technical education
                  to students from all backgrounds.
                </p>
                <p>
                  As an AICTE-approved institution affiliated with the Board of
                  Technical Education Uttar Pradesh (BTEUP), we offer diploma
                  programs in Computer Science Engineering, Information
                  Technology, and Electronics Engineering.
                </p>
                <p>
                  Our commitment extends beyond traditional classroom teaching.
                  We focus on holistic development by providing modern
                  infrastructure, experienced faculty, and hands-on practical
                  training that prepares students for successful careers in the
                  ever-evolving technology industry.
                </p>
                <p>
                  With state-of-the-art laboratories, a well-stocked library,
                  hostel facilities, and a dedicated placement cell, GP Aurai
                  has emerged as a preferred destination for technical education
                  in the region.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop"
                  alt="Campus Building"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop"
                  alt="Students"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover mt-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop"
                  alt="Laboratory"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop"
                  alt="Campus Life"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover mt-8"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full blur-3xl opacity-20" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full blur-3xl opacity-20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              GP Aurai in Numbers
            </h2>
            <p className="text-xl text-gray-600">
              Our journey of excellence reflected in achievements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {statistics.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Guiding Principles
            </h2>
            <p className="text-xl text-gray-600">
              The foundation of our educational excellence
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white rounded-2xl p-2 shadow-lg">
              {[
                { id: "vision", label: "Vision", icon: Eye },
                { id: "mission", label: "Mission", icon: Target },
                { id: "values", label: "Core Values", icon: Star },
              ].map((tab) => {
                const TabIcon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <TabIcon className="w-5 h-5" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            {activeTab === "vision" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl p-10 shadow-2xl"
              >
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Eye className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      Our Vision
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      To emerge as a center of excellence in technical
                      education, fostering innovation, research, and
                      entrepreneurship while nurturing globally competent
                      engineers who contribute to society's technological
                      advancement and economic development.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "mission" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl p-10 shadow-2xl"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                      Our Mission
                    </h3>
                  </div>
                </div>
                <ul className="space-y-4">
                  {[
                    "Provide quality technical education through industry-aligned curriculum and modern teaching methodologies",
                    "Develop skilled engineers equipped with practical knowledge and professional ethics",
                    "Foster innovation and research culture through state-of-the-art laboratories and facilities",
                    "Establish strong industry partnerships for internships, training, and placement opportunities",
                    "Create an inclusive environment that promotes holistic development of students",
                    "Contribute to regional development through skill enhancement and technology transfer",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {activeTab === "values" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {coreValues.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div
                      key={value.title}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {value.title}
                      </h4>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our path to excellence
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-600 to-purple-600" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`lg:grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? "" : "lg:grid-flow-dense"
                  }`}
                >
                  <div
                    className={
                      index % 2 === 0 ? "lg:text-right" : "lg:col-start-2"
                    }
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                      <div className="inline-block px-4 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-bold mb-3">
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden lg:flex justify-center">
                    <div className="w-6 h-6 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full border-4 border-white shadow-lg" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Leadership
            </h2>
            <p className="text-xl text-gray-600">
              Experienced educators guiding GP Aurai's vision
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all text-center"
              >
                <div className="relative inline-block mb-4">
                  <img
                    src={leader.photo}
                    alt={leader.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-indigo-100 shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center border-4 border-white">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {leader.name}
                </h3>
                <p className="text-indigo-600 font-semibold mb-2">
                  {leader.designation}
                </p>
                {leader.department && (
                  <p className="text-sm text-gray-600 mb-3">
                    {leader.department}
                  </p>
                )}
                <div className="pt-4 border-t border-gray-100 space-y-2 text-sm">
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <GraduationCap className="w-4 h-4 text-indigo-600" />
                    {leader.qualification}
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4 text-indigo-600" />
                    {leader.experience}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Accreditations & Affiliations
            </h2>
            <p className="text-xl text-gray-600">
              Recognized by premier educational authorities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {accreditations.map((accreditation, index) => {
              const Icon = accreditation.icon;
              return (
                <motion.div
                  key={accreditation.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-xl text-center hover:shadow-2xl transition-all"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {accreditation.name}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {accreditation.authority}
                  </p>
                  <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">
                    Since {accreditation.year}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Departments Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Academic Departments
            </h2>
            <p className="text-xl text-gray-600">
              Three specialized departments with modern facilities
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <motion.div
                  key={dept.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {dept.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{dept.description}</p>
                  <div className="flex items-center gap-2 text-indigo-600 font-semibold">
                    <Building2 className="w-5 h-5" />
                    {dept.labs} Modern Labs
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Campus Facilities */}
      <section className="py-20 bg-gray-50">
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
              Modern infrastructure for comprehensive learning
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <motion.div
                  key={facility.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        {facility.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {facility.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-xl text-white/90 mb-8">
                Visit our campus or reach out to us for more information about
                admissions, programs, and facilities.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Address</p>
                    <p className="text-white/80">
                      Near Ugapur Market, Aurai, Bhadohi, Uttar Pradesh - 221301
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 flex-shrink-0" />
                   <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <a
                      href="tel:+919451846978"
                      className="text-white/80 hover:text-white"
                    >
                      +91 9451846978
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a
                      href="mailto:principalgpaurai@gmail.com"
                      className="text-white/80 hover:text-white"
                    >
                      principalgpaurai@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
              <div className="space-y-4">
                {[
                  { label: "Established", value: "2010" },
                  { label: "Type", value: "Government Polytechnic" },
                  { label: "Affiliation", value: "BTEUP" },
                  { label: "Approval", value: "AICTE" },
                  { label: "Programs", value: "6 Diploma Courses" },
                  { label: "Total Capacity", value: "360 Students" },
                ].map((fact) => (
                  <div
                    key={fact.label}
                    className="flex justify-between items-center pb-4 border-b border-white/10"
                  >
                    <span className="text-white/80">{fact.label}</span>
                    <span className="font-bold">{fact.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
