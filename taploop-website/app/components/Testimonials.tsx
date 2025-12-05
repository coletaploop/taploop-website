"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight, Play } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "TapLoop completely transformed how we handle leads. We went from losing 40% of inquiries to responding within 30 seconds, 24/7. Our bookings are up 3x and the agents don't even realize they're talking to AI.",
    author: "Sarah Mitchell",
    role: "Operations Director",
    company: "Premier Real Estate Group",
    industry: "Real Estate",
    avatar: "/images/avatars/sarah.jpg",
    metrics: { label: "Bookings Increase", value: "300%" },
    rating: 5,
  },
  {
    id: 2,
    quote:
      "The no-show rate at our practice dropped from 25% to under 8% within the first month. The automated reminders and rescheduling system paid for itself in the first week. Game-changer.",
    author: "Dr. James Chen",
    role: "Practice Owner",
    company: "Smile Dental Care",
    industry: "Dental",
    avatar: "/images/avatars/james.jpg",
    metrics: { label: "No-Show Reduction", value: "68%" },
    rating: 5,
  },
  {
    id: 3,
    quote:
      "We were drowning in admin work while trying to scale our coaching program. TapLoop automated our entire enrollment and onboarding process. Now we're serving 10x the students with the same team.",
    author: "Maria Rodriguez",
    role: "Founder",
    company: "Elevate Coaching Academy",
    industry: "Education",
    avatar: "/images/avatars/maria.jpg",
    metrics: { label: "Capacity Increase", value: "10x" },
    rating: 5,
  },
  {
    id: 4,
    quote:
      "Our technicians were missing calls while on jobs. Now every call gets answered, qualified, and scheduled automatically. Our revenue increased 40% without hiring a single new dispatcher.",
    author: "Mike Thompson",
    role: "Owner",
    company: "Thompson HVAC Services",
    industry: "Home Services",
    avatar: "/images/avatars/mike.jpg",
    metrics: { label: "Revenue Growth", value: "40%" },
    rating: 5,
  },
  {
    id: 5,
    quote:
      "The lead qualification AI cut our sales cycle in half. We're now only talking to homeowners who are actually ready to buy. Conversion rates jumped from 12% to over 30%.",
    author: "Jennifer Park",
    role: "Sales Manager",
    company: "SunPower Solutions",
    industry: "Solar",
    avatar: "/images/avatars/jennifer.jpg",
    metrics: { label: "Conversion Rate", value: "30%" },
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef} className="section bg-neutral-950 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-tap-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 mb-6">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium text-white/80">Client Success Stories</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Trusted by Growing Businesses
          </h2>
          <p className="text-lg text-neutral-400">
            See how companies like yours are transforming their operations with TapLoop automation.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 md:p-12"
            >
              {/* Quote */}
              <div className="relative mb-8">
                <Quote className="absolute -top-2 -left-2 w-12 h-12 text-tap-500/30" />
                <p className="text-xl md:text-2xl text-white leading-relaxed pl-8">
                  "{testimonials[activeIndex].quote}"
                </p>
              </div>

              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-tap-500 to-accent-500 flex items-center justify-center text-2xl font-bold">
                    {testimonials[activeIndex].author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-display font-semibold text-white text-lg">
                      {testimonials[activeIndex].author}
                    </div>
                    <div className="text-neutral-400 text-sm">
                      {testimonials[activeIndex].role}
                    </div>
                    <div className="text-neutral-500 text-sm">
                      {testimonials[activeIndex].company}
                    </div>
                  </div>
                </div>

                {/* Metric */}
                <div className="bg-white/10 rounded-2xl p-4 md:p-6">
                  <div className="font-display text-3xl md:text-4xl font-bold text-accent-400">
                    {testimonials[activeIndex].metrics.value}
                  </div>
                  <div className="text-sm text-neutral-400">
                    {testimonials[activeIndex].metrics.label}
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex ? "w-8 bg-tap-500" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Industry badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-16 border-t border-white/10"
        >
          <p className="text-center text-sm text-neutral-500 mb-6">
            Serving businesses across industries
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Real Estate", "Healthcare", "Dental", "Home Services", "Education", "Solar", "Mortgage", "Agencies"].map(
              (industry) => (
                <span
                  key={industry}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-neutral-400"
                >
                  {industry}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
