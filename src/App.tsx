import React from 'react';
import { motion } from 'motion/react';
import { 
  Blinds, 
  LayoutGrid, 
  ShieldCheck,
  DoorOpen,
  CheckCircle2,
  Star,
  Quote
} from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { Service, Testimonial, GalleryItem } from './types';

const services: Service[] = [
  {
    id: 'blinds',
    title: 'Window Blinds',
    description: 'Premium window blinds including Venetian, Roller, Vertical and Roman styles. Custom fitted for your space.',
    benefits: ['Custom measurements', 'Professional installation', 'Wide variety of materials', 'Durable and stylish'],
    icon: Blinds,
    image: '/images/Blinds.jpg'
  },
  {
    id: 'shutters',
    title: 'Shutters',
    description: 'Premium quality shutters for your home or business. Elegant, durable and custom fitted.',
    benefits: ['Custom fitting', 'Light control', 'Privacy & security', 'Long-lasting quality'],
    icon: ShieldCheck,
    image: '/images/shutter-blinds.jpeg'
  },
  {
    id: 'flooring',
    title: 'Wooden Flooring',
    description: 'Elegant laminate and solid wood flooring installation. Transform your space with a professional finish.',
    benefits: ['Easy maintenance', 'Elegant finish', 'Professional leveling', 'Long-lasting quality'],
    icon: LayoutGrid,
    image: '/images/laminate-flooring.jpeg'
  },
  {
    id: 'sliding-burglar',
    title: 'Sliding Burglar Guards',
    description: 'Professionally installed sliding burglar guards. High-grade steel, custom sized for your home or business.',
    benefits: ['High-grade steel', 'Custom sizing', 'Smooth operation', 'Professional installation'],
    icon: DoorOpen,
    image: '/images/sliding_bargler.webp'
  },
  // {
  //   id: 'shadeports',
  //   title: 'Shadeports (Carports)',
  //   description: 'Protect your vehicles from the harsh South African sun with our high-quality shadeports and custom carports.',
  //   benefits: ['UV protection', 'Durable structure', 'Custom sizes', 'Professional setup'],
  //   icon: Car,
  //   image: '/images/shadeports.webp'
  // },
  // {
  //   id: 'aluminium',
  //   title: 'Aluminium Windows',
  //   description: 'Modern, sleek, and durable aluminium window frames for both residential and commercial properties.',
  //   benefits: ['Weather resistant', 'Low maintenance', 'Modern aesthetic', 'Energy efficient'],
  //   icon: Square,
  //   image: '/images/aluminium-window.png'
  // },
  // {
  //   id: 'painting',
  //   title: 'Interior & Exterior Painting',
  //   description: 'Professional painting services to give your property a fresh, new look. We use high-quality, long-lasting paints.',
  //   benefits: ['Surface preparation', 'Premium paint brands', 'Clean workmanship', 'Color consultation'],
  //   icon: PaintBucket,
  //   image: '/images/Painting.webp'
  // },
  // {
  //   id: 'access-control',
  //   title: 'Access Control Systems',
  //   description: 'Enhance your security with our state-of-the-art access control systems for homes and businesses.',
  //   benefits: ['Intercom systems', 'Keypad entry', 'Biometric options', 'Remote monitoring'],
  //   icon: ShieldCheck,
  //   image: '/images/access-control.avif'
  // },
  // {
  //   id: 'garage-motors',
  //   title: 'Garage Motors',
  //   description: 'Installation and repair of high-quality garage door motors for convenience and security.',
  //   benefits: ['Smooth operation', 'Battery backup', 'Remote access', 'Safety sensors'],
  //   icon: Settings,
  //   image: '/images/garage-motors.png'
  // },
  // {
  //   id: 'glazing',
  //   title: 'Glass & Glazing',
  //   description: 'Professional glass installation and glazing services for windows, doors, and partitions.',
  //   benefits: ['Safety glass', 'Custom cutting', 'Expert fitting', 'Emergency repairs'],
  //   icon: GlassWater,
  //   image: '/images/glass-and-glazing.jpg'
  // },
  // {
  //   id: 'curtains',
  //   title: 'Curtains',
  //   description: 'Elegant and high-quality curtains tailored to your style. We offer a variety of fabrics and designs.',
  //   benefits: ['Custom tailoring', 'Wide fabric selection', 'Professional fitting', 'Blackout & decorative options'],
  //   icon: Scissors,
  //   image: '/images/Curtains.jpg'
  // },
  // {
  //   id: 'curtain-rails',
  //   title: 'Curtain Rails',
  //   description: 'Durable and stylish curtain rails and rods to complement your window treatments.',
  //   benefits: ['Heavy-duty rails', 'Decorative rods', 'Smooth operation', 'Expert installation'],
  //   icon: GripHorizontal,
  //   image: '/images/curtain-rod.jpg'
  // }
];

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Bukelwa',
    role: 'Homeowner at Glen Eagle Estate',
    content: 'Nene & Sons installed shutters throughout my home and the results are stunning. The quality is exceptional, the fitting was perfect and the team was professional from start to finish. I could not be happier!',
    rating: 5
  },
  {
    id: '2',
    name: 'Mr Dladla',
    role: 'Homeowner at Hyderwyk Estate Carnival',
    content: 'The window blinds installed by Nene & Sons have completely transformed my home. Clean, precise installation and the finish is top quality. The team was punctual, respectful and left everything spotless. Highly recommended!',
    rating: 5
  },
  {
    id: '3',
    name: 'Dr. Mphahlele',
    role: 'Homeowner at Savanna Hill Estate',
    content: 'I had Allusion blinds installed by Nene & Sons and the elegance they bring to my home is beyond what I expected. The attention to detail, the quality of the product and the professionalism of the team is world class. A truly premium experience from start to finish.',
    rating: 5
  }
];

const galleryItems: GalleryItem[] = [
  { id: '1', title: 'Vertical Blinds', category: 'Blinds', image: '/images/vertical-blinds.jpeg' },
  { id: '2', title: 'Window Blinds', category: 'Blinds', image: '/images/Blinds.jpg' },
  { id: '3', title: 'Laminate Flooring', category: 'Flooring', image: '/images/laminate-flooring.jpeg' },
  { id: '4', title: 'Wooden Flooring', category: 'Flooring', image: '/images/wooden-floor.jpg' },
  { id: '5', title: 'Sliding Burglar Guards', category: 'Security', image: '/images/sliding_bargler.webp' },
  { id: '6', title: 'Shutters', category: 'Shutters', image: '/images/shutter-blinds.jpeg' },
];

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      {/* About Section */}
      <section id="about" className="py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="/images/Allusion_Blinds.jpg"
                alt="Our Team at Work"
                className="rounded-2xl shadow-2xl"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <div className="text-4xl font-bold mb-1">10+</div>
                <div className="text-sm font-medium opacity-90 uppercase tracking-wider">Years of Excellence</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">About Nene & Sons</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-6 leading-tight">
                Rooted in South Africa, Committed to <span className="text-primary">Quality</span>
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nene & Sons Enterprise CC is a premier service provider delivering premium home improvement and business services across South Africa. We pride ourselves on quality, trust, and professional workmanship.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With a strong presence in Gauteng and Mpumalanga, we are expanding our reach to cater to the entire nation, ensuring that every home and business has access to top-tier installations and maintenance.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-primary w-6 h-6" />
                  <span className="font-semibold text-secondary">Reliable Service</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-primary w-6 h-6" />
                  <span className="font-semibold text-secondary">Affordable Pricing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-primary w-6 h-6" />
                  <span className="font-semibold text-secondary">Expert Team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-primary w-6 h-6" />
                  <span className="font-semibold text-secondary">Local Expertise</span>
                </div>
              </div>

              <a href="#contact" className="btn-primary">
                Learn More About Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Services</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Comprehensive Solutions for Your Property
            </h3>
            <p className="text-gray-600">
              From aesthetic enhancements to critical security installations, we offer a wide range of services tailored to meet your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2">Ready to start your project?</h2>
              <p className="text-orange-100 text-lg">Get a free, no-obligation quote from our experts today.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-orange-50 transition-colors">
                Request a Quote
              </a>
              <a href="tel:0828432791" className="bg-secondary text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-800 transition-colors">
                Call 082 843 2791
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-accent overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Testimonials</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-secondary">What Our Clients Say</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative"
              >
                <Quote className="absolute top-6 right-8 w-10 h-10 text-orange-100" />
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'text-primary fill-primary' : 'text-gray-300'}`} />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-secondary">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Gallery</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Our Recent Work</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take a look at some of our completed projects across South Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden shadow-lg aspect-square cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-primary text-xs font-bold uppercase tracking-widest mb-1">{item.category}</span>
                  <h4 className="text-white font-bold text-lg">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
