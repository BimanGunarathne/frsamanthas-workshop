"use client";

import { motion } from "motion/react";
import { Facebook, Instagram, Twitter, Heart } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const socialLinks = [
    { icon: Facebook, label: "Facebook" },
    { icon: Instagram, label: "Instagram" },
    { icon: Twitter, label: "Twitter" }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #edc61c 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image Logo */}
                <div className="relative w-70 h-25">
                  <Image
                    src="/Logo2.webp" // Update this path to your actual logo image
                    alt="Sacred Art Gallery Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </motion.div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Celebrating faith through sacred art and divine inspiration. A spiritual journey through centuries of religious heritage.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.button
                    key={index}
                    className="w-12 h-12 rounded-full backdrop-blur-lg bg-white/5 hover:bg-white/10 flex items-center justify-center border border-white/10 transition-colors"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Icon size={18} style={{ color: "#edc61c" }} />
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="mb-6 text-xl" style={{ color: "#edc61c" }}>Quick Links</h4>
            <ul className="space-y-3">
              {["home", "gallery", "about", "contact"].map((section, index) => (
                <motion.li key={section} whileHover={{ x: 5 }}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(section);
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 capitalize"
                  >
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: "#edc61c" }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    />
                    {section}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h4 className="mb-6 text-xl" style={{ color: "#edc61c" }}>Connect With Us</h4>
            <div className="space-y-4 text-gray-400">
              <div>
                <p className="mb-1">Sacred Heart Parish</p>
                <p>123 Church Street</p>
                <p>City, State 12345</p>
              </div>
              <div>
                <p className="hover:text-white transition-colors cursor-pointer">
                  gallery@sacredheart.org
                </p>
                <p className="hover:text-white transition-colors cursor-pointer">
                  (555) 123-4567
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Fr. Samantha's Workshop. All rights reserved.
            </p>
            
            <motion.div
              className="flex items-center gap-2 text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <span>Built with</span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart size={16} style={{ color: "#edc61c" }} fill="#edc61c" />
              </motion.div>
              <span>and devotion</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}