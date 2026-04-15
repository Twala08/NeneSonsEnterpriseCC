import React from 'react';
import { motion } from 'motion/react';
import { Service } from '../types';
import { ArrowRight, Check } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="service-card group"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg">
          <service.icon className="w-6 h-6 text-primary" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          {service.description}
        </p>
        <div className="space-y-2 mb-6">
          {service.benefits.slice(0, 3).map((benefit, i) => (
            <div key={i} className="flex items-center text-xs text-gray-500">
              <Check className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
        <a
          href="#contact"
          className="inline-flex items-center text-primary font-semibold text-sm hover:translate-x-2 transition-transform"
        >
          Request Quote
          <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
