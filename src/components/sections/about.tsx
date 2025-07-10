import { motion } from "framer-motion";
import { Code, Users, CheckCircle, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SpacedText } from "@/components/animated/spaced-text";

export function About() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            <SpacedText text="About Me" className="gradient-text" letterDelay={0.15} />
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-slate-600 dark:text-slate-300">
            Passionate about leadership excellence and organizational development
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Animated background orbs */}
              <motion.div
                className="absolute -top-8 -left-8 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-8 -right-8 w-40 h-40 bg-purple-500/20 rounded-full blur-xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Main photo container with hexagonal design */}
              <div className="relative w-80 h-80 mx-auto">
                {/* Rotating outer ring */}
                <motion.div
                  className="absolute inset-0 border-4 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full"
                  style={{
                    background: "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6)",
                    padding: "4px",
                  }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="w-full h-full rounded-full bg-slate-50 dark:bg-slate-800" />
                </motion.div>
                
                {/* Inner content */}
                <div className="absolute inset-6 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center overflow-hidden">
                  <motion.div
                    className="relative z-10"
                    animate={{
                      y: [-2, 2, -2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Users className="h-20 w-20 text-blue-500" />
                  </motion.div>
                  
                  {/* Floating particles */}
                  <motion.div
                    className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full"
                    animate={{
                      x: [0, 10, 0],
                      y: [0, -15, 0],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full"
                    animate={{
                      x: [0, -12, 0],
                      y: [0, 8, 0],
                      opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  />
                  <motion.div
                    className="absolute top-1/2 right-1/6 w-1 h-1 bg-cyan-400 rounded-full"
                    animate={{
                      x: [0, 8, 0],
                      y: [0, -10, 0],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2,
                    }}
                  />
                </div>
                
                {/* Pulsing outer glow */}
                <motion.div
                  className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-md"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4">Innovative Software Engineer & Strategic Project Manager</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              I'm a results-driven professional with a strong foundation in software engineering and project management. At DXB Live – Dubai World Trade Centre, I lead cross-functional teams to deliver large-scale digital solutions for government and corporate clients. My expertise spans frontend development with Bootstrap, React.js, and Liferay, backend development with Node.js/Express.js and MongoDB, and enterprise solutions management.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              With a passion for creating intuitive user experiences and a focus on execution excellence, I bridge the gap between business goals and technical implementation. I'm certified in leadership, strategic management, and productivity optimization—enabling me to align technical execution with organizational vision.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              I'm also proud to have contributed to impactful digital initiatives such as lll.gov.ae and charterschools.abudhabi, which reflect my commitment to building meaningful, public-serving solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Code className="h-5 w-5 text-blue-500" />
                <span>Full-Stack Development</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-purple-500" />
                <span>Project Management</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-green-500" />
                <span>Team Leadership</span>
              </div>
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-5 w-5 text-orange-500" />
                <span>Strategic Planning</span>
              </div>
            </div>
            
            <div className="pt-4">
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Let's Work Together
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
