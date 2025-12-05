"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Calendar, Clock, Sparkles } from "lucide-react";

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="section-sm bg-white relative overflow-hidden">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-tap-600 via-tap-700 to-tap-800 rounded-3xl" />
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10 rounded-3xl" />
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-tap-400/20 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                  <Sparkles className="w-4 h-4 text-accent-400" />
                  <span className="text-sm font-medium text-white/90">
                    Free Strategy Session
                  </span>
                </div>

                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Automate Your Business?
                </h2>

                <p className="text-lg text-white/80 mb-8 max-w-lg">
                  Book a free 30-minute strategy call. We'll analyze your current operations and show you exactly where AI automation can save you time and money.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    href="/contact"
                    className="btn bg-white text-tap-700 hover:bg-neutral-100 btn-lg group"
                  >
                    <Calendar className="w-5 h-5" />
                    Book Your Free Call
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-sm text-white/60">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    30-minute call
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    No commitment required
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    Custom roadmap included
                  </div>
                </div>
              </div>

              {/* Right: Visual */}
              <div className="hidden lg:block">
                <div className="relative">
                  {/* Card stack visual */}
                  <div className="absolute -top-4 -left-4 w-full h-full bg-white/5 rounded-2xl transform rotate-3" />
                  <div className="absolute -top-2 -left-2 w-full h-full bg-white/10 rounded-2xl transform rotate-1.5" />
                  
                  <div className="relative bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-8">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-accent-500 flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-white">Strategy Call</div>
                          <div className="text-sm text-white/60">30 minutes, free</div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {[
                          "Review your current workflows",
                          "Identify automation opportunities",
                          "Custom ROI projection",
                          "Implementation roadmap",
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-accent-500/20 flex items-center justify-center">
                              <svg className="w-4 h-4 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-white/80 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-white/10">
                        <div className="text-xs text-white/40 uppercase tracking-wider mb-2">
                          What you'll get
                        </div>
                        <div className="text-2xl font-display font-bold text-white">
                          Custom Automation Blueprint
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
