"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Code, Palette, Zap } from "lucide-react"

interface AboutProps {
  darkMode: boolean
}

export default function About({ darkMode }: AboutProps) {
  const experiences = [
    {
      year: "2023 - Present",
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies.",
      icon: Code,
    },
    {
      year: "2021 - 2023",
      title: "Frontend Developer",
      company: "Digital Innovations",
      description: "Developed responsive web applications and improved user experience across multiple platforms.",
      icon: Palette,
    },
    {
      year: "2020 - 2021",
      title: "Junior Developer",
      company: "StartupHub",
      description: "Built and maintained web applications while learning modern development practices.",
      icon: Zap,
    },
  ]

  const skills = [
    { name: "Frontend Development", level: 95 },
    { name: "Backend Development", level: 88 },
    { name: "UI/UX Design", level: 82 },
    { name: "Database Management", level: 85 },
    { name: "DevOps & Cloud", level: 78 },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 50,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-10 right-10 w-64 h-64 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-3xl"
      />

      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 60,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-gradient-to-r from-pink-500/10 to-rose-500/10 blur-3xl"
      />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? "text-white" : "text-slate-900"}`}>
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
            I'm a passionate full-stack developer with over 3 years of experience creating digital solutions that make a
            difference. I love turning complex problems into simple, beautiful designs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`p-8 rounded-2xl ${
              darkMode ? "bg-white/5 border border-white/10" : "bg-white/50 border border-white/20"
            } backdrop-blur-xl`}
          >
            <motion.h3
              variants={itemVariants}
              className={`text-2xl font-bold mb-6 ${darkMode ? "text-white" : "text-slate-900"}`}
            >
              Get to know me
            </motion.h3>

            <motion.div variants={itemVariants} className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <MapPin className={`h-5 w-5 ${darkMode ? "text-purple-400" : "text-purple-600"}`} />
                <span className={darkMode ? "text-slate-300" : "text-slate-600"}>Mumbai, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className={`h-5 w-5 ${darkMode ? "text-purple-400" : "text-purple-600"}`} />
                <span className={darkMode ? "text-slate-300" : "text-slate-600"}>Available for freelance</span>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className={`${darkMode ? "text-slate-400" : "text-slate-600"} leading-relaxed`}
            >
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              enjoying a good cup of coffee while sketching out new ideas. I believe in continuous learning and staying
              updated with the latest trends in web development.
            </motion.p>
          </motion.div>

          {/* Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`p-8 rounded-2xl ${
              darkMode ? "bg-white/5 border border-white/10" : "bg-white/50 border border-white/20"
            } backdrop-blur-xl`}
          >
            <motion.h3
              variants={itemVariants}
              className={`text-2xl font-bold mb-6 ${darkMode ? "text-white" : "text-slate-900"}`}
            >
              Skills & Expertise
            </motion.h3>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div key={skill.name} variants={itemVariants} className="space-y-2">
                  <div className="flex justify-between">
                    <span className={`font-medium ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                      {skill.name}
                    </span>
                    <span className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>{skill.level}%</span>
                  </div>
                  <div className={`h-2 rounded-full ${darkMode ? "bg-slate-700" : "bg-slate-200"}`}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className={`text-3xl font-bold text-center mb-12 ${darkMode ? "text-white" : "text-slate-900"}`}>
            Experience Timeline
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full ${
                darkMode ? "bg-slate-700" : "bg-slate-300"
              }`}
            />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <div
                    className={`p-6 rounded-2xl ${
                      darkMode ? "bg-white/5 border border-white/10" : "bg-white/50 border border-white/20"
                    } backdrop-blur-xl`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <exp.icon className={`h-6 w-6 ${darkMode ? "text-purple-400" : "text-purple-600"}`} />
                      <span className={`text-sm font-medium ${darkMode ? "text-purple-300" : "text-purple-600"}`}>
                        {exp.year}
                      </span>
                    </div>
                    <h4 className={`text-xl font-bold mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                      {exp.title}
                    </h4>
                    <p className={`font-medium mb-3 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                      {exp.company}
                    </p>
                    <p className={darkMode ? "text-slate-400" : "text-slate-600"}>{exp.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${
                    darkMode ? "bg-purple-500" : "bg-purple-600"
                  } border-4 ${darkMode ? "border-slate-900" : "border-white"}`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
