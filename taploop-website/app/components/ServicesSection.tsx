"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Workflow,
  Phone,
  Users,
  Database,
  Bot,
  Calendar,
  ArrowRight,
  Zap,
  MessageSquare,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    description:
      "Custom n8n, Make, and Zapier workflows that automate repetitive tasks, data entry, and complex business processes.",
    features: ["Multi-step automation", "Error handling", "Real-time sync"],
    color: "from-tap-500 to-tap-600",
    bgColor: "bg-tap-50",
    href: "/services#workflows",
  },
  {
    icon: Phone,
    title: "AI Voice Agents",
    description:
      "Intelligent phone agents powered by Retell and Vapi that handle inbound calls, qualify leads, and book appointments 24/7.",
    features: ["Natural conversations", "Call routing", "CRM integration"],
    color: "from-accent-500 to-accent-600",
    bgColor: "bg-accent-50",
    href: "/services#voice",
  },
  {
    icon: Users,
    title: "CRM & Lead Systems",
    description:
      "Smart lead qualification systems that score, route, and nurture prospects automatically through your sales pipeline.",
    features: ["Lead scoring", "Auto-assignment", "Follow-up sequences"],
    color: "from-violet-500 to-violet-600",
    bgColor: "bg-violet-50",
    href: "/services#crm",
  },
  {
    icon: Database,
    title: "Data Pipelines",
    description:
      "Automated data collection, transformation, and reporting dashboards that give you real-time business intelligence.",
    features: ["ETL automation", "Live dashboards", "Custom reports"],
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
    href: "/services#data",
  },
  {
    icon: MessageSquare,
    title: "AI Chat Agents",
    description:
      "Conversational AI chatbots for websites and messaging platforms that engage visitors and capture leads around the clock.",
    features: ["Multi-channel", "Smart handoff", "Conversation memory"],
    color: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-50",
    href: "/services#chat",
  },
  {
    icon: Calendar,
    title: "Calendar & Scheduling",
    description:
      "Intelligent scheduling automation that handles bookings, reminders, rescheduling, and no-show follow-ups automatically.",
    features: ["Auto-booking", "Smart reminders", "No-show recovery"],
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
    href: "/services#calendar",
  },
];

const stats = [
  { value: "40-60%", label: "Cost Reduction" },
  { value: "24/7", label: "Availability" },
  { value: "2-4 Weeks", label: "Deployment Time" },
  { value: "10x", label: "Output Increase" },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section ref={sectionRef} className="section bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
      
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tap-50 border border-tap-100 mb-6">
            <Zap className="w-4 h-4 text-tap-600" />
            <span className="text-sm font-medium text-tap-700">Our Services</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            End-to-End AI Automation Solutions
          </h2>
          <p className="text-lg text-neutral-600">
            From workflow automation to intelligent voice agents, we build the systems that let your business run on autopilot.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 p-6 md:p-8 bg-neutral-50 rounded-2xl border border-neutral-100"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-2xl md:text-3xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-neutral-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link
                href={service.href}
                className="group block h-full card-elevated p-6 md:p-8"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon
                    className={`w-7 h-7 bg-gradient-to-br ${service.color} bg-clip-text`}
                    style={{
                      color: service.color.includes("tap")
                        ? "#0c8ce9"
                        : service.color.includes("accent")
                        ? "#06c7b0"
                        : service.color.includes("violet")
                        ? "#8b5cf6"
                        : service.color.includes("amber")
                        ? "#f59e0b"
                        : service.color.includes("rose")
                        ? "#f43f5e"
                        : "#10b981",
                    }}
                  />
                </div>

                <h3 className="font-display text-xl font-semibold text-neutral-900 mb-3 group-hover:text-tap-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-neutral-600 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-3 py-1 text-xs font-medium bg-neutral-100 text-neutral-600 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-tap-600 group-hover:gap-3 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-neutral-600 mb-6">
            Not sure which service is right for you?
          </p>
          <Link href="/contact" className="btn-primary btn-lg group">
            Get a Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
