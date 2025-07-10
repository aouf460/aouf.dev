import { motion } from "framer-motion";
import { Code, Smartphone, Users2, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ContinuousCardHover } from "@/components/animated/continuous-animations";
import { SpacedText } from "@/components/animated/spaced-text";

export function Services() {
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

  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices for optimal performance and user experience.",
      icon: Code,
      color: "bg-blue-600",
    },
    {
      title: "Mobile Apps",
      description: "Cross-platform mobile applications using React Native and Flutter for iOS and Android platforms.",
      icon: Smartphone,
      color: "bg-green-600",
    },
    {
      title: "Project Management",
      description: "End-to-end project management from planning to delivery, ensuring on-time and on-budget completion.",
      icon: Users2,
      color: "bg-purple-600",
    },
    {
      title: "Tech Consulting",
      description: "Strategic technology consulting to help businesses make informed decisions about their tech stack and roadmap.",
      icon: TrendingUp,
      color: "bg-orange-600",
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            <SpacedText text="Services" className="gradient-text" letterDelay={0.12} />
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-slate-600 dark:text-slate-300">
            How I can help your business grow
          </motion.p>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={service.title} variants={itemVariants}>
              <ContinuousCardHover className="h-full">
                <Card className="text-center glass-effect border-slate-200 dark:border-slate-700 h-full flex flex-col">
                  <CardContent className="p-6 flex-1 flex flex-col justify-between">
                    <div className="flex flex-col items-center">
                      <motion.div 
                        className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                          delay: index * 0.5,
                        }}
                      >
                        <service.icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {service.description}
                    </p>
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
