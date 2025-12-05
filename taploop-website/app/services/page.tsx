"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Workflow,
  Phone,
  Users,
  Database,
  MessageSquare,
  Calendar,
  ArrowRight,
  CheckCircle,
  Zap,
  Bot,
  Globe,
  Cog,
  BarChart3,
  Shield,
} from "lucide-react";

const services = [
  {
    id: "workflows",
    icon: Workflow,
    title: "AI Workflow Automation",
    subtitle: "Eliminate repetitive tasks with intelligent workflows",
    description:
      "We build custom automation workflows using n8n, Make, and Zapier that handle complex business processes automatically. From data entry to multi-step approval flows, we automate the work that's eating up your team's time.",
    benefits: [
      "Reduce manual data entry by 80%+",
      "Eliminate human error in repetitive tasks",
      "Scale operations without adding staff",
      "Real-time data sync across all tools",
    ],
    capabilities: [
      "Multi-step workflow automation",
      "Conditional logic and branching",
      "Error handling and retry logic",
      "Real-time monitoring and alerts",
      "Custom integrations with any API",
      "Scheduled and triggered workflows",
    ],
    tools: ["n8n", "Make", "Zapier", "Custom APIs"],
    color: "tap",
  },
  {
    id: "voice",
    icon: Phone,
    title: "AI Voice Agents",
    subtitle: "24/7 intelligent phone agents that never miss a call",
    description:
      "Deploy AI-powered phone agents that answer calls, qualify leads, book appointments, and handle customer inquiries with natural, human-like conversations. Built on Retell and Vapi with custom training for your business.",
    benefits: [
      "Never miss a call, day or night",
      "Qualify leads before they reach your team",
      "Reduce hold times to zero",
      "Consistent customer experience every time",
    ],
    capabilities: [
      "Natural language understanding",
      "Custom voice and personality training",
      "Real-time CRM updates",
      "Warm transfer to live agents",
      "Appointment booking integration",
      "Multi-language support",
    ],
    tools: ["Retell AI", "Vapi", "ElevenLabs", "OpenAI"],
    color: "accent",
  },
  {
    id: "crm",
    icon: Users,
    title: "CRM & Lead Automation",
    subtitle: "Smart lead management that converts more customers",
    description:
      "Transform your sales pipeline with intelligent lead scoring, automated nurture sequences, and smart routing. We integrate with your CRM to ensure no lead falls through the cracks and your team focuses on the hottest prospects.",
    benefits: [
      "3x faster lead response times",
      "Automated lead scoring and qualification",
      "Personalized nurture sequences at scale",
      "Higher conversion rates, less manual work",
    ],
    capabilities: [
      "Lead scoring and prioritization",
      "Automated follow-up sequences",
      "Smart lead routing and assignment",
      "Pipeline stage automation",
      "Activity tracking and alerts",
      "Integration with any CRM",
    ],
    tools: ["HubSpot", "Salesforce", "GoHighLevel", "Zoho"],
    color: "violet",
  },
  {
    id: "data",
    icon: Database,
    title: "Data Pipelines & Reporting",
    subtitle: "Turn scattered data into actionable intelligence",
    description:
      "We build automated data pipelines that collect, transform, and visualize your business data. Get real-time dashboards and reports that give you the insights you need to make better decisions faster.",
    benefits: [
      "Single source of truth for all data",
      "Real-time dashboards and KPIs",
      "Automated report generation",
      "Data-driven decision making",
    ],
    capabilities: [
      "ETL pipeline automation",
      "Data cleaning and transformation",
      "Custom dashboard creation",
      "Automated report scheduling",
      "Cross-platform data sync",
      "Historical data analysis",
    ],
    tools: ["Apify", "Airtable", "Google Sheets", "Custom APIs"],
    color: "amber",
  },
  {
    id: "chat",
    icon: MessageSquare,
    title: "AI Chat Agents",
    subtitle: "Engage website visitors around the clock",
    description:
      "Deploy intelligent chatbots on your website and messaging platforms that engage visitors, answer questions, capture leads, and route conversations to the right team members. Natural conversations that feel human, not robotic.",
    benefits: [
      "24/7 website engagement",
      "Instant response to visitor questions",
      "Qualified leads delivered to your inbox",
      "Reduced support ticket volume",
    ],
    capabilities: [
      "Website and social media integration",
      "Custom knowledge base training",
      "Lead capture and qualification",
      "Smart handoff to human agents",
      "Conversation analytics",
      "Multi-channel deployment",
    ],
    tools: ["OpenAI", "Custom LLMs", "Intercom", "Drift"],
    color: "rose",
  },
  {
    id: "calendar",
    icon: Calendar,
    title: "Calendar & Scheduling",
    subtitle: "Automate bookings, reminders, and no-show recovery",
    description:
      "Intelligent scheduling automation that handles appointment booking, sends smart reminders, manages rescheduling, and automatically follows up on no-shows. Keep your calendar full without the manual work.",
    benefits: [
      "60%+ reduction in no-shows",
      "Zero scheduling conflicts",
      "Automated waitlist management",
      "Time saved on manual coordination",
    ],
    capabilities: [
      "Online booking integration",
      "Smart reminder sequences",
      "Automated rescheduling",
      "No-show follow-up campaigns",
      "Calendar sync across platforms",
      "Waitlist automation",
    ],
    tools: ["Calendly", "Cal.com", "Google Calendar", "Custom APIs"],
    color: "emerald",
  },
];

const colorClasses: Record<string, { bg: string; light: string; text: string; gradient: string }> = {
  tap: {
    bg: "bg-tap-500",
    light: "bg-tap-50",
    text: "text-tap-600",
    gradient: "from-tap-500 to-tap-600",
  },
  accent: {
    bg: "bg-accent-500",
    light: "bg-accent-50",
    text: "text-accent-600",
    gradient: "from-accent-500 to-accent-600",
  },
  violet: {
    bg: "bg-violet-500",
    light: "bg-violet-50",
    text: "text-violet-600",
    gradient: "from-violet-500 to-violet-600",
  },
  amber: {
    bg: "bg-amber-500",
    light: "bg-amber-50",
    text: "text-amber-600",
    gradient: "from-amber-500 to-amber-600",
  },
  rose: {
    bg: "bg-rose-500",
    light: "bg-rose-50",
    text: "text-rose-600",
    gradient: "from-rose-500 to-rose-600",
  },
  emerald: {
    bg: "bg-emerald-500",
    light: "bg-emerald-50",
    text: "text-emerald-600",
    gradient: "from-emerald-500 to-emerald-600",
  },
};

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="pt-32 pb-20 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden"
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
              <Cog className="w-4 h-4 text-tap-600" />
              <span className="text-sm font-medium text-tap-700">Our Services</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              AI Automation Services Built for{" "}
              <span className="text-gradient">Real Results</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-8">
              From intelligent workflows to AI voice agents, we build the automation systems that transform how your business operates.
            </p>
            <Link href="/contact" className="btn-primary btn-lg group">
              Get a Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Sections */}
      {services.map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}

      {/* Bottom CTA */}
      <section className="section bg-neutral-950 text-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-lg text-neutral-400 mb-8">
              Book a free strategy call and discover which automation services are right for your business.
            </p>
            <Link href="/contact" className="btn bg-white text-neutral-900 hover:bg-neutral-100 btn-lg group">
              Book Your Free Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceSection({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const colors = colorClasses[service.color];
  const isEven = index % 2 === 0;

  return (
    <section
      ref={sectionRef}
      id={service.id}
      className={`section ${isEven ? "bg-white" : "bg-neutral-50"}`}
    >
      <div className="container-wide">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            isEven ? "" : "lg:flex-row-reverse"
          }`}
        >
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className={isEven ? "" : "lg:order-2"}
          >
            <div
              className={`w-14 h-14 rounded-2xl ${colors.light} flex items-center justify-center mb-6`}
            >
              <service.icon className={`w-7 h-7 ${colors.text}`} />
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
              {service.title}
            </h2>
            <p className={`text-lg ${colors.text} font-medium mb-4`}>
              {service.subtitle}
            </p>
            <p className="text-neutral-600 mb-8 text-lg">{service.description}</p>

            {/* Benefits */}
            <div className="space-y-3 mb-8">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className={`w-5 h-5 ${colors.text} shrink-0 mt-0.5`} />
                  <span className="text-neutral-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Tools */}
            <div className="flex flex-wrap gap-2 mb-8">
              {service.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 bg-neutral-100 text-neutral-600 text-sm font-medium rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>

            <Link href="/contact" className="btn-primary btn-lg group">
              Get Started with {service.title.split(" ")[0]}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Capabilities Card */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 20 : -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={isEven ? "" : "lg:order-1"}
          >
            <div
              className={`bg-gradient-to-br ${colors.gradient} rounded-3xl p-8 md:p-10 text-white`}
            >
              <h3 className="font-display text-xl font-bold mb-6">What We Build</h3>
              <div className="grid gap-4">
                {service.capabilities.map((capability, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
