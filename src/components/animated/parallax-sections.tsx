import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxSection({ children, speed = 0.5, className = "" }: ParallaxSectionProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 1000 * speed]);

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

export function ParallaxHero() {
  const { scrollY } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);

  // Multiple parallax layers with different speeds
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);
  const midgroundY = useTransform(scrollY, [0, 1000], [0, 200]);
  const foregroundY = useTransform(scrollY, [0, 1000], [0, 100]);
  const textY = useTransform(scrollY, [0, 1000], [0, 150]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.8]);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setScrollProgress(latest / 1000);
    });
    return unsubscribe;
  }, [scrollY]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background layer - slowest */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
      </motion.div>

      {/* Midground layer */}
      <motion.div
        style={{ y: midgroundY }}
        className="absolute inset-0 -z-5"
      >
        {/* Floating geometric shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            x: [0, 50, -50, 0],
            y: [0, -30, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            rotate: [0, -360],
            x: [0, -80, 80, 0],
            y: [0, 60, -60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-xl blur-lg"
        />
      </motion.div>

      {/* Foreground layer */}
      <motion.div
        style={{ y: foregroundY }}
        className="absolute inset-0 -z-3"
      >
        {/* Animated particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, 50 - i * 10, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${20 + i * 10}%`,
              top: `${60 + i * 5}%`,
            }}
          />
        ))}
      </motion.div>

      {/* Main content */}
      <motion.div
        style={{ y: textY, opacity, scale }}
        className="absolute inset-0 flex items-center justify-center z-10"
      >
        <div className="text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
          >
            Omar Aouf
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto"
          >
            Crafting digital experiences that push the boundaries of what's possible
          </motion.p>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, 16, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-3 bg-slate-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export function ParallaxCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -50]);
  const rotateX = useTransform(scrollY, [0, 1000], [0, 5]);

  return (
    <motion.div
      style={{ y, rotateX }}
      className={`transform-gpu ${className}`}
    >
      {children}
    </motion.div>
  );
}