import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "../animated/apple-animations";
import { TypingText } from "../animated/typing-text";
import { ParallaxSection } from "../animated/parallax-sections";
import { TextShimmer, BreathingWrapper, ParticleSystem, GlitchText } from "../animated/creative-animations";
import profileImage from "@assets/2319A346-F132-4861-B6E5-6C2E221BC138_1_102_o_1751922135100.jpeg";

export function EnhancedHero() {
  const { scrollY } = useScroll();
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleSystem />
      <ParallaxSection speed={0.5} className="w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-950/30 dark:via-transparent dark:to-purple-950/30" />
        <div className="relative z-10 w-full min-h-screen flex items-center">
          <motion.div
            style={{ y: backgroundY }}
            className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-transparent to-purple-100/30 dark:from-blue-900/20 dark:via-transparent dark:to-purple-900/20"
          />
          
          <div className="w-full">
            <div className="flex items-center justify-center min-h-screen">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <motion.div 
                    className="order-2 lg:order-1 text-center lg:text-left relative z-30"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    {/* Animated Logo */}
                    <div className="mb-8 lg:mb-12">
                      <div className="relative inline-block">
                        <motion.div
                          animate={{
                            rotate: [0, 360],
                          }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400"
                        >
                          O
                        </motion.div>
                        <motion.div
                          animate={{
                            rotate: [0, -360],
                          }}
                          transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute -top-2 -right-2 text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400"
                        >
                          /.
                        </motion.div>
                      </div>
                    </div>

                    {/* Enhanced Main Title */}
                    <motion.h1 
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      Hi, I'm Omar Aouf
                    </motion.h1>
                    
                    {/* Subtitle with enhanced animation */}
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

                    {/* Description */}
                    <motion.p 
                      className="text-base md:text-lg mb-8 lg:mb-12 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 2 }}
                    >
                      I craft exceptional digital experiences through code and lead teams to deliver innovative solutions that drive business success.
                    </motion.p>
                    
                    {/* Enhanced Buttons with mobile-first design */}
                    <motion.div 
                      className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start relative z-40"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 2.5 }}
                    >
                      <MagneticButton className="group relative overflow-hidden">
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
                          className="relative"
                        >
                          <Button
                            onClick={() => scrollToSection("#portfolio")}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 w-full sm:w-auto relative overflow-hidden group"
                          >
                            <span className="relative z-10">View My Work</span>
                            <motion.div 
                              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            />
                          </Button>
                        </motion.div>
                      </MagneticButton>
                      
                      <MagneticButton className="group relative overflow-hidden">
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
                            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 w-full sm:w-auto relative overflow-hidden group"
                          >
                            <span className="relative z-10">Get In Touch</span>
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              animate={{ x: ['-100%', '100%'] }}
                              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            />
                          </Button>
                        </motion.div>
                      </MagneticButton>
                    </motion.div>
                  </motion.div>

                  {/* Profile Image with enhanced parallax */}
                  <motion.div 
                    style={{ y: profileY, opacity, scale }}
                    className="order-1 lg:order-2 flex justify-center lg:justify-end"
                  >
                    <div className="relative">
                      <BreathingWrapper>
                        <motion.div
                          className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden shadow-2xl"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.img
                            src={profileImage}
                            alt="Omar Aouf"
                            className="w-full h-full object-cover"
                            style={{ y: profileY * 0.5 }}
                          />
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20"
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
                        </motion.div>
                      </BreathingWrapper>
                    </div>
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