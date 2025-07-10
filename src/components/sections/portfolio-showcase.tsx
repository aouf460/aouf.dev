import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Eye, Code, Maximize2, Minimize2 } from "lucide-react";
import { SpacedText } from "../animated/spaced-text";
import { ParallaxSection } from "../animated/parallax-sections";
import { TextShimmer, BreathingWrapper, LiquidBlob, MorphingShapes } from "../animated/creative-animations";
import { HolographicCard, MagneticField, FloatingText } from "../animated/award-winning-animations";

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  url: string;
  tech: string[];
  category: string;
  color: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "laminim",
    title: "Laminim",
    description: "Luxury male clothing brand delivering sophisticated menswear with premium craftsmanship and contemporary elegance",
    url: "https://laminim.ae",
    tech: ["Shopify", "JavaScript", "Custom Theme", "Figma", "UI/UX"],
    category: "Luxury Fashion",
    color: "from-amber-500 to-orange-600"
  },
  {
    id: "foodforward",
    title: "Food Forward",
    description: "Leading F&B consultants and innovators transforming the culinary industry with strategic insights and cutting-edge solutions",
    url: "https://www.foodforward.co",
    tech: ["WordPress", "JavaScript", "Figma", "UI/UX"],
    category: "F&B Consulting",
    color: "from-green-500 to-emerald-600"
  },
  {
    id: "government-events",
    title: "Confidential Corporate Platform – Government Event System",
    description: "A secure digital platform built for high-profile government event management",
    url: "",
    tech: ["Bootstrap", "React.js", "Liferay", "Jira", "Node.js", "Express"],
    category: "Government",
    color: "from-blue-600 to-purple-600"
  }
];

export function PortfolioShowcase() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedItem) {
        setSelectedItem(null);
        setIsFullscreen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem]);

  const handleItemClick = (item: PortfolioItem) => {
    setSelectedItem(item);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <section id="portfolio">
      <ParallaxSection speed={0.3} className="py-32 bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          <MorphingShapes />
          <BreathingWrapper>
            <TextShimmer className="inline-block">
              <FloatingText
                text="Live Portfolio"
                className="text-4xl md:text-6xl font-bold mb-4 text-slate-800 dark:text-white"
              />
            </TextShimmer>
          </BreathingWrapper>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
          >
            Explore my previous work through interactive previews and detailed insights
          </motion.p>
          <LiquidBlob className="top-0 right-0 w-32 h-32 opacity-30" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <MagneticField strength={0.2}>
                <HolographicCard className="relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Preview Container */}
                <div className="relative h-64 sm:h-80 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br opacity-20"
                    style={{ backgroundImage: `linear-gradient(135deg, ${item.color.split(' ')[1]} 0%, ${item.color.split(' ')[3]} 100%)` }}
                    animate={{
                      scale: hoveredItem === item.id ? 1.1 : 1,
                      opacity: hoveredItem === item.id ? 0.3 : 0.2
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Animated Browser Frame */}
                  <div className="absolute inset-2 sm:inset-4 bg-white dark:bg-slate-900 rounded-lg shadow-lg overflow-hidden">
                    <div className="h-6 sm:h-8 bg-slate-100 dark:bg-slate-800 flex items-center px-2 sm:px-3 gap-1 sm:gap-2">
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex-1 h-3 sm:h-4 bg-slate-200 dark:bg-slate-700 rounded text-xs flex items-center px-2 text-slate-500 dark:text-slate-400 truncate">
                        {item.url || "Confidential Project"}
                      </div>
                    </div>
                    
                    {/* Preview Content */}
                    <div className="h-full bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center p-4">
                      <motion.div
                        className="text-center"
                        animate={{
                          y: hoveredItem === item.id ? -10 : 0,
                          scale: hoveredItem === item.id ? 1.05 : 1
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto`}>
                          <Code className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white mb-2">{item.title}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300">{item.category}</p>
                      </motion.div>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <AnimatePresence>
                    {hoveredItem === item.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/50 flex items-center justify-center"
                      >
                        <motion.button
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          onClick={() => handleItemClick(item)}
                          className="px-4 sm:px-6 py-2 sm:py-3 bg-white dark:bg-slate-800 text-slate-800 dark:text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
                        >
                          <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                          {item.url ? "Live Preview" : "Preview"}
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Info Section */}
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white">{item.title}</h3>
                    <span className={`px-3 py-1 bg-gradient-to-r ${item.color} text-white text-sm rounded-full self-start sm:self-auto`}>
                      {item.category}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm sm:text-base">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs sm:text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => handleItemClick(item)}
                      className="flex-1 px-4 py-2 bg-slate-800 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-700 dark:hover:bg-slate-600 transition-colors duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      <Eye className="w-4 h-4" />
                      Preview
                    </button>
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visit
                      </a>
                    )}
                  </div>
                </div>
                </HolographicCard>
              </MagneticField>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for iframe preview */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden ${
                isFullscreen ? 'w-full h-full' : 'w-full max-w-6xl h-[80vh]'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 bg-gradient-to-r ${selectedItem.color} rounded-full`}></div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white">{selectedItem.title}</h3>
                  <span className="text-sm text-slate-500 dark:text-slate-400">{selectedItem.url}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleFullscreen}
                    className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
                  </button>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    <span className="text-xl">×</span>
                  </button>
                </div>
              </div>

              {/* iframe Container */}
              <div className="relative h-full bg-white dark:bg-slate-900">
                {selectedItem.url ? (
                  <>
                    <iframe
                      ref={iframeRef}
                      src={selectedItem.url}
                      className="w-full h-full border-0"
                      title={selectedItem.title}
                      sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
                    />
                    
                    {/* Loading overlay */}
                    <motion.div
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 0 }}
                      transition={{ delay: 2, duration: 0.5 }}
                      className="absolute inset-0 bg-slate-100 dark:bg-slate-800 flex items-center justify-center"
                    >
                      <div className="text-center">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className={`w-12 h-12 border-4 border-slate-300 dark:border-slate-600 border-t-transparent rounded-full mb-4 mx-auto`}
                        />
                        <p className="text-slate-600 dark:text-slate-300">Loading {selectedItem.title}...</p>
                      </div>
                    </motion.div>
                  </>
                ) : (
                  <div className="h-full flex items-center justify-center p-8">
                    <div className="text-center max-w-md">
                      <div className={`w-24 h-24 bg-gradient-to-br ${selectedItem.color} rounded-full flex items-center justify-center mb-6 mx-auto`}>
                        <Code className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">{selectedItem.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-6">{selectedItem.description}</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {selectedItem.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          This project contains confidential information and cannot be displayed publicly due to security and privacy requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </ParallaxSection>
    </section>
  );
}