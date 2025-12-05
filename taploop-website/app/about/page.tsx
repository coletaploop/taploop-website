"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Target,
  Heart,
  Zap,
  Users,
  Award,
  Lightbulb,
  Sparkles,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Results-Obsessed",
    description:
      "We don't measure success by hours worked or features shipped. We measure it by the real business impact we create for our clients.",
  },
  {
    icon: Heart,
    title: "Client Partnership",
    description:
      "We're not just vendors—we're partners in your success. Your goals become our goals, and we're invested in your long-term growth.",
  },
  {
    icon: Zap,
    title: "Speed & Quality",
    description:
      "Fast doesn't mean sloppy. We move quickly without cutting corners, delivering production-ready automation in weeks, not months.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    description:
      "AI and automation evolve rapidly. We stay on the cutting edge so your business always has access to the best tools and techniques.",
  },
];

const stats = [
  { value: "50+", label: "Businesses Automated" },
  { value: "500+", label: "Workflows Deployed" },
  { value: "10M+", label: "Tasks Automated" },
  { value: "98%", label: "Client Satisfaction" },
];

const team = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    bio: "Former automation lead at a Fortune 500. 10+ years building systems that scale.",
  },
  {
    name: "Sarah Martinez",
    role: "Head of Delivery",
    bio: "Operations expert with a passion for eliminating inefficiency and delighting clients.",
  },
  {
    name: "Michael Park",
    role: "Lead Engineer",
    bio: "Full-stack developer specializing in AI integration and workflow automation.",
  },
  {
    name: "Emily Johnson",
    role: "Client Success",
    bio: "Ensures every client gets maximum value from their automation investment.",
  },
];

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const valuesRef = useRef<HTMLDivElement>(null);
  const isValuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

  const teamRef = useRef<HTMLDivElement>(null);
  const isTeamInView = useInView(teamRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="pt-32 pb-20 bg-gradient-to-b from-tap-50/50 to-white relative overflow-hidden"
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
              <Users className="w-4 h-4 text-tap-600" />
              <span className="text-sm font-medium text-tap-700">About Us</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              We Build the Systems That Build Your Business
            </h1>
            <p className="text-lg md:text-xl text-neutral-600">
              TapLoop is an AI automation agency on a mission to help small and mid-sized businesses compete with enterprise-level efficiency—without enterprise-level budgets or headcount.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section bg-white">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="font-display text-3xl font-bold text-neutral-900 mb-6">
              Our Story
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed mb-6">
              TapLoop was born from a simple observation: the businesses that needed automation the most were the ones least likely to get it.
            </p>
            <p className="text-neutral-600 text-lg leading-relaxed mb-6">
              Enterprise companies have entire teams dedicated to process optimization and technology. Small and mid-sized businesses? They're stuck with manual processes, scattered tools, and employees stretched thin trying to do it all.
            </p>
            <p className="text-neutral-600 text-lg leading-relaxed mb-6">
              We started TapLoop to change that. By combining deep expertise in AI and automation with a laser focus on practical business outcomes, we help growing businesses unlock the same operational advantages that used to be reserved for the Fortune 500.
            </p>
            <p className="text-neutral-600 text-lg leading-relaxed">
              Today, we've helped dozens of businesses across real estate, healthcare, home services, and education automate millions of tasks—saving countless hours and enabling growth that would have been impossible otherwise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-neutral-950 text-white">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="section bg-neutral-50">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              What We Stand For
            </h2>
            <p className="text-lg text-neutral-600">
              Our values guide every decision we make and every automation we build.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-neutral-200 p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-tap-50 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-tap-600" />
                </div>
                <h3 className="font-display text-xl font-semibold text-neutral-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-neutral-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="section bg-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Meet the Team
            </h2>
            <p className="text-lg text-neutral-600">
              A small but mighty team of automation experts, engineers, and client success specialists.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-tap-500 to-accent-500 flex items-center justify-center text-3xl font-bold text-white mx-auto mb-4">
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-display font-semibold text-neutral-900">
                  {member.name}
                </h3>
                <p className="text-sm text-tap-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-neutral-500">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-tap-600 text-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles className="w-12 h-12 mx-auto mb-6 text-accent-400" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Let's talk about how TapLoop can help automate your business and unlock your next phase of growth.
            </p>
            <Link
              href="/contact"
              className="btn bg-white text-tap-700 hover:bg-neutral-100 btn-lg group"
            >
              Book a Strategy Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
