import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useTransform, useScroll, AnimatePresence } from 'framer-motion';
import { Baby, Croissant, Coffee, IceCream, Sparkles, Wheat, HeartPulse, ArrowRight, Factory, TestTube2, Users, Globe, Target, BarChart3, ChevronRight, Play, Pause } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const applications = [
  {
    icon: Baby,
    title: 'Infant Nutrition & Baby Food',
    description: 'Premium natural ingredient for infant formulas and organic baby food products with high nutritional value',
    gradient: 'from-blue-500 to-cyan-600',
    bgGradient: 'from-blue-50 to-cyan-50',
    features: ['Hypoallergenic Properties', 'Easy Digestibility', 'Natural Sweetness'],
    stats: '60% Market Preference',
    marketSize: '$45B',
    growth: '+8.2% YoY'
  },
  {
    icon: Croissant,
    title: 'Bakery & Confectionery',
    description: 'Superior functional ingredient for breads, cakes, cookies with enhanced moisture retention',
    gradient: 'from-amber-500 to-orange-600',
    bgGradient: 'from-amber-50 to-orange-50',
    features: ['Extended Freshness', 'Natural Binding', 'Flavor Enhancement'],
    stats: '40% Shelf Life Increase',
    marketSize: '$320B',
    growth: '+5.7% YoY'
  },
  {
    icon: Coffee,
    title: 'Beverage & Nutritional Drinks',
    description: 'Instant solubility powder for health drinks, smoothies and functional beverages',
    gradient: 'from-brown-500 to-amber-800',
    bgGradient: 'from-amber-50 to-brown-50',
    features: ['Instant Solubility', 'Smooth Texture', 'Rich Flavor Profile'],
    stats: 'Zero Sedimentation',
    marketSize: '$180B',
    growth: '+6.3% YoY'
  },
  {
    icon: IceCream,
    title: 'Dairy & Frozen Desserts',
    description: 'Creamy texture enhancer for ice creams, yogurts and premium frozen treats',
    gradient: 'from-purple-500 to-indigo-600',
    bgGradient: 'from-purple-50 to-indigo-50',
    features: ['Creamy Texture', 'Natural Sweetener', 'Color Stability'],
    stats: '30% Cost Efficiency',
    marketSize: '$160B',
    growth: '+4.8% YoY'
  },
  {
    icon: HeartPulse,
    title: 'Nutraceuticals & Supplements',
    description: 'High-potassium natural supplement base for health and wellness products',
    gradient: 'from-red-500 to-pink-600',
    bgGradient: 'from-red-50 to-pink-50',
    features: ['High Potassium Content', 'Vitamin Rich', 'Antioxidant Properties'],
    stats: '98% Nutrient Retention',
    marketSize: '$450B',
    growth: '+7.9% YoY'
  },
  {
    icon: Wheat,
    title: 'Gluten-Free & Specialty Foods',
    description: 'Certified gluten-free base for specialty flour blends and health foods',
    gradient: 'from-green-500 to-emerald-600',
    bgGradient: 'from-green-50 to-emerald-50',
    features: ['Gluten-Free Certified', 'High Dietary Fiber', 'Plant Protein Source'],
    stats: 'Certified Quality',
    marketSize: '$85B',
    growth: '+9.1% YoY'
  },
  {
    icon: Sparkles,
    title: 'Cosmetics & Personal Care',
    description: 'Natural active ingredient for premium skincare, face masks and beauty formulations',
    gradient: 'from-pink-500 to-rose-600',
    bgGradient: 'from-pink-50 to-rose-50',
    features: ['Natural Exfoliant', 'Skin Nourishing', 'Vitamin C Rich'],
    stats: '100% Natural Origin',
    marketSize: '$380B',
    growth: '+5.2% YoY'
  },
  {
    icon: Factory,
    title: 'Industrial Food Processing',
    description: 'Versatile bulk ingredient for diverse processed food manufacturing applications',
    gradient: 'from-gray-500 to-slate-700',
    bgGradient: 'from-gray-50 to-slate-50',
    features: ['Bulk Processing Ready', 'Quality Consistency', 'Cost Effectiveness'],
    stats: 'ISO 22000 Certified',
    marketSize: '$3.2T',
    growth: '+4.5% YoY'
  }
];

const ApplicationCard = ({ app, index, isActive, onHover }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, threshold: 0.3 });

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, scale, opacity }}
      initial={{ opacity: 0, y: 100, rotateX: 15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ 
        duration: 1, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 80
      }}
      whileHover={{ 
        y: -20,
        scale: 1.02,
        transition: { duration: 0.4 }
      }}
      onHoverStart={() => onHover(index)}
      className="relative group cursor-pointer perspective-1000"
    >
       <Helmet>
        <title>Banana Powder Applications | Food, Pharma, Cosmetic Industries</title>
        <meta name="description" content="Premium banana powder applications in baby food, bakery, beverages, dairy, nutraceuticals, gluten-free foods, cosmetics & industrial processing." />
        <meta name="keywords" content="banana powder baby food, banana powder bakery, banana powder beverages, banana powder cosmetics" />
      </Helmet>
      {/* Advanced Glow Effect */}
      <motion.div
        animate={isActive ? { opacity: 1, scale: 1.05 } : { opacity: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 -z-10"
      />
      
      {/* Main Card */}
      <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl p-8 border border-gray-200/80 shadow-2xl shadow-gray-200/20 hover:shadow-2xl hover:shadow-blue-400/20 transition-all duration-700 overflow-hidden h-full">
        
        {/* Animated Background */}
        <motion.div
          animate={isActive ? { opacity: 0.05 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 bg-gradient-to-br ${app.gradient} opacity-0`}
        />
        
        {/* Floating Icon Container */}
        <motion.div 
          className="relative mb-6"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Icon Background Animation */}
          <motion.div
            animate={isActive ? { scale: 1.2, opacity: 0.3 } : { scale: 1, opacity: 0.1 }}
            transition={{ duration: 0.4 }}
            className={`absolute inset-0 bg-gradient-to-r ${app.gradient} rounded-2xl blur-md`}
          />
          
          {/* Icon */}
          <div className="relative w-16 h-16 bg-white rounded-2xl border border-gray-200 shadow-lg flex items-center justify-center">
            <motion.div
              animate={isActive ? { scale: 1.2, rotate: 360 } : { scale: 1, rotate: 0 }}
              transition={{ duration: 0.6 }}
            >
              <app.icon className={`w-8 h-8 bg-gradient-to-r ${app.gradient} bg-clip-text text-transparent`} />
            </motion.div>
          </div>

          {/* Market Size Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isActive ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
          >
            {app.marketSize}
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.h3 
          className="text-xl font-bold text-gray-900 mb-3 leading-tight"
          animate={isActive ? { color: "#1e40af" } : { color: "#111827" }}
          transition={{ duration: 0.3 }}
        >
          {app.title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-600 leading-relaxed text-sm mb-6"
          animate={isActive ? { color: "#374151" } : { color: "#6b7280" }}
          transition={{ duration: 0.3 }}
        >
          {app.description}
        </motion.p>

        {/* Features */}
        <div className="space-y-2 mb-6">
          {app.features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.15 + idx * 0.1 }}
              className="flex items-center gap-2"
            >
              <motion.div
                animate={isActive ? { scale: 1.2 } : { scale: 1 }}
                className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${app.gradient}`}
              />
              <span className="text-xs font-medium text-gray-600">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* Stats & Growth */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.15 + 0.5 }}
          className="flex items-center justify-between pt-4 border-t border-gray-100"
        >
          <div>
            <div className="text-xs font-semibold text-gray-500">{app.stats}</div>
            <div className="text-xs text-green-600 font-bold">{app.growth}</div>
          </div>
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-1 text-blue-600"
          >
            <span className="text-xs font-semibold">Explore</span>
            <ChevronRight className="w-3 h-3" />
          </motion.div>
        </motion.div>

        {/* Hover Line Effect */}
        <motion.div 
          className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"
          animate={isActive ? { width: "100%" } : { width: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        />
      </div>
    </motion.div>
  );
};

export default function Applications() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const [activeCard, setActiveCard] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const industryStats = [
    { number: '500+', label: 'Global Clients', icon: Users, description: 'Trusted partnerships worldwide' },
    { number: '40+', label: 'Countries', icon: Globe, description: 'International market presence' },
    { number: '98%', label: 'Retention Rate', icon: Target, description: 'Client satisfaction' },
    { number: '$3.2T', label: 'Market Size', icon: BarChart3, description: 'Global industry value' }
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

  // Auto-rotate active card
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setActiveCard(prev => (prev + 1) % applications.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section ref={sectionRef} className="relative py-32 bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
      {/* Advanced Background Elements */}
      <motion.div style={{ y: backgroundY, opacity }} className="absolute inset-0 overflow-hidden">
        {/* Animated Orbs */}
        <motion.div
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            y: [0, 50, 0],
            x: [0, -40, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-32 right-32 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-30"
        />
        
        {/* Geometric Patterns */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-40 right-40 w-20 h-20 border-2 border-blue-300/30 rounded-lg"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-40 left-40 w-12 h-12 border-2 border-cyan-300/20 rounded-full"
        />

        {/* Grid Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-[0.03]"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px),
              linear-gradient(180deg, rgba(59,130,246,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Professional Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, type: "spring" }}
          className="text-center mb-20"
        >
          {/* Corporate Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-4 px-8 py-4 bg-white/80 backdrop-blur-lg rounded-2xl mb-8 border border-blue-200 shadow-2xl shadow-blue-200/30"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center"
            >
              <Target className="w-3 h-3 text-white fill-current" />
            </motion.div>
            <span className="text-lg font-bold text-blue-800 uppercase tracking-widest">
              Global Industry Applications
            </span>
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center"
            >
              <Target className="w-3 h-3 text-white fill-current" />
            </motion.div>
          </motion.div>
          
          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            <span className="block bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 bg-clip-text text-transparent">
              Strategic Industry
            </span>
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Applications & Markets
            </span>
          </motion.h2>
          
          {/* Animated Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-48 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-full mx-auto mb-12 shadow-lg shadow-blue-400/50 overflow-hidden"
          >
            <motion.div
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent"
            />
          </motion.div>
          
          {/* Professional Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Leveraging premium banana powder across diverse global industries with proven results in 
            <span className="font-semibold text-blue-700"> product enhancement</span>, 
            <span className="font-semibold text-blue-700"> cost efficiency</span>, and 
            <span className="font-semibold text-blue-700"> market competitiveness</span>.
          </motion.p>
        </motion.div>

        {/* Business Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {industryStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center backdrop-blur-lg bg-white/60 rounded-3xl p-8 border border-white/40 shadow-xl shadow-blue-200/20 hover:shadow-blue-400/30 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-700 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Auto-Play Controls */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex justify-center items-center gap-4 mb-12"
        >
          <span className="text-sm font-semibold text-gray-600">Auto-rotate applications</span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-12 h-12 bg-white rounded-2xl border border-blue-200 shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors duration-300"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-blue-600" />
            ) : (
              <Play className="w-5 h-5 text-blue-600" />
            )}
          </motion.button>
        </motion.div>

        {/* Applications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-24"
        >
          {applications.map((app, index) => (
            <ApplicationCard 
              key={index} 
              app={app} 
              index={index}
              isActive={activeCard === index}
              onHover={setActiveCard}
            />
          ))}
        </motion.div>

        {/* Corporate CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, delay: 1.4, type: "spring" }}
          className="text-center"
        >
          <div className="relative bg-gradient-to-br from-white to-blue-50 rounded-4xl p-16 border border-blue-200 shadow-2xl shadow-blue-200/30 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[radial-gradient(blue_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent_70%)]"></div>
            </div>
            
            <div className="relative z-10">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                Ready to Transform Your Products?
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
              >
                Partner with industry leaders who trust our premium banana powder for superior quality, 
                consistent results, and competitive advantage in global markets.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 2 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(37, 99, 235, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg px-12 py-5 rounded-2xl shadow-2xl shadow-blue-500/30 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Request Industry Solution
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </span>
                  <motion.div
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(219, 234, 254, 1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-white text-blue-700 font-bold text-lg px-12 py-5 rounded-2xl border-2 border-blue-300 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3"
                >
                  <TestTube2 className="w-5 h-5" />
                  Technical Consultation
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}