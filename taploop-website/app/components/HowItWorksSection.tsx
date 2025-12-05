"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MessageSquare,
  Palette,
  Rocket,
  HeartHandshake,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery Call",
    description:
      "We start with a free strategy call to understand your business, pain points, and goals. No sales pressure—just honest conversation about what's possible.",
    duration: "30-60 min",
    deliverable: "Custom automation roadmap",
  },
  {
    number: "02",
    icon: Palette,
    title: "Solution Design",
    description:
      "Our team designs your custom automation system, mapping out every workflow, integration, and agent. You'll see exactly what we'll build before we start.",
    duration: "3-5 days",
    deliverable: "Detailed system blueprint",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Build & Deploy",
    description:
      "We build your automations with rigorous testing at every step. Your systems go live in weeks, not months—with full training for your team.",
    duration: "2-4 weeks",
    deliverable: "Live, tested automation system",
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "Ongoing Support",
    description:
      "We don't disappear after launch. Ongoing monitoring, optimization, and support ensure your automations keep delivering results as your business grows.",
    duration: "Continuous",
    deliverable: "24/7 monitoring & updates",
  },
];

const guarantees = [
  "No hidden fees or surprise costs",
  "2-week satisfaction guarantee",
  "Dedicated project manager",
  "Full documentation & training",
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="section bg-white relative overflow-hidden">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tap-50 border border-tap-100 mb-6">
            <Rocket className="w-4 h-4 text-tap-600" />
            <span className="text-sm font-medium text-tap-700">How It Works</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            From First Call to Full Automation
          </h2>
          <p className="text-lg text-neutral-600">
            Our proven 4-step process gets your business running on autopilot—fast, transparent, and with zero disruption to your operations.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-tap-200 via-accent-200 to-tap-200 hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative md:grid md:grid-cols-2 md:gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div
                  className={`${
                    index % 2 === 1 ? "md:order-2 md:pl-12" : "md:pr-12 md:text-right"
                  }`}
                >
                  <div
                    className={`inline-flex items-center gap-2 mb-4 ${
                      index % 2 === 1 ? "" : "md:flex-row-reverse"
                    }`}
                  >
                    <span className="font-display text-sm font-bold text-tap-500">
                      {step.number}
                    </span>
                    <div className="w-8 h-px bg-tap-200" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-neutral-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 mb-4">{step.description}</p>
                  <div
                    className={`flex items-center gap-6 text-sm ${
                      index % 2 === 1 ? "" : "md:justify-end"
                    }`}
                  >
                    <div>
                      <span className="text-neutral-400">Duration:</span>{" "}
                      <span className="font-medium text-neutral-700">{step.duration}</span>
                    </div>
                    <div>
                      <span className="text-neutral-400">Deliverable:</span>{" "}
                      <span className="font-medium text-neutral-700">{step.deliverable}</span>
                    </div>
                  </div>
                </div>

                {/* Icon */}
                <div
                  className={`hidden md:flex ${
                    index % 2 === 1 ? "md:order-1 justify-end" : "justify-start"
                  }`}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-tap-500/20 to-accent-500/20 rounded-3xl blur-xl" />
                    <div className="relative w-24 h-24 bg-white rounded-3xl border border-neutral-200 shadow-soft flex items-center justify-center">
                      <step.icon className="w-10 h-10 text-tap-600" />
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
                  <div className="w-4 h-4 rounded-full bg-white border-4 border-tap-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 p-8 md:p-12 bg-gradient-to-br from-tap-50 to-accent-50 rounded-3xl border border-tap-100"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl font-bold text-neutral-900 mb-4">
                Our Promise to You
              </h3>
              <p className="text-neutral-600 mb-6">
                We stake our reputation on delivering results. If you're not seeing value within the first two weeks, we'll make it right—no questions asked.
              </p>
              <Link href="/contact" className="btn-primary btn-lg group">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-neutral-700">{guarantee}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
