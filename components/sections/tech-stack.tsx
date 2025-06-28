"use client"

import { motion } from "framer-motion"
import { Code, Database, Smartphone, Cloud, Palette, Server } from "lucide-react"

interface TechStackProps {
  darkMode: boolean
}

export default function TechStack({ darkMode }: TechStackProps) {
  const techCategories = [
    {
      title: "Frontend",
      icon: Code,
      color: "from-blue-400 to-cyan-400",
      description: "Building beautiful user interfaces",
      technologies: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "Next.js", level: 90, icon: "▲" },
        { name: "TypeScript", level: 88, icon: "📘" },
        { name: "Tailwind CSS", level: 92, icon: "🎨" },
        { name: "Vue.js", level: 80, icon: "💚" },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-green-400 to-emerald-400",
      description: "Scalable server-side solutions",
      technologies: [
        { name: "Node.js", level: 90, icon: "🟢" },
        { name: "Express.js", level: 85, icon: "🚀" },
        { name: "Python", level: 82, icon: "🐍" },
        { name: "Django", level: 78, icon: "🎯" },
        { name: "GraphQL", level: 75, icon: "📊" },
      ],
    },
    {
      title: "Database",
      icon: Database,
      color: "from-purple-400 to-pink-400",
      description: "Data storage and management",
      technologies: [
        { name: "MongoDB", level: 88, icon: "🍃" },
        { name: "PostgreSQL", level: 85, icon: "🐘" },
        { name: "MySQL", level: 80, icon: "🐬" },
        { name: "Redis", level: 75, icon: "🔴" },
        { name: "Firebase", level: 82, icon: "🔥" },
      ],
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      color: "from-orange-400 to-red-400",
      description: "Deployment and infrastructure",
      technologies: [
        { name: "AWS", level: 80, icon: "☁️" },
        { name: "Docker", level: 78, icon: "🐳" },
        { name: "Vercel", level: 90, icon: "▲" },
        { name: "Netlify", level: 85, icon: "🌐" },
        { name: "GitHub Actions", level: 75, icon: "⚡" },
      ],
    },
    {
      title: "Design & Animation",
      icon: Palette,
      color: "from-pink-400 to-rose-400",
      description: "Creative design and motion",
      technologies: [
        { name: "Figma", level: 85, icon: "🎨" },
        { name: "Adobe XD", level: 80, icon: "🔷" },
        { name: "Framer Motion", level: 88, icon: "🎭" },
        { name: "GSAP", level: 75, icon: "⚡" },
        { name: "Three.js", level: 70, icon: "🎲" },
      ],
    },
    {
      title: "Mobile & Web",
      icon: Smartphone,
      color: "from-indigo-400 to-purple-400",
      description: "Cross-platform development",
      technologies: [
        { name: "React Native", level: 82, icon: "📱" },
        { name: "Flutter", level: 75, icon: "🦋" },
        { name: "PWA", level: 85, icon: "📲" },
        { name: "Electron", level: 70, icon: "⚡" },
        { name: "Ionic", level: 70, icon: "⚡" },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="tech-stack" className="py-20 px-4 relative overflow-hidden">
      {/* Enhanced Floating Tech Elements */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-20 w-32 h-32 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-2xl"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 5,
        }}
        className="absolute bottom-32 left-16 w-24 h-24 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-2xl"
      />

      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 8, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 10,
        }}
        className="absolute top-1/2 left-1/4 w-20 h-20 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? "text-white" : "text-slate-900"}`}>
            Tech{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
            Here are the technologies and tools I use to bring ideas to life. I'm always learning and exploring new
            technologies to stay current with industry trends.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -15, scale: 1.02 }}
              className={`p-8 rounded-3xl ${
                darkMode ? "bg-white/5 border border-white/10" : "bg-white/50 border border-white/20"
              } backdrop-blur-xl transition-all duration-500 hover:shadow-2xl group relative overflow-hidden`}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <category.icon className="h-7 w-7 text-white" />
                  </motion.div>
                  <div>
                    <h3 className={`text-xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
                      {category.title}
                    </h3>
                    <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1 + techIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                      className="space-y-3"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{tech.icon}</span>
                          <span className={`font-medium ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                            {tech.name}
                          </span>
                        </div>
                        <span
                          className={`text-sm font-semibold px-2 py-1 rounded-full ${
                            darkMode ? "bg-slate-700 text-slate-300" : "bg-slate-200 text-slate-600"
                          }`}
                        >
                          {tech.level}%
                        </span>
                      </div>
                      <div className={`h-2 rounded-full ${darkMode ? "bg-slate-700" : "bg-slate-200"} overflow-hidden`}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.level}%` }}
                          transition={{
                            duration: 1.2,
                            delay: index * 0.1 + techIndex * 0.1,
                            ease: "easeOut",
                          }}
                          viewport={{ once: true }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                        >
                          <motion.div
                            animate={{
                              x: [0, 10, 0],
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            }}
                            className="absolute inset-0 bg-white/30 rounded-full"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className={`text-3xl font-bold mb-8 ${darkMode ? "text-white" : "text-slate-900"}`}>
            Additional Skills & Tools
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: "Agile/Scrum", icon: "🔄" },
              { name: "Git/GitHub", icon: "🐙" },
              { name: "REST APIs", icon: "🔗" },
              { name: "Microservices", icon: "🏗️" },
              { name: "Testing", icon: "🧪" },
              { name: "Performance", icon: "⚡" },
              { name: "SEO", icon: "🔍" },
              { name: "Accessibility", icon: "♿" },
              { name: "CI/CD", icon: "🔄" },
              { name: "Code Review", icon: "👀" },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`p-4 rounded-2xl text-center ${
                  darkMode
                    ? "bg-white/10 text-slate-300 border border-white/20 hover:bg-white/15"
                    : "bg-white/60 text-slate-700 border border-white/30 hover:bg-white/80"
                } backdrop-blur-sm transition-all duration-300 hover:shadow-lg cursor-default group`}
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <p className="text-sm font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h3 className={`text-2xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>
              Currently Learning
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "AI/ML", icon: "🤖", color: "from-cyan-400 to-blue-500" },
                { name: "Web3", icon: "🌐", color: "from-purple-400 to-pink-500" },
                { name: "Rust", icon: "🦀", color: "from-orange-400 to-red-500" },
                { name: "Kubernetes", icon: "☸️", color: "from-blue-400 to-indigo-500" },
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, rotate: -10 }}
                  whileInView={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`px-6 py-3 rounded-full bg-gradient-to-r ${item.color} text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 cursor-default`}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.name}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
