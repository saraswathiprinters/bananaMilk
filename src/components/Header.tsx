import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Building2, Phone, Mail, Globe, Shield, Truck, ArrowRight, ChevronDown } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const navigationItems = [
  { name: 'Home', id: 'home' },
  { name: 'Manufacturing Process', id: 'about' },
  { name: 'Products', id: 'products' },
  { 
    name: 'Global Reach', 
    id: 'export',
    dropdown: [
      { name: 'Export Markets', id: 'export-markets' },
      { name: 'Certifications', id: 'export-certifications' },
      { name: 'Shipping', id: 'export-shipping' }
    ]
  },
  { name: 'Contact', id: 'contact' }
];

const headerVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
  scrolled: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    transition: {
      duration: 0.3
    }
  }
};

const menuItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut"
    }
  }),
  hover: {
    scale: 1.05,
    color: '#d97706',
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: -10,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: {
      duration: 0.2
    }
  }
};

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    height: 0
  },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3
    }
  }
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      setActiveDropdown(null);
    }
  };

  const handleDropdownEnter = (itemId: string) => {
    setActiveDropdown(itemId);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <motion.header
      initial="hidden"
      animate={["visible", scrolled ? "scrolled" : ""]}
      variants={headerVariants}
      className="fixed top-0 left-0 right-0  bg-white/80 backdrop-blur-xl border-b border-gray-200/60 z-50"
    >
       <Helmet>
        <meta name="business:contact:phone" content="+91-98765-43210" />
        <meta name="business:contact:email" content="exports@bananamilk.com" />
        <meta name="business:operating_hours" content="Mon-Sat 9:00-18:00" />
      </Helmet>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-yellow to-yellow/80 text-brown-dark py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-3 h-3" />
              <span className="font-medium">+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3 h-3" />
              <span className="font-medium">exports@bananamilk.com</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Globe className="w-3 h-3" />
              <span className="font-medium">50+ Countries Served</span>
            </div>
            <div className="w-px h-4 bg-brown/30"></div>
            <div className="flex items-center gap-2">
              <Shield className="w-3 h-3" />
              <span className="font-medium">ISO 22000 Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-4 group cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => scrollToSection('home')}
          >
            <motion.div 
              className="relative"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-yellow rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="w-12 h-12 bg-gradient-to-br from-yellow to-yellow/80 rounded-2xl flex items-center justify-center relative z-10 shadow-lg">
                <Building2 className="w-6 h-6 text-brown-dark" />
              </div>
            </motion.div>
            <div className="flex flex-col">
              <motion.span 
                className="text-2xl font-bold bg-gradient-to-r from-brown to-brown/80 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                BANANA MILK
              </motion.span>
              <motion.span 
                className="text-xs font-semibold text-yellow tracking-widest uppercase"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                INIYA FOODS
              </motion.span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item, index) => (
              <div 
                key={item.id}
                className="relative"
                onMouseEnter={() => item.dropdown && handleDropdownEnter(item.id)}
                onMouseLeave={handleDropdownLeave}
              >
                <motion.button
                  custom={index}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  onClick={() => !item.dropdown && scrollToSection(item.id)}
                  className="flex items-center gap-1 px-4 py-3 text-brown font-semibold text-sm uppercase tracking-wide transition-all duration-300 rounded-2xl hover:bg-yellow/10 group"
                >
                  {item.name}
                  {item.dropdown && (
                    <motion.div
                      animate={{ rotate: activeDropdown === item.id ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  )}
                </motion.button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.id && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-yellow/20 overflow-hidden"
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <button
                          key={dropdownItem.id}
                          onClick={() => scrollToSection(dropdownItem.id)}
                          className="w-full px-6 py-4 text-left text-brown hover:bg-yellow/5 transition-all duration-300 flex items-center justify-between group"
                        >
                          <span className="font-medium">{dropdownItem.name}</span>
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(217, 119, 6, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="ml-4 bg-gradient-to-r from-yellow to-yellow/80 text-brown-dark px-8 py-3 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
            >
              <Truck className="w-4 h-4" />
              Get Quote
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden w-12 h-12 bg-yellow/10 rounded-2xl flex items-center justify-center text-brown border border-yellow/20 hover:border-yellow/40 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="lg:hidden bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-yellow/20 mt-4 overflow-hidden"
            >
              <nav className="flex flex-col p-4">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    custom={index}
                    variants={menuItemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {item.dropdown ? (
                      <div className="border-b border-yellow/10 last:border-b-0">
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.id ? null : item.id)}
                          className="w-full flex items-center justify-between px-4 py-4 text-brown font-semibold text-left uppercase tracking-wide hover:bg-yellow/5 rounded-2xl transition-all duration-300"
                        >
                          {item.name}
                          <motion.div
                            animate={{ rotate: activeDropdown === item.id ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </motion.div>
                        </button>
                        
                        <AnimatePresence>
                          {activeDropdown === item.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-6 overflow-hidden"
                            >
                              {item.dropdown.map((dropdownItem) => (
                                <button
                                  key={dropdownItem.id}
                                  onClick={() => scrollToSection(dropdownItem.id)}
                                  className="w-full px-4 py-3 text-brown/80 hover:text-brown hover:bg-yellow/5 rounded-2xl text-left font-medium transition-all duration-300 flex items-center justify-between group"
                                >
                                  {dropdownItem.name}
                                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="w-full px-4 py-4 text-brown font-semibold text-left uppercase tracking-wide hover:bg-yellow/5 rounded-2xl border-b border-yellow/10 last:border-b-0 transition-all duration-300 flex items-center justify-between group"
                      >
                        {item.name}
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
                      </button>
                    )}
                  </motion.div>
                ))}
                
                <motion.button
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={navigationItems.length}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection('contact')}
                  className="mt-4 bg-gradient-to-r from-yellow to-yellow/80 text-brown-dark py-4 rounded-2xl font-bold shadow-lg flex items-center justify-center gap-2"
                >
                  <Truck className="w-4 h-4" />
                  Request Export Quote
                </motion.button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}