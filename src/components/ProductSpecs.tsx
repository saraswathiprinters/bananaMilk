import { Sparkles, Target, Ruler, Droplets, Calendar, Package, MapPin, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const specs = [
  { 
    label: 'Color', 
    value: 'Light cream/yellow', 
    icon: Target,
    gradient: 'from-amber-400 to-yellow-500',
    description: 'Natural hue without artificial coloring'
  },
  { 
    label: 'Mesh Size', 
    value: '40–120 mesh (custom)', 
    icon: Ruler,
    gradient: 'from-orange-400 to-red-500',
    description: 'Precise particle size control available'
  },
  { 
    label: 'Moisture', 
    value: '< 4%', 
    icon: Droplets,
    gradient: 'from-blue-400 to-cyan-500',
    description: 'Optimal for long-term preservation'
  },
  { 
    label: 'Shelf Life', 
    value: '12–24 months', 
    icon: Calendar,
    gradient: 'from-green-400 to-emerald-500',
    description: 'Proper storage conditions maintained'
  },
  { 
    label: 'Packaging', 
    value: '1kg | 5kg | 25kg | Custom', 
    icon: Package,
    gradient: 'from-purple-400 to-indigo-500',
    description: 'Flexible packaging solutions'
  },
  { 
    label: 'Origin', 
    value: 'India', 
    icon: MapPin,
    gradient: 'from-pink-400 to-rose-500',
    description: 'Sourced from certified farms'
  }
];

const SpecCard = ({ spec, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30, scale: 0.9 }}
      animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        x: 8,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="relative group"
    >
      {/* Animated background glow */}
      <div className={`absolute inset-0 bg-gradient-to-r ${spec.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition duration-500`}></div>
      
      <div className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-gray-300/30 transition-all duration-500 overflow-hidden">
        
        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-yellow-50 opacity-0 group-hover:opacity-100 transition duration-500"></div>
        
        {/* Icon with gradient background */}
        <div className="relative mb-4">
          <div className={`absolute inset-0 bg-gradient-to-r ${spec.gradient} rounded-xl blur-md opacity-0 group-hover:opacity-30 transition duration-500`}></div>
          <div className="relative w-14 h-14 bg-white rounded-xl border border-gray-200 shadow-md flex items-center justify-center">
            <spec.icon className={`w-7 h-7 bg-gradient-to-r ${spec.gradient} bg-clip-text text-transparent`} />
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
            {spec.label}
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
            />
          </h3>
          
          <motion.p 
            className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent mb-2"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: index * 0.1 + 0.4 }}
          >
            {spec.value}
          </motion.p>
          
          <motion.p 
            className="text-sm text-gray-600 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: index * 0.1 + 0.5 }}
          >
            {spec.description}
          </motion.p>
        </div>

        {/* Animated border */}
        <motion.div 
          className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-500"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
        />
      </div>
    </motion.div>
  );
};

export default function ProductSpecs() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const features = [
    "100% Natural & Preservative-Free",
    "ISO 22000 Certified Manufacturing",
    "Customizable Particle Size",
    "Bulk Export Ready Packaging",
    "Consistent Quality & Color",
    "Rich in Natural Nutrients"
  ];

  return (
    <section id="products" className="py-24 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 relative overflow-hidden">
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
          className="text-center mb-16"
        >
          {/* Premium Badge */}
          <motion.div 
            className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg border border-amber-200 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold text-amber-800 uppercase tracking-wider">
              Technical Excellence
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-900 via-orange-800 to-amber-900 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Technical Specifications
            <motion.span 
              className="block text-2xl md:text-3xl font-semibold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mt-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              Premium Banana Powder Quality Standards
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
            Engineered to meet global quality standards with precise technical parameters. 
            Every batch undergoes rigorous testing to ensure consistent excellence.
          </motion.p>
        </motion.div>

        {/* Main Specifications Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
            {/* Premium Header */}
            <div className="relative bg-gradient-to-r from-amber-500 to-orange-500 p-8 overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <motion.div 
                className="relative flex items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
              >
                <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">Product Specifications</h3>
              </motion.div>
            </div>

            {/* Specifications Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="p-8"
            >
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-8">
                {specs.map((spec, index) => (
                  <SpecCard key={index} spec={spec} index={index} />
                ))}
              </div>

              {/* Quality Assurance Banner */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="relative bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200 shadow-lg overflow-hidden"
              >
                {/* Animated background pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-200/20 to-orange-200/10"></div>
                
                <div className="relative z-10">
                  <motion.div 
                    className="flex items-center justify-center gap-4 mb-4"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 1.2 }}
                  >
                    <div className="p-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
                      Quality Guarantee
                    </h4>
                  </motion.div>
                  
                  <motion.p 
                    className="text-center text-lg font-semibold text-gray-700 mb-6 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 1.3 }}
                  >
                    Our banana powder retains natural taste, aroma & essential nutrients through 
                    advanced low-temperature processing technology.
                  </motion.p>

                  {/* Features Grid */}
                  <motion.div 
                    className="grid md:grid-cols-3 gap-4"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 1.4 }}
                  >
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 1.5 + index * 0.1 }}
                        className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-amber-100"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <div className="bg-white rounded-3xl p-12 border border-amber-200 shadow-2xl shadow-amber-200/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 opacity-60"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Need Custom Specifications?
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                We can tailor our banana powder to meet your specific technical requirements and application needs.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(251, 191, 36, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-2xl shadow-lg shadow-amber-500/25 hover:shadow-xl transition-all duration-300"
                >
                  Request Technical Sheet
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-amber-700 font-bold rounded-2xl border border-amber-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-amber-50"
                >
                  Contact Technical Team
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}