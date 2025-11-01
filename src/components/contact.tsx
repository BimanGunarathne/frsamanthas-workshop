"use client";

import { Mail, Phone, MapPin, Clock, Send, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["123 Church Street", "Sacred Heart Parish", "City, State 12345"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["(555) 123-4567", "Mon - Fri: 9am - 5pm", "Saturday: 10am - 4pm"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["gallery@sacredheart.org", "", "We respond within 24 hours"]
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Tuesday - Friday: 10am - 6pm", "Saturday: 10am - 4pm", "Sunday & Monday: Closed"]
    }
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#edc61c] via-[#f5d965] to-[#edc61c]"></div>
      
      {/* Animated Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 2px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}
          animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating Elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white/20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div> */}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-lg bg-white/30 border border-white/40 mb-6"
          >
            <Sparkles className="text-white" size={18} />
            <span className="text-white">Get In Touch</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl text-white mb-6">Visit Us</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            We welcome you to experience our sacred art collection in person. 
            Contact us for visiting hours and private viewings.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 rounded-3xl bg-white shadow-2xl"></div>
                <div className="relative p-8 rounded-3xl backdrop-blur-lg bg-white/90">
                  <motion.div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 relative overflow-hidden"
                    style={{ backgroundColor: "#edc61c" }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"></div>
                    <Icon className="text-white relative z-10" size={28} />
                  </motion.div>
                  
                  <h3 className="text-2xl mb-4 text-center" style={{ color: "#edc61c" }}>
                    {info.title}
                  </h3>
                  
                  <div className="space-y-1 text-center">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600">
                        {detail || <span className="opacity-0">_</span>}
                      </p>
                    ))}
                  </div>

                  {/* Hover effect line */}
                  <motion.div
                    className="h-1 rounded-full mx-auto mt-6"
                    style={{ backgroundColor: "#edc61c" }}
                    initial={{ width: 0 }}
                    whileHover={{ width: "60%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto backdrop-blur-lg bg-white/20 rounded-3xl p-12 border border-white/30">
            <p className="text-white text-2xl mb-8 leading-relaxed">
              Interested in scheduling a private viewing or group visit?
            </p>
            
            <motion.button
              className="px-10 py-5 bg-white hover:shadow-2xl transition-all rounded-full relative overflow-hidden group"
              style={{ color: "#edc61c" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-3 text-xl">
                Contact Us
                <Send size={20} />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>

            {/* Decorative elements */}
            <div className="flex justify-center gap-2 mt-8">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-white/40"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
