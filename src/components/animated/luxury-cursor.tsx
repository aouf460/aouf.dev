import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function LuxuryCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only show luxury cursor on desktop devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    // Show cursor initially
    setIsVisible(true);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
      
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, [cursorX, cursorY, isVisible]);

  // Only render on desktop
  if (window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isVisible ? (isHovering ? 1.5 : 1) : 0,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          scale: { duration: 0.2 },
          opacity: { duration: 0.2 },
        }}
      >
        <motion.div
          className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 rounded-full shadow-lg"
          animate={{
            scale: isHovering ? 0.8 : 1,
            rotate: [0, 360],
          }}
          transition={{ 
            scale: { duration: 0.2 },
            rotate: { duration: 4, repeat: Infinity, ease: "linear" }
          }}
        />
      </motion.div>

      {/* Trailing particles */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isVisible ? 1 : 0,
          opacity: isVisible ? 0.7 : 0,
        }}
        transition={{
          scale: { duration: 0.3, delay: 0.1 },
          opacity: { duration: 0.3, delay: 0.1 },
        }}
      >
        <motion.div
          className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-[9997] border-2 border-gradient-to-r from-blue-500 to-purple-500 rounded-full"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isVisible ? (isHovering ? 1.8 : 1.2) : 0,
          opacity: isVisible ? 0.4 : 0,
          rotate: [0, -360],
        }}
        transition={{
          scale: { duration: 0.3, delay: 0.05 },
          opacity: { duration: 0.3, delay: 0.05 },
          rotate: { duration: 8, repeat: Infinity, ease: "linear" }
        }}
      />
    </>
  );
}