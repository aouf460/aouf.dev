import { motion } from "framer-motion";

export function ContinuousFloatingElements() {
  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      rotate: [0, 5, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Continuous floating orbs */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
        style={{ animationDelay: "0s" }}
      />
      
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
        style={{ animationDelay: "1s" }}
      />
      
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-full blur-xl"
        style={{ animationDelay: "2s" }}
      />

      {/* Pulsing geometric shapes */}
      <motion.div
        variants={pulseVariants}
        animate="animate"
        className="absolute top-1/2 right-1/6 w-16 h-16 bg-gradient-to-br from-green-500/30 to-teal-500/30 rotate-45 blur-sm"
        style={{ animationDelay: "0.5s" }}
      />
      
      <motion.div
        variants={pulseVariants}
        animate="animate"
        className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-gradient-to-br from-orange-500/30 to-red-500/30 rounded-full blur-sm"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Continuous movement particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeInOut",
          }}
          className="absolute w-2 h-2 bg-blue-400 rounded-full"
          style={{
            left: `${20 + i * 10}%`,
            top: `${30 + i * 5}%`,
          }}
        />
      ))}
    </div>
  );
}

export function ContinuousTextGlow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      animate={{
        textShadow: [
          "0 0 10px rgba(59, 130, 246, 0.5)",
          "0 0 20px rgba(147, 51, 234, 0.5)",
          "0 0 10px rgba(59, 130, 246, 0.5)",
        ],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ContinuousCardHover({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      animate={{
        boxShadow: [
          "0 4px 20px rgba(59, 130, 246, 0.1)",
          "0 8px 40px rgba(147, 51, 234, 0.2)",
          "0 4px 20px rgba(59, 130, 246, 0.1)",
        ],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        y: -5,
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}