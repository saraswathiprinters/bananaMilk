import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Package, Mail, Phone, MapPin, Clock, CheckCircle, Star, ArrowRight, Shield, Truck } from 'lucide-react';

const countries = [
  'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Japan',
  'South Korea', 'China', 'Singapore', 'UAE', 'Saudi Arabia', 'Australia',
  'Brazil', 'Mexico', 'Netherlands', 'Italy', 'Spain', 'South Africa'
];

const quantityOptions = [
  { value: '100-500kg', label: '100-500 kg', popular: false },
  { value: '500-1000kg', label: '500-1000 kg', popular: true },
  { value: '1-5tons', label: '1-5 tons', popular: true },
  { value: '5-10tons', label: '5-10 tons', popular: false },
  { value: '10tons+', label: '10+ tons', popular: false }
];

const features = [
  { icon: Shield, text: 'Quality Certified' },
  { icon: Truck, text: 'Global Shipping' },
  { icon: Clock, text: '24/7 Support' },
  { icon: Star, text: 'Premium Quality' }
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
    y: 60,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const cardHoverVariants = {
  initial: { 
    scale: 1,
    y: 0,
    boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.1)"
  },
  hover: { 
    scale: 1.02,
    y: -5,
    boxShadow: "0 25px 50px -12px rgba(120, 53, 15, 0.25)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const inputFocusVariants = {
  initial: { scale: 1 },
  focus: { 
    scale: 1.02,
    transition: { duration: 0.2 }
  }
};

const buttonHoverVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  tap: { scale: 0.98 }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    country: '',
    quantity: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const generateEmailBody = () => {
    const { fullName, companyName, email, country, quantity, message } = formData;
    
    return `
New Export Inquiry - Premium Banana Powder

Contact Information:
• Full Name: ${fullName}
• Company: ${companyName}
• Email: ${email}
• Destination Country: ${country}

Order Details:
• Monthly Quantity: ${quantity}
• Additional Requirements: ${message || 'Not specified'}

---
This inquiry was submitted through the Banana Gold Exports website.
    `.trim();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call/processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Prepare email data
    const subject = `Export Inquiry from ${formData.companyName} - ${formData.fullName}`;
    const body = generateEmailBody();
    
    // Create mailto link
    const mailtoLink = `mailto:exports@bananagold.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        country: '',
        quantity: '',
        message: ''
      });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSampleRequest = () => {
    const subject = `Sample Request - ${formData.companyName || 'New Customer'}`;
    const body = `
Sample Request - Premium Banana Powder

Contact Information:
• Full Name: ${formData.fullName || 'Not provided'}
• Company: ${formData.companyName || 'Not provided'}
• Email: ${formData.email || 'Not provided'}
• Destination Country: ${formData.country || 'Not provided'}

Sample Requirements:
• Product interested in: Premium Banana Powder
• Intended use: ${formData.message || 'Not specified'}
• Shipping address required: Yes

---
This sample request was submitted through the Banana Gold Exports website.
    `.trim();
    
    const mailtoLink = `mailto:samples@bananagold.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="relative py-28 bg-gradient-to-br from-gray-50 via-cream to-yellow-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-yellow/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brown/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-gradient-to-r from-yellow/5 to-brown/5 blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(120,53,15,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(120,53,15,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-brown to-brown/80 bg-clip-text text-transparent mb-6"
          >
            Global Export Partnership
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-32 h-1.5 bg-gradient-to-r from-yellow to-yellow/60 mx-auto mb-8 rounded-full"
          ></motion.div>

          <motion.p
            variants={itemVariants}
            className="text-2xl text-brown/80 max-w-4xl mx-auto leading-relaxed"
          >
            Ready to source premium quality products? Let's discuss your bulk order requirements and establish a successful partnership.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="lg:col-span-1"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 border border-yellow/20 shadow-2xl shadow-brown/10 mb-8"
            >
              <h3 className="text-2xl font-bold text-brown mb-6 flex items-center gap-3">
                <Mail className="w-6 h-6 text-yellow" />
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-yellow" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brown">Sales Department</h4>
                    <p className="text-brown/70">+1 (555) 123-EXPORT</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-yellow" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brown">Export Inquiries</h4>
                    <p className="text-brown/70">exports@bananagold.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Package className="w-5 h-5 text-yellow" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brown">Sample Requests</h4>
                    <p className="text-brown/70">samples@bananagold.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-yellow" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brown">Response Time</h4>
                    <p className="text-brown/70">Within 2 business hours</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 text-center border border-yellow/20"
                >
                  <feature.icon className="w-6 h-6 text-yellow mx-auto mb-2" />
                  <p className="text-sm font-medium text-brown">{feature.text}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Quick Contact Note */}
            <motion.div
              variants={itemVariants}
              className="mt-6 p-4 bg-yellow/10 rounded-2xl border border-yellow/20"
            >
              <p className="text-sm text-brown/80 text-center">
                <strong>Note:</strong> Form submission opens your email client with pre-filled details for your convenience.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="lg:col-span-2"
          >
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
              className="relative"
            >
              <motion.div
                variants={glowVariants}
                className="absolute inset-0 bg-gradient-to-r from-yellow/20 to-brown/10 rounded-3xl blur-xl opacity-50"
              />
              <motion.div
                variants={cardHoverVariants}
                className="relative bg-white/90 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-yellow/30 shadow-2xl shadow-brown/10"
              >
                <AnimatePresence>
                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl flex items-center gap-3"
                    >
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <div>
                        <p className="font-semibold text-green-800">Email client opened!</p>
                        <p className="text-green-600 text-sm">Please send the pre-filled email to complete your inquiry.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants}>
                      <label className="block text-brown font-bold mb-3 text-lg">Full Name *</label>
                      <motion.input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        whileFocus="focus"
                        variants={inputFocusVariants}
                        className="w-full px-5 py-4 rounded-2xl border-2 border-yellow/20 bg-white/50 focus:border-yellow outline-none transition-all duration-300 placeholder-brown/40 font-medium"
                        placeholder="John Doe"
                      />
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <label className="block text-brown font-bold mb-3 text-lg">Company Name *</label>
                      <motion.input
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        whileFocus="focus"
                        variants={inputFocusVariants}
                        className="w-full px-5 py-4 rounded-2xl border-2 border-yellow/20 bg-white/50 focus:border-yellow outline-none transition-all duration-300 placeholder-brown/40 font-medium"
                        placeholder="Your Global Enterprise"
                      />
                    </motion.div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants}>
                      <label className="block text-brown font-bold mb-3 text-lg">Business Email *</label>
                      <motion.input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        whileFocus="focus"
                        variants={inputFocusVariants}
                        className="w-full px-5 py-4 rounded-2xl border-2 border-yellow/20 bg-white/50 focus:border-yellow outline-none transition-all duration-300 placeholder-brown/40 font-medium"
                        placeholder="john@globalcompany.com"
                      />
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <label className="block text-brown font-bold mb-3 text-lg">Destination Country *</label>
                      <motion.select
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        whileFocus="focus"
                        variants={inputFocusVariants}
                        className="w-full px-5 py-4 rounded-2xl border-2 border-yellow/20 bg-white/50 focus:border-yellow outline-none transition-all duration-300 font-medium appearance-none"
                      >
                        <option value="">Select Country</option>
                        {countries.map((country) => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </motion.select>
                    </motion.div>
                  </div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-brown font-bold mb-3 text-lg">Monthly Order Quantity *</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {quantityOptions.map((option) => (
                        <motion.button
                          key={option.value}
                          type="button"
                          onClick={() => setFormData({...formData, quantity: option.value})}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`p-4 rounded-2xl border-2 transition-all duration-300 font-medium ${
                            formData.quantity === option.value
                              ? 'border-yellow bg-yellow/20 text-brown shadow-lg'
                              : 'border-yellow/20 bg-white/50 text-brown/70 hover:border-yellow/40'
                          } ${option.popular ? 'relative' : ''}`}
                        >
                          {option.popular && (
                            <div className="absolute -top-2 -right-2 bg-yellow text-brown text-xs px-2 py-1 rounded-full font-bold">
                              POPULAR
                            </div>
                          )}
                          {option.label}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-brown font-bold mb-3 text-lg">Additional Requirements</label>
                    <motion.textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      whileFocus="focus"
                      variants={inputFocusVariants}
                      rows={4}
                      className="w-full px-5 py-4 rounded-2xl border-2 border-yellow/20 bg-white/50 focus:border-yellow outline-none transition-all duration-300 placeholder-brown/40 font-medium resize-none"
                      placeholder="Tell us about your specific requirements, packaging preferences, delivery timelines..."
                    ></motion.textarea>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4 pt-6"
                  >
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      variants={buttonHoverVariants}
                      whileHover="hover"
                      whileTap="tap"
                      initial="initial"
                      className="flex-1 bg-gradient-to-r from-yellow to-yellow/80 text-brown px-10 py-5 rounded-2xl text-xl font-bold shadow-2xl shadow-yellow/30 hover:shadow-yellow/40 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-6 h-6 border-2 border-brown border-t-transparent rounded-full"
                          />
                          Preparing Email...
                        </>
                      ) : (
                        <>
                          <Send className="w-6 h-6" />
                          Send Export Inquiry
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </motion.button>
                    
                    <motion.button
                      type="button"
                      onClick={handleSampleRequest}
                      variants={buttonHoverVariants}
                      whileHover="hover"
                      whileTap="tap"
                      initial="initial"
                      className="flex-1 bg-gradient-to-r from-brown to-brown/80 text-cream px-10 py-5 rounded-2xl text-xl font-bold shadow-2xl shadow-brown/30 hover:shadow-brown/40 transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      <Package className="w-6 h-6" />
                      Request Samples
                    </motion.button>
                  </motion.div>
                </form>

                <motion.div
                  variants={itemVariants}
                  className="mt-8 pt-8 border-t-2 border-yellow/20 text-center"
                >
                  <p className="text-xl text-brown font-bold">
                    Your trusted partner for global exports
                  </p>
                  <p className="text-brown/60 mt-2">
                    Over 15 years of excellence in international trade
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

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
        className="absolute top-20 left-10 w-3 h-3 bg-yellow rounded-full opacity-60"
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
        className="absolute bottom-40 right-20 w-2 h-2 bg-brown rounded-full opacity-40"
      />
    </section>
  );
}

const glowVariants = {
  initial: { opacity: 0 },
  hover: { 
    opacity: 1,
    transition: {
      duration: 0.3
    }
  }
};