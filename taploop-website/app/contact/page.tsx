"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  ArrowRight,
  CheckCircle,
  Clock,
  MessageSquare,
  Sparkles,
} from "lucide-react";

const benefits = [
  "Free 30-minute strategy call",
  "Custom automation roadmap",
  "ROI projection for your business",
  "No sales pressure, just honest advice",
];

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@taploop.ai",
    href: "mailto:hello@taploop.ai",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: null,
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formRef = useRef<HTMLDivElement>(null);
  const isFormInView = useInView(formRef, { once: true });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-tap-50/50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tap-50 border border-tap-100 mb-6">
              <Calendar className="w-4 h-4 text-tap-600" />
              <span className="text-sm font-medium text-tap-700">Book a Call</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Let's Build Your Automation Strategy
            </h1>
            <p className="text-lg md:text-xl text-neutral-600">
              Book a free strategy call and discover how AI automation can transform your business operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={formRef} className="section-sm bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
                What You'll Get
              </h2>
              
              <div className="space-y-4 mb-10">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Call info card */}
              <div className="bg-neutral-50 rounded-2xl border border-neutral-200 p-6 mb-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-tap-100 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-tap-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900">Strategy Call</div>
                    <div className="text-sm text-neutral-500">30 minutes, free</div>
                  </div>
                </div>
                <p className="text-sm text-neutral-600">
                  We'll analyze your current operations, identify automation opportunities, and create a custom roadmap—no strings attached.
                </p>
              </div>

              {/* Contact Methods */}
              <h3 className="font-display font-semibold text-neutral-900 mb-4">
                Other Ways to Reach Us
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center">
                      <method.icon className="w-5 h-5 text-neutral-600" />
                    </div>
                    <div>
                      <div className="text-sm text-neutral-500">{method.label}</div>
                      {method.href ? (
                        <a
                          href={method.href}
                          className="font-medium text-neutral-900 hover:text-tap-600 transition-colors"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <span className="font-medium text-neutral-900">{method.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl border border-neutral-200 shadow-soft p-8 md:p-10">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-accent-600" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-neutral-900 mb-4">
                      Thank You!
                    </h3>
                    <p className="text-neutral-600 mb-6">
                      We've received your message and will be in touch within 24 hours to schedule your strategy call.
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-tap-50 rounded-full text-sm text-tap-700">
                      <Sparkles className="w-4 h-4" />
                      Check your inbox for confirmation
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-8">
                      <MessageSquare className="w-6 h-6 text-tap-600" />
                      <h3 className="font-display text-xl font-semibold text-neutral-900">
                        Request Your Free Strategy Call
                      </h3>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-neutral-700 mb-2"
                          >
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formState.name}
                            onChange={handleChange}
                            className="input"
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-neutral-700 mb-2"
                          >
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formState.email}
                            onChange={handleChange}
                            className="input"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-neutral-700 mb-2"
                        >
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          className="input"
                          placeholder="Your Company"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="industry"
                          className="block text-sm font-medium text-neutral-700 mb-2"
                        >
                          Industry *
                        </label>
                        <select
                          id="industry"
                          name="industry"
                          required
                          value={formState.industry}
                          onChange={handleChange}
                          className="input"
                        >
                          <option value="">Select your industry</option>
                          <option value="real-estate">Real Estate</option>
                          <option value="healthcare">Healthcare / Medical</option>
                          <option value="dental">Dental</option>
                          <option value="home-services">Home Services</option>
                          <option value="solar">Solar / Energy</option>
                          <option value="coaching">Coaching / Education</option>
                          <option value="agency">Agency / Marketing</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-neutral-700 mb-2"
                        >
                          Tell us about your automation needs
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formState.message}
                          onChange={handleChange}
                          className="input resize-none"
                          placeholder="What processes are you looking to automate? What are your biggest operational challenges?"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary btn-lg w-full group"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Book My Free Strategy Call
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>

                      <p className="text-xs text-neutral-500 text-center">
                        By submitting this form, you agree to our{" "}
                        <a href="/privacy" className="underline hover:text-neutral-700">
                          Privacy Policy
                        </a>
                        . We'll never spam you.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
