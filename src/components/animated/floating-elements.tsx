import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function FloatingElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
          x: mousePosition.x * 0.02,
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-10 blur-sm"
      />
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, -5, 0],
          x: mousePosition.x * -0.015,
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute top-40 right-20 w-16 h-16 bg-purple-500 rounded-full opacity-10 blur-sm"
      />
      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [0, 3, 0],
          x: mousePosition.x * 0.01,
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-40 left-20 w-24 h-24 bg-indigo-500 rounded-full opacity-10 blur-sm"
      />
      
      {/* Additional responsive elements */}
      <motion.div
        animate={{
          y: [0, -8, 0],
          rotate: [0, -3, 0],
          x: mousePosition.x * 0.025,
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="absolute top-60 left-1/2 w-12 h-12 bg-green-500 rounded-full opacity-10 blur-sm"
      />
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 8, 0],
          x: mousePosition.x * -0.02,
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-60 right-1/3 w-18 h-18 bg-pink-500 rounded-full opacity-10 blur-sm"
      />
    </div>
  );
}
