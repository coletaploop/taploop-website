"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Building2,
  Stethoscope,
  Smile,
  Home,
  GraduationCap,
  Sun,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Clock,
  Users,
  DollarSign,
} from "lucide-react";

const useCases = [
  {
    id: "real-estate",
    icon: Building2,
    industry: "Real Estate",
    title: "Real Estate Teams & Brokerages",
    subtitle: "Never lose another lead to slow follow-up",
    description:
      "Real estate is a speed game. The first agent to respond often wins the deal. We build automation systems that respond to inquiries instantly, qualify leads, and book showings—so your agents can focus on closing.",
    painPoints: [
      "Leads going cold from slow response times",
      "Agents drowning in administrative work",
      "Inconsistent follow-up processes",
      "Data scattered across multiple platforms",
      "Missed calls during showings",
    ],
    solutions: [
      {
        title: "Instant Lead Response",
        description:
          "AI agents respond to new leads within seconds via text, email, or phone—24/7, even when your team is asleep.",
      },
      {
        title: "Smart Lead Qualification",
        description:
          "Automatically qualify leads based on budget, timeline, and preferences before they reach an agent.",
      },
      {
        title: "Automated Nurture Campaigns",
        description:
          "Personalized follow-up sequences that keep leads warm until they're ready to buy or sell.",
      },
      {
        title: "Showing Scheduling",
        description:
          "Let leads book showings directly into agent calendars with automatic confirmations and reminders.",
      },
    ],
    metrics: [
      { value: "3x", label: "More appointments booked" },
      { value: "85%", label: "Faster response time" },
      { value: "40%", label: "Less admin time" },
    ],
    testimonial: {
      quote:
        "TapLoop completely changed how we handle leads. We went from losing 40% of inquiries to responding within 30 seconds.",
      author: "Sarah M., Operations Director",
    },
    color: "tap",
  },
  {
    id: "healthcare",
    icon: Stethoscope,
    industry: "Healthcare",
    title: "Doctor & Medical Offices",
    subtitle: "Reduce staff burden, improve patient experience",
    description:
      "Healthcare practices are overwhelmed with administrative tasks while trying to deliver excellent patient care. Our HIPAA-compliant automation handles scheduling, reminders, and patient communication—so your staff can focus on patients.",
    painPoints: [
      "Staff overwhelmed with phone calls",
      "High no-show rates",
      "Manual insurance verification delays",
      "Patients falling through the cracks",
      "Inefficient recall processes",
    ],
    solutions: [
      {
        title: "AI Phone Agents",
        description:
          "HIPAA-compliant voice agents that handle appointment scheduling, prescription refill requests, and general inquiries.",
      },
      {
        title: "Smart Appointment Reminders",
        description:
          "Multi-channel reminder sequences that dramatically reduce no-shows and last-minute cancellations.",
      },
      {
        title: "Patient Recall Automation",
        description:
          "Automated outreach for annual checkups, follow-up visits, and preventive care reminders.",
      },
      {
        title: "Intake Automation",
        description:
          "Digital intake forms and insurance verification workflows that eliminate paperwork delays.",
      },
    ],
    metrics: [
      { value: "60%", label: "Reduction in no-shows" },
      { value: "4hrs", label: "Saved daily per staff" },
      { value: "95%", label: "Patient satisfaction" },
    ],
    testimonial: {
      quote:
        "Our no-show rate dropped from 25% to under 8% within the first month. The ROI was immediate.",
      author: "Dr. James C., Practice Owner",
    },
    color: "accent",
  },
  {
    id: "dental",
    icon: Smile,
    industry: "Dental",
    title: "Dental Practices",
    subtitle: "Fill your schedule, boost case acceptance",
    description:
      "Dental practices face unique challenges: hygiene recalls, treatment acceptance, and last-minute cancellations. We build automation specifically designed for dental workflows that keep your chairs full and patients engaged.",
    painPoints: [
      "Empty slots from cancellations",
      "Inefficient hygiene recall",
      "Low treatment acceptance rates",
      "Time-consuming patient communication",
      "New patient onboarding friction",
    ],
    solutions: [
      {
        title: "Smart Waitlist Management",
        description:
          "Automatically fill cancellations by notifying waitlist patients and booking confirmed appointments.",
      },
      {
        title: "Hygiene Recall Campaigns",
        description:
          "Automated multi-touch campaigns that bring patients back for their 6-month cleanings.",
      },
      {
        title: "Treatment Follow-Up",
        description:
          "Personalized sequences that follow up on treatment plans and boost case acceptance.",
      },
      {
        title: "Digital Intake",
        description:
          "Streamlined new patient onboarding with digital forms and insurance verification.",
      },
    ],
    metrics: [
      { value: "40%", label: "Higher case acceptance" },
      { value: "95%", label: "Schedule utilization" },
      { value: "2x", label: "Hygiene recall rate" },
    ],
    testimonial: {
      quote:
        "We fill cancellations within hours now, not days. Our schedule stays full and production is up 30%.",
      author: "Dr. Emily R., Practice Owner",
    },
    color: "violet",
  },
  {
    id: "home-services",
    icon: Home,
    industry: "Home Services",
    title: "Home Service Companies",
    subtitle: "Capture every job, delight every customer",
    description:
      "HVAC, plumbing, electrical, and other home service companies miss countless opportunities when they can't answer the phone. We build systems that capture leads, dispatch jobs, and collect reviews—automatically.",
    painPoints: [
      "Missed calls during service hours",
      "Inefficient dispatching",
      "Slow invoicing and collections",
      "Few online reviews",
      "Manual job tracking",
    ],
    solutions: [
      {
        title: "24/7 Lead Capture",
        description:
          "AI phone agents that answer calls, qualify jobs, and schedule appointments even when your team is on-site.",
      },
      {
        title: "Smart Dispatching",
        description:
          "Automated job assignment and routing based on technician location, skills, and availability.",
      },
      {
        title: "Automated Invoicing",
        description:
          "Generate and send invoices automatically with payment reminders that improve collection rates.",
      },
      {
        title: "Review Collection",
        description:
          "Automated review requests that boost your Google rating and bring in more referrals.",
      },
    ],
    metrics: [
      { value: "2x", label: "More jobs booked" },
      { value: "50%", label: "Faster payments" },
      { value: "4.8★", label: "Average rating" },
    ],
    testimonial: {
      quote:
        "Our technicians were missing calls on jobs. Now every call gets answered and scheduled. Revenue is up 40%.",
      author: "Mike T., Owner",
    },
    color: "amber",
  },
  {
    id: "coaches",
    icon: GraduationCap,
    industry: "Education",
    title: "Coaches & Online Educators",
    subtitle: "Scale your impact without losing the personal touch",
    description:
      "Coaches and educators often hit a ceiling because they're doing everything manually. We automate enrollment, content delivery, and student engagement—so you can serve 10x more students without burning out.",
    painPoints: [
      "Overwhelmed by admin work",
      "Inconsistent student follow-up",
      "Manual enrollment processes",
      "Difficulty tracking progress",
      "Limited capacity to grow",
    ],
    solutions: [
      {
        title: "Automated Enrollment",
        description:
          "From inquiry to enrollment, automate the entire student onboarding journey with personalized touchpoints.",
      },
      {
        title: "Content Delivery",
        description:
          "Drip course content, assignments, and resources on autopilot based on student progress.",
      },
      {
        title: "Engagement Tracking",
        description:
          "Monitor student activity and automatically reach out when engagement drops.",
      },
      {
        title: "Community Management",
        description:
          "Automate community posts, reminders, and engagement campaigns across platforms.",
      },
    ],
    metrics: [
      { value: "10x", label: "Students served" },
      { value: "80%", label: "Less admin time" },
      { value: "95%", label: "Completion rate" },
    ],
    testimonial: {
      quote:
        "I went from serving 50 students to 500 with the same team. TapLoop made scaling actually possible.",
      author: "Maria R., Founder",
    },
    color: "rose",
  },
  {
    id: "solar",
    icon: Sun,
    industry: "Solar & Energy",
    title: "Solar Installation Companies",
    subtitle: "Convert more leads, streamline operations",
    description:
      "Solar sales cycles are long and complex. We automate lead qualification, proposal follow-ups, and project coordination—so your team closes more deals with less manual work.",
    painPoints: [
      "Long sales cycles with cold leads",
      "Complex proposal processes",
      "Permit and install coordination",
      "Post-install support bottlenecks",
      "Low conversion rates",
    ],
    solutions: [
      {
        title: "Lead Qualification",
        description:
          "AI agents that qualify leads based on roof type, ownership, energy usage, and financing options.",
      },
      {
        title: "Proposal Automation",
        description:
          "Generate custom proposals automatically and follow up until the deal closes.",
      },
      {
        title: "Project Tracking",
        description:
          "Automated milestone updates for permits, installation, and inspections.",
      },
      {
        title: "Customer Portal",
        description:
          "Self-service portal for customers to track their installation and submit support requests.",
      },
    ],
    metrics: [
      { value: "45%", label: "Higher conversion" },
      { value: "30%", label: "Shorter sales cycle" },
      { value: "5★", label: "Customer reviews" },
    ],
    testimonial: {
      quote:
        "The lead qualification AI cut our sales cycle in half. We're only talking to ready buyers now.",
      author: "Jennifer P., Sales Manager",
    },
    color: "emerald",
  },
];

const colorClasses: Record<string, { bg: string; light: string; text: string; border: string }> = {
  tap: { bg: "bg-tap-500", light: "bg-tap-50", text: "text-tap-600", border: "border-tap-200" },
  accent: { bg: "bg-accent-500", light: "bg-accent-50", text: "text-accent-600", border: "border-accent-200" },
  violet: { bg: "bg-violet-500", light: "bg-violet-50", text: "text-violet-600", border: "border-violet-200" },
  amber: { bg: "bg-amber-500", light: "bg-amber-50", text: "text-amber-600", border: "border-amber-200" },
  rose: { bg: "bg-rose-500", light: "bg-rose-50", text: "text-rose-600", border: "border-rose-200" },
  emerald: { bg: "bg-emerald-500", light: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200" },
};

export default function UseCasesPage() {
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
              <span className="text-sm font-medium text-tap-700">Use Cases</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              AI Automation for Your Industry
            </h1>
            <p className="text-lg md:text-xl text-neutral-600">
              See how businesses like yours are using TapLoop to transform operations and accelerate growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Navigation */}
      <section className="py-8 bg-white border-b border-neutral-200 sticky top-20 z-30">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-2">
            {useCases.map((useCase) => (
              <a
                key={useCase.id}
                href={`#${useCase.id}`}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${colorClasses[useCase.color].light} ${colorClasses[useCase.color].text} hover:opacity-80`}
              >
                <useCase.icon className="w-4 h-4" />
                {useCase.industry}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case Sections */}
      {useCases.map((useCase, index) => (
        <UseCaseSection key={useCase.id} useCase={useCase} index={index} />
      ))}

      {/* CTA */}
      <section className="section bg-neutral-950 text-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Don't See Your Industry?
            </h2>
            <p className="text-lg text-neutral-400 mb-8">
              We work with businesses across many industries. If repetitive tasks are eating up your time, we can help.
            </p>
            <Link
              href="/contact"
              className="btn bg-white text-neutral-900 hover:bg-neutral-100 btn-lg group"
            >
              Let's Talk About Your Needs
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function UseCaseSection({
  useCase,
  index,
}: {
  useCase: (typeof useCases)[0];
  index: number;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const colors = colorClasses[useCase.color];

  return (
    <section
      ref={sectionRef}
      id={useCase.id}
      className={`section ${index % 2 === 0 ? "bg-white" : "bg-neutral-50"}`}
    >
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <div className={`w-14 h-14 rounded-2xl ${colors.light} flex items-center justify-center mb-6`}>
            <useCase.icon className={`w-7 h-7 ${colors.text}`} />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
            {useCase.title}
          </h2>
          <p className={`text-xl ${colors.text} font-medium mb-4`}>{useCase.subtitle}</p>
          <p className="text-lg text-neutral-600">{useCase.description}</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Pain Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-display text-lg font-semibold text-neutral-900 mb-4">
              Common Challenges
            </h3>
            <ul className="space-y-3">
              {useCase.painPoints.map((pain, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-red-500 text-xs">✕</span>
                  </div>
                  <span className="text-neutral-600 text-sm">{pain}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h3 className="font-display text-lg font-semibold text-neutral-900 mb-4">
              How TapLoop Helps
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {useCase.solutions.map((solution, i) => (
                <div
                  key={i}
                  className={`p-5 rounded-xl ${colors.light} ${colors.border} border`}
                >
                  <h4 className={`font-semibold ${colors.text} mb-2`}>
                    {solution.title}
                  </h4>
                  <p className="text-sm text-neutral-600">{solution.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Metrics & Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid md:grid-cols-2 gap-8"
        >
          {/* Metrics */}
          <div className="flex flex-wrap gap-8">
            {useCase.metrics.map((metric, i) => (
              <div key={i}>
                <div className={`font-display text-3xl md:text-4xl font-bold ${colors.text}`}>
                  {metric.value}
                </div>
                <div className="text-sm text-neutral-500">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className={`p-6 rounded-xl ${colors.light} ${colors.border} border`}>
            <p className="text-neutral-700 italic mb-3">"{useCase.testimonial.quote}"</p>
            <p className={`text-sm font-medium ${colors.text}`}>
              — {useCase.testimonial.author}
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10"
        >
          <Link href="/contact" className="btn-primary btn-lg group">
            Get a Free {useCase.industry} Automation Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
