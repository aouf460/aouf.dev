import { motion, useTransform, useScroll, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { TypingText } from "../animated/typing-text";
import { ParallaxSection } from "../animated/parallax-sections";
import { LiquidMorphBackground, MagneticField, FloatingText, HolographicCard, QuantumDots, MorphingButton } from "../animated/award-winning-animations";
import profileImage from "@assets/2319A346-F132-4861-B6E5-6C2E221BC138_1_102_o_1751922135100.jpeg";

export function AwardWinningHero() {
  const { scrollY } = useScroll();
  const [windowHeight, setWindowHeight] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const backgroundY = useTransform(scrollY, [0, windowHeight], [0, -windowHeight * 0.3]);
  const profileY = useTransform(scrollY, [0, windowHeight], [0, -windowHeight * 0.2]);
  const opacity = useTransform(scrollY, [0, windowHeight * 0.5], [1, 0]);
  const scale = useTransform(scrollY, [0, windowHeight * 0.5], [1, 0.8]);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" ref={heroRef}>
      <LiquidMorphBackground />
      <QuantumDots count={12} />
      
      <ParallaxSection speed={0.5} className="w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-950/30 dark:via-transparent dark:to-purple-950/30" />
        
        <div className="relative z-10 w-full min-h-screen flex items-center">
          <motion.div
            style={{ y: backgroundY }}
            className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-transparent to-purple-100/30 dark:from-blue-900/20 dark:via-transparent dark:to-purple-900/20"
          />
          
          {/* Elegant gradient orbs that follow mouse */}
          <motion.div
            className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
            animate={{
              x: mousePosition.x * 0.05,
              y: mousePosition.y * 0.05,
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{
              x: { duration: 1 },
              y: { duration: 1 },
              scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          
          <motion.div
            className="absolute w-80 h-80 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-3xl"
            animate={{
              x: mousePosition.x * -0.03,
              y: mousePosition.y * -0.03,
              scale: [1.1, 1, 1.1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              x: { duration: 1.2 },
              y: { duration: 1.2 },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          
          <div className="w-full">
            <div className="flex items-center justify-center min-h-screen">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  
                  {/* Left Content */}
                  <motion.div 
                    className="order-2 lg:order-1 text-center lg:text-left relative z-30"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    {/* Animated Logo with Quantum Effect */}
                    <div className="mb-8 lg:mb-12">
                      <MagneticField strength={0.5}>
                        <motion.div className="relative inline-block">
                          <motion.div
                            className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400"
                            animate={{
                              rotate: [0, 360],
                              filter: [
                                "drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))",
                                "drop-shadow(0 0 20px rgba(59, 130, 246, 0.8))",
                                "drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))"
                              ]
                            }}
                            transition={{
                              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                              filter: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                            }}
                          >
                            O
                          </motion.div>
                          <motion.div
                            className="absolute -top-2 -right-6 text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400"
                            animate={{
                              rotate: [0, -360],
                              scale: [1, 1.2, 1],
                              filter: [
                                "drop-shadow(0 0 5px rgba(139, 92, 246, 0.5))",
                                "drop-shadow(0 0 15px rgba(139, 92, 246, 0.8))",
                                "drop-shadow(0 0 5px rgba(139, 92, 246, 0.5))"
                              ]
                            }}
                            transition={{
                              rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                              filter: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                            }}
                          >
                            /.
                          </motion.div>
                        </motion.div>
                      </MagneticField>
                    </div>

                    {/* Award-Winning Main Title */}
                    <motion.h1 
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gradient-text relative mb-6"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      Hi, I'm Omar Aouf
                    </motion.h1>
                    
                    {/* Subtitle with Quantum Effect */}
                    <motion.div 
                      className="text-xl md:text-2xl mb-8 h-16 relative"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur-xl" />
                      <TypingText 
                        text="Software Engineer & Project Manager"
                        delay={500}
                        className="gradient-text relative z-10"
                      />
                    </motion.div>

                    {/* Description with Shimmer */}
                    <motion.div
                      className="mb-8 lg:mb-12 relative"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 2 }}
                    >
                      <motion.p 
                        className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 relative z-10"
                        animate={{
                          textShadow: [
                            "0 0 0px rgba(59, 130, 246, 0)",
                            "0 0 10px rgba(59, 130, 246, 0.3)",
                            "0 0 0px rgba(59, 130, 246, 0)"
                          ]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        I craft exceptional digital experiences through code and lead teams to deliver innovative solutions that drive business success.
                      </motion.p>
                    </motion.div>
                    
                    {/* Award-Winning Morphing Buttons */}
                    <motion.div 
                      className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start relative z-50"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 2.5 }}
                      style={{ position: 'relative', zIndex: 50 }}
                    >
                      <MagneticField strength={0.4}>
                        <motion.div className="relative z-50">
                          <MorphingButton
                            onClick={() => scrollToSection("#portfolio")}
                            className="px-6 sm:px-8 py-3 text-white font-semibold w-full sm:w-auto relative overflow-hidden"
                          >
                            <span className="relative z-10">
                              View My Work
                            </span>
                          </MorphingButton>
                        </motion.div>
                      </MagneticField>
                      
                      <MagneticField strength={0.4}>
                        <motion.div className="relative z-50">
                          <motion.button
                            onClick={() => scrollToSection("#contact")}
                            className="px-6 sm:px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold transition-all duration-300 w-full sm:w-auto relative overflow-hidden rounded-lg"
                            whileHover={{
                              scale: 1.05,
                              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 hover:opacity-20 transition-opacity duration-300"
                              animate={{
                                x: ['-100%', '100%']
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear"
                              }}
                            />
                            <span className="relative z-10">Get In Touch</span>
                          </motion.button>
                        </motion.div>
                      </MagneticField>
                    </motion.div>
                  </motion.div>

                  {/* Right Content - Profile with Holographic Effect */}
                  <motion.div 
                    style={{ y: profileY, opacity, scale }}
                    className="order-1 lg:order-2 flex justify-center lg:justify-end"
                  >
                    <MagneticField strength={0.3}>
                      <HolographicCard>
                        <motion.div
                          className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden shadow-2xl"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Quantum particle ring */}
                          <motion.div
                            className="absolute inset-0 rounded-full"
                            style={{
                              background: "conic-gradient(from 0deg, transparent 0deg, rgba(59, 130, 246, 0.3) 90deg, rgba(139, 92, 246, 0.3) 180deg, transparent 270deg)"
                            }}
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 8,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          />
                          
                          <motion.img
                            src={profileImage}
                            alt="Omar Aouf"
                            className="w-full h-full object-cover relative z-10"
                            style={{ y: profileY * 0.5 }}
                          />
                          
                          {/* Animated overlay */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 z-10"
                            animate={{ 
                              opacity: [0.2, 0.4, 0.2],
                              scale: [1, 1.02, 1]
                            }}
                            transition={{ 
                              duration: 4, 
                              repeat: Infinity, 
                              ease: "easeInOut" 
                            }}
                          />
                          
                          {/* Holographic shimmer */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent z-20"
                            animate={{
                              x: ['-100%', '100%']
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                              repeatDelay: 2
                            }}
                          />
                        </motion.div>
                      </HolographicCard>
                    </MagneticField>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ParallaxSection>
    </section>
  );
}