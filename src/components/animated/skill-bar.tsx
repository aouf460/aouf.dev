import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface SkillBarProps {
  skill: string;
  percentage: number;
  color: string;
  delay?: number;
}

export function SkillBar({ skill, percentage, color, delay = 0 }: SkillBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{skill}</span>
        <span className="text-sm text-slate-500">{percentage}%</span>
      </div>
      <div className="w-full bg-slate-700 dark:bg-slate-600 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ delay: delay / 1000, duration: 1, ease: "easeOut" }}
          className={`h-2 rounded-full ${color}`}
        />
      </div>
    </div>
  );
}
