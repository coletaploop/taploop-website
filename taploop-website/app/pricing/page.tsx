"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Check,
  X,
  ArrowRight,
  Sparkles,
  Zap,
  Building,
  HelpCircle,
  Calculator,
  Plus,
  Minus,
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses ready to automate their first workflows.",
    price: "2,500",
    priceNote: "one-time setup fee",
    monthlyFee: "$297",
    monthlyNote: "per month",
    icon: Zap,
    features: [
      { name: "Up to 3 automated workflows", included: true },
      { name: "1 AI voice or chat agent", included: true },
      { name: "Basic CRM integration", included: true },
      { name: "Email & SMS automation", included: true },
      { name: "30-day priority support", included: true },
      { name: "Basic reporting dashboard", included: true },
      { name: "Custom API integrations", included: false },
      { name: "Advanced analytics", included: false },
      { name: "Dedicated project manager", included: false },
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    description: "For businesses scaling operations with comprehensive automation.",
    price: "7,500",
    priceNote: "one-time setup fee",
    monthlyFee: "$597",
    monthlyNote: "per month",
    icon: Sparkles,
    features: [
      { name: "Up to 10 automated workflows", included: true },
      { name: "3 AI voice or chat agents", included: true },
      { name: "Advanced CRM integration", included: true },
      { name: "Multi-channel automation", included: true },
      { name: "90-day priority support", included: true },
      { name: "Custom reporting & analytics", included: true },
      { name: "Custom API integrations", included: true },
      { name: "Dedicated project manager", included: true },
      { name: "Monthly optimization calls", included: true },
    ],
    cta: "Most Popular",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Full-scale automation for larger organizations.",
    price: "Custom",
    priceNote: "tailored to your needs",
    monthlyFee: "Custom",
    monthlyNote: "based on scope",
    icon: Building,
    features: [
      { name: "Unlimited workflows", included: true },
      { name: "Unlimited AI agents", included: true },
      { name: "Enterprise-grade security", included: true },
      { name: "Custom integrations & APIs", included: true },
      { name: "24/7 priority support", included: true },
      { name: "Dedicated success team", included: true },
      { name: "SLA guarantees", included: true },
      { name: "On-site training available", included: true },
      { name: "Quarterly business reviews", included: true },
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const addOns = [
  {
    name: "Additional Workflow",
    price: "$500",
    description: "Add another automated workflow to your plan",
  },
  {
    name: "Additional AI Agent",
    price: "$1,000",
    description: "Deploy another voice or chat agent",
  },
  {
    name: "Custom Integration",
    price: "$750+",
    description: "Connect a new tool or platform",
  },
  {
    name: "Priority Support Upgrade",
    price: "$200/mo",
    description: "Get same-day response guarantee",
  },
];

const faqs = [
  {
    question: "What's included in the monthly fee?",
    answer:
      "The monthly fee covers hosting, monitoring, maintenance, API costs (within reasonable limits), and support. It ensures your automations run 24/7 without any additional hidden costs.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Most Starter projects are completed in 1-2 weeks. Growth projects typically take 2-4 weeks. Enterprise implementations vary based on scope but usually 4-8 weeks. We'll provide an accurate timeline during the discovery call.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Absolutely! You can upgrade at any time. We'll simply add the additional features and adjust your monthly fee accordingly. Many clients start with Starter and upgrade to Growth as they see results.",
  },
  {
    question: "What if I need changes after launch?",
    answer:
      "Minor tweaks and optimizations are included in your monthly plan. Larger changes or new workflows are quoted separately, typically at 40-50% of initial build costs since we already understand your systems.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We offer a 2-week satisfaction guarantee. If you're not seeing value within the first 14 days after launch, we'll work with you to fix it or provide a full refund of the setup fee.",
  },
  {
    question: "What happens if something breaks?",
    answer:
      "Our monitoring systems catch issues before you even notice them. If something does break, we fix it immediately—usually within hours—at no additional cost. That's what the monthly fee is for.",
  },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="pt-32 pb-16 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tap-50 border border-tap-100 mb-6">
              <Calculator className="w-4 h-4 text-tap-600" />
              <span className="text-sm font-medium text-tap-700">Pricing</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg md:text-xl text-neutral-600">
              No hidden fees. No surprise costs. Just clear pricing for automation that delivers measurable ROI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-sm bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-3xl ${
                  plan.popular
                    ? "bg-gradient-to-b from-tap-600 to-tap-700 text-white scale-105 shadow-glow-md z-10"
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
                    className={`font-display text-2xl font-bold mb-2 ${
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

                  {/* Setup Fee */}
                  <div className="mb-4">
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
                  </div>

                  {/* Monthly Fee */}
                  <div
                    className={`mb-8 pb-8 border-b ${
                      plan.popular ? "border-white/20" : "border-neutral-200"
                    }`}
                  >
                    <div className="flex items-baseline gap-2">
                      <span
                        className={`font-display text-2xl font-bold ${
                          plan.popular ? "text-white" : "text-neutral-900"
                        }`}
                      >
                        {plan.monthlyFee}
                      </span>
                      <span
                        className={`text-sm ${plan.popular ? "text-white/60" : "text-neutral-500"}`}
                      >
                        {plan.monthlyNote}
                      </span>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className={`btn btn-lg w-full mb-8 ${
                      plan.popular
                        ? "bg-white text-tap-700 hover:bg-neutral-100"
                        : "btn-primary"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check
                            className={`w-5 h-5 shrink-0 ${
                              plan.popular ? "text-accent-400" : "text-accent-500"
                            }`}
                          />
                        ) : (
                          <X
                            className={`w-5 h-5 shrink-0 ${
                              plan.popular ? "text-white/30" : "text-neutral-300"
                            }`}
                          />
                        )}
                        <span
                          className={`text-sm ${
                            feature.included
                              ? plan.popular
                                ? "text-white/90"
                                : "text-neutral-700"
                              : plan.popular
                              ? "text-white/40"
                              : "text-neutral-400"
                          }`}
                        >
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="section bg-neutral-50">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Add-Ons & Extras
            </h2>
            <p className="text-lg text-neutral-600">
              Need more? Customize your plan with additional features.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-neutral-200 p-6"
              >
                <div className="font-display text-2xl font-bold text-tap-600 mb-2">
                  {addon.price}
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">{addon.name}</h3>
                <p className="text-sm text-neutral-500">{addon.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Pricing Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-neutral-50 rounded-2xl border border-neutral-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-neutral-100 transition-colors"
                >
                  <span className="font-medium text-neutral-900">{faq.question}</span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      openFaq === index
                        ? "bg-tap-500 text-white"
                        : "bg-neutral-200 text-neutral-500"
                    }`}
                  >
                    {openFaq === index ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-neutral-600">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-tap-600 text-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Book a free strategy call and get a custom quote for your business.
            </p>
            <Link
              href="/contact"
              className="btn bg-white text-tap-700 hover:bg-neutral-100 btn-lg group"
            >
              Book Your Free Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
