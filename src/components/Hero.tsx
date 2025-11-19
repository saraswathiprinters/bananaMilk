import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Download, ArrowRight, Globe, Shield, Truck, Star, Factory, Award, Users, ChevronDown } from 'lucide-react';
import intro from '../assets/video/intro2.mp4';
import { Helmet } from 'react-helmet-async';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.3]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -150]);

  const isInView = useInView(containerRef, { once: true });

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const trustStats = [
    { number: '50+', label: 'Countries Served', icon: Globe, delay: 0 },
    { number: 'ISO 22000', label: 'Certified Quality', icon: Shield, delay: 0.2 },
    { number: '15+', label: 'Years Experience', icon: Factory, delay: 0.4 },
    { number: '99.8%', label: 'Client Satisfaction', icon: Users, delay: 0.6 }
  ];

  const features = [
    "GMP Certified Manufacturing",
    "HACCP Compliant Processes", 
    "Organic & Conventional Options",
    "Global Export Expertise"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
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
      y: 120,
      rotateX: 45,
      filter: "blur(10px)"
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.3,
        duration: 1.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  const floatingVariants = {
    float: (i: number) => ({
      y: [0, -35, 0],
      x: [0, i % 2 === 0 ? 12 : -12, 0],
      rotate: [0, i % 2 === 0 ? 6 : -6, 0],
      transition: {
        duration: 7 + i * 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    })
  };

  const particleVariants = {
    animate: (i: number) => ({
      y: [0, -120, 0],
      x: [0, Math.sin(i) * 60, 0],
      opacity: [0, 0.7, 0],
      scale: [0, 1.3, 0],
      transition: {
        duration: 3.5 + i,
        repeat: Infinity,
        delay: i * 0.4,
        ease: "easeInOut"
      }
    })
  };

  const featureVariants = {
    enter: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    center: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: -30,
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeIn"
      }
    }
  };

  return (
    <motion.section
      ref={containerRef}
      id="home"
      className="min-h-[40vh] sm:min-h-[60vh] md:min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-20"
      style={{ opacity, scale }}
    >
      <Helmet>
        <meta property="og:image:alt" content="Premium Banana Powder Manufacturing Facility" />
        <meta name="twitter:image:alt" content="Banana Gold Exports Manufacturing Process" />
      </Helmet>
      {/* Enhanced Video Background */}
      <div className="absolute inset-0">
        <motion.video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          className="w-full h-full object-cover"
          onLoadedData={() => setIsLoaded(true)}
          style={{ 
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.4]),
          }}
        >
          <source src={intro} type="video/mp4" />
        </motion.video>
        
        {/* Advanced Gradient Overlays */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300"></div> */}
        {/* <div className="absolute inset-0 bg-gradient-to-t  from-yellow-100 via-yellow-200 to-yellow-300"></div> */}
        {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,yellow%)]"></div> */}
        
        {/* Animated Grid Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-[0.08]"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px),
              linear-gradient(180deg, rgba(255,255,255,0.15) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Floating Geometric Elements */}
        <motion.div
          variants={floatingVariants}
          custom={0}
          animate="float"
          className="absolute top-1/4 left-1/4 w-48 h-48 border-2 border-yellow-400/25 rounded-xl hidden md:block"
        />
        <motion.div
          variants={floatingVariants}
          custom={1}
          animate="float"
          className="absolute bottom-1/3 right-1/4 w-32 h-32 border-2 border-white/15 rounded-full hidden md:block"
        />
        <motion.div
          variants={floatingVariants}
          custom={2}
          animate="float"
          className="absolute top-1/2 left-1/4 w-20 h-20 border border-yellow-400/30 rotate-45 hidden md:block"
        />

        {/* Animated Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={particleVariants}
            animate="animate"
            className="absolute w-1 h-1 bg-yellow-400 rounded-full hidden md:block"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Scanning Laser Effect */}
        <motion.div
          animate={{
            y: ['0%', '100%'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent shadow-lg shadow-yellow-400/40 hidden md:block"
        />
      </div>

      {/* Video Controls */}
      <div className="absolute top-20 right-4 md:top-6 md:right-6 z-20 flex gap-2 md:gap-3">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={togglePlay}
          className="w-10 h-10 md:w-12 md:h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:border-yellow-400 transition-all duration-300"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 md:w-5 md:h-5 text-white" />
          ) : (
            <Play className="w-4 h-4 md:w-5 md:h-5 text-white" />
          )}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMute}
          className="w-10 h-10 md:w-12 md:h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:border-yellow-400 transition-all duration-300"
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 md:w-5 md:h-5 text-white" />
          ) : (
            <Volume2 className="w-4 h-4 md:w-5 md:h-5 text-white" />
          )}
        </motion.button>
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center max-w-6xl mx-auto px-4 md:px-6 w-full"
        style={{ y }}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Animated Title */}
        <motion.div className="mb-4 md:mb-8">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-white mb-4 md:mb-8 leading-tight tracking-tight"
            variants={containerVariants}
          >
            {['Pure.', 'Clean.', 'Powerful.'].map((word, i) => (
              <motion.span
                key={word}
                custom={i}
                variants={wordVariants}
                className="block bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent font-light px-2 md:px-4"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>

        {/* Animated Divider */}
        <motion.div
          variants={itemVariants}
          className="w-20 md:w-32 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-4 md:mb-8 relative overflow-hidden"
        >
          <motion.div
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
          />
        </motion.div>

        {/* Rotating Features */}
        <motion.div
          variants={itemVariants}
          className="h-16 md:h-20 flex items-center justify-center mb-4 md:mb-6"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={currentFeature}
              variants={featureVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="text-base md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto font-light tracking-wide backdrop-blur-sm bg-white/10 rounded-2xl py-3 px-4 md:py-4 md:px-6 border border-white/10"
            >
              {features[currentFeature]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-sm md:text-lg text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto font-medium tracking-wide"
        >
          Premium Banana Powder Export & Manufacturing Excellence
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-12 px-2"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(217, 119, 6, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-3 md:px-8 md:py-4 font-bold text-sm md:text-base hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 border-2 border-yellow-400 shadow-lg shadow-yellow-400/20 overflow-hidden rounded-xl w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-2 justify-center">
              Request Export Quote
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </span>
            <motion.div
              animate={{
                x: ['-100%', '100%']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />
          </motion.button>
          
          <motion.button
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.12)"
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative border border-white/30 text-white px-6 py-3 md:px-8 md:py-4 hover:border-yellow-400 transition-all duration-300 backdrop-blur-sm overflow-hidden rounded-xl w-full sm:w-auto font-bold text-sm md:text-base"
          >
            <span className="relative z-10 flex items-center gap-2 justify-center">
              <Download className="w-4 h-4" />
              Tech Specs
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>

        {/* Trust Indicators - Enhanced for Mobile */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto px-2"
        >
          {trustStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                y: -2,
                borderColor: "rgba(217, 119, 6, 0.4)"
              }}
              className="text-center backdrop-blur-md bg-white/10 rounded-xl py-3 px-2 md:py-4 md:px-4 border border-white/10 hover:border-yellow-400/40 transition-all duration-300 group"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.3
                }}
                className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:from-yellow-300 group-hover:to-yellow-400 transition-all duration-300"
              >
                <stat.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </motion.div>
              <motion.div 
                className="text-lg md:text-xl font-bold text-yellow-400 mb-1"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 + index * 0.15 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-200 text-xs md:text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 8, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-5 h-8 md:w-6 md:h-10 border border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, 10, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1 h-2 md:h-3 bg-yellow-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Loading Overlay */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black z-30 flex items-center justify-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-12 h-12 border-3 border-yellow-400 border-t-transparent rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Hero;