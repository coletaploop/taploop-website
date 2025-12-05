"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Check,
  ArrowRight,
  Sparkles,
  Zap,
  Building,
  HelpCircle,
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses ready to automate their first workflows.",
    price: "2,500",
    priceNote: "one-time setup",
    monthlyFee: "Starting at $297/mo",
    icon: Zap,
    features: [
      "Up to 3 automated workflows",
      "1 AI voice or chat agent",
      "Basic CRM integration",
      "Email & SMS automation",
      "30-day support included",
      "Basic reporting dashboard",
    ],
    notIncluded: [
      "Custom API integrations",
      "Advanced analytics",
      "Priority support",
    ],
    cta: "Get Started",
    ctaVariant: "outline" as const,
    popular: false,
  },
  {
    name: "Growth",
    description: "For businesses scaling operations and need comprehensive automation.",
    price: "7,500",
    priceNote: "one-time setup",
    monthlyFee: "Starting at $597/mo",
    icon: Sparkles,
    features: [
      "Up to 10 automated workflows",
      "3 AI voice or chat agents",
      "Advanced CRM integration",
      "Multi-channel automation",
      "Custom reporting & analytics",
      "90-day priority support",
      "Dedicated project manager",
      "Custom API integrations",
      "Monthly optimization calls",
    ],
    notIncluded: [],
    cta: "Most Popular",
    ctaVariant: "primary" as const,
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Full-scale automation infrastructure for larger organizations.",
    price: "Custom",
    priceNote: "tailored quote",
    monthlyFee: "Based on scope",
    icon: Building,
    features: [
      "Unlimited workflows",
      "Unlimited AI agents",
      "Enterprise-grade security",
      "Custom integrations & APIs",
      "Dedicated success team",
      "24/7 priority support",
      "SLA guarantees",
      "On-site training available",
      "Quarterly business reviews",
      "White-label options",
    ],
    notIncluded: [],
    cta: "Contact Sales",
    ctaVariant: "secondary" as const,
    popular: false,
  },
];

const faqs = [
  {
    question: "What's included in the monthly fee?",
    answer:
      "The monthly fee covers hosting, maintenance, monitoring, API costs (within reasonable limits), and basic support. It ensures your automations keep running smoothly 24/7.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Most projects are completed in 2-4 weeks from kickoff to deployment. Complex enterprise projects may take 6-8 weeks. We'll give you an accurate timeline during the discovery call.",
  },
  {
    question: "What if I need changes after launch?",
    answer:
      "Minor tweaks and optimizations are included in your monthly plan. Larger changes or new workflows are quoted separately at our standard rates, typically 50% less than initial build costs.",
  },
  {
    question: "Do you offer a guarantee?",
    answer:
      "Yes! We offer a 2-week satisfaction guarantee. If you're not seeing value from your automation in the first 14 days, we'll work with you to fix it or provide a full refund.",
  },
];

export default function PricingSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} id="pricing" className="section bg-white relative overflow-hidden">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tap-50 border border-tap-100 mb-6">
            <Sparkles className="w-4 h-4 text-tap-600" />
            <span className="text-sm font-medium text-tap-700">Pricing</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Transparent Pricing, Real Results
          </h2>
          <p className="text-lg text-neutral-600">
            No hidden fees. No surprise costs. Just clear pricing for automation that delivers measurable ROI.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-3xl ${
                plan.popular
                  ? "bg-gradient-to-b from-tap-600 to-tap-700 text-white scale-105 shadow-glow-md"
                  : "bg-white border border-neutral-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent-500 text-white text-sm font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <div
                  className={`w-12 h-12 rounded-xl ${
                    plan.popular ? "bg-white/20" : "bg-tap-50"
                  } flex items-center justify-center mb-6`}
                >
                  <plan.icon
                    className={`w-6 h-6 ${plan.popular ? "text-white" : "text-tap-600"}`}
                  />
                </div>

                <h3
                  className={`font-display text-xl font-bold mb-2 ${
                    plan.popular ? "text-white" : "text-neutral-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-6 ${
                    plan.popular ? "text-white/80" : "text-neutral-600"
                  }`}
                >
                  {plan.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    {plan.price !== "Custom" && (
                      <span
                        className={`text-sm ${plan.popular ? "text-white/60" : "text-neutral-400"}`}
                      >
                        $
                      </span>
                    )}
                    <span
                      className={`font-display text-4xl font-bold ${
                        plan.popular ? "text-white" : "text-neutral-900"
                      }`}
                    >
                      {plan.price}
                    </span>
                  </div>
                  <div
                    className={`text-sm ${plan.popular ? "text-white/60" : "text-neutral-500"}`}
                  >
                    {plan.priceNote}
                  </div>
                  <div
                    className={`text-sm font-medium mt-2 ${
                      plan.popular ? "text-white/80" : "text-neutral-700"
                    }`}
                  >
                    {plan.monthlyFee}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className={`btn btn-lg w-full mb-8 ${
                    plan.popular
                      ? "bg-white text-tap-700 hover:bg-neutral-100"
                      : plan.ctaVariant === "outline"
                      ? "btn-outline"
                      : "btn-secondary"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 shrink-0 ${
                          plan.popular ? "text-accent-400" : "text-accent-500"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          plan.popular ? "text-white/90" : "text-neutral-700"
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl font-bold text-neutral-900 mb-2">
              Frequently Asked Questions
            </h3>
            <p className="text-neutral-600">
              Have questions? We've got answers.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-neutral-50 rounded-2xl border border-neutral-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-medium text-neutral-900">{faq.question}</span>
                  <HelpCircle
                    className={`w-5 h-5 text-neutral-400 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-neutral-600 text-sm">{faq.answer}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-neutral-600 mb-4">
            Not sure which plan is right for you?
          </p>
          <Link href="/contact" className="btn-primary btn-lg group">
            Get a Custom Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
