"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Moon, Sun } from "lucide-react"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Projects from "@/components/sections/projects"
import TechStack from "@/components/sections/tech-stack"
import Contact from "@/components/sections/contact"
import Footer from "@/components/sections/footer"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/sections/navigation"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950"
          : "bg-gradient-to-br from-indigo-50 via-white to-purple-50"
      }`}
    >
      {/* Dark/Light Mode Toggle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed top-6 right-6 z-50"
      >
        <Button
          onClick={() => setDarkMode(!darkMode)}
          variant="outline"
          size="icon"
          className="backdrop-blur-md bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300"
        >
          {darkMode ? <Sun className="h-4 w-4 text-yellow-400" /> : <Moon className="h-4 w-4 text-slate-700" />}
        </Button>
      </motion.div>

      {/* Navigation */}
      <Navigation darkMode={darkMode} />

      {/* Enhanced Background Pattern */}
      <div className="fixed inset-0 opacity-40">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.15),transparent_50%)]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 5,
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.15),transparent_60%)]"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 2, 0],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 10,
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_70%)]"
        />

        {/* Animated mesh gradient */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 40,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)
            `,
            backgroundSize: "400% 400%",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <TechStack darkMode={darkMode} />
        <Contact darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </div>
    </div>
  )
}
