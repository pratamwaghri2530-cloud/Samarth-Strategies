"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ravi Sharma",
      role: "Restaurant Owner",
      location: "Mumbai",
      content: "Samarth Strategies got us ranking on Google Maps within 6 weeks. Our walk-ins doubled.",
      rating: 5,
    },
    {
      name: "Priya Nair",
      role: "Salon Owner",
      location: "Pune",
      content: "We were fully booked 3 weeks in advance after they ran our Google Ads. Best investment we made.",
      rating: 5,
    },
    {
      name: "James Mitchell",
      role: "Clinic Owner",
      location: "Austin TX",
      content: "Professional team, clear communication, and real results. Our website traffic tripled in 3 months.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what business owners have to say about working with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 flex flex-col h-full relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10 rotate-180" />
              
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 flex-grow relative z-10 italic">
                "{testimonial.content}"
              </blockquote>
              
              <div className="mt-auto flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}, {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
