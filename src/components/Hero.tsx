import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const carouselImages = [
  {
    url: '/images/Painting.webp',
    title: 'Quality Craftsmanship',
    subtitle: 'For Your Home & Business'
  },
  {
    url: '/images/Blinds.jpg',
    title: 'Premium Window Blinds',
    subtitle: 'Elegant & Functional Designs'
  },
  {
    url: '/images/wooden-floor.jpg',
    title: 'Wooden Flooring',
    subtitle: 'Transform Your Living Space'
  },
  {
    url: '/images/shadeports.webp',
    title: 'Durable Shadeports',
    subtitle: 'Protection from the Elements'
  },
  {
    url: '/images/Curtains.jpg',
    title: 'Custom Curtains',
    subtitle: 'Tailored to Your Style'
  }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    carouselImages.forEach((img) => {
      const image = new Image();
      image.src = img.url;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${carouselImages[currentIndex].url})`,
                animation: 'ken-burns 10s infinite alternate'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <AnimatePresence mode="sync">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary/20 backdrop-blur-md text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-primary/30">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-white">Trusted Professionals Nationwide</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              {carouselImages[currentIndex].title} <span className="text-primary block">{carouselImages[currentIndex].subtitle}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl leading-relaxed">
              Nene & Sons Enterprise CC delivers top-tier home improvement and business services across South Africa. Quality craftsmanship you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary text-lg px-8 py-4">
                Request a Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="tel:0828432791" className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all rounded-xl flex items-center justify-center px-8 py-4 text-lg font-semibold">
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">10+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-300">Projects Done</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-gray-300">Quality Guaranteed</div>
              </div>
            </div>
          </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-10 right-10 z-20 flex space-x-4">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-white/30'
            }`}
          />
        ))}
      </div>

      <style>{`
        @keyframes ken-burns {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
