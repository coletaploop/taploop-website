"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Home,
  Building2,
  Stethoscope,
  Sun,
  GraduationCap,
  Smile,
  ArrowRight,
  CheckCircle,
  TrendingUp,
} from "lucide-react";

const useCases = [
  {
    id: "real-estate",
    icon: Building2,
    industry: "Real Estate",
    title: "Real Estate Teams",
    description:
      "Automate lead follow-up, property matching, appointment scheduling, and client communication so agents can focus on closing deals.",
    painPoints: [
      "Leads going cold from slow response times",
      "Hours spent on manual follow-ups",
      "Missed calls and scheduling conflicts",
      "Data scattered across multiple platforms",
    ],
    solutions: [
      "AI voice agents that respond to inquiries in seconds",
      "Automated drip campaigns based on lead behavior",
      "Smart scheduling that syncs across calendars",
      "Unified dashboard for all client interactions",
    ],
    metrics: {
      primary: "3x",
      primaryLabel: "More appointments booked",
      secondary: "85%",
      secondaryLabel: "Faster response time",
    },
    color: "tap",
    href: "/use-cases#real-estate",
  },
  {
    id: "healthcare",
    icon: Stethoscope,
    industry: "Healthcare",
    title: "Doctor & Medical Offices",
    description:
      "Streamline patient intake, appointment reminders, insurance verification, and follow-up care with HIPAA-compliant automation.",
    painPoints: [
      "Staff overwhelmed with phone calls",
      "No-shows and last-minute cancellations",
      "Manual insurance verification delays",
      "Patients falling through the cracks",
    ],
    solutions: [
      "AI phone agents for scheduling and inquiries",
      "Automated reminder sequences that reduce no-shows",
      "Insurance eligibility verification workflows",
      "Patient follow-up and recall automation",
    ],
    metrics: {
      primary: "60%",
      primaryLabel: "Reduction in no-shows",
      secondary: "4hrs",
      secondaryLabel: "Saved daily per staff",
    },
    color: "accent",
    href: "/use-cases#healthcare",
  },
  {
    id: "dental",
    icon: Smile,
    industry: "Dental",
    title: "Dental Offices",
    description:
      "Fill your schedule, automate recalls, and improve patient experience with intelligent automation built for dental practices.",
    painPoints: [
      "Empty slots from last-minute cancellations",
      "Inefficient hygiene recall processes",
      "Time-consuming treatment plan follow-ups",
      "New patient forms and onboarding friction",
    ],
    solutions: [
      "Smart waitlist that fills cancellations instantly",
      "Automated hygiene recall campaigns",
      "Treatment acceptance follow-up sequences",
      "Digital intake and form automation",
    ],
    metrics: {
      primary: "40%",
      primaryLabel: "Increase in case acceptance",
      secondary: "95%",
      secondaryLabel: "Schedule utilization",
    },
    color: "violet",
    href: "/use-cases#dental",
  },
  {
    id: "home-services",
    icon: Home,
    industry: "Home Services",
    title: "Home Service Companies",
    description:
      "Never miss a job request again. Automate dispatch, customer communication, invoicing, and review collection for HVAC, plumbing, and more.",
    painPoints: [
      "Missed calls during busy service hours",
      "Inefficient technician dispatching",
      "Slow invoicing and payment collection",
      "Lack of customer reviews",
    ],
    solutions: [
      "24/7 AI agents that capture and qualify leads",
      "Intelligent dispatch and routing optimization",
      "Automated invoicing and payment reminders",
      "Post-service review request automation",
    ],
    metrics: {
      primary: "2x",
      primaryLabel: "More jobs booked",
      secondary: "50%",
      secondaryLabel: "Faster payments",
    },
    color: "amber",
    href: "/use-cases#home-services",
  },
  {
    id: "coaches",
    icon: GraduationCap,
    industry: "Education",
    title: "Coaches & Educators",
    description:
      "Scale your coaching business without losing the personal touch. Automate enrollment, content delivery, and student engagement.",
    painPoints: [
      "Time spent on administrative tasks",
      "Inconsistent student follow-up",
      "Manual enrollment and onboarding",
      "Difficulty tracking student progress",
    ],
    solutions: [
      "Automated enrollment and payment workflows",
      "Personalized content delivery sequences",
      "AI-powered student engagement tracking",
      "Smart feedback and progress reporting",
    ],
    metrics: {
      primary: "10x",
      primaryLabel: "Students served",
      secondary: "80%",
      secondaryLabel: "Less admin time",
    },
    color: "rose",
    href: "/use-cases#coaches",
  },
  {
    id: "solar",
    icon: Sun,
    industry: "Energy",
    title: "Solar Companies",
    description:
      "Convert more leads into installations with automated proposal generation, follow-up sequences, and project management workflows.",
    painPoints: [
      "Long sales cycles with leads going cold",
      "Complex proposal and contract processes",
      "Permit and installation coordination chaos",
      "Post-installation support bottlenecks",
    ],
    solutions: [
      "AI-powered lead qualification and scoring",
      "Automated proposal generation and follow-up",
      "Project milestone tracking and alerts",
      "Customer portal and support automation",
    ],
    metrics: {
      primary: "45%",
      primaryLabel: "Higher conversion rate",
      secondary: "30%",
      secondaryLabel: "Shorter sales cycle",
    },
    color: "emerald",
    href: "/use-cases#solar",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; light: string }> = {
  tap: { bg: "bg-tap-500", text: "text-tap-600", border: "border-tap-200", light: "bg-tap-50" },
  accent: { bg: "bg-accent-500", text: "text-accent-600", border: "border-accent-200", light: "bg-accent-50" },
  violet: { bg: "bg-violet-500", text: "text-violet-600", border: "border-violet-200", light: "bg-violet-50" },
  amber: { bg: "bg-amber-500", text: "text-amber-600", border: "border-amber-200", light: "bg-amber-50" },
  rose: { bg: "bg-rose-500", text: "text-rose-600", border: "border-rose-200", light: "bg-rose-50" },
  emerald: { bg: "bg-emerald-500", text: "text-emerald-600", border: "border-emerald-200", light: "bg-emerald-50" },
};

export default function UseCasesSection() {
  const [activeTab, setActiveTab] = useState(useCases[0].id);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const activeUseCase = useCases.find((uc) => uc.id === activeTab)!;
  const colors = colorMap[activeUseCase.color];

  return (
    <section ref={sectionRef} className="section bg-neutral-50 relative overflow-hidden">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 mb-6">
            <TrendingUp className="w-4 h-4 text-tap-600" />
            <span className="text-sm font-medium text-neutral-600">Use Cases</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            AI Automation for Your Industry
          </h2>
          <p className="text-lg text-neutral-600">
            See how businesses like yours are using TapLoop to transform their operations and grow faster.
          </p>
        </motion.div>

        {/* Industry Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {useCases.map((useCase) => (
            <button
              key={useCase.id}
              onClick={() => setActiveTab(useCase.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === useCase.id
                  ? `${colorMap[useCase.color].light} ${colorMap[useCase.color].text} ${colorMap[useCase.color].border} border`
                  : "bg-white text-neutral-600 hover:bg-neutral-100 border border-transparent"
              }`}
            >
              <useCase.icon className="w-4 h-4" />
              {useCase.industry}
            </button>
          ))}
        </motion.div>

        {/* Active Use Case Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-soft"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Column - Content */}
              <div className="p-8 md:p-12">
                <div
                  className={`w-14 h-14 rounded-2xl ${colors.light} flex items-center justify-center mb-6`}
                >
                  <activeUseCase.icon className={`w-7 h-7 ${colors.text}`} />
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                  {activeUseCase.title}
                </h3>

                <p className="text-neutral-600 mb-8 text-lg">
                  {activeUseCase.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-8 p-6 bg-neutral-50 rounded-2xl">
                  <div>
                    <div className={`font-display text-3xl md:text-4xl font-bold ${colors.text}`}>
                      {activeUseCase.metrics.primary}
                    </div>
                    <div className="text-sm text-neutral-500 mt-1">
                      {activeUseCase.metrics.primaryLabel}
                    </div>
                  </div>
                  <div>
                    <div className={`font-display text-3xl md:text-4xl font-bold ${colors.text}`}>
                      {activeUseCase.metrics.secondary}
                    </div>
                    <div className="text-sm text-neutral-500 mt-1">
                      {activeUseCase.metrics.secondaryLabel}
                    </div>
                  </div>
                </div>

                <Link
                  href={activeUseCase.href}
                  className="btn-primary btn-lg group w-full md:w-auto"
                >
                  See {activeUseCase.industry} Solutions
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Right Column - Pain Points & Solutions */}
              <div className="bg-neutral-50 p-8 md:p-12 border-t lg:border-t-0 lg:border-l border-neutral-200">
                <div className="space-y-8">
                  {/* Pain Points */}
                  <div>
                    <h4 className="font-display font-semibold text-neutral-900 mb-4">
                      Common Challenges
                    </h4>
                    <ul className="space-y-3">
                      {activeUseCase.painPoints.map((pain, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-red-500 text-xs">✕</span>
                          </div>
                          <span className="text-neutral-600 text-sm">{pain}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions */}
                  <div>
                    <h4 className="font-display font-semibold text-neutral-900 mb-4">
                      How TapLoop Helps
                    </h4>
                    <ul className="space-y-3">
                      {activeUseCase.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className={`w-5 h-5 ${colors.text} shrink-0 mt-0.5`} />
                          <span className="text-neutral-600 text-sm">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
