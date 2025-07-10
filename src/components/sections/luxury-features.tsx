import { motion } from "framer-motion";
import { Sparkles, Diamond, Crown, Star } from "lucide-react";
import { HolographicCard, MagneticField } from "../animated/award-winning-animations";

const luxuryFeatures = [
  {
    icon: Diamond,
    title: "Premium Design",
    description: "Crafted with attention to every detail, ensuring a luxurious experience",
    gradient: "from-blue-600 to-purple-600"
  },
  {
    icon: Crown,
    title: "Elite Performance",
    description: "Optimized for speed and efficiency with cutting-edge technology",
    gradient: "from-purple-600 to-pink-600"
  },
  {
    icon: Sparkles,
    title: "Sophisticated UX",
    description: "Intuitive interactions that feel natural and elegant",
    gradient: "from-pink-600 to-red-600"
  },
  {
    icon: Star,
    title: "Award-Winning",
    description: "Recognized for innovation and excellence in digital design",
    gradient: "from-red-600 to-orange-600"
  }
];

export function LuxuryFeatures() {
  return (
    <section className="py-32 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
            animate={{
              textShadow: [
                "0 0 20px rgba(59, 130, 246, 0.3)",
                "0 0 40px rgba(139, 92, 246, 0.4)",
                "0 0 20px rgba(59, 130, 246, 0.3)"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Luxury Craftsmanship
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Every project is meticulously crafted with premium attention to detail and sophisticated design principles
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {luxuryFeatures.map((feature, index) => (
            <MagneticField key={feature.title} strength={0.15}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="h-full"
              >
                <HolographicCard className="h-full">
                  <div className="p-8 text-center h-full flex flex-col">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0, -5, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3
                      }}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">
                      {feature.title}
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-300 flex-1">
                      {feature.description}
                    </p>
                    
                    <motion.div
                      className="mt-6 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                    />
                  </div>
                </HolographicCard>
              </motion.div>
            </MagneticField>
          ))}
        </div>
      </div>
    </section>
  );
}