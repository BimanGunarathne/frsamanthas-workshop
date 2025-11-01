"use client";

import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { X, ZoomIn, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const artworks = [
  {
    id: 1,
    title: "Divine Light",
    description: "A representation of spiritual illumination through sacred imagery",
    image: "https://images.unsplash.com/photo-1584727638096-042c45049ebe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWxpZ2lvdXMlMjBhcnQlMjBwYWludGluZ3xlbnwxfHx8fDE3NjE3NDI1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    title: "Sacred Heart",
    description: "An expression of divine love and compassion",
    image: "https://images.unsplash.com/photo-1719257726822-9899127bb072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWNyZWQlMjBjaHJpc3RpYW4lMjBhcnR8ZW58MXx8fHwxNzYxNzQyNTYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    title: "Heavenly Sanctuary",
    description: "The beauty of sacred spaces and divine architecture",
    image: "https://images.unsplash.com/photo-1745237637938-e75025be9601?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBpbnRlcmlvciUyMGFydHxlbnwxfHx8fDE3NjE3NDI1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 4,
    title: "Spiritual Reflection",
    description: "Contemplative art inviting meditation and prayer",
    image: "https://images.unsplash.com/photo-1584727848247-bd99cdd47b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGlyaXR1YWwlMjBhcnR3b3JrfGVufDF8fHx8MTc2MTc0MjU2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 5,
    title: "Renaissance Grace",
    description: "Classical religious art from the masters",
    image: "https://images.unsplash.com/photo-1722208463128-c9230bdbd6f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5haXNzYW5jZSUyMHJlbGlnaW91cyUyMHBhaW50aW5nfGVufDF8fHx8MTc2MTc0MjU2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 6,
    title: "Sacred Sanctuary",
    description: "The majesty of sacred architecture and divine spaces",
    image: "https://images.unsplash.com/photo-1617723275536-7a2937f017bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXRob2xpYyUyMGNodXJjaHxlbnwxfHx8fDE3NjE3NDI1NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function Gallery() {
  const [selectedArtwork, setSelectedArtwork] = useState<typeof artworks[0] | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #edc61c 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-lg bg-white/60 border mb-6"
            style={{ borderColor: "#edc61c" }}
          >
            <Sparkles style={{ color: "#edc61c" }} size={18} />
            <span style={{ color: "#edc61c" }}>Featured Collection</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Art Collection
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of sacred art celebrating faith, devotion, and spiritual beauty
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
              onClick={() => setSelectedArtwork(artwork)}
              onMouseEnter={() => setHoveredId(artwork.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <motion.div
                className="relative overflow-hidden rounded-2xl"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow-xl"></div>
                
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden m-3 rounded-xl">
                  <ImageWithFallback
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredId === artwork.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: hoveredId === artwork.id ? 1 : 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="w-16 h-16 rounded-full backdrop-blur-lg bg-white/20 flex items-center justify-center border border-white/30"
                      >
                        <ZoomIn className="text-white" size={24} />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-2xl" style={{ color: "#edc61c" }}>{artwork.title}</h3>
                    <motion.div
                      animate={{ rotate: hoveredId === artwork.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Sparkles style={{ color: "#edc61c" }} size={20} />
                    </motion.div>
                  </div>
                  <p className="text-gray-600">{artwork.description}</p>
                </div>

                {/* Accent Line */}
                <motion.div
                  className="h-1 rounded-full mx-6 mb-3"
                  style={{ backgroundColor: "#edc61c" }}
                  initial={{ width: 0 }}
                  animate={{ width: hoveredId === artwork.id ? "calc(100% - 48px)" : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for artwork details */}
      <AnimatePresence>
        {selectedArtwork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-xl"
            onClick={() => setSelectedArtwork(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                className="absolute top-6 right-6 z-10 backdrop-blur-lg bg-white/90 rounded-full p-3 shadow-2xl hover:bg-white transition-colors"
                onClick={() => setSelectedArtwork(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                style={{ color: "#edc61c" }}
              >
                <X size={24} />
              </motion.button>
              
              <div className="relative">
                <ImageWithFallback
                  src={selectedArtwork.image}
                  alt={selectedArtwork.title}
                  className="w-full max-h-[60vh] object-cover rounded-t-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-3xl"></div>
              </div>
              
              <div className="p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#edc61c" }}>
                    <Sparkles className="text-white" size={20} />
                  </div>
                  <h3 className="text-4xl" style={{ color: "#edc61c" }}>{selectedArtwork.title}</h3>
                </div>
                <p className="text-2xl text-gray-600 leading-relaxed">{selectedArtwork.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
