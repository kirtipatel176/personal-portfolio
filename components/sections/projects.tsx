"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ProjectsProps {
  darkMode: boolean
}

export default function Projects({ darkMode }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
        id: 1,
        title: "Department of Justice AI Chatbot",
        description: "An AI-powered legal assistant built using React, Python, and LangChain.",
        longDescription:
        "This chatbot assists users with legal queries by leveraging natural language understanding and real-time data retrieval. Built with React for the frontend and Python with LangChain for AI-driven response generation, the system integrates intelligent search, user-friendly interfaces, and domain-specific context handling to provide quick and accurate legal information.",
        image: "/dojchatbot.jpeg?height=400&width=600",
        tags: ["React", "Python", "LangChain", "AI", "Tailwind CSS"],
        github: "https://github.com/kirtipatel176/DOJ_CHATBOT.git",
        live: "#",
        featured: true,
    },
    {
      id: 2,
      title: "QR-Based Ordering System",
      description: "A smart restaurant solution for contactless menu browsing and ordering.",
      longDescription:
        "A digital ordering system where customers scan a QR code to view the menu, place orders, and make payments—eliminating the need for physical menus or waitstaff. Features include real-time order tracking, admin dashboard, and seamless user experience for both customers and staff.",
      image: "/qrbase.jpeg?height=400&width=600",
      tags: ["React", "Node.js", "Express", "MongoDB", "QR Code","TypeScript"],
      github: "https://github.com/kirtipatel176/Qr-based-ordering-system.git",
      live: "#",
      featured: true,
    },
    {
        id: 3,
        title: "Expense Tracker",
        description: "A simple and effective tool to manage daily expenses.",
        longDescription:
          "A personal finance tracking application built using PHP that allows users to log their income and expenses, categorize transactions, and visualize spending habits. Includes user authentication, monthly reports, and budget management features.",
        image: "/expensetracker.jpeg?height=400&width=600",
        tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
        github: "https://github.com/kirtipatel176/Expense_Tracker.git",
        live: "#",
        featured: false,
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive portfolio website with modern animations",
      longDescription:
        "A modern, responsive portfolio website showcasing projects and skills with smooth animations, dark/light mode toggle, and optimized performance. Built with attention to detail and user experience.",
      image: "/personalportfolio.png?height=400&width=600",
      tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
      github: "#",
      live: "#",
      featured: false,
    },
    {
      id: 5,
      title: "AI Crowd Management System",
      description: "A research-based AI system for real-time crowd analysis and response.",
      longDescription:
        "A research-driven AI solution that leverages computer vision and language models to monitor, analyze, and manage crowds in real time. Built with React for the user interface and Python with LangChain for backend intelligence and automation, this system aims to enhance public safety through proactive crowd control strategies.",
      image: "/crowd.jpeg?height=400&width=600",
      tags: ["React", "Python", "LangChain", "AI", "Research"],
      github: "https://github.com/kirtipatel176/Crowd_Management_system.git",
      live: "#",
      featured: true,
    },
    
  ]

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 blur-3xl"
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
            Work on{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
            Here are some of my recent projects that showcase my skills and passion for creating innovative digital
            solutions.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -15, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`group cursor-pointer rounded-2xl overflow-hidden ${
                darkMode ? "bg-white/5 border border-white/10" : "bg-white/50 border border-white/20"
              } backdrop-blur-xl transition-all duration-300 hover:shadow-2xl`}
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}>
                  {project.title}
                </h3>
                <p className={`mb-4 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 text-xs rounded-full ${
                        darkMode ? "bg-purple-500/20 text-purple-300" : "bg-purple-100 text-purple-700"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span
                      className={`px-3 py-1 text-xs rounded-full ${
                        darkMode ? "bg-slate-700 text-slate-300" : "bg-slate-200 text-slate-600"
                      }`}
                    >
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className={`text-2xl font-bold text-center mb-8 ${darkMode ? "text-white" : "text-slate-900"}`}>
            Other Projects
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-xl cursor-pointer ${
                  darkMode ? "bg-white/5 border border-white/10" : "bg-white/50 border border-white/20"
                } backdrop-blur-xl transition-all duration-300 hover:shadow-lg`}
                onClick={() => setSelectedProject(project.id)}
              >
                <h4 className={`text-lg font-bold mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                  {project.title}
                </h4>
                <p className={`text-sm mb-4 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-1 text-xs rounded-full ${
                        darkMode ? "bg-purple-500/20 text-purple-300" : "bg-purple-100 text-purple-700"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl ${
                darkMode ? "bg-slate-900 border border-white/10" : "bg-white border border-slate-200"
              } backdrop-blur-xl`}
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find((p) => p.id === selectedProject)
                if (!project) return null

                return (
                  <>
                    <div className="relative">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={800}
                        height={400}
                        className="w-full h-64 md:h-80 object-cover"
                      />
                      <Button
                        onClick={() => setSelectedProject(null)}
                        variant="secondary"
                        size="icon"
                        className="absolute top-4 right-4"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="p-8">
                      <h3 className={`text-3xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>
                        {project.title}
                      </h3>

                      <p className={`text-lg mb-6 ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                        {project.longDescription}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`px-3 py-1 text-sm rounded-full ${
                              darkMode ? "bg-purple-500/20 text-purple-300" : "bg-purple-100 text-purple-700"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline">
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </Button>
                      </a>
                      </div>
                    </div>
                  </>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
