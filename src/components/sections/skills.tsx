import { motion } from "framer-motion";
import { Palette, Server, Users2 } from "lucide-react";
import { SkillBar } from "@/components/animated/skill-bar";
import { ContinuousCardHover } from "@/components/animated/continuous-animations";
import { SpacedText } from "@/components/animated/spaced-text";

export function Skills() {
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

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            <SpacedText text="Technical Skills" className="gradient-text" letterDelay={0.08} />
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-slate-600 dark:text-slate-300">
            Technologies and tools I work with
          </motion.p>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Frontend Skills */}
          <motion.div variants={itemVariants}>
            <ContinuousCardHover className="h-full">
              <div className="glass-effect p-6 rounded-xl h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Palette className="h-8 w-8 text-blue-500 mr-3" />
                  </motion.div>
                  <h3 className="text-xl font-semibold">Frontend</h3>
                </div>
                <div className="space-y-4 flex-1">
                  <SkillBar skill="React/Next.js" percentage={95} color="bg-blue-500" delay={200} />
                  <SkillBar skill="Liferay" percentage={90} color="bg-blue-500" delay={400} />
                  <SkillBar skill="Bootstrap" percentage={88} color="bg-blue-500" delay={600} />
                </div>
              </div>
            </ContinuousCardHover>
          </motion.div>
          
          {/* Backend Skills */}
          <motion.div variants={itemVariants}>
            <ContinuousCardHover className="h-full">
              <div className="glass-effect p-6 rounded-xl h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 5,
                    }}
                  >
                    <Server className="h-8 w-8 text-green-500 mr-3" />
                  </motion.div>
                  <h3 className="text-xl font-semibold">Backend</h3>
                </div>
                <div className="space-y-4 flex-1">
                  <SkillBar skill="Node.js/Express.js" percentage={92} color="bg-green-500" delay={200} />
                  <SkillBar skill="Python" percentage={85} color="bg-green-500" delay={400} />
                  <SkillBar skill="MongoDB" percentage={88} color="bg-green-500" delay={600} />
                </div>
              </div>
            </ContinuousCardHover>
          </motion.div>
          
          {/* Management Skills */}
          <motion.div variants={itemVariants}>
            <ContinuousCardHover className="h-full">
              <div className="glass-effect p-6 rounded-xl h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 10,
                    }}
                  >
                    <Users2 className="h-8 w-8 text-purple-500 mr-3" />
                  </motion.div>
                  <h3 className="text-xl font-semibold">Management</h3>
                </div>
                <div className="space-y-4 flex-1">
                  <SkillBar skill="Agile/Scrum" percentage={96} color="bg-purple-500" delay={200} />
                  <SkillBar skill="Team Leadership" percentage={93} color="bg-purple-500" delay={400} />
                  <SkillBar skill="Strategic Planning" percentage={89} color="bg-purple-500" delay={600} />
                </div>
              </div>
            </ContinuousCardHover>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
