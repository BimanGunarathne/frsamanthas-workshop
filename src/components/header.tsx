"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image"; // Import Next.js Image component

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-lg bg-white/80 shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3"
          >
            {/* Replace this entire div with your image logo */}
            <div className="relative">
              <Image
                src="/Logo2.webp" // Replace with your logo path
                alt="Sacred Art Gallery"
                width={500} // Adjust based on your logo size
                height={100} // Adjust based on your logo size
                className={`transition-all duration-300 ${
                  scrolled ? "h-15 w-auto" : "h-20 w-auto"
                }`}
                priority
              />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="hidden md:flex items-center gap-2"
          >
            {["home", "gallery", "about", "contact"].map((section, index) => (
              <motion.button
                key={section}
                onClick={() => scrollToSection(section)}
                className="px-5 py-2 rounded-full relative overflow-hidden group transition-all hover:shadow-lg"
                style={{ color: scrolled ? "#edc61c" : "white" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <span className="relative z-10 capitalize">{section}</span>
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: "#edc61c" }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 0.1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ color: scrolled ? "#edc61c" : "white" }}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-6 pb-4 flex flex-col gap-3"
          >
            {["home", "gallery", "about", "contact"].map((section, index) => (
              <motion.button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-left px-4 py-3 rounded-lg backdrop-blur-lg bg-white/10 hover:bg-white/20 transition-all"
                style={{ color: scrolled ? "#edc61c" : "white" }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="capitalize">{section}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}