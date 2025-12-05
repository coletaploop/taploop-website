# TapLoop.ai Website

A world-class marketing website for TapLoop.ai - an AI automation agency for small and mid-sized businesses.

## 🎨 Design Overview

### Brand Identity
- **Tone:** Modern, sharp, premium, slightly futuristic, trustworthy
- **Visual Style:** Apple x Stripe x Linear.app
- **Aesthetic:** Clean white space, soft gradients, tasteful micro-interactions, subtle glassmorphism, bold hero typography

### Color Palette

#### Primary (TapLoop Blue)
| Token | Hex | Usage |
|-------|-----|-------|
| tap-500 | #0c8ce9 | Primary actions, links |
| tap-600 | #006fc7 | Buttons, emphasis |
| tap-700 | #0158a1 | Hover states |

#### Accent (Electric Teal)
| Token | Hex | Usage |
|-------|-----|-------|
| accent-500 | #06c7b0 | Success states, highlights |
| accent-600 | #02a091 | Secondary CTAs |

#### Neutrals
| Token | Hex | Usage |
|-------|-----|-------|
| neutral-50 | #fafafa | Backgrounds |
| neutral-100 | #f5f5f5 | Cards |
| neutral-500 | #737373 | Body text |
| neutral-900 | #171717 | Headlines |

### Typography
- **Display Font:** Space Grotesk (headings, hero text)
- **Body Font:** Inter (paragraphs, UI elements)

### Spacing Scale
4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 80px, 96px, 128px

### Border Radius
- sm: 6px
- md: 8px
- lg: 12px
- xl: 16px
- 2xl: 20px
- 3xl: 24px

### Shadow System
- subtle: Very light elevation
- soft: Cards, buttons
- medium: Hover states
- strong: Dropdowns, modals
- glow-sm/md/lg: Brand color glows

## 📁 Project Structure

```
taploop-website/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.tsx       # Navigation with dropdowns
│   │   ├── Footer.tsx       # Site footer with CTA
│   │   ├── Hero.tsx         # Homepage hero section
│   │   ├── ServicesSection.tsx
│   │   ├── UseCasesSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── Testimonials.tsx
│   │   ├── PricingSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── CTASection.tsx
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── services/
│   │   └── page.tsx         # Services page
│   ├── use-cases/
│   │   └── page.tsx         # Industry use cases
│   ├── case-studies/
│   │   └── page.tsx         # Case studies
│   ├── pricing/
│   │   └── page.tsx         # Pricing page
│   ├── contact/
│   │   └── page.tsx         # Contact form
│   ├── privacy/
│   │   └── page.tsx         # Privacy policy
│   ├── terms/
│   │   └── page.tsx         # Terms of service
│   ├── globals.css          # Global styles & design system
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── public/
│   └── images/              # Static images
├── tailwind.config.ts       # Tailwind configuration
├── next.config.js           # Next.js configuration
├── package.json
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone or copy the project files
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, services, use cases, testimonials, pricing, FAQ |
| Services | `/services` | Detailed service offerings |
| Use Cases | `/use-cases` | Industry-specific solutions |
| Case Studies | `/case-studies` | Client success stories |
| Pricing | `/pricing` | Pricing plans and FAQ |
| About | `/about` | Company story, values, team |
| Contact | `/contact` | Contact form and info |
| Privacy | `/privacy` | Privacy policy |
| Terms | `/terms` | Terms of service |

## 🎯 Key Features

### Animations
- Scroll-triggered animations with Framer Motion
- Smooth page transitions
- Micro-interactions on hover/tap
- Parallax effects on hero section

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interactions

### Performance
- Next.js App Router for optimal loading
- Font optimization with next/font
- Image optimization ready
- SEO-optimized meta tags

### Accessibility
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Focus visible states

## 🔧 Customization

### Adding New Pages
1. Create a new folder in `app/`
2. Add a `page.tsx` file
3. The route is automatically created

### Modifying Styles
- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component-level: Tailwind classes inline

### Adding Components
1. Create component in `app/components/`
2. Use "use client" directive for interactive components
3. Import and use in pages

## 📱 Responsive Breakpoints

| Breakpoint | Min Width |
|------------|-----------|
| sm | 640px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |
| 2xl | 1536px |

## 🎨 Component Classes

### Buttons
```tsx
// Primary button
<button className="btn-primary btn-lg">Get Started</button>

// Secondary button
<button className="btn-secondary btn-md">Learn More</button>

// Outline button
<button className="btn-outline btn-md">Contact</button>
```

### Cards
```tsx
// Basic card
<div className="card p-6">Content</div>

// Elevated card with hover
<div className="card-elevated p-6">Content</div>

// Glass card
<div className="card-glass p-6">Content</div>
```

### Badges
```tsx
<span className="badge-primary">New</span>
<span className="badge-accent">Featured</span>
<span className="badge-neutral">Coming Soon</span>
```

## 📧 Contact Form Integration

The contact form in `/contact` is currently a demo. To make it functional:

1. Replace the form submission handler with your backend API
2. Or integrate with services like:
   - Formspree
   - Netlify Forms
   - SendGrid
   - Your own API endpoint

## 🔍 SEO

Metadata is configured in `app/layout.tsx` with:
- Title templates
- Meta descriptions
- Open Graph tags
- Twitter cards
- Canonical URLs

## 📦 Dependencies

- **next**: ^14.2.3 - React framework
- **react**: ^18.3.1 - UI library
- **framer-motion**: ^11.2.10 - Animations
- **lucide-react**: ^0.378.0 - Icons
- **tailwindcss**: ^3.4.3 - Styling
- **typescript**: ^5.4.5 - Type safety

## 🚢 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Self-hosted with Node.js

## 📝 License

This project is proprietary to TapLoop.ai.

---

Built with ❤️ for TapLoop.ai
