import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, ExternalLink, Github, Linkedin, Moon, Sun, MapPin, Download, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Portfolio() {
  const { isDark, setIsDark } = useTheme();
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertifications, setShowAllCertifications] = useState(false);

  const projects = [
    {
      name: "Financify",
      desc: "Finance Tracker with Analytics and AI Insights.",
      url: "https://financify-dale.vercel.app",
      tech: "React • Node.js",
    },
  ];

  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      skills: "Cloud Computing • Security • Billing",
      url: "https://www.credly.com/go/KEWnp6NT",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 antialiased ${
        isDark ? "bg-zinc-950 text-zinc-200 selection:bg-blue-500/30" : "bg-zinc-50 text-zinc-900 selection:bg-blue-500/20"
      }`}
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
      `}</style>
      {/* Background Gradient Blob */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-20 blur-[120px] rounded-full pointer-events-none ${
          isDark ? "bg-blue-600" : "bg-blue-400"
        }`} />
      </div>

      {/* Floating Theme Toggle Button */}
      <button
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-6 right-6 z-50 p-2 rounded-full transition-all duration-300 ${
          isDark
            ? "bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100"
            : "bg-white hover:bg-zinc-100 text-zinc-600 hover:text-zinc-900 shadow-sm border border-zinc-200"
        }`}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {showAllProjects ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-24"
        >
          <Button
            variant="ghost"
            className={`mb-8 pl-0 hover:bg-transparent ${isDark ? "text-zinc-400 hover:text-zinc-100" : "text-zinc-600 hover:text-zinc-900"}`}
            onClick={() => setShowAllProjects(false)}
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Button>

          <h2 className="text-3xl font-bold mb-8">All Projects</h2>

          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project, idx) => (
              <a
                key={idx}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block p-3 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  isDark ? "border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900 hover:border-zinc-700" : "border-zinc-200 bg-white/50 hover:bg-white hover:shadow-md hover:border-zinc-300"
                }`}
              >
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg group-hover:text-blue-500 transition-colors">
                    {project.name}
                  </h3>
                  <ExternalLink
                    className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${
                      isDark ? "text-zinc-500" : "text-zinc-400"
                    }`}
                  />
                </div>
                <p className={`mb-2 text-sm ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
                  {project.desc}
                </p>
                <p className={`text-xs font-mono ${isDark ? "text-zinc-600" : "text-zinc-400"}`}>
                  {project.tech}
                </p>
              </a>
            ))}
          </div>
        </motion.div>
      ) : showAllCertifications ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-24"
        >
          <Button
            variant="ghost"
            className={`mb-8 pl-0 hover:bg-transparent ${isDark ? "text-zinc-400 hover:text-zinc-100" : "text-zinc-600 hover:text-zinc-900"}`}
            onClick={() => setShowAllCertifications(false)}
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Button>

          <h2 className="text-3xl font-bold mb-8">All Certifications</h2>

          <div className="grid gap-4 md:grid-cols-2">
            {certifications.map((cert, idx) => (
              <a
                key={idx}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block p-3 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  isDark ? "border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900 hover:border-zinc-700" : "border-zinc-200 bg-white/50 hover:bg-white hover:shadow-md hover:border-zinc-300"
                }`}
              >
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg group-hover:text-blue-500 transition-colors">
                    {cert.name}
                  </h3>
                  <ExternalLink
                    className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${
                      isDark ? "text-zinc-500" : "text-zinc-400"
                    }`}
                  />
                </div>
                <p
                  className={`mb-2 text-sm ${
                    isDark ? "text-zinc-400" : "text-zinc-600"
                  }`}
                >
                  {cert.issuer} • {cert.date}
                </p>
                <p
                  className={`text-xs font-mono ${
                    isDark ? "text-zinc-600" : "text-zinc-400"
                  }`}
                >
                  {cert.skills}
                </p>
              </a>
            ))}
          </div>
        </motion.div>
      ) : (
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-24 grid gap-16 md:grid-cols-[1.5fr_1fr]">
        {/* Left Column */}
        <motion.div
          className="grid gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Header */}
          <motion.div variants={itemVariants}>
            <div className="flex items-start gap-8">
              <img
                src={isDark ? "/profile-night.jpg" : "/profile-day.jpg"}
                alt="Profile"
                className={`w-28 h-28 rounded-2xl object-cover transition-all duration-500 border-2 ${
                  isDark ? "border-zinc-800" : "border-white shadow-sm"
                }`}
              />
              <div className="flex flex-col gap-5">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent inline-block">
                    Christian Dale Santos
                  </h1>
                  <p
                    className={`text-lg ${
                      isDark ? "text-zinc-400" : "text-zinc-500"
                    }`}
                  >
                    Full Stack Developer & AI Enthusiast
                  </p>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 text-sm">
                    <div className={`flex items-center gap-2 ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
                      <MapPin className="w-4 h-4" />
                      Cainta, Philippines
                    </div>
                    <div className={`flex items-center gap-2 ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      Available for work
                    </div>
                  </div>
                  <div className="mt-8">
                    <Button
                      variant="outline"
                      className={`group relative overflow-hidden rounded-full px-6 gap-2 transition-all duration-300 hover:-translate-y-0.5 ${
                        isDark
                          ? "border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:border-zinc-700 text-zinc-300 hover:text-white"
                          : "border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-300 text-zinc-600 hover:text-zinc-900 shadow-sm hover:shadow-md"
                      }`}
                      onClick={() => window.open("/resume.pdf", "_blank")}
                    >
                      <span className={`absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent ${isDark ? "via-white/10" : "via-black/5"} to-transparent pointer-events-none`} />
                      <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" /> Download Resume
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About */}
          <motion.div variants={itemVariants}>
            <h2 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-50">
              About
            </h2>
            <p
              className={`text-lg leading-relaxed ${
                isDark ? "text-zinc-400" : "text-zinc-600"
              }`}
            >
              I am a Bachelor of Science in Information Systems graduate
              with a solid foundation in software engineering, enterprise systems,
              and data management. I am a results-driven and proactive individual,
              eager to contribute to digital transformation initiatives.
              <br />
              <br />
              Recently, I have been diving deeper into the world of artificial
              intelligence, exploring how AI tools and techniques can be
              seamlessly integrated into modern applications to drive efficiency
              and innovation.
            </p>
          </motion.div>

          {/* Projects */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-sm font-bold uppercase tracking-widest opacity-50">
                Recent Projects
              </h2>
              <button
                onClick={() => setShowAllProjects(true)}
                className={`text-sm font-medium hover:underline underline-offset-4 ${isDark ? "text-zinc-400 hover:text-zinc-100" : "text-zinc-600 hover:text-zinc-900"}`}
              >
                View All
              </button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {projects.slice(0, 4).map((project, idx) => (
                <a
                  key={idx}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group block p-3 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                    isDark ? "border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900 hover:border-zinc-700" : "border-zinc-200 bg-white/50 hover:bg-white hover:shadow-md hover:border-zinc-300"
                  }`}
                >
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-lg group-hover:text-blue-500 transition-colors">
                      {project.name}
                    </h3>
                    <ExternalLink
                      className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${
                        isDark ? "text-zinc-500" : "text-zinc-400"
                      }`}
                    />
                  </div>
                  <p
                    className={`mb-2 text-sm ${
                      isDark ? "text-zinc-400" : "text-zinc-600"
                    }`}
                  >
                    {project.desc}
                  </p>
                  <p
                    className={`text-xs font-mono ${
                      isDark ? "text-zinc-600" : "text-zinc-400"
                    }`}
                  >
                    {project.tech}
                  </p>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-sm font-bold uppercase tracking-widest opacity-50">
                Recent Certifications
              </h2>
              <button
                onClick={() => setShowAllCertifications(true)}
                className={`text-sm font-medium hover:underline underline-offset-4 ${isDark ? "text-zinc-400 hover:text-zinc-100" : "text-zinc-600 hover:text-zinc-900"}`}
              >
                View All
              </button>
            </div>
            <div className="grid gap-4">
              {certifications.slice(0, 4).map((cert, idx) => (
                <a
                  key={idx}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group block p-3 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                    isDark ? "border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900 hover:border-zinc-700" : "border-zinc-200 bg-white/50 hover:bg-white hover:shadow-md hover:border-zinc-300"
                  }`}
                >
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-lg group-hover:text-blue-500 transition-colors">
                      {cert.name}
                    </h3>
                    <ExternalLink
                      className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${
                        isDark ? "text-zinc-500" : "text-zinc-400"
                      }`}
                    />
                  </div>
                  <p
                    className={`mb-2 text-sm ${
                      isDark ? "text-zinc-400" : "text-zinc-600"
                    }`}
                  >
                    {cert.issuer} • {cert.date}
                  </p>
                  <p
                    className={`text-xs font-mono ${
                      isDark ? "text-zinc-600" : "text-zinc-400"
                    }`}
                  >
                    {cert.skills}
                  </p>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        

        {/* Right Column */}
        <motion.div
          className="grid gap-12 content-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Connect */}
          <motion.div variants={itemVariants}>
            <h2 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-50">
              Connect
            </h2>
            <div className="flex flex-col gap-2">
              {[
                {
                  icon: Github,
                  label: "GitHub",
                  url: "https://github.com/deylsnts",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  url: "https://www.linkedin.com/in/deylsnts/",
                },
                {
                  icon: Mail,
                  label: "Email",
                  url: "mailto:cdalesantos9@gmail.com",
                },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target={item.label === "Email" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 py-2 transition-colors ${
                    isDark
                      ? "text-zinc-400 hover:text-blue-400"
                      : "text-zinc-600 hover:text-blue-600"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack - Minimal List */}
          <motion.div variants={itemVariants}>
            <h2 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-50">
              Stack
            </h2>
            <div className="grid gap-4">
              {[
                {
                  title: "Frontend",
                  items: "React, TypeScript, Tailwind, Next.js",
                },
                {
                  title: "Backend",
                  items: "Node.js, Python, Express, Django",
                },
                { title: "Cloud", items: "Docker, AWS, Firebase" },
              ].map((cat, idx) => (
                <div key={idx}>
                  <h3
                    className={`text-sm font-medium mb-1 ${
                      isDark ? "text-zinc-200" : "text-zinc-800"
                    }`}
                  >
                    {cat.title}
                  </h3>
                  <p
                    className={`text-sm ${
                      isDark ? "text-zinc-500" : "text-zinc-600"
                    }`}
                  >
                    {cat.items}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience - Minimal Timeline */}
          <motion.div variants={itemVariants}>
            <h2 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-50">
              Experience
            </h2>
            <div className="ml-1.5">
              {[
                {
                  role: "Ops Excellence Analyst Intern",
                  company: "Globe Telecom",
                  year: "2025",
                },
                {
                  role: "Hello World!",
                  company: "Wrote my first line of code",
                  year: "2019",
                },
              ].map((exp, idx, arr) => (
                <div
                  key={idx}
                  className={`relative pl-6 ${
                    idx === arr.length - 1 ? "" : "pb-6"
                  }`}
                >
                  <div
                    className={`absolute left-0 w-px ${
                      isDark ? "bg-zinc-800" : "bg-zinc-200"
                    } ${
                      idx === arr.length - 1 ? "top-0 h-1.5" : "bottom-0"
                    } ${idx === 0 ? "top-1.5" : "top-0"}`}
                  />
                  <div
                    className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 ${
                      isDark
                        ? "bg-zinc-950 border-blue-500"
                        : "bg-zinc-50 border-blue-500"
                    }`}
                  />
                  <p className="font-medium text-sm">{exp.role}</p>
                  <p
                    className={`text-sm ${
                      isDark ? "text-zinc-500" : "text-zinc-600"
                    }`}
                  >
                    {exp.company}
                  </p>
                  <p
                    className={`text-xs mt-1 font-mono ${
                      isDark ? "text-zinc-600" : "text-zinc-400"
                    }`}
                  >
                    {exp.year}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants}>
            <h2 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-50">
              Education
            </h2>
            <div>
              <p className="font-medium text-sm">BS Information Systems</p>
              <p
                className={`text-sm ${
                  isDark ? "text-zinc-500" : "text-zinc-600"
                }`}
              >
                De La Salle-College of Saint Benilde
              </p>
              <div className="flex justify-between items-center mt-2">
                <span
                  className={`text-xs px-2 py-0.5 rounded border ${
                    isDark
                      ? "border-zinc-800 text-zinc-400"
                      : "border-zinc-200 text-zinc-500"
                  }`}
                >
                  Cum Laude
                </span>
                <span
                  className={`text-xs font-mono ${
                    isDark ? "text-zinc-600" : "text-zinc-400"
                  }`}
                >
                  2026
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      )}

      <footer className={`relative z-10 py-8 text-center text-sm transition-colors ${
        isDark ? "text-zinc-600" : "text-zinc-400"
      }`}>
        &copy; {new Date().getFullYear()} Christian Dale Santos. All rights reserved.
      </footer>
    </div>
  );
}
