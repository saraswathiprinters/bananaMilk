import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useTransform, useScroll, AnimatePresence } from 'framer-motion';
import { Check, Leaf, Shield, Droplets, Package, Settings, Star, Globe, Award, Truck, ArrowRight, Download, Factory, Users, Target, BarChart3 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const features = [
  {
    icon: Factory,
    title: 'State-of-the-Art Manufacturing',
    description: 'Advanced processing facilities with ISO 22000, HACCP, and GMP certifications ensuring global quality standards',
    gradient: 'from-blue-500 to-cyan-600',
    stats: 'ISO Certified',
    delay: 0
  },
  {
    icon: Leaf,
    title: 'Premium Raw Material Selection',
    description: 'Sourced from certified organic farms with sustainable practices and rigorous quality control protocols',
    gradient: 'from-emerald-500 to-green-600',
    stats: 'Organic Sourced',
    delay: 0.1
  },
  {
    icon: BarChart3,
    title: 'Consistent Quality Assurance',
    description: 'Rigorous testing and quality control measures ensuring 99.8% purity and consistent batch-to-batch quality',
    gradient: 'from-amber-500 to-orange-600',
    stats: '99.8% Pure',
    delay: 0.2
  },
  {
    icon: Target,
    title: 'Customized Solutions',
    description: 'Tailored mesh sizes (40-120), packaging options, and formulations to meet specific client requirements',
    gradient: 'from-purple-500 to-indigo-600',
    stats: 'Custom Made',
    delay: 0.3
  },
  {
    icon: Package,
    title: 'Export-Ready Packaging',
    description: 'Food-grade, moisture-proof packaging from 1kg to 25kg with proper labeling and documentation',
    gradient: 'from-gray-500 to-slate-600',
    stats: 'Export Ready',
    delay: 0.4
  },
  {
    icon: Users,
    title: 'Dedicated Account Management',
    description: 'Personalized support with dedicated export managers ensuring smooth logistics and timely delivery',
    gradient: 'from-rose-500 to-pink-600',
    stats: '24/7 Support',
    delay: 0.5
  }
];

const stats = [
  { number: '50+', label: 'Countries Served', icon: Globe, description: 'Global export network' },
  { number: '15+', label: 'Years Experience', icon: Award, description: 'Industry expertise' },
  { number: 'ISO 22000', label: 'Certified', icon: Shield, description: 'Quality standards' },
  { number: '99.8%', label: 'Client Retention', icon: Users, description: 'Satisfied customers' }
];

const certifications = [
  'ISO 22000:2018',
  'HACCP Certified',
  'GMP Compliant',
  'FSSAI Approved',
  'USFDA Registered',
  'EU Compliant'
];

const FeatureCard = ({ feature, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, threshold: 0.2 });

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, scale }}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: feature.delay,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -12,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Professional Glow Effect */}
      <motion.div
        animate={isHovered ? { opacity: 1, scale: 1.02 } : { opacity: 0, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl blur-md opacity-0 group-hover:opacity-20 -z-10"
      />
      
      {/* Main Card */}
      <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
        {/* Corporate Gradient Accent */}
        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.gradient}`} />
        
        {/* Icon Container */}
        <motion.div 
          className="relative mb-6"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 flex items-center justify-center shadow-sm">
            <motion.div
              animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <feature.icon className={`w-8 h-8 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`} />
            </motion.div>
          </div>
          
          {/* Stats Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isHovered ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg"
          >
            {feature.stats}
          </motion.div>
        </motion.div>

        {/* Content */}
        <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
          {feature.title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed text-base mb-6">
          {feature.description}
        </p>

        {/* Professional Indicator */}
        <motion.div
          initial={{ width: 0 }}
          animate={isHovered ? { width: "100%" } : { width: 0 }}
          transition={{ duration: 0.4 }}
          className="h-0.5 bg-gradient-to-r from-blue-500 to-cyan-600"
        />
      </div>
    </motion.div>
  );
};

export default function WhyChooseUs() {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What certifications does Banana Gold Exports have?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are ISO 22000:2018, HACCP Certified, GMP Compliant, FSSAI Approved, USFDA Registered, and EU Compliant."
        }
      },
      {
        "@type": "Question",
        "name": "How many countries do you export to?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We export premium banana powder to 50+ countries worldwide with 99.8% client retention rate."
        }
      }
    ]
  };
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section ref={sectionRef} className="relative py-24 bg-white overflow-hidden">
       <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
        <meta name="certifications" content="ISO 22000, HACCP, GMP, FSSAI, USFDA, EU Compliant" />
      </Helmet>
      {/* Professional Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(90deg,#000_1px,transparent_1px),linear-gradient(180deg,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Corporate Accent Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-50 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Corporate Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Professional Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-blue-50 rounded-full mb-8 border border-blue-200"
          >
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-blue-800 uppercase tracking-wider">
              Global Export Partner
            </span>
          </motion.div>
          
          {/* Corporate Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            <span className="block">Why Industry Leaders</span>
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Choose Our Export Quality
            </span>
          </motion.h2>
          
          {/* Professional Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-8"
          />
          
          {/* Corporate Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Trusted by global manufacturers and distributors for consistent quality, 
            reliable supply chain, and uncompromising commitment to international standards.
          </motion.p>
        </motion.div>

        {/* Business Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -5 }}
              className="text-center bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-sm font-semibold text-blue-600 mb-1">{stat.label}</div>
              <div className="text-xs text-gray-500">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
              className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:border-blue-200 transition-colors duration-300"
            >
              {cert}
            </motion.div>
          ))}
        </motion.div>

        {/* Core Competencies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </motion.div>

        {/* Corporate CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-12 border border-blue-200">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Partner with Global Excellence
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
            >
              Join Fortune 500 companies and leading brands that rely on our premium banana powder for their manufacturing needs.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
              >
                Request Corporate Quote
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg border border-blue-200 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-3"
              >
                <Download className="w-5 h-5" />
                Download Technical Specs
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 2.2 }}
              className="mt-8 pt-8 border-t border-blue-200"
            >
              <p className="text-sm text-gray-500 mb-4">Trusted by industry leaders worldwide</p>
              <div className="flex justify-center items-center gap-8 opacity-60">
                <div className="text-xs font-medium text-gray-400">FOOD MANUFACTURERS</div>
                <div className="w-1 h-1 bg-gray-300 rounded-full" />
                <div className="text-xs font-medium text-gray-400">PHARMACEUTICAL</div>
                <div className="w-1 h-1 bg-gray-300 rounded-full" />
                <div className="text-xs font-medium text-gray-400">NUTRACEUTICAL</div>
                <div className="w-1 h-1 bg-gray-300 rounded-full" />
                <div className="text-xs font-medium text-gray-400">BEVERAGE INDUSTRY</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}