import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, ExternalLink, Github, Linkedin, Moon, Sun } from "lucide-react";
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

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark 
        ? "bg-gradient-to-br from-black via-zinc-900 to-black text-white" 
        : "bg-gradient-to-br from-white via-blue-50 to-slate-100 text-gray-900"
    }`}>
      {/* Floating Theme Toggle Button */}
      <button
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl ${
          isDark
            ? "bg-zinc-800 hover:bg-zinc-700 text-yellow-400"
            : "bg-blue-100 hover:bg-blue-200 text-blue-600"
        }`}
      >
        {isDark ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid gap-8 md:grid-cols-3">
        {/* Left Column */}
        <motion.div
          className="md:col-span-2 grid gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Header */}
          <motion.div variants={itemVariants}>
            <div className={`flex flex-col sm:flex-row items-center sm:items-start gap-8 ${
              isDark ? "bg-zinc-900/50" : "bg-white/50"
            } backdrop-blur-sm p-8 rounded-xl border ${
              isDark ? "border-zinc-800" : "border-blue-200"
            } transition-all duration-300 hover:shadow-xl`}>
              <img
                src={isDark ? "/profile-night.jpg" : "/profile-day.jpg"}
                alt="Profile"
                className={`w-32 h-32 rounded-2xl object-cover ring-4 ${
                  isDark ? "ring-blue-600" : "ring-blue-400"
                }`}
              />
              <div className="flex-1 text-center sm:text-left">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2">
                  Christian Dale Santos
                </h1>
                <p className={`text-lg mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  Full Stack Developer | AI Enthusiast 
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    variant="secondary" 
                    className={`rounded-full font-medium transition-all duration-300 ${
                      isDark
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-blue-500 hover:bg-blue-600 text-white"
                    }`}
                  >
                    <Phone className="w-4 h-4 mr-2" /> +63 927 298 5785
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About */}
          <motion.div variants={itemVariants}>
            <Card className={`rounded-xl border transition-all duration-300 ${
              isDark
                ? "bg-zinc-900/50 border-zinc-800 hover:bg-zinc-800/50"
                : "bg-white/50 border-blue-200 hover:bg-white/80"
            } backdrop-blur-sm shadow-lg hover:shadow-xl`}>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 mt-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  About Me
                </h2>
                <p className={`leading-relaxed text-lg ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                  I am a Bachelor of Science in Information Systems graduating student with a solid foundation in software engineering, enterprise systems, and data management. I am a results-driven and proactive individual, eager to contribute to digital transformation initiatives, particularly those involving large-scale system integration and innovative technology solutions.
                  <br />
                  <br />
                  Recently, I have been diving deeper into the world of artificial intelligence, exploring how AI tools and techniques can be seamlessly integrated into modern applications to drive efficiency and innovation. I actively apply this knowledge by creating personal projects that challenge me to experiment with emerging technologies, refine my problem-solving skills, and develop practical solutions that bridge the gap between theoretical concepts and real-world applications.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={itemVariants}>
            <Card className={`rounded-xl border transition-all duration-300 ${
              isDark
                ? "bg-zinc-900/50 border-zinc-800 hover:bg-zinc-800/50"
                : "bg-white/50 border-blue-200 hover:bg-white/80"
            } backdrop-blur-sm shadow-lg hover:shadow-xl`}>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 mt-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Tech Stack
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { title: "Frontend", items: "React, TypeScript, Tailwind CSS, Next.js" },
                    { title: "Backend", items: "Node.js, Python, Express, Django" },
                    { title: "Cloud", items: "Docker, AWS, Firebase" },
                  ].map((category, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className={`p-4 rounded-lg ${
                        isDark ? "bg-zinc-800/50" : "bg-blue-100/50"
                      } transition-all duration-300`}
                    >
                      <h3 className="font-bold text-blue-500 mb-2 text-lg">{category.title}</h3>
                      <p className={isDark ? "text-gray-300" : "text-gray-700"}>{category.items}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Projects */}
          <motion.div variants={itemVariants}>
            <Card className={`rounded-xl border transition-all duration-300 ${
              isDark
                ? "bg-zinc-900/50 border-zinc-800 hover:bg-zinc-800/50"
                : "bg-white/50 border-blue-200 hover:bg-white/80"
            } backdrop-blur-sm shadow-lg hover:shadow-xl`}>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 mt-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Recent Projects
                </h2>
                <div className="space-y-4">
                  {[
                    { name: "Financify", desc: "Finance Tracker with Analytics and AI Insights built with React and Node.js", url: "https://financify-dale.vercel.app" },
                  ].map((project, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 10 }}
                      className={`p-4 rounded-lg border transition-all duration-300 ${
                        isDark
                          ? "bg-zinc-800/30 border-zinc-700 hover:bg-zinc-800/60"
                          : "bg-blue-50/50 border-blue-300 hover:bg-blue-100/50"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-lg mb-1">
                            {project.url ? (
                              <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={isDark ? 'hover:underline text-blue-300' : 'hover:underline text-blue-700'}
                              >
                                {project.name}
                              </a>
                            ) : (
                              project.name
                            )}
                          </h3>
                          <p className={isDark ? "text-gray-400" : "text-gray-600"}>{project.desc}</p>
                        </div>
                        {project.url ? (
                          <a href={project.url} target="_blank" rel="noopener noreferrer" className="ml-3">
                            <ExternalLink className={`w-5 h-5 ${isDark ? "text-blue-500" : "text-blue-600"}`} />
                          </a>
                        ) : (
                          <ExternalLink className={`w-5 h-5 ${isDark ? "text-blue-500" : "text-blue-600"}`} />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="grid gap-8 auto-rows-max"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Card */}
          <motion.div variants={itemVariants}>
            <Card className={`rounded-xl border bgTransition-all duration-300 ${
              isDark
                ? "bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border-blue-800"
                : "bg-gradient-to-br from-blue-200/50 to-cyan-200/50 border-blue-300"
            } backdrop-blur-sm shadow-lg hover:shadow-xl`}>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-blue-500"></h2>
                <div className="flex flex-col gap-3">
                  {[
                    { icon: Github, label: "GitHub", url: "https://github.com/deylsnts" },
                    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/deylsnts/" },
                    { icon: Mail, label: "Email", url: "mailto:cdalesantos9@gmail.com" },
                  ].map((item, idx) => (
                    <motion.div key={idx} whileHover={{ x: 5 }}>
                      <a href={item.url} target={item.label === "Email" ? "_self" : "_blank"} rel={item.label !== "Email" ? "noopener noreferrer" : ""}>
                        <Button 
                          className={`w-full rounded-full font-medium transition-all duration-300 ${
                            isDark
                              ? "bg-blue-600/80 hover:bg-blue-600 text-white border-blue-500"
                              : "bg-blue-500/80 hover:bg-blue-600 text-white border-blue-400"
                          }`}
                        >
                          <item.icon className="w-4 h-4 mr-2" /> {item.label}
                        </Button>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Experience */}
          <motion.div variants={itemVariants}>
            <Card className={`rounded-xl border transition-all duration-300 ${
              isDark
                ? "bg-zinc-900/50 border-zinc-800 hover:bg-zinc-800/50"
                : "bg-white/50 border-blue-200 hover:bg-white/80"
            } backdrop-blur-sm shadow-lg hover:shadow-xl`}>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 mt-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Experience
                </h2>
                <ul className="space-y-4">
                  {[
                    { role: "Operations Excellence Analyst Intern", company: "Globe Telecom", year: "2025" },
                    { role: "Hello World!", company: "Wrote my first line of code", year: "2022" },
                  ].map((exp, idx) => (
                    <motion.li key={idx} className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-300 group ${
                      isDark ? "hover:bg-zinc-800/50" : "hover:bg-blue-100/50"
                    }`}>
                      <div className={`w-5 h-5 rounded flex-shrink-0 transition-all duration-300 ${
                        isDark 
                          ? "bg-gray-600 group-hover:bg-blue-500" 
                          : "bg-gray-400 group-hover:bg-blue-500"
                      }`} />
                      <div className="flex-1">
                        <p className="font-bold text-lg">{exp.role}</p>
                        <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>{exp.company}</p>
                      </div>
                      <p className={`text-sm font-medium flex-shrink-0 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{exp.year}</p>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants}>
            <Card className={`rounded-xl border transition-all duration-300 ${
              isDark
                ? "bg-zinc-900/50 border-zinc-800 hover:bg-zinc-800/50"
                : "bg-white/50 border-blue-200 hover:bg-white/80"
            } backdrop-blur-sm shadow-lg hover:shadow-xl`}>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 mt-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Education
                </h2>
                <ul className="space-y-4">
                  {[
                    { degree: "Bachelor of Science in Information Systems", school: "De La Salle-College of Saint Benilde", year: "2026", honors: "Cum Laude" },
                  ].map((edu, idx) => (
                    <motion.li key={idx} className={`flex items-center gap-0 p-3 rounded-xl transition-all duration-300 group ${
                      isDark ? "hover:bg-zinc-800/50" : "hover:bg-blue-100/50"
                    }`}>
                      <div className="flex-1">
                        <p className="font-bold text-lg">{edu.degree}</p>
                        <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>{edu.school}</p>
                        <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>{edu.honors}</p>
                      </div>
                      <p className={`text-sm font-medium flex-shrink-0 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{edu.year}</p>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills card removed */}
        </motion.div>
      </div>
    </div>
  );
}
