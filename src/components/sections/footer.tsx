import { motion } from "framer-motion";
import { Linkedin, Github, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="text-3xl font-bold text-blue-600 dark:text-blue-400"
            >
              O
            </motion.div>
            <span className="text-2xl font-bold text-slate-400">/</span>
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full"
            />
            <h3 className="text-2xl font-bold gradient-text">Omar Aouf</h3>
          </div>
          <p className="text-slate-400 dark:text-slate-300 mb-6">
            Software Engineer & Project Manager
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="#"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <p className="text-slate-500 text-sm">
            © 2024 Omar Aouf. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
