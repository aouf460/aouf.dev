import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

// Morphing shapes animation
export function MorphingShapes() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.svg
        className="absolute top-20 left-10 w-32 h-32 opacity-20"
        viewBox="0 0 100 100"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: { opacity: 0.3, scale: 1 }
        }}
        transition={{ duration: 2 }}
      >
        <motion.path
          d="M50,20 Q80,50 50,80 Q20,50 50,20"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="2"
          animate={{
            d: [
              "M50,20 Q80,50 50,80 Q20,50 50,20",
              "M50,10 Q90,50 50,90 Q10,50 50,10",
              "M50,30 Q70,50 50,70 Q30,50 50,30",
              "M50,20 Q80,50 50,80 Q20,50 50,20"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </motion.svg>

      <motion.svg
        className="absolute bottom-20 right-10 w-40 h-40 opacity-15"
        viewBox="0 0 100 100"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, rotate: -180 },
          visible: { opacity: 0.2, rotate: 0 }
        }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <motion.circle
          cx="50"
          cy="50"
          r="20"
          fill="none"
          stroke="url(#gradient2)"
          strokeWidth="1"
          animate={{
            r: [20, 30, 15, 25, 20],
            opacity: [0.3, 0.6, 0.2, 0.8, 0.3]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
}

// Particle system animation
export function ParticleSystem() {
  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-40"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0
          }}
          animate={{
            x: Math.random() * (window.innerWidth || 1000),
            y: Math.random() * (window.innerHeight || 800),
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

// Text shimmer effect
export function TextShimmer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative inline-block ${className}`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{
          x: ['-100%', '100%']
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut"
        }}
      />
      {children}
    </div>
  );
}

// Liquid animation
export function LiquidBlob({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute ${className}`}>
      <motion.svg
        className="w-full h-full"
        viewBox="0 0 200 200"
        animate={{
          rotate: [0, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <motion.path
          d="M100,20 Q160,80 100,140 Q40,80 100,20"
          fill="url(#liquidGradient)"
          animate={{
            d: [
              "M100,20 Q160,80 100,140 Q40,80 100,20",
              "M100,30 Q150,90 100,150 Q50,90 100,30",
              "M100,25 Q170,75 100,135 Q30,75 100,25",
              "M100,20 Q160,80 100,140 Q40,80 100,20"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <defs>
          <radialGradient id="liquidGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
          </radialGradient>
        </defs>
      </motion.svg>
    </div>
  );
}

// Breathing animation for elements
export function BreathingWrapper({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      animate={{
        scale: [1, 1.02, 1],
        opacity: [0.8, 1, 0.8]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
}

// Glitch effect
export function GlitchText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <span className="relative z-10">{text}</span>
      <motion.span
        className="absolute inset-0 text-red-500 opacity-0"
        animate={{
          opacity: [0, 0.3, 0],
          x: [0, -2, 0],
          y: [0, 1, 0]
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeInOut"
        }}
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute inset-0 text-blue-500 opacity-0"
        animate={{
          opacity: [0, 0.3, 0],
          x: [0, 2, 0],
          y: [0, -1, 0]
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          repeatDelay: 2,
          delay: 0.05,
          ease: "easeInOut"
        }}
      >
        {text}
      </motion.span>
    </div>
  );
}