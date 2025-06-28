"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface HeroProps {
  darkMode: boolean
}

export default function Hero({ darkMode }: HeroProps) {
  const [text, setText] = useState("")
  const fullText = "Full Stack Developer & UI/UX Enthusiast"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Enhanced Floating Elements */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-purple-400/30 to-pink-400/30 opacity-60 blur-2xl"
      />

      <motion.div
        animate={{
          y: [0, 25, 0],
          rotate: [0, -8, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute bottom-32 right-16 w-24 h-24 rounded-full bg-gradient-to-r from-blue-400/30 to-cyan-400/30 opacity-60 blur-2xl"
      />

      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 6,
        }}
        className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-gradient-to-r from-emerald-400/30 to-teal-400/30 opacity-60 blur-xl"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center"
      >
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <motion.div variants={itemVariants}>
            <span
              className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 ${
                darkMode
                  ? "bg-white/10 text-purple-300 border border-white/20"
                  : "bg-purple-100 text-purple-700 border border-purple-200"
              } backdrop-blur-sm`}
            >
              👋 Hello, I'm
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className={`text-5xl md:text-7xl font-bold mb-6 ${darkMode ? "text-white" : "text-slate-900"}`}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Kirti
            </span>
            <br />
            <span>Patel</span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className={`text-xl md:text-2xl mb-8 h-8 ${darkMode ? "text-slate-300" : "text-slate-600"}`}
          >
            {text}
            <span className="animate-pulse">|</span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className={`text-lg mb-8 max-w-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            Passionate about creating beautiful, functional, and user-centered digital experiences. I bring ideas to
            life through code and design.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>

            <Button
              variant="outline"
              size="lg"
              className={`${
                darkMode
                  ? "border-white/20 text-white hover:bg-white/10"
                  : "border-slate-300 text-slate-700 hover:bg-slate-100"
              } backdrop-blur-sm`}
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-4 justify-center lg:justify-start">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:kirteekumarmukeshbhaipatel@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-full ${
                  darkMode ? "bg-white/10 text-white hover:bg-white/20" : "bg-white text-slate-700 hover:bg-slate-100"
                } backdrop-blur-sm border ${
                  darkMode ? "border-white/20" : "border-slate-200"
                } transition-all duration-300`}
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div variants={itemVariants} className="relative">
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96"
          >
            {/* Glassmorphism Background */}
            <div
              className={`absolute inset-0 rounded-full ${
                darkMode ? "bg-gradient-to-br from-white/10 to-white/5" : "bg-gradient-to-br from-white/40 to-white/20"
              } backdrop-blur-xl border ${darkMode ? "border-white/20" : "border-white/30"}`}
            />

            {/* Profile Image Placeholder */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 p-1">
              <div
                className={`w-full h-full rounded-full ${
                  darkMode ? "bg-slate-900" : "bg-white"
                } flex items-center justify-center`}
              >
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Kirti Patel"
                  width={300}
                  height={300}
                  className="rounded-full object-cover"
                />
              </div>
            </div>

            {/* Floating Orbs */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                x: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 opacity-80"
            />

            <motion.div
              animate={{
                y: [0, 8, 0],
                x: [0, -3, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-2 -left-6 w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-blue-400 opacity-80"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className={`${darkMode ? "text-white/60" : "text-slate-600"} cursor-pointer`}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}
