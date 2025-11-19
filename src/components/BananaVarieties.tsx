import { Sprout, Leaf, Trees, Flower, TreePine, Palmtree } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet-async';

const varieties = [
  {
    name: 'Cavendish',
    description: 'Bright color, sweet aroma, perfect for food industry',
    icon: Flower,
    gradient: 'from-yellow-400 to-amber-500',
    bgGradient: 'from-yellow-50 to-amber-100',
    features: ['Sweet Aroma', 'Bright Color', 'Food Grade']
  },
  {
    name: 'Nendran',
    description: 'Rich starch content, ideal for flour and baking applications',
    icon: Trees,
    gradient: 'from-emerald-400 to-green-600',
    bgGradient: 'from-emerald-50 to-green-100',
    features: ['High Starch', 'Baking Quality', 'Rich Texture']
  },
  {
    name: 'Robusta',
    description: 'Smooth powder profile with excellent solubility',
    icon: TreePine,
    gradient: 'from-orange-400 to-red-500',
    bgGradient: 'from-orange-50 to-red-100',
    features: ['Smooth Texture', 'Easy Soluble', 'Consistent']
  },
  {
    name: 'Monthan',
    description: 'High yield & consistency for bulk production needs',
    icon: Palmtree,
    gradient: 'from-purple-400 to-indigo-600',
    bgGradient: 'from-purple-50 to-indigo-100',
    features: ['High Yield', 'Bulk Production', 'Reliable']
  },
  {
    name: 'Poovan',
    description: 'Natural flavor retention with authentic banana aroma',
    icon: Leaf,
    gradient: 'from-cyan-400 to-blue-500',
    bgGradient: 'from-cyan-50 to-blue-100',
    features: ['Natural Flavor', 'Aroma Rich', 'Authentic']
  },
  {
    name: 'Plantain',
    description: 'Strong gluten-free flour base for health products',
    icon: Sprout,
    gradient: 'from-lime-400 to-green-500',
    bgGradient: 'from-lime-50 to-green-100',
    features: ['Gluten-Free', 'Health Focus', 'Nutritious']
  }
];

const VarietyCard = ({ variety, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, rotateX: 10 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 80
      }}
      whileHover={{ 
        y: -12,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="relative group cursor-pointer"
    >
      <Helmet>
        <meta name="keywords" content="cavendish banana, nendran banana, robusta banana, monthan banana, poovan banana, plantain banana varieties" />
        <title>Premium Banana Varieties | Banana Gold Exports</title>
        <meta name="description" content="Specialized banana varieties including Cavendish, Nendran, Robusta, Monthan, Poovan & Plantain - optimized for superior powder quality and specific applications." />
      </Helmet>
      {/* Animated background glow */}
      <div className={`absolute inset-0 bg-gradient-to-r ${variety.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition duration-500`}></div>
      
      <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-2xl shadow-gray-200/30 hover:shadow-3xl hover:shadow-gray-300/40 transition-all duration-500 overflow-hidden h-full">
        
        {/* Animated background pattern */}
        <div className={`absolute inset-0 bg-gradient-to-br ${variety.bgGradient} opacity-0 group-hover:opacity-5 transition duration-500`}></div>
        
        {/* Floating icon container */}
        <motion.div 
          className="relative mb-6"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${variety.gradient} rounded-2xl blur-md opacity-0 group-hover:opacity-30 transition duration-500`}></div>
          <div className="relative w-20 h-20 bg-white rounded-2xl border border-gray-100 shadow-lg flex items-center justify-center">
            <variety.icon className={`w-10 h-10 bg-gradient-to-r ${variety.gradient} bg-clip-text text-transparent`} />
          </div>
        </motion.div>

        {/* Content */}
        <motion.h3 
          className="text-2xl font-bold text-gray-900 mb-3 leading-tight"
          whileHover={{ color: variety.gradient.split(' ')[1] }}
          transition={{ duration: 0.3 }}
        >
          {variety.name}
        </motion.h3>
        
        <p className="text-gray-600 leading-relaxed mb-6 text-lg">
          {variety.description}
        </p>

        {/* Features tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {variety.features.map((feature, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.15 + idx * 0.1 }}
              className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${variety.gradient} text-white shadow-lg`}
            >
              {feature}
            </motion.span>
          ))}
        </div>

        {/* Hover indicator */}
        <motion.div 
          className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-500"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
        />

        {/* Subtle particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 bg-gradient-to-r ${variety.gradient} rounded-full opacity-0 group-hover:opacity-100`}
              initial={{ x: -10, y: -10 }}
              animate={{ 
                x: [0, 30, 0],
                y: [0, 20, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 4,
                delay: i * 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function BananaVarieties() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-200 rounded-full blur-3xl opacity-15 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Premium Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg border border-amber-200 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold text-amber-800 uppercase tracking-wider">
              Premium Varieties
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-900 via-orange-800 to-amber-900 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Premium Banana Varieties
            <motion.span 
              className="block text-2xl md:text-3xl font-semibold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mt-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              Optimized for Superior Powder Quality
            </motion.span>
          </motion.h2>

          {/* Decorative Line */}
          <motion.div 
            className="w-32 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mx-auto mb-8 shadow-lg"
            initial={{ width: 0 }}
            animate={inView ? { width: "8rem" } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
          />

          {/* Description */}
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            Carefully selected banana varieties, each optimized for specific applications and quality parameters. 
            Our expertise ensures the perfect match for your product requirements.
          </motion.p>
        </motion.div>

        {/* Varieties Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-8"
        >
          {varieties.map((variety, index) => (
            <VarietyCard key={index} variety={variety} index={index} />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-3xl p-12 border border-amber-200 shadow-2xl shadow-amber-200/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 opacity-60"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Need Expert Guidance on Variety Selection?
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Our agricultural experts will help you choose the perfect banana variety for your specific application and market needs.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(251, 191, 36, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-2xl shadow-lg shadow-amber-500/25 hover:shadow-xl transition-all duration-300"
                >
                  Consult Our Experts
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-amber-700 font-bold rounded-2xl border border-amber-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-amber-50"
                >
                  Download Variety Guide
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}