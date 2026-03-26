"use client";
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

interface Department {
  name: string;
  code: string;
  hod: string;
  icon: React.ElementType;
  labs: string[];
  specializations: string[];
}
const Departments = () => {
  const departments: Department[] = [
    {
      name: "Computer Science & Engineering",
      code: "CSE",
      hod: "Chandra Bhan Pal",
      icon: Laptop,
      labs: [
        "Programming Lab",
        "Data Structure Lab",
        "DBMS Lab",
        "Networking Lab",
        "Web Development Lab",
        "Project Lab",
      ],
      specializations: [
        "Software Development",
        "Web Technologies",
        "Database Management",
        "Network Security",
      ],
    },
    {
      name: "Information Technology",
      code: "IT",
      hod: "P S Arya",
      icon: Code,
      labs: [
        "Programming Lab",
        "Hardware Lab",
        "Networking Lab",
        "Cloud Computing Lab",
        "Mobile App Lab",
        "Cyber Security Lab",
      ],
      specializations: [
        "System Administration",
        "Cloud Computing",
        "Mobile Development",
        "IT Security",
      ],
    },
    {
      name: "Electronics Engineering",
      code: "EC",
      hod: "Rajan Srivastava",
      icon: Cpu,
      labs: [
        "Basic Electronics Lab",
        "Digital Electronics Lab",
        "Microprocessor Lab",
        "Communication Lab",
        "PCB Design Lab",
        "Embedded Systems Lab",
      ],
      specializations: [
        "Embedded Systems",
        "VLSI Design",
        "Communication Systems",
        "IoT Applications",
      ],
    },
  ];

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Departments
            </h2>
            <p className="text-xl text-gray-600">
              Well-equipped departments with modern facilities
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => {
              const DeptIcon = dept.icon;
              return (
                <motion.div
                  key={dept.code}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <DeptIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {dept.name}
                  </h3>
                  <p className="text-indigo-600 font-semibold mb-4">
                    HOD: {dept.hod}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Laptop className="w-4 h-4 text-indigo-600" />
                      Laboratories
                    </h4>
                    <div className="space-y-2">
                      {dept.labs.map((lab, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {lab}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4 text-indigo-600" />
                      Specializations
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {dept.specializations.map((spec, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Departments;
