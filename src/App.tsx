import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import SplashScreen from './components/SplashScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import BananaVarieties from './components/BananaVarieties';
import ManufacturingProcess from './components/ManufacturingProcess';
import ProductSpecs from './components/ProductSpecs';
import Applications from './components/Applications';
import ExportCompliance from './components/ExportCompliance';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Banana Gold Exports",
    "alternateName": "Banana Gold Global Exports",
    "url": "https://bananagoldexports.com",
    "logo": "https://bananagoldexports.com/logo.png",
    "description": "Premium banana powder manufacturer and exporter serving 50+ countries with ISO 22000 certified quality standards",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Export Processing Zone, Industrial Area",
      "addressLocality": "India",
      "postalCode": "560001",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-98765-43210",
      "contactType": "customer service",
      "email": "exports@bananamilk.com",
      "areaServed": "Worldwide",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://www.facebook.com/bananagoldexports",
      "https://www.linkedin.com/company/banana-gold-exports",
      "https://twitter.com/bananagold"
    ]
  };

  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Premium Banana Powder",
    "description": "100% natural, preservative-free banana powder made from certified organic bananas. ISO 22000, HACCP, GMP certified manufacturing.",
    "brand": {
      "@type": "Brand",
      "name": "Banana Gold Exports"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Banana Gold Exports"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "Contact for pricing",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Banana Gold Exports"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  };

  if (showSplash) {
    return <SplashScreen onEnter={() => setShowSplash(false)} />;
  }

  return (
    <>
      <Helmet>
        <title>Banana Milk Exports | Premium Banana Powder Manufacturer & Global Exporter</title>
        <meta name="description" content="ISO 22000 certified banana powder manufacturer exporting to 50+ countries. Premium quality, preservative-free banana powder for food, pharmaceutical & cosmetic industries." />
        <meta name="keywords" content="banana powder, banana powder exporter, banana powder manufacturer, ISO 22000 certified, food grade banana powder, bulk banana powder, export quality banana powder" />
        <meta name="author" content="Banana Gold Exports" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Banana Gold Exports | Premium Banana Powder Manufacturer" />
        <meta property="og:description" content="ISO 22000 certified banana powder exporter serving 50+ countries with premium quality products." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bananagoldexports.com" />
        <meta property="og:image" content="https://bananagoldexports.com/og-image.jpg" />
        <meta property="og:site_name" content="Banana Gold Exports" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Banana Gold Exports | Premium Banana Powder" />
        <meta name="twitter:description" content="Global exporter of premium banana powder. ISO 22000, HACCP, GMP certified manufacturing." />
        <meta name="twitter:image" content="https://bananagoldexports.com/twitter-image.jpg" />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#f59e0b" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://bananagoldexports.com" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(productStructuredData)}
        </script>
        
        {/* Additional Product Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://bananagoldexports.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Products",
                "item": "https://bananagoldexports.com#products"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Banana Powder",
                "item": "https://bananagoldexports.com#banana-powder"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-cream">
        <Header />
        <Hero />
        <WhyChooseUs />
        <BananaVarieties />
        <ManufacturingProcess />
        <ProductSpecs />
        <Applications />
        <ExportCompliance />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;