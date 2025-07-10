import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypingText } from "@/components/animated/typing-text";
import { FloatingElements } from "@/components/animated/floating-elements";
import { MagneticButton, TextReveal, ImageParallax } from "@/components/animated/apple-animations";
import profileImage from "@assets/2319A346-F132-4861-B6E5-6C2E221BC138_1_102_o_1751922135100.jpeg";

export function Hero() {
  const { scrollY } = useScroll();
  
  // Parallax transformations
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);
  const textY = useTransform(scrollY, [0, 1000], [0, 200]);
  const profileY = useTransform(scrollY, [0, 1000], [0, 150]);
  const opacity = useTransform(scrollY, [0, 800], [1, 0]);
  const scale = useTransform(scrollY, [0, 800], [1, 0.8]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 -z-10"
      >
        <FloatingElements />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content with Parallax */}
          <motion.div 
            style={{ y: textY, opacity }}
            className="text-left order-2 lg:order-1"
          >
            <div className="mb-8">
              <motion.div 
                className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-2xl font-bold"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="flex items-center space-x-1"
                >
                  <span>O</span>
                  <span className="text-slate-300">/</span>
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-1 h-1 bg-white rounded-full"
                  />
                </motion.div>
              </motion.div>
            </div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm Omar Aouf
            </motion.h1>
            
            <motion.div 
              className="text-xl md:text-2xl mb-8 h-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <TypingText 
                text="Software Engineer & Project Manager"
                delay={500}
                className="gradient-text"
              />
            </motion.div>

            <motion.p 
              className="text-lg mb-12 text-slate-600 dark:text-slate-300 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              I craft exceptional digital experiences through code and lead teams to deliver innovative solutions that drive business success.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.5 }}
            >
              <MagneticButton className="group">
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 4px 20px rgba(59, 130, 246, 0.3)",
                      "0 8px 40px rgba(59, 130, 246, 0.5)",
                      "0 4px 20px rgba(59, 130, 246, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Button
                    onClick={() => scrollToSection("#projects")}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    View My Work
                  </Button>
                </motion.div>
              </MagneticButton>
              
              <MagneticButton className="group">
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 4px 20px rgba(59, 130, 246, 0.2)",
                      "0 8px 40px rgba(147, 51, 234, 0.4)",
                      "0 4px 20px rgba(59, 130, 246, 0.2)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <Button
                    variant="outline"
                    onClick={() => scrollToSection("#contact")}
                    className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Get In Touch
                  </Button>
                </motion.div>
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Profile Image with Parallax */}
          <motion.div 
            style={{ y: profileY, opacity, scale }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative z-10"
              >
                <div className="w-80 h-80 mx-auto lg:ml-auto lg:mr-0 rounded-full overflow-hidden shadow-2xl border-4 border-blue-500/30">
                  <ImageParallax 
                    src={profileImage}
                    alt="Omar Aouf - Software Engineer & Project Manager"
                    className="w-full h-full"
                  />
                </div>
              </motion.div>
              
              {/* Floating elements around photo */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20 blur-sm"
              />
              <motion.div
                animate={{
                  rotate: [0, -360],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-sm"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection("#about")}
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDown className="h-8 w-8 text-slate-400" />
      </motion.div>
    </section>
  );
}