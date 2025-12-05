"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Stethoscope,
  Home,
  TrendingUp,
  Clock,
  Users,
  DollarSign,
  Quote,
  CheckCircle,
} from "lucide-react";

const caseStudies = [
  {
    id: "premier-real-estate",
    company: "Premier Real Estate Group",
    industry: "Real Estate",
    icon: Building2,
    logo: null,
    headline: "3x Appointment Bookings with AI Lead Response",
    summary:
      "How a 15-agent real estate team went from losing leads to booking 3x more appointments by implementing 24/7 AI-powered lead response.",
    challenge:
      "Premier Real Estate Group was struggling with lead response times. With agents juggling showings, listings, and client calls, new leads often waited hours—or even days—for a response. They estimated they were losing 40% of leads to faster-responding competitors.",
    solution:
      "We implemented a comprehensive lead automation system including AI voice agents for inbound calls, instant text/email response sequences, smart lead qualification, and automated appointment booking directly into agent calendars.",
    implementation: [
      "Deployed AI voice agent for after-hours and overflow calls",
      "Built instant lead response system (under 30 seconds)",
      "Created smart lead scoring based on timeline and budget",
      "Integrated with their CRM for seamless handoff",
      "Set up automated nurture sequences for long-term leads",
    ],
    results: [
      { metric: "3x", label: "Appointments booked" },
      { metric: "85%", label: "Faster response time" },
      { metric: "40%", label: "Reduction in lost leads" },
      { metric: "$180K", label: "Additional GCI in year one" },
    ],
    timeline: "3 weeks to full deployment",
    testimonial: {
      quote:
        "TapLoop completely transformed how we handle leads. We went from losing 40% of inquiries to responding within 30 seconds, 24/7. Our bookings are up 3x and the leads don't even realize they're talking to AI until we tell them.",
      author: "Sarah Mitchell",
      role: "Operations Director",
    },
    color: "tap",
  },
  {
    id: "smile-dental-care",
    company: "Smile Dental Care",
    industry: "Dental",
    icon: Stethoscope,
    logo: null,
    headline: "68% Reduction in No-Shows with Smart Automation",
    summary:
      "A busy dental practice cut their no-show rate from 25% to under 8% while freeing up front desk staff for higher-value tasks.",
    challenge:
      "Smile Dental Care was losing thousands of dollars monthly to no-shows and last-minute cancellations. Their front desk was spending hours making confirmation calls, often reaching voicemail. When patients did cancel, they had no efficient way to fill the slots.",
    solution:
      "We built a multi-channel appointment reminder system with smart escalation, an automated waitlist management system that instantly notifies patients when slots open, and AI phone agents to handle rescheduling requests.",
    implementation: [
      "Deployed multi-touch reminder sequence (48hr, 24hr, 2hr)",
      "Built smart waitlist with automatic slot-filling",
      "Created AI agent for rescheduling calls",
      "Integrated with their practice management software",
      "Set up automated hygiene recall campaigns",
    ],
    results: [
      { metric: "68%", label: "Reduction in no-shows" },
      { metric: "4 hrs", label: "Saved daily per staff" },
      { metric: "95%", label: "Schedule utilization" },
      { metric: "$8K", label: "Monthly revenue recovered" },
    ],
    timeline: "2 weeks to full deployment",
    testimonial: {
      quote:
        "The no-show rate at our practice dropped from 25% to under 8% within the first month. The automated reminders and rescheduling system paid for itself in the first week. Game-changer.",
      author: "Dr. James Chen",
      role: "Practice Owner",
    },
    color: "accent",
  },
  {
    id: "thompson-hvac",
    company: "Thompson HVAC Services",
    industry: "Home Services",
    icon: Home,
    logo: null,
    headline: "40% Revenue Increase Without New Hires",
    summary:
      "A family-owned HVAC company doubled their job bookings and increased revenue 40% by automating lead capture and customer communication.",
    challenge:
      "Thompson HVAC was missing countless calls while technicians were on service calls. With no dedicated dispatcher, the owner was trying to answer calls between jobs—leading to missed opportunities and frustrated customers. They also struggled with collecting payments and reviews.",
    solution:
      "We deployed 24/7 AI phone agents to capture and qualify leads, built automated dispatch notifications, created smart invoicing workflows with payment reminders, and set up automated review requests.",
    implementation: [
      "Deployed AI phone agent for 24/7 call handling",
      "Built automated lead qualification and job booking",
      "Created dispatch notification system for technicians",
      "Set up automated invoicing and payment reminders",
      "Implemented post-service review request automation",
    ],
    results: [
      { metric: "2x", label: "Jobs booked" },
      { metric: "40%", label: "Revenue increase" },
      { metric: "50%", label: "Faster payments" },
      { metric: "4.8★", label: "Google rating (from 3.9)" },
    ],
    timeline: "3 weeks to full deployment",
    testimonial: {
      quote:
        "Our technicians were missing calls while on jobs. Now every call gets answered, qualified, and scheduled automatically. Our revenue increased 40% without hiring a single new dispatcher.",
      author: "Mike Thompson",
      role: "Owner",
    },
    color: "amber",
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
  amber: {
    bg: "bg-amber-500",
    light: "bg-amber-50",
    text: "text-amber-600",
    gradient: "from-amber-500 to-amber-600",
  },
};

export default function CaseStudiesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <>
      {/* Hero */}
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
              <TrendingUp className="w-4 h-4 text-tap-600" />
              <span className="text-sm font-medium text-tap-700">Case Studies</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Real Results from Real Businesses
            </h1>
            <p className="text-lg md:text-xl text-neutral-600">
              See how companies like yours are transforming their operations and accelerating growth with TapLoop automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="section-sm bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <a
                  href={`#${study.id}`}
                  className="block h-full card-elevated p-6 group"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${colorClasses[study.color].light} flex items-center justify-center mb-4`}
                  >
                    <study.icon className={`w-6 h-6 ${colorClasses[study.color].text}`} />
                  </div>
                  <div className="text-sm text-neutral-500 mb-2">{study.industry}</div>
                  <h3 className="font-display text-xl font-bold text-neutral-900 mb-3 group-hover:text-tap-600 transition-colors">
                    {study.headline}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4">{study.summary}</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-tap-600">
                    Read Case Study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Case Studies */}
      {caseStudies.map((study, index) => (
        <CaseStudyDetail key={study.id} study={study} index={index} />
      ))}

      {/* CTA */}
      <section className="section bg-tap-600 text-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Book a free strategy call and see how TapLoop can transform your business.
            </p>
            <Link
              href="/contact"
              className="btn bg-white text-tap-700 hover:bg-neutral-100 btn-lg group"
            >
              Book Your Free Strategy Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function CaseStudyDetail({
  study,
  index,
}: {
  study: (typeof caseStudies)[0];
  index: number;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const colors = colorClasses[study.color];

  return (
    <section
      ref={sectionRef}
      id={study.id}
      className={`section ${index % 2 === 0 ? "bg-neutral-50" : "bg-white"}`}
    >
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-10 h-10 rounded-lg ${colors.light} flex items-center justify-center`}>
              <study.icon className={`w-5 h-5 ${colors.text}`} />
            </div>
            <div>
              <div className="font-display font-semibold text-neutral-900">
                {study.company}
              </div>
              <div className="text-sm text-neutral-500">{study.industry}</div>
            </div>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            {study.headline}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="font-display text-xl font-bold text-neutral-900 mb-4">
                The Challenge
              </h3>
              <p className="text-neutral-600 leading-relaxed">{study.challenge}</p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-display text-xl font-bold text-neutral-900 mb-4">
                The Solution
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-6">{study.solution}</p>
              <div className="space-y-3">
                {study.implementation.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className={`w-5 h-5 ${colors.text} shrink-0 mt-0.5`} />
                    <span className="text-neutral-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`p-8 rounded-2xl ${colors.light} border ${colors.text.replace('text', 'border')}/20`}
            >
              <Quote className={`w-10 h-10 ${colors.text} opacity-30 mb-4`} />
              <p className="text-lg text-neutral-700 italic mb-4">
                "{study.testimonial.quote}"
              </p>
              <div>
                <div className="font-semibold text-neutral-900">
                  {study.testimonial.author}
                </div>
                <div className="text-sm text-neutral-500">{study.testimonial.role}</div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar - Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="sticky top-32">
              <div className={`p-8 rounded-2xl bg-gradient-to-br ${colors.gradient} text-white`}>
                <h3 className="font-display text-xl font-bold mb-6">Results</h3>
                <div className="space-y-6">
                  {study.results.map((result, i) => (
                    <div key={i}>
                      <div className="font-display text-3xl font-bold">{result.metric}</div>
                      <div className="text-sm text-white/80">{result.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <Clock className="w-4 h-4" />
                    {study.timeline}
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="btn bg-neutral-900 text-white hover:bg-neutral-800 btn-lg w-full mt-6"
              >
                Get Similar Results
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
