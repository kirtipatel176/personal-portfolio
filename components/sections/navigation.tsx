"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, User, Briefcase, Code, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  darkMode: boolean
}

export default function Navigation({ darkMode }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { id: "home", label: "Home", icon: Home, href: "#home" },
    { id: "about", label: "About", icon: User, href: "#about" },
    { id: "projects", label: "Projects", icon: Briefcase, href: "#projects" },
    { id: "tech-stack", label: "Skills", icon: Code, href: "#tech-stack" },
    { id: "contact", label: "Contact", icon: Mail, href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.id)
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial state
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-500 ${
          scrolled ? "scale-95" : "scale-100"
        }`}
      >
        <div
          className={`hidden md:flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-500 ${
            darkMode
              ? scrolled
                ? "bg-slate-900/90 border border-white/20 shadow-2xl"
                : "bg-white/10 border border-white/20"
              : scrolled
                ? "bg-white/90 border border-slate-200 shadow-2xl"
                : "bg-white/20 border border-white/30"
          } backdrop-blur-xl`}
        >
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => scrollToSection(item.href)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? darkMode
                    ? "text-white"
                    : "text-slate-900"
                  : darkMode
                    ? "text-slate-400 hover:text-white"
                    : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeTab"
                  className={`absolute inset-0 rounded-full ${
                    darkMode
                      ? "bg-gradient-to-r from-purple-500/30 to-pink-500/30"
                      : "bg-gradient-to-r from-purple-500/20 to-pink-500/20"
                  }`}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </motion.button>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Navigation Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="fixed top-6 left-6 z-50 md:hidden"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="outline"
          size="icon"
          className={`${
            darkMode
              ? "bg-white/10 border-white/20 text-white hover:bg-white/20"
              : "bg-white/20 border-white/30 text-slate-900 hover:bg-white/30"
          } backdrop-blur-xl transition-all duration-300`}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-4 w-4" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-4 w-4" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className={`fixed top-0 left-0 h-full w-80 z-50 md:hidden ${
                darkMode ? "bg-slate-900/95 border-r border-white/10" : "bg-white/95 border-r border-slate-200"
              } backdrop-blur-xl`}
            >
              <div className="p-6">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mb-8"
                >
                  <h2 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Kirti
                    </span>{" "}
                    Patel
                  </h2>
                  <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>Full Stack Developer</p>
                </motion.div>

                <nav className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                      onClick={() => scrollToSection(item.href)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                        activeSection === item.id
                          ? darkMode
                            ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border border-purple-500/30"
                            : "bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-slate-900 border border-purple-500/20"
                          : darkMode
                            ? "text-slate-400 hover:text-white hover:bg-white/5"
                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50"
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.label}</span>
                    </motion.button>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
