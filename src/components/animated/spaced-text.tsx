import { motion } from "framer-motion";

interface SpacedTextProps {
  text: string;
  className?: string;
  letterDelay?: number;
}

export function SpacedText({ text, className = "", letterDelay = 0.1 }: SpacedTextProps) {
  const letters = text.split("");
  
  return (
    <motion.div 
      className={`inline-flex ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            duration: 0.6,
            delay: i * letterDelay,
            ease: "easeOut",
          }}
          className="inline-block"
          style={{ marginRight: letter === " " ? "1rem" : "0.2rem" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
}