import { motion } from "framer-motion";

export function EnhancedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large floating geometric shapes */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 60, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl"
      />
      
      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 100, -70, 0],
          rotate: [0, -90, 270, 360],
          scale: [1, 0.7, 1.3, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/3 right-20 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl"
      />
      
      <motion.div
        animate={{
          x: [0, 150, -100, 0],
          y: [0, -120, 90, 0],
          rotate: [0, 270, 180, 360],
          scale: [1, 1.4, 0.6, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
        className="absolute bottom-20 left-1/4 w-48 h-48 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-full blur-xl"
      />

      {/* Floating squares and triangles */}
      <motion.div
        animate={{
          x: [0, 200, -150, 0],
          y: [0, -100, 120, 0],
          rotate: [0, 45, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-br from-green-500/15 to-teal-500/15 rotate-45 blur-sm"
      />
      
      <motion.div
        animate={{
          x: [0, -180, 120, 0],
          y: [0, 80, -90, 0],
          rotate: [0, -45, 135, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-gradient-to-br from-orange-500/15 to-red-500/15 rotate-12 blur-sm"
      />

      {/* Continuous moving dots */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, 300 + i * 50, -200 - i * 30, 0],
            y: [0, -150 + i * 20, 100 - i * 15, 0],
            opacity: [0, 1, 0.5, 0],
            scale: [0.5, 1.2, 0.8, 0.5],
          }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            delay: i * 1.2,
            ease: "easeInOut",
          }}
          className="absolute w-2 h-2 bg-blue-400/40 rounded-full"
          style={{
            left: `${10 + (i * 7) % 80}%`,
            top: `${15 + (i * 11) % 70}%`,
          }}
        />
      ))}

      {/* Gradient waves */}
      <motion.div
        animate={{
          x: [0, 400, -300, 0],
          scaleX: [1, 1.5, 0.8, 1],
          scaleY: [1, 0.8, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent blur-3xl"
      />
      
      <motion.div
        animate={{
          x: [0, -500, 400, 0],
          scaleX: [1, 0.7, 1.3, 1],
          scaleY: [1, 1.2, 0.9, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10,
        }}
        className="absolute bottom-0 right-0 w-full h-40 bg-gradient-to-l from-transparent via-purple-500/5 to-transparent blur-3xl"
      />
    </div>
  );
}