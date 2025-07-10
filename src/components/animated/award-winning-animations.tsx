import { motion, useAnimation, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Liquid morphing background
export function LiquidMorphBackground() {
  const pathRef = useRef<SVGPathElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <svg className="w-full h-full" viewBox="0 0 1920 1080">
        <motion.path
          ref={pathRef}
          d="M0,400 Q400,300 800,400 T1600,400 L1600,800 Q1200,700 800,800 T0,800 Z"
          fill="url(#liquidGradient)"
          animate={{
            d: [
              "M0,400 Q400,300 800,400 T1600,400 L1600,800 Q1200,700 800,800 T0,800 Z",
              `M0,${400 + mousePosition.y * 0.1} Q400,${300 + mousePosition.x * 0.1} 800,${400 + mousePosition.y * 0.05} T1600,${400 + mousePosition.x * 0.05} L1600,800 Q1200,${700 + mousePosition.y * 0.1} 800,${800 + mousePosition.x * 0.1} T0,800 Z`,
              "M0,400 Q400,300 800,400 T1600,400 L1600,800 Q1200,700 800,800 T0,800 Z"
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <defs>
          <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0.02" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Magnetic field animation
export function MagneticField({ children, strength = 0.3 }: { children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distance = Math.sqrt(
        Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
      );

      if (distance < 150) {
        const force = (150 - distance) / 150;
        x.set((e.clientX - centerX) * force * strength);
        y.set((e.clientY - centerY) * force * strength);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y, strength]);

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      {children}
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.div>
  );
}

// Crystalline loading animation
export function CrystallineLoader({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg className="w-16 h-16" viewBox="0 0 100 100">
        <motion.polygon
          points="50,5 90,25 90,75 50,95 10,75 10,25"
          fill="none"
          stroke="url(#crystalGradient)"
          strokeWidth="2"
          animate={{
            rotate: [0, 360],
            strokeDasharray: ["0 300", "150 150", "0 300"]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.circle
          cx="50"
          cy="50"
          r="3"
          fill="url(#crystalGradient)"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <defs>
          <linearGradient id="crystalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Floating text with physics
export function FloatingText({ text, className = "" }: { text: string; className?: string }) {
  const letters = text.split("");
  
  return (
    <div className={`inline-block ${className}`}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block"
          animate={{
            y: [0, -10, 0],
            rotateZ: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 2 + index * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.1
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
}

// Holographic card effect
export function HolographicCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setMousePosition({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 0.5, y: 0.5 })}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(59, 130, 246, 0.3) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 100%)`
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
        animate={{
          background: [
            "linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)",
            "linear-gradient(135deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)",
            "linear-gradient(225deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)",
            "linear-gradient(315deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)"
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

// Quantum dots animation - elegant and minimal
export function QuantumDots({ count = 50 }: { count?: number }) {
  const dots = Array.from({ length: count }, (_, i) => i);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {dots.map((dot) => (
        <motion.div
          key={dot}
          className="absolute w-0.5 h-0.5 bg-blue-400/30 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            opacity: 0
          }}
          animate={{
            x: [
              Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)
            ],
            y: [
              Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)
            ],
            opacity: [0, 0.6, 0.3, 0.6, 0],
            scale: [0.5, 1, 0.8, 1, 0.5]
          }}
          transition={{
            duration: Math.random() * 15 + 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3
          }}
        />
      ))}
    </div>
  );
}

// Morphing button with liquid effect
export function MorphingButton({ children, className = "", onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className={`relative overflow-hidden ${className}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
        animate={{
          borderRadius: isHovered ? "50%" : "12px",
          scale: isHovered ? 1.1 : 1
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0"
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.2 : 1
        }}
        transition={{ duration: 0.3 }}
      />
      <span className="relative z-10 text-white font-semibold">{children}</span>
    </motion.button>
  );
}

// Ripple effect
export function RippleEffect({ trigger }: { trigger: boolean }) {
  const ripples = Array.from({ length: 5 }, (_, i) => i);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {trigger && ripples.map((ripple) => (
        <motion.div
          key={ripple}
          className="absolute inset-0 border-2 border-blue-500/30 rounded-full"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{
            duration: 1,
            delay: ripple * 0.1,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
}