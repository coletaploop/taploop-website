import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Space Grotesk - Display/Headlines (modern, geometric, premium feel)
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Inter font - Body text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0c8ce9",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "TapLoop.ai | AI Automation Agency for Business Growth",
    template: "%s | TapLoop.ai",
  },
  description:
    "Transform your business with AI-powered automation. We build custom AI workflows, voice agents, CRM integrations, and intelligent systems that reduce labor costs and scale operations.",
  keywords: [
    "AI automation",
    "business automation",
    "AI voice agents",
    "workflow automation",
    "n8n automation",
    "AI for business",
    "CRM automation",
    "lead qualification AI",
    "AI phone agents",
    "business efficiency",
  ],
  authors: [{ name: "TapLoop.ai" }],
  creator: "TapLoop.ai",
  publisher: "TapLoop.ai",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://taploop.ai",
    siteName: "TapLoop.ai",
    title: "TapLoop.ai | AI Automation Agency for Business Growth",
    description:
      "Transform your business with AI-powered automation. Custom AI workflows, voice agents, and intelligent systems that scale your operations.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TapLoop.ai - AI Automation Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TapLoop.ai | AI Automation Agency",
    description:
      "Transform your business with AI-powered automation. Custom AI workflows, voice agents, and intelligent systems.",
    images: ["/og-image.png"],
    creator: "@taploop",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://taploop.ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-white text-neutral-900 font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
