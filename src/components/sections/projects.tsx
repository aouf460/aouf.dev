import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github, ShoppingCart, CheckSquare, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ContinuousCardHover } from "@/components/animated/continuous-animations";
import { SpacedText } from "@/components/animated/spaced-text";
import { AppleCard } from "@/components/animated/apple-animations";

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const certificates = [
    {
      title: "Powerful Leadership and Management",
      description: "Advanced leadership certification focusing on powerful management techniques, team dynamics, and strategic decision-making skills.",
      icon: BarChart3,
      gradient: "from-blue-600 to-purple-600",
      tags: ["Leadership", "Management", "Strategy", "Team Building"],
      type: "certificate",
      issuer: "ISM Training",
      year: "Jun 2025"
    },
    {
      title: "Achieving Leadership Excellence",
      description: "Comprehensive leadership excellence program covering advanced management strategies, organizational development, and executive skills.",
      icon: CheckSquare,
      gradient: "from-indigo-500 to-blue-600",
      tags: ["Leadership Excellence", "Executive Skills", "Management", "Development"],
      type: "certificate",
      issuer: "Blue Ocean Management Training",
      year: "Apr 2025"
    },
    {
      title: "Time and Stress Management",
      description: "Professional certification in time management optimization, stress reduction techniques, and productivity enhancement strategies.",
      icon: ShoppingCart,
      gradient: "from-green-500 to-teal-600",
      tags: ["Time Management", "Stress Management", "Productivity", "Optimization"],
      type: "certificate",
      issuer: "ISM Training",
      year: "Aug 2024"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            <SpacedText text="Professional Certifications" className="gradient-text" letterDelay={0.08} />
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-slate-600 dark:text-slate-300">
            Professional achievements and leadership expertise
          </motion.p>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map((certificate, index) => (
            <motion.div key={certificate.title} variants={itemVariants}>
              <ContinuousCardHover className="h-full">
                <Card className="glass-effect overflow-hidden border-slate-200 dark:border-slate-700 h-full flex flex-col">
                  <div className={`h-48 bg-gradient-to-br ${certificate.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3,
                      }}
                    >
                      <certificate.icon className="h-16 w-16 text-white" />
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 bg-white/10"
                      animate={{
                        opacity: [0.1, 0.3, 0.1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5,
                      }}
                    />
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{certificate.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">
                        {certificate.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {certificate.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-blue-600 font-medium text-sm">
                        {certificate.issuer}
                      </div>
                      <div className="text-slate-600 dark:text-slate-400 text-sm">
                        {certificate.year}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ContinuousCardHover>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
