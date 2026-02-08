"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  Award,
  Target,
  Lightbulb,
  TrendingUp,
  Users,
  Calendar,
  FileText,
  Download,
  ExternalLink,
  ChevronRight,
  School,
  Laptop,
  Cpu,
  Code,
  Database,
  Globe,
  Smartphone,
  CheckCircle,
  Clock,
  BookMarked,
  Briefcase,
} from "lucide-react";

interface Course {
  code: string;
  name: string;
  duration: string;
  icon: React.ElementType;
  description: string;
  objectives: string[];
  careerPaths: string[];
  subjects: {
    semester: number;
    topics: string[];
  }[];
}

interface Faculty {
  name: string;
  designation: string;
  department: string;
  qualification: string;
  experience: string;
}

export default function AcademicPage() {
  const [selectedCourse, setSelectedCourse] = useState<string>("355");
  const [activeTab, setActiveTab] = useState<
    "overview" | "syllabus" | "faculty"
  >("overview");

  const courses: Record<string, Course> = {
    "355": {
      code: "355",
      name: "Computer Science and Engineering",
      duration: "3 Years (6 Semesters)",
      icon: Laptop,
      description:
        "The Computer Science and Engineering program provides comprehensive training in software development, programming, algorithms, and modern computing technologies. Students gain hands-on experience in developing applications, databases, and web technologies.",
      objectives: [
        "Develop strong programming and problem-solving skills",
        "Master software development lifecycle and methodologies",
        "Understand database management and networking concepts",
        "Learn modern web and mobile application development",
        "Gain expertise in data structures and algorithms",
      ],
      careerPaths: [
        "Software Developer",
        "Web Developer",
        "Database Administrator",
        "System Analyst",
        "Network Engineer",
        "IT Support Specialist",
      ],
      subjects: [
        {
          semester: 1,
          topics: [
            "English & Communication",
            "Mathematics-I",
            "Applied Physics",
            "Applied Chemistry",
            "Engineering Drawing",
            "Workshop Practice",
          ],
        },
        {
          semester: 2,
          topics: [
            "Mathematics-II",
            "Applied Physics-II",
            "Environmental Studies",
            "Fundamentals of IT",
            "Programming in C",
            "Computer Hardware",
          ],
        },
        {
          semester: 3,
          topics: [
            "Data Structure",
            "Digital Electronics",
            "Computer Organization",
            "Object Oriented Programming using C++",
            "Database Management System",
            "Web Technologies",
          ],
        },
        {
          semester: 4,
          topics: [
            "Operating Systems",
            "Software Engineering",
            "Java Programming",
            "Computer Networks",
            "Microprocessor & Interfacing",
            "Multimedia & Animation",
          ],
        },
        {
          semester: 5,
          topics: [
            "E-Commerce",
            "Data Communication",
            "Python Programming",
            "Mobile Application Development",
            "Cloud Computing",
            "Project Work",
          ],
        },
        {
          semester: 6,
          topics: [
            "Machine Learning",
            "Cyber Security",
            "Internet of Things",
            "Artificial Intelligence",
            "Major Project",
            "Industrial Training",
          ],
        },
      ],
    },
    "356": {
      code: "356",
      name: "Information Technology",
      duration: "3 Years (6 Semesters)",
      icon: Code,
      description:
        "Information Technology program focuses on the application of technology to solve business problems. Students learn programming, networking, database management, and modern IT infrastructure to become skilled IT professionals.",
      objectives: [
        "Master IT infrastructure and system administration",
        "Develop proficiency in programming and scripting",
        "Understand network design and implementation",
        "Learn cloud computing and virtualization",
        "Gain expertise in IT security and compliance",
      ],
      careerPaths: [
        "IT Consultant",
        "Systems Administrator",
        "Network Administrator",
        "Cloud Engineer",
        "IT Security Analyst",
        "Technical Support Engineer",
      ],
      subjects: [
        {
          semester: 1,
          topics: [
            "English & Communication",
            "Mathematics-I",
            "Applied Physics",
            "Applied Chemistry",
            "Engineering Drawing",
            "Workshop Practice",
          ],
        },
        {
          semester: 2,
          topics: [
            "Mathematics-II",
            "Applied Physics-II",
            "Environmental Studies",
            "Fundamentals of IT",
            "Programming in C",
            "Computer Hardware & Maintenance",
          ],
        },
        {
          semester: 3,
          topics: [
            "Data Structure Using C",
            "Digital Electronics",
            "Computer Architecture",
            "Object Oriented Programming",
            "RDBMS",
            "Web Design & Development",
          ],
        },
        {
          semester: 4,
          topics: [
            "Operating Systems",
            "Software Engineering",
            "Java Programming",
            "Computer Networks",
            "System Administration",
            "Mobile Computing",
          ],
        },
        {
          semester: 5,
          topics: [
            "Network Security",
            "Enterprise Resource Planning",
            "Python Programming",
            "Android Development",
            "Cloud Technologies",
            "Minor Project",
          ],
        },
        {
          semester: 6,
          topics: [
            "Big Data Analytics",
            "DevOps",
            "Blockchain Technology",
            "Ethical Hacking",
            "Major Project",
            "Industrial Training",
          ],
        },
      ],
    },
    "330": {
      code: "330",
      name: "Electronics Engineering",
      duration: "3 Years (6 Semesters)",
      icon: Cpu,
      description:
        "Electronics Engineering program provides in-depth knowledge of electronic devices, circuits, microprocessors, and communication systems. Students gain practical skills in designing, testing, and troubleshooting electronic systems.",
      objectives: [
        "Understand electronic components and circuit design",
        "Master microprocessor and microcontroller programming",
        "Learn embedded systems and IoT applications",
        "Develop skills in PCB design and fabrication",
        "Gain expertise in communication systems",
      ],
      careerPaths: [
        "Electronics Engineer",
        "Embedded Systems Engineer",
        "PCB Designer",
        "Control Systems Engineer",
        "Instrumentation Engineer",
        "Telecom Engineer",
      ],
      subjects: [
        {
          semester: 1,
          topics: [
            "English & Communication",
            "Mathematics-I",
            "Applied Physics",
            "Applied Chemistry",
            "Engineering Drawing",
            "Workshop Practice",
          ],
        },
        {
          semester: 2,
          topics: [
            "Mathematics-II",
            "Applied Physics-II",
            "Environmental Studies",
            "Basic Electronics",
            "Electrical Engineering",
            "Electronic Devices & Circuits",
          ],
        },
        {
          semester: 3,
          topics: [
            "Digital Electronics",
            "Network Analysis",
            "Electronic Instruments & Measurements",
            "Analog Electronics",
            "PCB Design",
            "Signals & Systems",
          ],
        },
        {
          semester: 4,
          topics: [
            "Microprocessor & Interfacing",
            "Communication Systems",
            "Control Systems",
            "Power Electronics",
            "Electronic Circuit Design",
            "Embedded Systems",
          ],
        },
        {
          semester: 5,
          topics: [
            "Microcontroller & Applications",
            "VLSI Design",
            "Optical Communication",
            "Industrial Electronics",
            "IoT & Applications",
            "Project Work",
          ],
        },
        {
          semester: 6,
          topics: [
            "Robotics",
            "Wireless Communication",
            "Consumer Electronics",
            "Biomedical Electronics",
            "Major Project",
            "Industrial Training",
          ],
        },
      ],
    },
  };



  const keyFaculty: Faculty[] = [
    {
      name: "Chandra Bhan Pal",
      designation: "Head of Department",
      department: "Computer Science & Engineering",
      qualification: "M.Tech",
      experience: "15+ Years",
    },
    {
      name: "P S Arya",
      designation: "Head of Department",
      department: "Information Technology",
      qualification: "M.Tech",
      experience: "15+ Years",
    },
    {
      name: "Rajan Srivastava",
      designation: "Head of Department",
      department: "Electronics Engineering",
      qualification: "M.Tech",
      experience: "15+ Years",
    },
    {
      name: "Ravish Kumar Yadav",
      designation: "Lecturer",
      department: "Computer Science & Engineering",
      qualification: "B.Tech",
      experience: "8+ Years",
    },
    {
      name: "Namrata Singh",
      designation: "Lecturer",
      department: "Information Technology",
      qualification: "M.Tech",
      experience: "6+ Years",
    },
    {
      name: "Dr. Vivekanand Yadav",
      designation: "Lecturer",
      department: "Electronics Engineering",
      qualification: "PhD",
      experience: "12+ Years",
    },
  ];

  const academicFeatures = [
    {
      icon: BookOpen,
      title: "AICTE Approved Curriculum",
      description: "Industry-aligned syllabus updated regularly",
    },
    {
      icon: Users,
      title: "Experienced Faculty",
      description: "30+ qualified and dedicated teachers",
    },
    {
      icon: Laptop,
      title: "Modern Labs",
      description: "15+ well-equipped laboratories",
    },
    {
      icon: Award,
      title: "Practical Training",
      description: "Hands-on experience with latest technologies",
    },
    {
      icon: Briefcase,
      title: "Industry Partnerships",
      description: "Collaborations with leading companies",
    },
    {
      icon: Globe,
      title: "Online Resources",
      description: "Access to digital library and e-learning",
    },
  ];

  const currentCourse = courses[selectedCourse];
  const CurrentIcon = currentCourse.icon;

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
                ACADEMICS
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Academic Programs
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              AICTE approved diploma programs designed to build your technical
              career
            </p>
          </motion.div>
        </div>
      </section>

      {/* Academic Features */}
      <section className="relative -mt-16 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Course Selection */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Programs
            </h2>
            <p className="text-xl text-gray-600">
              Select a program to view detailed information
            </p>
          </motion.div>

          {/* Course Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.values(courses).map((course) => {
              const Icon = course.icon;
              return (
                <button
                  key={course.code}
                  onClick={() => setSelectedCourse(course.code)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all ${
                    selectedCourse === course.code
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xl scale-105"
                      : "bg-white text-gray-700 hover:shadow-lg hover:scale-102"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{course.name}</span>
                  <span className="sm:hidden">Code: {course.code}</span>
                </button>
              );
            })}
          </div>

          {/* Course Details */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Course Header */}
            <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 p-8 text-white">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                  <CurrentIcon className="w-10 h-10" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                      Course Code: {currentCourse.code}
                    </span>
                    <span className="px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                      {currentCourse.duration}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-3">
                    {currentCourse.name}
                  </h3>
                  <p className="text-white/90 text-lg">
                    {currentCourse.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200">
              <div className="flex">
                {[
                  { id: "overview", label: "Overview", icon: BookOpen },
                  { id: "syllabus", label: "Syllabus", icon: FileText },
                  { id: "faculty", label: "Faculty", icon: Users },
                ].map((tab) => {
                  const TabIcon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex-1 px-6 py-4 flex items-center justify-center gap-2 font-semibold transition-all ${
                        activeTab === tab.id
                          ? "text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50"
                          : "text-gray-600 hover:text-indigo-600 hover:bg-gray-50"
                      }`}
                    >
                      <TabIcon className="w-5 h-5" />
                      <span className="hidden sm:inline">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-8">
              {activeTab === "overview" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  {/* Program Objectives */}
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Target className="w-6 h-6 text-indigo-600" />
                      Program Objectives
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {currentCourse.objectives.map((objective, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-4 bg-indigo-50 rounded-xl"
                        >
                          <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                          <p className="text-gray-700">{objective}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Career Paths */}
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Briefcase className="w-6 h-6 text-indigo-600" />
                      Career Opportunities
                    </h4>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {currentCourse.careerPaths.map((career, index) => (
                        <div
                          key={index}
                          className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-100 hover:shadow-lg transition-all"
                        >
                          <p className="font-semibold text-gray-900">
                            {career}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "syllabus" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-2xl font-bold text-gray-900">
                      Semester-wise Syllabus
                    </h4>
                    <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Download Full Syllabus
                    </button>
                  </div>

                  {currentCourse.subjects.map((semester) => (
                    <div
                      key={semester.semester}
                      className="border border-gray-200 rounded-xl overflow-hidden"
                    >
                      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4">
                        <h5 className="text-xl font-bold text-white flex items-center gap-2">
                          <BookMarked className="w-5 h-5" />
                          Semester {semester.semester}
                        </h5>
                      </div>
                      <div className="p-6 grid sm:grid-cols-2 gap-3">
                        {semester.topics.map((topic, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors"
                          >
                            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <span className="text-indigo-600 font-bold text-sm">
                                {index + 1}
                              </span>
                            </div>
                            <p className="text-gray-700 font-medium">{topic}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === "faculty" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">
                    Department Faculty
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {keyFaculty
                      .filter((f) => f.department === currentCourse.name)
                      .map((faculty, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-br from-white to-indigo-50 rounded-xl p-6 border border-indigo-100 shadow-md hover:shadow-xl transition-all"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                              {faculty.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                            <div className="flex-1">
                              <h5 className="text-lg font-bold text-gray-900 mb-1">
                                {faculty.name}
                              </h5>
                              <p className="text-indigo-600 font-semibold text-sm mb-2">
                                {faculty.designation}
                              </p>
                              <div className="space-y-1 text-sm text-gray-600">
                                <p className="flex items-center gap-2">
                                  <Award className="w-4 h-4 text-indigo-600" />
                                  {faculty.qualification}
                                </p>
                                <p className="flex items-center gap-2">
                                  <Clock className="w-4 h-4 text-indigo-600" />
                                  {faculty.experience}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Explore our programs and take the first step towards a successful
              technical career
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-10 py-4 bg-white text-indigo-600 rounded-full font-bold hover:bg-blue-50 transition-all shadow-2xl">
                View Admission Process
              </button>
              <button className="px-10 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-bold hover:bg-white/20 transition-all flex items-center gap-2">
                Download Brochure
                <Download className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
