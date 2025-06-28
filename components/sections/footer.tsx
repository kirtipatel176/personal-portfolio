"use client"

import { motion } from "framer-motion"
import { Heart, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FooterProps {
  darkMode: boolean
}

export default function Footer({ darkMode }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className={`py-12 px-4 border-t ${darkMode ? "border-white/10" : "border-slate-200"}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="text-center md:text-left">
            <p className={`text-lg font-semibold mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>Kirti Patel</p>
            <p className={`flex items-center gap-2 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> using React & Next.js
            </p>
          </div>

          <div className="flex items-center gap-6">
            <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              © 2024 Kirti Patel. All rights reserved.
            </p>

            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className={`${
                darkMode
                  ? "border-white/20 text-white hover:bg-white/10"
                  : "border-slate-300 text-slate-700 hover:bg-slate-100"
              } backdrop-blur-sm transition-all duration-300`}
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
