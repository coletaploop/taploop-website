"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  ArrowRight, 
  Mail, 
  MapPin,
  Linkedin,
  Twitter,
  Youtube
} from "lucide-react";

const footerLinks = {
  services: [
    { name: "AI Workflow Automation", href: "/services#workflows" },
    { name: "AI Voice Agents", href: "/services#voice" },
    { name: "CRM Automation", href: "/services#crm" },
    { name: "Data Pipelines", href: "/services#data" },
    { name: "Custom Integrations", href: "/services#integrations" },
  ],
  useCases: [
    { name: "Real Estate", href: "/use-cases#real-estate" },
    { name: "Healthcare & Dental", href: "/use-cases#healthcare" },
    { name: "Home Services", href: "/use-cases#home-services" },
    { name: "Coaches & Educators", href: "/use-cases#coaches" },
    { name: "Solar & Energy", href: "/use-cases#solar" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/company/taploop", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/taploop", icon: Twitter },
  { name: "YouTube", href: "https://youtube.com/@taploop", icon: Youtube },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      {/* CTA Section */}
      <div className="container-wide">
        <div className="py-20 border-b border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to automate your business?
            </h2>
            <p className="text-lg text-neutral-400 mb-8 max-w-xl mx-auto">
              Book a free strategy call and discover how AI automation can transform your operations in weeks, not months.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn bg-white text-neutral-900 hover:bg-neutral-100 btn-lg group"
              >
                Book Your Free Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/case-studies"
                className="btn border border-white/20 text-white hover:bg-white/10 btn-lg"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-tap-500 to-tap-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl text-white">
                TapLoop<span className="text-tap-400">.ai</span>
              </span>
            </Link>
            <p className="text-neutral-400 text-sm mb-6 max-w-xs">
              AI automation agency helping businesses reduce labor, increase output, and scale operations without increasing headcount.
            </p>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:hello@taploop.ai"
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                hello@taploop.ai
              </a>
              <div className="flex items-center gap-2 text-neutral-400">
                <MapPin className="w-4 h-4" />
                San Francisco, CA
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Use Cases</h3>
            <ul className="space-y-3">
              {footerLinks.useCases.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container-wide py-6 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} TapLoop.ai. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-neutral-400 hover:bg-white/10 hover:text-white transition-all"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
