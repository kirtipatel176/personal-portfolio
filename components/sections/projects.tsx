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
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB",
      longDescription:
        "A comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, payment integration, and admin dashboard. Built with modern technologies and best practices for scalability and performance.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      github: "#",
      live: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates",
      longDescription:
        "A real-time collaborative task management application with drag-and-drop functionality, team collaboration features, and progress tracking. Includes notifications, file attachments, and detailed analytics.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Socket.io", "Express", "PostgreSQL"],
      github: "#",
      live: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A beautiful weather app with location-based forecasts",
      longDescription:
        "An elegant weather dashboard that provides detailed weather information, forecasts, and interactive maps. Features location-based weather, historical data, and customizable widgets.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Weather API", "Chart.js", "CSS3"],
      github: "#",
      live: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive portfolio website with modern animations",
      longDescription:
        "A modern, responsive portfolio website showcasing projects and skills with smooth animations, dark/light mode toggle, and optimized performance. Built with attention to detail and user experience.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
      github: "#",
      live: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management",
      longDescription:
        "A comprehensive social media analytics dashboard with real-time data visualization, post scheduling, engagement tracking, and performance metrics across multiple platforms.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Vue.js", "D3.js", "Firebase", "Social APIs"],
      github: "#",
      live: "#",
      featured: true,
    },
    {
      id: 6,
      title: "Learning Management System",
      description: "Educational platform with course management and progress tracking",
      longDescription:
        "A complete learning management system with course creation, student enrollment, progress tracking, quizzes, and certification. Includes video streaming, discussion forums, and mobile responsiveness.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "MySQL", "AWS"],
      github: "#",
      live: "#",
      featured: false,
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
            Featured{" "}
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
                        <Button variant="outline">
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </Button>
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
