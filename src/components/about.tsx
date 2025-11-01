"use client";

import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart, BookOpen, Users, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  const features = [
    {
      icon: Heart,
      title: "Faith & Devotion",
      description: "Art that speaks to the heart and soul, inspiring deeper faith and spiritual connection."
    },
    {
      icon: BookOpen,
      title: "Sacred History",
      description: "A collection spanning centuries of religious art, preserving our spiritual heritage."
    },
    {
      icon: Users,
      title: "Community",
      description: "Bringing together believers and art lovers in appreciation of sacred beauty."
    }
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl"
          style={{ backgroundColor: "#edc61c" }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "#edc61c" }}
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-lg bg-white/80 border mb-6"
            style={{ borderColor: "#edc61c" }}
          >
            <Sparkles style={{ color: "#edc61c" }} size={18} />
            <span style={{ color: "#edc61c" }}>Our Story</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              About the Gallery
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
              <p>
                Welcome to our <span style={{ color: "#edc61c" }}>Sacred Art Gallery</span>, a spiritual journey through divine inspiration 
                and artistic expression. Our collection celebrates the beauty of faith through 
                carefully curated religious artwork.
              </p>
              <p>
                Each piece in our collection has been selected to inspire contemplation, prayer, 
                and a deeper connection with the divine. From classical masterpieces to contemporary 
                sacred art, we invite you to experience the transformative power of religious imagery.
              </p>
              <p>
                The gallery serves as a bridge between artistic excellence and spiritual devotion, 
                offering visitors a space for reflection and appreciation of sacred beauty.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <div className="px-6 py-3 rounded-full backdrop-blur-lg bg-white/60 border" style={{ borderColor: "#edc61c" }}>
                <span style={{ color: "#edc61c" }}>500+ Artworks</span>
              </div>
              <div className="px-6 py-3 rounded-full backdrop-blur-lg bg-white/60 border" style={{ borderColor: "#edc61c" }}>
                <span style={{ color: "#edc61c" }}>10 Centuries</span>
              </div>
              <div className="px-6 py-3 rounded-full backdrop-blur-lg bg-white/60 border" style={{ borderColor: "#edc61c" }}>
                <span style={{ color: "#edc61c" }}>Sacred Heritage</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-4 rounded-3xl opacity-50 blur-2xl transition-opacity group-hover:opacity-75" style={{ backgroundColor: "#edc61c" }}></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1584727638096-042c45049ebe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWxpZ2lvdXMlMjBhcnQlMjBwYWludGluZ3xlbnwxfHx8fDE3NjE3NDI1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sacred art"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white to-gray-100 shadow-xl"></div>
                <div className="relative p-10 rounded-3xl backdrop-blur-lg bg-white/50">
                  <motion.div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 relative overflow-hidden"
                    style={{ backgroundColor: "#edc61c" }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                    <Icon className="text-white relative z-10" size={36} />
                  </motion.div>
                  
                  <h3 className="text-2xl mb-4 text-center" style={{ color: "#edc61c" }}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center text-lg leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Accent line */}
                  <motion.div
                    className="h-1 rounded-full mx-auto mt-6"
                    style={{ backgroundColor: "#edc61c" }}
                    initial={{ width: 0 }}
                    whileInView={{ width: 60 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
