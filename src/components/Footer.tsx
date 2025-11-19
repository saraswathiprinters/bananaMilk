import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Leaf,
  Mail,
  Phone,
  MapPin,
  Globe,
  Shield,
  Truck,
  Award,
  ArrowUp,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Send,
  Clock,
  Users,
  Star
} from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Manufacturing Process', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Export & Compliance', href: '#export' },
  { name: 'Contact Us', href: '#contact' }
];

const certifications = [
  'ISO 22000 Certified',
  'FSSAI Approved',
  'HACCP Certified',
  'GMP Certified'
];

const socialLinks = [
  { icon: Facebook, href: '#', name: 'Facebook' },
  { icon: Twitter, href: '#', name: 'Twitter' },
  { icon: Linkedin, href: '#', name: 'LinkedIn' },
  { icon: Instagram, href: '#', name: 'Instagram' }
];

const stats = [
  { number: '50+', label: 'Countries Served' },
  { number: '1000+', label: 'Happy Clients' },
  { number: '15+', label: 'Years Experience' },
  { number: '24/7', label: 'Customer Support' }
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
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const cardHoverVariants = {
  initial: {
    scale: 1,
    y: 0
  },
  hover: {
    scale: 1.05,
    y: -5,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const floatingVariants = {
  float: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-brown to-brown-dark text-cream overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-yellow/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-yellow/10 rounded-full blur-3xl"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(254,252,232,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(254,252,232,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        {/* Floating Elements */}
        <motion.div
          variants={floatingVariants}
          animate="float"
          className="absolute top-20 left-10 w-4 h-4 bg-yellow rounded-full opacity-40"
        />
        <motion.div
          variants={floatingVariants}
          animate="float"
          transition={{ delay: 1 }}
          className="absolute bottom-40 right-20 w-3 h-3 bg-yellow rounded-full opacity-30"
        />
        <motion.div
          variants={floatingVariants}
          animate="float"
          transition={{ delay: 2 }}
          className="absolute top-1/2 left-1/4 w-2 h-2 bg-yellow rounded-full opacity-50"
        />
      </div>

      <div className="relative z-10">
        {/* Stats Section */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-16 px-6 max-w-7xl mx-auto border-b border-yellow/20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
              className="text-center group"
            >
              <motion.div
                variants={cardHoverVariants}
                className="bg-cream/5 backdrop-blur-sm rounded-2xl p-6 border border-yellow/10 group-hover:border-yellow/30 transition-all duration-300"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="text-3xl lg:text-4xl font-bold text-yellow mb-2"
                >
                  {stat.number}
                </motion.div>
                <p className="text-cream/80 font-medium">{stat.label}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid lg:grid-cols-4 gap-12 mb-12"
          >
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 mb-6"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="w-12 h-12 bg-gradient-to-br from-yellow to-yellow/80 rounded-2xl flex items-center justify-center"
                >
                  <Leaf className="w-6 h-6 text-brown-dark" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow to-yellow/80 bg-clip-text text-transparent">
                    BANANA MILK
                  </h3>
                  <p className="text-yellow text-sm font-semibold">GLOBAL EXPORTS</p>
                </div>
              </motion.div>

              <p className="text-cream/80 leading-relaxed mb-6">
                Premium banana powder manufacturer and exporter, serving global markets with the highest quality standards and certified excellence.
              </p>

              {/* Certifications */}
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 text-cream/70"
                  >
                    <Award className="w-4 h-4 text-yellow" />
                    <span className="text-sm">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Globe className="w-5 h-5 text-yellow" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href={link.href}
                      className="text-cream/80 hover:text-yellow transition-all duration-300 flex items-center gap-2 group"
                    >
                      <div className="w-1.5 h-1.5 bg-yellow rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Phone className="w-5 h-5 text-yellow" />
                Contact Info
              </h3>
              <ul className="space-y-4">
                <motion.li
                  className="flex items-start gap-3 group"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="w-5 h-5 text-yellow flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-cream/80">Export Processing Zone, Industrial Area, India 560001</span>
                </motion.li>
                <motion.li
                  className="flex items-center gap-3 group"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="w-5 h-5 text-yellow group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-cream/80">+91 98765 43210</span>
                </motion.li>
                <motion.li
                  className="flex items-center gap-3 group"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-5 h-5 text-yellow group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-cream/80">exports@bananamilk.com</span>
                </motion.li>
                <motion.li
                  className="flex items-center gap-3 group"
                  whileHover={{ x: 5 }}
                >
                  <Clock className="w-5 h-5 text-yellow group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-cream/80">Mon - Sat: 9:00 - 18:00</span>
                </motion.li>
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Send className="w-5 h-5 text-yellow" />
                Newsletter
              </h3>
              <p className="text-cream/80 mb-4">
                Subscribe for export insights and product updates
              </p>

              <AnimatePresence>
                {isSubscribed ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 bg-green-500/20 border border-green-400/30 rounded-2xl text-center"
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <p className="text-green-400 text-sm font-medium">
                      Thank you for subscribing!
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubscribe}
                    className="space-y-3"
                  >
                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 bg-cream/5 border border-yellow/20 rounded-2xl placeholder-cream/50 focus:outline-none focus:border-yellow transition-all duration-300"
                        required
                      />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-yellow to-yellow/80 text-brown-dark py-3 rounded-2xl font-semibold shadow-lg shadow-yellow/20 hover:shadow-yellow/30 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Subscribe
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>

              {/* Social Links */}
              <div className="mt-6">
                <p className="text-cream/80 mb-3">Follow Us</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-cream/5 border border-yellow/20 rounded-xl flex items-center justify-center hover:bg-yellow/20 hover:border-yellow/40 transition-all duration-300 group"
                    >
                      <social.icon className="w-4 h-4 text-cream/70 group-hover:text-yellow transition-colors duration-300" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="border-t border-cream/20 pt-8 pb-4"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <p className="text-cream/60 text-center lg:text-left">
                © {new Date().getFullYear()} Banana MILK Exports. All rights reserved. | Premium Banana Powder Manufacturer & Global Exporter
              </p>


              <div className="flex items-center gap-6 text-sm text-cream/60">
                <motion.a
                  href="#"
                  whileHover={{ color: '#fefce8' }}
                  className="hover:text-yellow transition-colors duration-300"
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ color: '#fefce8' }}
                  className="hover:text-yellow transition-colors duration-300"
                >
                  Terms of Service
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ color: '#fefce8' }}
                  className="hover:text-yellow transition-colors duration-300"
                >
                  Cookie Policy
                </motion.a>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
              <a href='https://mediaweb6.com/' target='_blank' className="text-blue-50 text-center lg:text-center">

                Powered By @ Media Web6
              </a>


            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 w-12 h-12 bg-yellow text-brown-dark rounded-2xl shadow-2xl shadow-yellow/30 hover:shadow-yellow/40 transition-all duration-300 z-50 flex items-center justify-center"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}

// Custom CheckCircle icon component
const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);