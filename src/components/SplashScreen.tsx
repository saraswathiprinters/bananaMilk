import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useTransform, useScroll } from 'framer-motion';
import { Leaf, Globe, Factory, Award, Truck, Star, ChevronRight, Play, Pause } from 'lucide-react';

interface SplashScreenProps {
  onEnter: () => void;
}

export default function SplashScreen({ onEnter }: SplashScreenProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showEnter, setShowEnter] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsLoading(false);
          setTimeout(() => setShowEnter(true), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  const features = [
    { icon: Globe, text: "Global Export Network", delay: 0 },
    { icon: Factory, text: "Advanced Manufacturing", delay: 0.2 },
    { icon: Award, text: "Quality Certified", delay: 0.4 },
    { icon: Truck, text: "Worldwide Shipping", delay: 0.6 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      filter: "blur(10px)"
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 1,
        ease: "easeOut"
      }
    })
  };

  const particleVariants = {
    animate: (i: number) => ({
      y: [0, -200, 0],
      x: [0, Math.sin(i) * 100, 0],
      opacity: [0, 0.8, 0],
      scale: [0, 1.5, 0],
      rotate: [0, 360, 0],
      transition: {
        duration: 4 + i,
        repeat: Infinity,
        delay: i * 0.3,
        ease: "easeInOut"
      }
    })
  };

  const floatingVariants = {
    float: (i: number) => ({
      y: [0, -40, 0],
      x: [0, i % 2 === 0 ? 20 : -20, 0],
      rotate: [0, i % 2 === 0 ? 10 : -10, 0],
      transition: {
        duration: 6 + i * 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    })
  };

  const progressVariants = {
    initial: { scaleX: 0 },
    animate: {
      scaleX: progress / 100,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 bg-gradient-to-br from-gray-900 via-brown to-brown-dark flex flex-col items-center justify-center z-50 overflow-hidden"
      style={{ opacity, scale }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <motion.div
          variants={floatingVariants}
          custom={0}
          animate="float"
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-yellow-600/5 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          custom={1}
          animate="float"
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-l from-brown/20 to-transparent rounded-full blur-3xl"
        />
        
        {/* Geometric Shapes */}
        <motion.div
          variants={floatingVariants}
          custom={2}
          animate="float"
          className="absolute top-1/3 right-1/3 w-32 h-32 border-2 border-yellow-400/30 rounded-xl"
        />
        <motion.div
          variants={floatingVariants}
          custom={3}
          animate="float"
          className="absolute bottom-1/4 left-1/3 w-24 h-24 border-2 border-white/20 rounded-full"
        />
        <motion.div
          variants={floatingVariants}
          custom={4}
          animate="float"
          className="absolute top-1/2 left-1/2 w-16 h-16 border border-yellow-400/40 rotate-45"
        />

        {/* Particle System */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={particleVariants}
            animate="animate"
            className="absolute w-2 h-2 bg-yellow-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Grid Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(180deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Scanning Beam */}
        <motion.div
          animate={{
            y: ['0%', '100%'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent shadow-lg shadow-yellow-400/50"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 space-y-12 max-w-6xl mx-auto">
        {/* Logo & Headline */}
        <motion.div 
          className="space-y-8"
          variants={containerVariants}
        >
          {/* Animated Logo */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-yellow-400 rounded-2xl blur-lg opacity-50"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-yellow-400/25 relative z-10">
                <Leaf className="w-10 h-10 text-white" />
              </div>
            </motion.div>
          </motion.div>

          {/* Headline */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight"
              variants={containerVariants}
            >
              {["Premium", "Banana", "Powder"].map((word, i) => (
                <motion.span
                  key={word}
                  custom={i}
                  variants={wordVariants}
                  className="block bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent font-light"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Animated Divider */}
            <motion.div
              variants={itemVariants}
              className="w-32 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto relative overflow-hidden"
            >
              <motion.div
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
              />
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 font-light tracking-wider uppercase letter-spacing-wide"
            >
              Global Export Excellence
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.text}
              variants={itemVariants}
              custom={feature.delay}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="text-center backdrop-blur-lg bg-white/10 rounded-2xl p-4 md:p-6 border border-white/10 hover:border-yellow-400/50 transition-all duration-500 group"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
                className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:from-yellow-300 group-hover:to-yellow-400 transition-all duration-300"
              >
                <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </motion.div>
              <div className="text-gray-200 text-sm md:text-base font-medium">{feature.text}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Progress Bar */}
        <motion.div 
          variants={itemVariants}
          className="max-w-2xl mx-auto space-y-4"
        >
          <div className="flex justify-between text-sm text-gray-400">
            <span>System Initialization</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              variants={progressVariants}
              initial="initial"
              animate="animate"
              className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full relative overflow-hidden"
            >
              <motion.div
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Enter Button */}
        <AnimatePresence>
          {showEnter && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex justify-center"
            >
              <motion.button
                onClick={onEnter}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(217, 119, 6, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-r from-yellow-400 to-yellow-500 text-brown-dark px-12 py-4 rounded-2xl text-lg md:text-xl font-bold shadow-2xl shadow-yellow-400/25 overflow-hidden border-2 border-yellow-400"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Enter Export Hub
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.div>
                </span>
                <motion.div
                  animate={{
                    x: ['-100%', '100%']
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <motion.div
        variants={itemVariants}
        className="absolute bottom-8 text-center space-y-2"
      >
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 text-sm tracking-wider font-light"
        >
          LOADING PREMIUM EXPORT CONTENT
        </motion.p>
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center gap-1"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
              className="w-1 h-1 bg-yellow-400 rounded-full"
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Audio Control */}
      <motion.button
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute top-6 right-6 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:border-yellow-400 transition-all duration-300 z-20"
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-white" />
        ) : (
          <Play className="w-5 h-5 text-white" />
        )}
      </motion.button>
    </motion.div>
  );
}