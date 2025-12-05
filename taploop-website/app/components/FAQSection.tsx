"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { HelpCircle, Plus, Minus, MessageSquare } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What exactly does TapLoop do?",
        answer:
          "TapLoop is an AI automation agency. We design, build, and deploy custom automation systems for businesses—including AI workflows, voice agents, CRM integrations, data pipelines, and more. Our goal is to help you reduce manual work, increase efficiency, and scale operations without adding headcount.",
      },
      {
        question: "What types of businesses do you work with?",
        answer:
          "We specialize in small to mid-sized businesses where automation has the highest impact: real estate teams, healthcare & dental practices, home service companies (HVAC, plumbing, etc.), solar installers, coaches & educators, and agencies. If repetitive tasks are eating up your team's time, we can help.",
      },
      {
        question: "How is TapLoop different from hiring a developer?",
        answer:
          "We're not just developers—we're automation strategists. We understand business processes, not just code. Our team designs solutions around your actual workflows and goals, not just technical requirements. Plus, we handle everything from strategy to ongoing support, so you don't need to manage multiple contractors.",
      },
    ],
  },
  {
    category: "Process & Timeline",
    questions: [
      {
        question: "How long does it take to implement automations?",
        answer:
          "Most projects go from kickoff to deployment in 2-4 weeks. Simple automations can be live in days, while complex enterprise systems may take 6-8 weeks. During the discovery call, we'll give you an accurate timeline based on your specific needs.",
      },
      {
        question: "Will automation disrupt our current operations?",
        answer:
          "No. We design our implementation process to be non-disruptive. We work alongside your existing systems, test thoroughly before going live, and can do phased rollouts if needed. Your team will barely notice the transition—except for all the time they'll save.",
      },
      {
        question: "What happens after the automation goes live?",
        answer:
          "We don't disappear after launch. Your monthly plan includes monitoring, maintenance, and support. We track performance, fix issues proactively, and optimize your automations over time. You'll also have access to our support team for questions and minor adjustments.",
      },
    ],
  },
  {
    category: "Technical",
    questions: [
      {
        question: "What tools and platforms do you use?",
        answer:
          "We build on industry-leading platforms including n8n, Make (formerly Integromat), Zapier, Retell AI, Vapi, OpenAI, ElevenLabs, and custom APIs. We choose tools based on your specific needs, existing tech stack, and budget—not a one-size-fits-all approach.",
      },
      {
        question: "Can you integrate with our existing CRM/tools?",
        answer:
          "Almost certainly yes. We've integrated with hundreds of tools including Salesforce, HubSpot, GoHighLevel, Zoho, Google Workspace, Microsoft 365, Slack, and countless others. If there's an API or webhook, we can connect it.",
      },
      {
        question: "Is our data secure?",
        answer:
          "Absolutely. We follow industry best practices for data security. For healthcare clients, we ensure HIPAA compliance. All data is encrypted in transit and at rest, and we never access or store sensitive information unnecessarily. We're happy to sign BAAs and NDAs.",
      },
    ],
  },
  {
    category: "Pricing & ROI",
    questions: [
      {
        question: "How do you price your services?",
        answer:
          "We charge a one-time setup fee based on project complexity, plus a monthly fee for hosting, maintenance, and support. Starter projects begin at $2,500 setup + $297/mo. Growth packages start at $7,500 setup + $597/mo. We provide detailed quotes during the discovery call.",
      },
      {
        question: "What kind of ROI can I expect?",
        answer:
          "Most clients see positive ROI within the first 1-3 months. Typical results include 40-60% reduction in manual task time, 2-3x increase in lead response speed, 50%+ reduction in no-shows, and significant cost savings from reduced staffing needs. We'll project your specific ROI during the strategy call.",
      },
      {
        question: "Do you offer any guarantees?",
        answer:
          "Yes. We offer a 2-week satisfaction guarantee. If you're not seeing value from your automation within 14 days of launch, we'll work with you to fix it or provide a full refund. We stand behind our work because we're confident in our results.",
      },
    ],
  },
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section ref={sectionRef} className="section bg-neutral-50 relative overflow-hidden">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 mb-6">
            <HelpCircle className="w-4 h-4 text-tap-600" />
            <span className="text-sm font-medium text-neutral-600">FAQ</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-neutral-600">
            Everything you need to know about working with TapLoop. Can't find what you're looking for?{" "}
            <Link href="/contact" className="text-tap-600 hover:text-tap-700 underline">
              Get in touch
            </Link>
            .
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="font-display text-lg font-semibold text-neutral-900 mb-4">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.questions.map((faq, faqIndex) => {
                  const itemId = `${categoryIndex}-${faqIndex}`;
                  const isOpen = openItems.has(itemId);

                  return (
                    <div
                      key={faqIndex}
                      className="bg-white rounded-xl border border-neutral-200 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(itemId)}
                        className="w-full flex items-start justify-between gap-4 p-5 text-left hover:bg-neutral-50 transition-colors"
                      >
                        <span className="font-medium text-neutral-900 text-sm">
                          {faq.question}
                        </span>
                        <span
                          className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                            isOpen ? "bg-tap-500 text-white" : "bg-neutral-100 text-neutral-500"
                          }`}
                        >
                          {isOpen ? (
                            <Minus className="w-4 h-4" />
                          ) : (
                            <Plus className="w-4 h-4" />
                          )}
                        </span>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-5 pb-5">
                              <p className="text-neutral-600 text-sm leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still have questions? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white rounded-2xl border border-neutral-200">
            <div className="w-12 h-12 rounded-xl bg-tap-50 flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-tap-600" />
            </div>
            <div className="text-center sm:text-left">
              <div className="font-medium text-neutral-900">Still have questions?</div>
              <div className="text-sm text-neutral-500">
                We'd love to hear from you
              </div>
            </div>
            <Link href="/contact" className="btn-primary btn-md">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
