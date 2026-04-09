# 🔌 Electrician Website Template

A premium, production-ready **React website template** designed for electrician and contractor businesses. Built for **bulk cloning** — swap one config file and deploy a unique website for each client.

---

## ⚡ Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 🔄 How to Clone for a New Client

### Step 1: Copy the Project
```bash
cp -r Electrician_Website_1 NewClient_Website
cd NewClient_Website
```

### Step 2: Edit the Config File

Open **`src/config/siteConfig.ts`** — this is the **single source of truth** for all website content.

Every piece of text, image, phone number, and service description lives in this one file. Here's what to replace:

| Section | What to Change |
|---------|---------------|
| `BRAND` | Company name, phone, email, address, tagline |
| `HERO` | Hero headline, subtitle, image, review stats |
| `SERVICES` | Service names, descriptions, images, features |
| `TESTIMONIALS` | Customer reviews, names, avatars |
| `ABOUT` | Company story, team members, photos, stats |
| `PORTFOLIO` | Project photos, titles, categories |
| `CONTACT` | Contact info, form service options |
| `SERVICE_AREA` | Regions, cities, map description |
| `FAQ_DATA` | Questions and answers |
| `EMERGENCY` | Emergency section copy |
| `TRUST_SIGNALS` | Stats, feature highlights |
| `FOOTER` | Service list, business hours |
| `REVIEWS_PAGE` | Review stats, rating breakdown |

### Step 3: Change Brand Colors (Optional)

Open **`src/index.css`** and update the brand color palette:

```css
/* Find these lines and change the HSL values */
--color-brand-50: oklch(0.97 0.02 160);
--color-brand-100: oklch(0.94 0.04 160);
--color-brand-500: oklch(0.55 0.15 160);   /* ← Primary brand color */
--color-brand-600: oklch(0.48 0.14 160);
/* ... etc */
```

> **Tip:** Use [oklch.com](https://oklch.com) or any HSL color picker. Change the hue (last value) to shift the entire palette — e.g. `160` (green) → `220` (blue) → `30` (orange).

### Step 4: Replace Favicon

Replace the favicon in **`index.html`** with the client's logo.

### Step 5: Build & Deploy

```bash
npm run build
# Deploy the /dist folder to any static hosting (Vercel, Netlify, cPanel, etc.)
```

---

## 📂 Project Structure

```
src/
├── config/
│   └── siteConfig.ts          # ⭐ ALL replaceable content lives here
├── components/
│   ├── ui/
│   │   ├── CTABanner.tsx       # Reusable call-to-action banner
│   │   ├── PageHero.tsx        # Reusable page hero with breadcrumb
│   │   └── SectionHeader.tsx   # Reusable section header with badge
│   ├── Hero.tsx                # Homepage hero section
│   ├── Navbar.tsx              # Navigation bar (desktop + mobile)
│   ├── Footer.tsx              # Site footer
│   ├── Services.tsx            # Interactive tabbed services (homepage) / grid (page)
│   ├── Testimonials.tsx        # Auto-carousel (homepage) / vertical marquee (reviews)
│   ├── TrustSignals.tsx        # Stats + feature cards + review banner
│   ├── EmergencyBanner.tsx     # Emergency CTA with parallax effect
│   ├── FAQ.tsx                 # Accordion FAQ
│   └── CTA.tsx                 # CTA wrapper
├── pages/
│   ├── HomePage.tsx            # Assembles homepage components
│   ├── ServicesPage.tsx        # Services grid + portfolio gallery + guarantees
│   ├── AboutPage.tsx           # Sticky image story + team + values + certs
│   ├── ReviewsPage.tsx         # Review stats + vertical marquee testimonials
│   ├── ContactPage.tsx         # Contact form + info cards
│   ├── ServiceAreaPage.tsx     # Sticky map + area listings
│   └── FAQPage.tsx             # Full FAQ page
├── App.tsx                     # Router + layout
└── index.css                   # Global styles + brand color palette
```

---

## 🎨 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 19** | UI framework |
| **Vite** | Build tool & dev server |
| **TypeScript** | Type safety |
| **Tailwind CSS 4** | Utility-first styling |
| **Framer Motion** | Animations & scroll effects |
| **React Router 7** | Client-side routing |
| **Phosphor Icons** | Icon library |

---

## ✨ Interactive Features

- **Auto-scrolling Testimonial Carousel** — Homepage shows 3 reviews at a time, auto-advances every 5 seconds, pause on hover, arrow + dot navigation
- **Vertical Marquee Reviews** — Reviews page displays 3 columns scrolling in alternating directions (up/down/up) at different speeds
- **Interactive Service Tabs** — Click a service on the left → image and details animate on the right with smooth crossfade transitions
- **Sticky Scroll Layouts** — About page has a sticky image that stays fixed as story content scrolls; Service Area has a sticky map
- **Parallax Emergency Banner** — Grid pattern and glow orbs respond to scroll position
- **Animated Counters** — Stats count up when they scroll into view
- **Category-Filtered Gallery** — Portfolio section with animated filtering and lightbox
- **Mobile Accordion** — Services collapse into an accordion on mobile devices
- **Smooth Page Transitions** — Scroll-triggered animations on every section

---

## 📋 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, services tabs, trust signals, emergency CTA, testimonial carousel, FAQ |
| Services | `/services` | Full service grid, how-we-work process, project portfolio, service guarantee |
| About | `/about` | Sticky image story, animated stats, values, team grid, certifications |
| Reviews | `/reviews` | Review stats, rating breakdown, vertical marquee testimonials |
| Contact | `/contact` | Contact form, info cards, map placeholder |
| Service Area | `/service-area` | Sticky map, area listings by region |
| FAQ | `/faq` | Full accordion FAQ |

---

## 🔧 Config File Reference

### `BRAND` — Core Business Info
```ts
export const BRAND = {
  name: "ProElectric",           // Company name (appears in navbar, footer, etc.)
  tagline: "Licensed & Insured", // Subtitle under logo
  phone: "(613) 301-7913",       // Display format
  phoneRaw: "+16133017913",      // tel: link format
  email: "info@proelectric.com",
  address: "Ottawa, ON, Canada",
  yearsInBusiness: "17+",
};
```

### `NAV_LINKS` — Navigation Menu
```ts
export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  // ... add or remove pages as needed
];
```

### Adding/Removing Pages
1. Create or delete the page file in `src/pages/`
2. Add or remove the route in `src/App.tsx`
3. Update `NAV_LINKS` in `siteConfig.ts`

---

## 🚀 Deployment

The built output is a static site in `/dist`. Deploy anywhere:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop `/dist`
- **cPanel**: Upload `/dist` contents to `public_html`
- **GitHub Pages**: Use `gh-pages` package

---

## 📝 Notes for AI Agents

- **All content is centralized** in `src/config/siteConfig.ts`. Never hardcode text directly in components.
- **Icon names** are stored as strings (e.g. `"Shield"`) and resolved via `iconMap` objects in each component. If you add new icon names to the config, ensure the corresponding icon is imported and added to the `iconMap`.
- **Images** use external URLs (Unsplash, Pravatar). For production, replace with locally hosted images or the client's own image CDN.
- **The `showAll` prop** pattern is used to differentiate between homepage preview variants (carousel/tabs) and full-page variants (grid/marquee) of the same component.
- **Framer Motion** is imported from `motion/react` (not `framer-motion`).
- **Tailwind CSS 4** uses `@import "tailwindcss"` syntax in `index.css`, not the v3 `@tailwind` directives.
