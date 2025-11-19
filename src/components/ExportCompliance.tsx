import { Award, Globe, ShieldCheck, ChevronRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const certifications = [
  { name: 'ISO 22000', description: 'Food Safety Management System' },
  { name: 'FSSAI', description: 'Food Safety and Standards Authority of India' },
  { name: 'HACCP', description: 'Hazard Analysis Critical Control Point' },
  { name: 'GMP', description: 'Good Manufacturing Practices' },
  { name: 'APEDA Certified', description: 'Agricultural and Processed Food Products' },
  { name: 'Phytosanitary Approved', description: 'International Plant Protection' }
];

const markets = [
  { region: 'Asia', countries: ['Japan', 'China', 'Singapore', 'South Korea'] },
  { region: 'Europe', countries: ['Germany', 'UK', 'France', 'Netherlands'] },
  { region: 'Middle East', countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait'] },
  { region: 'Africa', countries: ['South Africa', 'Egypt', 'Nigeria', 'Kenya'] },
  { region: 'Americas', countries: ['USA', 'Canada', 'Brazil', 'Mexico'] }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const cardHoverVariants = {
  initial: { scale: 1, y: 0 },
  hover: { 
    scale: 1.05, 
    y: -8,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const glowVariants = {
  initial: { opacity: 0 },
  hover: { opacity: 1 }
};

export default function ExportCompliance() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="export" className="relative py-24 bg-gradient-to-br from-gray-900 via-brown to-brown-dark text-cream overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brown/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-yellow/20 rounded-full animate-ping"></div>
              <Globe className="w-16 h-16 text-yellow relative z-10" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow to-yellow/80 bg-clip-text text-transparent">
              Global Export Excellence
            </h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="w-32 h-1.5 bg-gradient-to-r from-yellow to-yellow/60 mx-auto mb-8 rounded-full"
          ></motion.div>

          <motion.p
            variants={itemVariants}
            className="text-2xl text-center max-w-4xl mx-auto mb-6 text-cream/90 leading-relaxed"
          >
            Trusted by global partners across 50+ countries with comprehensive compliance and seamless documentation
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-xl text-cream/70 max-w-3xl mx-auto"
          >
            Delivering excellence through certified processes and international quality standards
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Certifications Section */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-3xl font-bold mb-8 flex items-center gap-3"
            >
              <ShieldCheck className="w-8 h-8 text-yellow" />
              International Certifications & Compliance
            </motion.h3>
            
            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover="hover"
                  initial="initial"
                  className="relative group"
                >
                  <motion.div
                    variants={glowVariants}
                    className="absolute inset-0 bg-gradient-to-r from-yellow/20 to-yellow/5 rounded-2xl blur-md group-hover:blur-lg transition-all duration-300"
                  />
                  <motion.div
                    variants={cardHoverVariants}
                    className="relative bg-cream/5 backdrop-blur-lg border border-yellow/20 rounded-2xl p-6 hover:border-yellow/40 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow to-yellow/80 rounded-xl flex items-center justify-center flex-shrink-0">
                          <ShieldCheck className="w-6 h-6 text-brown-dark" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-yellow mb-1">{cert.name}</h4>
                          <p className="text-cream/70 text-sm">{cert.description}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-yellow/60 group-hover:text-yellow transform group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Global Markets Section */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-3xl font-bold mb-8 flex items-center gap-3"
            >
              <Globe className="w-8 h-8 text-yellow" />
              Global Market Presence
            </motion.h3>

            <div className="grid gap-6">
              {markets.map((market, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover="hover"
                  initial="initial"
                  className="relative group"
                >
                  <motion.div
                    variants={glowVariants}
                    className="absolute inset-0 bg-gradient-to-r from-yellow/10 to-yellow/5 rounded-2xl blur-md group-hover:blur-lg transition-all duration-300"
                  />
                  <motion.div
                    variants={cardHoverVariants}
                    className="relative bg-cream/5 backdrop-blur-lg border border-yellow/20 rounded-2xl p-6 hover:border-yellow/40 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-bold text-yellow">{market.region}</h4>
                      <div className="flex gap-1">
                        {[1, 2, 3].map((star) => (
                          <Star key={star} className="w-4 h-4 text-yellow fill-current" />
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {market.countries.map((country, countryIndex) => (
                        <span
                          key={countryIndex}
                          className="px-3 py-1 bg-yellow/10 text-yellow rounded-full text-sm border border-yellow/20"
                        >
                          {country}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-4 bg-gradient-to-r from-yellow to-yellow/80 text-brown-dark px-10 py-5 rounded-2xl text-2xl font-bold shadow-2xl shadow-yellow/20 hover:shadow-yellow/30 transition-all duration-300 transform hover:scale-105 group cursor-pointer"
          >
            <div className="relative">
              <Award className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <span>Certified Excellence in Every Shipment</span>
            <ChevronRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-cream/60 mt-6 text-lg"
          >
            Over 10,000 successful international shipments delivered
          </motion.p>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="absolute top-1/4 left-10 w-4 h-4 bg-yellow rounded-full opacity-60"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            transition: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }
          }}
          className="absolute bottom-1/4 right-10 w-3 h-3 bg-yellow rounded-full opacity-40"
        />
      </div>
    </section>
  );
}