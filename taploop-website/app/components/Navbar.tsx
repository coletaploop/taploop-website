"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, Zap, Phone, Users, Building, Sparkles } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "AI Workflow Automation", href: "/services#workflows", icon: Zap, description: "Custom n8n & Make workflows" },
      { name: "AI Voice Agents", href: "/services#voice", icon: Phone, description: "Intelligent phone & chat agents" },
      { name: "CRM & Lead Systems", href: "/services#crm", icon: Users, description: "Smart lead qualification" },
      { name: "Data & Integrations", href: "/services#data", icon: Building, description: "Connect all your tools" },
    ],
  },
  {
    name: "Use Cases",
    href: "/use-cases",
    children: [
      { name: "Real Estate", href: "/use-cases#real-estate" },
      { name: "Healthcare & Dental", href: "/use-cases#healthcare" },
      { name: "Home Services", href: "/use-cases#home-services" },
      { name: "Coaches & Educators", href: "/use-cases#coaches" },
      { name: "Solar & Energy", href: "/use-cases#solar" },
    ],
  },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-soft border-b border-neutral-100"
            : "bg-transparent"
        }`}
      >
        <nav className="container-wide">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-tap-500 to-tap-600 flex items-center justify-center shadow-glow-sm group-hover:shadow-glow-md transition-shadow">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl text-neutral-900">
                TapLoop
                <span className="text-tap-500">.ai</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      activeDropdown === item.name
                        ? "text-tap-600 bg-tap-50"
                        : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                    }`}
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-0 pt-2"
                      >
                        <div className="bg-white rounded-2xl shadow-strong border border-neutral-100 p-2 min-w-[280px]">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-neutral-50 transition-colors group/item"
                            >
                              {"icon" in child && child.icon && (
                                <div className="w-10 h-10 rounded-lg bg-tap-50 flex items-center justify-center shrink-0 group-hover/item:bg-tap-100 transition-colors">
                                  <child.icon className="w-5 h-5 text-tap-600" />
                                </div>
                              )}
                              <div>
                                <div className="font-medium text-neutral-900 text-sm">
                                  {child.name}
                                </div>
                                {"description" in child && (
                                  <div className="text-xs text-neutral-500 mt-0.5">
                                    {child.description}
                                  </div>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/contact"
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Contact
              </Link>
              <Link href="/contact" className="btn-primary btn-md group">
                Book a Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-neutral-900" />
              ) : (
                <Menu className="w-6 h-6 text-neutral-900" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-tap-500 to-tap-600 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-display font-bold text-xl">
                      TapLoop<span className="text-tap-500">.ai</span>
                    </span>
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-neutral-100"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-1">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() => !item.children && setIsMobileMenuOpen(false)}
                        className="flex items-center justify-between px-4 py-3 text-base font-medium text-neutral-900 rounded-xl hover:bg-neutral-50"
                      >
                        {item.name}
                        {item.children && <ChevronDown className="w-5 h-5 text-neutral-400" />}
                      </Link>
                      {item.children && (
                        <div className="pl-4 mt-1 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block px-4 py-2 text-sm text-neutral-600 rounded-lg hover:bg-neutral-50 hover:text-neutral-900"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-neutral-100">
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-primary btn-lg w-full"
                  >
                    Book a Call
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
