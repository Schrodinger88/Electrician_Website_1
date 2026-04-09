/**
 * ═══════════════════════════════════════════════════════════════════
 *  SITE CONFIGURATION — SINGLE SOURCE OF TRUTH
 * ═══════════════════════════════════════════════════════════════════
 *
 *  🔄 TO CLONE THIS WEBSITE FOR A NEW CLIENT:
 *     1. Replace ALL values in this file with the new client's info
 *     2. Update /src/index.css color variables if you want a new brand color
 *     3. Replace the favicon in /index.html
 *     4. Run `npm run build` → deploy the /dist folder
 *
 *  Every component reads from this config. Change it here = changes everywhere.
 * ═══════════════════════════════════════════════════════════════════
 */

// ─── BRAND ──────────────────────────────────────────────────────────
export const BRAND = {
  name: "ProElectric",
  tagline: "Licensed & Insured",
  description: "Professional electrical services for residential and commercial properties. Licensed, insured, and trusted by thousands.",
  phone: "(613) 301-7913",
  phoneRaw: "+16133017913",                // tel: link format
  email: "info@proelectric.com",
  address: "Ottawa, ON, Canada",
  foundedYear: 2009,
  yearsInBusiness: "17+",
  website: "https://proelectric.com",
};

// ─── NAVIGATION ─────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Reviews", path: "/reviews" },
  { label: "Service Area", path: "/service-area" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

// ─── HERO SECTION ───────────────────────────────────────────────────
export const HERO = {
  badge: "Licensed & Insured",
  titleLine1: "Expertise that",
  titleLine2: "powers your",
  titleAccent: "Property",
  subtitle: "Premium electrical solutions for residential and commercial properties. From modern panel upgrades to rapid emergency repairs, we deliver safe, reliable service.",
  trustIndicators: [
    { label: "24/7 Emergency Service" },
    { label: `${BRAND.yearsInBusiness} Years Experience` },
  ],
  // Hero image (right side on desktop)
  image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=1200&fit=crop",
  imageAlt: "Certified electrician",
  // Floating review card
  reviewCard: {
    rating: "4.9/5",
    reviewCount: "400+",
    label: "Verified Reviews",
    communityLabel: "Trusted locally",
  },
};

// ─── SERVICES ───────────────────────────────────────────────────────
export const SERVICES = {
  badge: "Our Expertise",
  title: "Comprehensive Electrical",
  titleAccent: "Solutions",
  subtitle: "From routine maintenance to complex installations, our licensed electricians deliver safe, reliable service for every electrical need.",
  // Main services (shown on homepage interactive panel + services page)
  items: [
    {
      iconName: "House" as const,
      title: "Residential Electrical",
      description: "Complete home electrical solutions from wiring to smart home integration.",
      image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=800&h=600&fit=crop",
      features: ["Full home rewiring", "Smart home setup", "Outlet installation", "Code compliance"],
    },
    {
      iconName: "Buildings" as const,
      title: "Commercial Services",
      description: "Professional electrical work for offices, retail spaces, and businesses.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      features: ["Office build-outs", "Retail lighting", "Data cabling", "Code inspections"],
    },
    {
      iconName: "Gauge" as const,
      title: "Panel Upgrades",
      description: "Modern electrical panel installation and circuit breaker upgrades.",
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop",
      features: ["200A upgrades", "Circuit breakers", "Sub-panels", "Load balancing"],
    },
    {
      iconName: "Lightning" as const,
      title: "Wiring & Rewiring",
      description: "Safe, code-compliant electrical wiring for new and existing properties.",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop",
      features: ["New construction", "Knob & tube replacement", "Aluminum to copper", "Dedicated circuits"],
    },
    {
      iconName: "Lightbulb" as const,
      title: "Lighting Installation",
      description: "LED upgrades, recessed lighting, and custom fixture installation.",
      image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&h=600&fit=crop",
      features: ["Recessed lighting", "LED conversions", "Landscape lighting", "Dimmer systems"],
    },
    {
      iconName: "Wrench" as const,
      title: "Repairs & Troubleshooting",
      description: "Fast diagnosis and repair of electrical issues and malfunctions.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop",
      features: ["Fault diagnosis", "Outlet repair", "Breaker issues", "Flickering lights"],
    },
  ],
  // Additional services (only shown on the Services page grid)
  additionalItems: [
    { iconName: "ArrowsClockwise" as const, title: "Electrical Upgrades", description: "Modernize your electrical system for safety and efficiency." },
    { iconName: "FireExtinguisher" as const, title: "Emergency Service", description: "24/7 rapid response for urgent electrical problems." },
    { iconName: "ChargingStation" as const, title: "EV Charging Stations", description: "Professional electric vehicle charger installation." },
    { iconName: "DeviceMobile" as const, title: "Generator Installation", description: "Backup power solutions for uninterrupted electricity." },
  ],
};

// ─── TESTIMONIALS / REVIEWS ─────────────────────────────────────────
export const TESTIMONIALS = {
  badge: "Testimonials",
  title: "What Our Clients Say",
  subtitle: "Hear from satisfied customers who trust us for fast, reliable, and professional electrical services.",
  items: [
    { name: "John Smith", role: "Homeowner", review: "Got emergency support even at night. Highly recommended! Arrived very fast and fixed the wiring issue in minutes.", rating: 5, avatar: "https://i.pravatar.cc/150?img=11" },
    { name: "Sarah Johnson", role: "Business Owner", review: "Professional and courteous service. They diagnosed the problem quickly and provided a fair quote. Very satisfied!", rating: 5, avatar: "https://i.pravatar.cc/150?img=12" },
    { name: "Michael Davis", role: "Property Manager", review: "Best electrical service in town! They upgraded our entire panel system efficiently and cleaned up everything perfectly.", rating: 5, avatar: "https://i.pravatar.cc/150?img=13" },
    { name: "Emily Wilson", role: "Restaurant Owner", review: "They rewired our entire kitchen during off-hours so we didn't lose any business. Incredible professionalism and attention to detail.", rating: 5, avatar: "https://i.pravatar.cc/150?img=5" },
    { name: "Robert Chen", role: "Homeowner", review: "Had a panel upgrade done and couldn't be happier. The team was clean, efficient, and explained everything clearly. Fair pricing too.", rating: 5, avatar: "https://i.pravatar.cc/150?img=8" },
    { name: "Lisa Martinez", role: "Office Manager", review: "We've used them for all our office electrical needs. Consistent quality, always on time, and they stand behind their work.", rating: 5, avatar: "https://i.pravatar.cc/150?img=9" },
    { name: "David Thompson", role: "Homeowner", review: "They installed EV chargers at our property. Quick, clean work with a great warranty. Already recommended them to neighbors.", rating: 5, avatar: "https://i.pravatar.cc/150?img=14" },
    { name: "Amanda Foster", role: "Real Estate Agent", review: "I refer all my clients to ProElectric for inspections. They're thorough, honest, and always deliver on time.", rating: 5, avatar: "https://i.pravatar.cc/150?img=16" },
    { name: "James Wright", role: "Contractor", review: "As a general contractor, I need reliable subs. ProElectric is my go-to for every project. Consistent quality and fair pricing.", rating: 5, avatar: "https://i.pravatar.cc/150?img=15" },
  ],
};

// ─── REVIEWS PAGE ───────────────────────────────────────────────────
export const REVIEWS_PAGE = {
  hero: {
    title: "Customer",
    titleAccent: "Reviews",
    subtitle: "Don't just take our word for it. See what our customers have to say about their experience with ProElectric.",
    breadcrumb: "Reviews",
  },
  stats: [
    { value: "4.9", label: "Average Rating", suffix: "/5" },
    { value: "400+", label: "Verified Reviews", suffix: "" },
    { value: "98%", label: "Recommend Us", suffix: "" },
    { value: "5", label: "Years on Google", suffix: "★" },
  ],
  ratingBreakdown: [
    { stars: 5, percentage: 92, count: 368 },
    { stars: 4, percentage: 6, count: 24 },
    { stars: 3, percentage: 1, count: 5 },
    { stars: 2, percentage: 0.5, count: 2 },
    { stars: 1, percentage: 0.5, count: 1 },
  ],
  cta: {
    title: "Join Our Satisfied Customers",
    subtitle: "Experience the difference that quality electrical service makes. Get your free estimate today.",
  },
};

// ─── TRUST SIGNALS / WHY CHOOSE US ─────────────────────────────────
export const TRUST_SIGNALS = {
  badge: "Why Choose Us",
  title: "Trusted by Homeowners",
  titleAccent: "& Businesses Alike",
  subtitle: "Our commitment to safety, quality, and customer satisfaction has made us the go-to electrical service provider in the region.",
  stats: [
    { value: 1247, suffix: "+", label: "Projects Completed" },
    { value: 17, suffix: "+", label: "Years Experience" },
    { value: 4.9, suffix: "/5", label: "Customer Rating" },
    { value: 100, suffix: "%", label: "Licensed & Insured" },
  ],
  features: [
    { iconName: "Shield" as const, title: "Licensed & Insured", description: "Fully certified electricians with comprehensive liability coverage" },
    { iconName: "Clock" as const, title: "24/7 Emergency Service", description: "Round-the-clock availability for urgent electrical issues" },
    { iconName: "Certificate" as const, title: "Warranty Guaranteed", description: "All work backed by our comprehensive workmanship warranty" },
    { iconName: "CheckCircle" as const, title: "Free Estimates", description: "No-obligation quotes for all residential and commercial projects" },
  ],
  reviewBanner: {
    rating: "4.9 out of 5.0 Stars",
    subtitle: "Based on 400+ verified customer reviews",
    buttonText: "Read Customer Reviews",
  },
};

// ─── EMERGENCY BANNER ───────────────────────────────────────────────
export const EMERGENCY = {
  badge: "Emergency Service Available",
  title: "Electrical Emergency?",
  titleAccent: "We're Available 24/7",
  subtitle: "Power outages, sparking outlets, or electrical failures don't wait for business hours. Neither do we. Our emergency response team is ready to help you day or night.",
  hotlineLabel: "Emergency Hotline",
  features: [
    { iconName: "Clock" as const, label: "24/7 Availability", desc: "Around the clock service" },
    { iconName: "Lightning" as const, label: "Fast Response", desc: "Avg. 45min arrival time" },
    { iconName: "Phone" as const, label: "Direct Line", desc: "Speak to a real electrician" },
    { iconName: "ShieldCheck" as const, label: "Fair Pricing", desc: "No surprise emergency fees" },
  ],
};

// ─── FAQ ─────────────────────────────────────────────────────────────
export const FAQ_DATA = {
  badge: "FAQ",
  title: "Frequently Asked",
  titleAccent: "Questions",
  subtitle: "Find quick answers to the most common questions about our electrical services.",
  items: [
    { question: "How quickly can a technician arrive?", answer: "Our electrician usually arrives within 30-60 minutes, depending on your location and service availability." },
    { question: "Are your electricians certified and experienced?", answer: "Yes, all our electricians are fully certified, licensed, and have years of experience in handling various electrical issues." },
    { question: "Do you provide emergency electrical services?", answer: "Yes, we offer 24/7 emergency electrical services for urgent issues that need immediate attention." },
    { question: "How do you determine the service cost?", answer: "We provide upfront pricing based on the scope of work after a thorough diagnosis. There are no hidden charges." },
    { question: "Is there any service warranty?", answer: "Yes, we offer a comprehensive service guarantee on all our repairs and installations." },
    { question: "What types of electrical services do you offer?", answer: "We offer a wide range of services including wiring, lighting installation, panel upgrades, EV charger installation, generator installation, and emergency repairs for both residential and commercial properties." },
    { question: "Do you offer free estimates?", answer: "Yes, we provide free, no-obligation estimates for all residential and commercial electrical projects. Contact us to schedule yours." },
    { question: "What areas do you serve?", answer: "We serve the greater metro area and surrounding communities. Visit our Service Area page for a complete list of locations we cover." },
  ],
};

// ─── ABOUT PAGE ─────────────────────────────────────────────────────
export const ABOUT = {
  hero: {
    title: "About",
    titleAccent: BRAND.name,
    subtitle: "A family-owned electrical company built on trust, quality workmanship, and an unwavering commitment to customer satisfaction.",
    breadcrumb: "About",
  },
  story: {
    badge: "Our Story",
    title: `${BRAND.yearsInBusiness} Years of Trusted`,
    titleAccent: "Electrical Service",
    paragraphs: [
      "Founded with a simple mission: provide honest, reliable electrical services at fair prices. What started as a one-man operation has grown into a trusted team of certified professionals serving thousands of residential and commercial clients.",
      "Every member of our team is hand-picked for their expertise, professionalism, and commitment to doing the job right the first time. We treat every home and business like our own.",
    ],
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop",
    imageAlt: "Our team of professional electricians",
  },
  stats: [
    { label: "Projects Completed", value: 1200, suffix: "+" },
    { label: "Years in Business", value: 17, suffix: "+" },
    { label: "Customer Rating", value: 4.9, suffix: "/5" },
    { label: "Team Members", value: 12, suffix: "+" },
  ],
  mission: "To empower homes and businesses with safe, efficient electrical solutions — delivered with integrity, transparency, and a relentless focus on customer satisfaction.",
  values: [
    { iconName: "Shield" as const, title: "Safety First", desc: "Every job follows strict safety protocols and code compliance." },
    { iconName: "Trophy" as const, title: "Quality Work", desc: "We never cut corners. Every installation meets the highest standards." },
    { iconName: "Target" as const, title: "Reliability", desc: "On time, every time. We respect your schedule and property." },
    { iconName: "Users" as const, title: "Customer Focus", desc: "Clear communication, fair pricing, and your satisfaction guaranteed." },
  ],
  team: [
    { name: "Mike Richardson", role: "Master Electrician / Owner", image: "https://i.pravatar.cc/300?img=59", experience: "20+ years" },
    { name: "Tom Bradley", role: "Lead Electrician", image: "https://i.pravatar.cc/300?img=60", experience: "15+ years" },
    { name: "Chris Parker", role: "Commercial Specialist", image: "https://i.pravatar.cc/300?img=52", experience: "12+ years" },
    { name: "Alex Rivera", role: "Residential Expert", image: "https://i.pravatar.cc/300?img=53", experience: "10+ years" },
  ],
  certifications: [
    { iconName: "Certificate" as const, label: "Master Electrician License" },
    { iconName: "Shield" as const, label: "Fully Insured & Bonded" },
    { iconName: "Certificate" as const, label: "ESA Certified" },
    { iconName: "Clock" as const, label: "24/7 Emergency Licensed" },
  ],
  cta: {
    title: "Work With the Best",
    subtitle: "Join thousands of satisfied customers. Get your free estimate today.",
  },
};

// ─── SERVICES PAGE ──────────────────────────────────────────────────
export const SERVICES_PAGE = {
  hero: {
    title: "Our Electrical",
    titleAccent: "Services",
    subtitle: "From routine repairs to complex installations, we provide a full range of electrical services for residential and commercial properties.",
    breadcrumb: "Services",
  },
  process: {
    title: "How We Work",
    subtitle: "Our simple 3-step process gets your electrical issues resolved fast.",
    steps: [
      { step: "01", title: "Contact Us", desc: "Call or fill out our form to schedule a visit at your convenience." },
      { step: "02", title: "Free Assessment", desc: "Our certified electrician arrives, inspects the issue, and provides a transparent quote." },
      { step: "03", title: "Expert Service", desc: "We complete the work efficiently, clean up, and ensure your complete satisfaction." },
    ],
  },
  guarantee: {
    title: "Our Service",
    titleAccent: "Guarantee",
    subtitle: "We stand behind every project with our commitment to quality, safety, and your complete satisfaction.",
    items: [
      "Upfront, transparent pricing — no hidden fees",
      "All work performed by licensed, certified electricians",
      "Comprehensive workmanship warranty on all projects",
      "Clean, respectful work at your property",
      "100% satisfaction guaranteed or we make it right",
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop",
    imageAlt: "Electrician working on residential panel",
  },
  cta: {
    title: "Need an Electrician?",
    subtitle: "Get a free, no-obligation quote for your project. We respond within 30 minutes during business hours.",
  },
};

// ─── PORTFOLIO / GALLERY ────────────────────────────────────────────
export const PORTFOLIO = {
  badge: "Portfolio",
  title: "Our Recent",
  titleAccent: "Work",
  subtitle: "Browse our portfolio of completed electrical projects. Every photo represents quality workmanship and satisfied customers.",
  categories: ["All", "Residential", "Commercial", "Panel Upgrades", "Lighting", "EV Chargers"],
  projects: [
    { src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop", title: "Panel Upgrade - Residential", category: "Panel Upgrades", desc: "200A panel upgrade for a family home" },
    { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop", title: "Commercial Rewiring", category: "Commercial", desc: "Complete electrical rewiring for retail space" },
    { src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&h=400&fit=crop", title: "LED Lighting Install", category: "Lighting", desc: "Modern LED recessed lighting installation" },
    { src: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=600&h=400&fit=crop", title: "Kitchen Remodel Wiring", category: "Residential", desc: "Full kitchen electrical for renovation" },
    { src: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=600&h=400&fit=crop", title: "Office Lighting Design", category: "Commercial", desc: "Custom commercial lighting solution" },
    { src: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=400&fit=crop", title: "EV Charger Installation", category: "EV Chargers", desc: "Level 2 EV charger for home garage" },
    { src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop", title: "Smart Home Setup", category: "Residential", desc: "Complete smart home electrical integration" },
    { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop", title: "Office Build-Out", category: "Commercial", desc: "New construction office electrical" },
    { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=800&fit=crop", title: "Service Panel Replacement", category: "Panel Upgrades", desc: "Outdated panel replaced with modern unit" },
    { src: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=400&fit=crop", title: "Landscape Lighting", category: "Lighting", desc: "Outdoor landscape lighting design" },
    { src: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=600&h=600&fit=crop", title: "Bathroom Remodel", category: "Residential", desc: "Bathroom electrical and exhaust fan install" },
    { src: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=400&fit=crop", title: "Multi-unit EV Charging", category: "EV Chargers", desc: "EV charging station for condo parking" },
  ],
};

// ─── CONTACT PAGE ───────────────────────────────────────────────────
export const CONTACT = {
  hero: {
    title: "Get In Touch",
    titleAccent: "With Us",
    subtitle: `Ready to start your project? Get a free estimate or ask us anything. We respond within 30 minutes during business hours.`,
    breadcrumb: "Contact",
  },
  info: [
    { iconName: "Phone" as const, label: "Phone", value: BRAND.phone, href: `tel:${BRAND.phoneRaw}`, subtitle: "Mon-Fri 7AM-8PM" },
    { iconName: "Envelope" as const, label: "Email", value: BRAND.email, href: `mailto:${BRAND.email}`, subtitle: "Response within 2 hours" },
    { iconName: "MapPin" as const, label: "Location", value: BRAND.address, href: "#", subtitle: "Serving greater Ottawa area" },
    { iconName: "Clock" as const, label: "Emergency", value: "24/7 Available", href: `tel:${BRAND.phoneRaw}`, subtitle: "Call anytime for emergencies" },
  ],
  formServiceOptions: [
    { value: "", label: "Select a service" },
    { value: "residential", label: "Residential Electrical" },
    { value: "commercial", label: "Commercial Services" },
    { value: "panel", label: "Panel Upgrades" },
    { value: "lighting", label: "Lighting Installation" },
    { value: "wiring", label: "Wiring & Rewiring" },
    { value: "ev", label: "EV Charger Installation" },
    { value: "generator", label: "Generator Installation" },
    { value: "emergency", label: "Emergency Service" },
    { value: "other", label: "Other" },
  ],
};

// ─── SERVICE AREA ───────────────────────────────────────────────────
export const SERVICE_AREA = {
  hero: {
    title: "Our Service",
    titleAccent: "Area",
    subtitle: "We proudly serve the greater Ottawa area and surrounding communities. Check if we cover your neighborhood.",
    breadcrumb: "Service Area",
  },
  description: "Our team of licensed electricians provides fast, reliable service across the greater Ottawa region. If your area isn't listed, give us a call — we may still be able to help.",
  areas: [
    { region: "Central Ottawa", cities: ["Downtown Ottawa", "Centretown", "The Glebe", "Old Ottawa South", "Sandy Hill", "Byward Market"] },
    { region: "East Ottawa", cities: ["Orleans", "Gloucester", "Beacon Hill", "Blackburn Hamlet", "Cumberland", "Navan"] },
    { region: "West Ottawa", cities: ["Kanata", "Stittsville", "Barrhaven", "Nepean", "Westboro", "Bell's Corners"] },
    { region: "South Ottawa", cities: ["Riverside South", "Manotick", "Greely", "Metcalfe", "Osgoode", "Richmond"] },
  ],
  notListedMessage: `Don't see your area? Call us at ${BRAND.phone} — we may still service your location.`,
  cta: {
    title: "In Your Area?",
    subtitle: "Get a free estimate for your electrical project. We'll send a certified electrician to you.",
  },
};

// ─── FAQ PAGE ───────────────────────────────────────────────────────
export const FAQ_PAGE = {
  hero: {
    title: "Frequently Asked",
    titleAccent: "Questions",
    subtitle: "Everything you need to know about our electrical services, pricing, process, and guarantees.",
    breadcrumb: "FAQ",
  },
  cta: {
    title: "Still Have Questions?",
    subtitle: "Our team is happy to help. Reach out to us and we'll get back to you within 30 minutes.",
  },
};

// ─── FOOTER ─────────────────────────────────────────────────────────
export const FOOTER = {
  servicesList: [
    "Residential Electrical",
    "Commercial Services",
    "Panel Upgrades",
    "Lighting Installation",
    "EV Charger Installation",
    "Emergency Repairs",
  ],
  hours: [
    { day: "Monday – Friday", time: "7AM – 8PM" },
    { day: "Saturday", time: "8AM – 5PM" },
    { day: "Sunday", time: "Emergency Only" },
  ],
  emergencyNote: "24/7 Emergency Service Available",
};

// ─── DEFAULT CTA ────────────────────────────────────────────────────
export const DEFAULT_CTA = {
  title: "Ready to Get Started?",
  subtitle: "Book a certified electrician today for fast, safe, and reliable service at your home or business.",
};

// ─── SEO / META ─────────────────────────────────────────────────────
export const SEO = {
  siteTitle: `${BRAND.name} — Licensed Electrician | ${BRAND.address}`,
  description: BRAND.description,
  ogImage: HERO.image,
};

// ─── AGENCY (DO NOT CHANGE PER CLIENT) ──────────────────────────────
// This section is for YOUR agency branding. It persists across all clones.
export const AGENCY = {
  name: "Katana Intelligence",
  url: "https://katanaintelligence.com",     // Your agency website (backlink)
  credit: "Designed & Developed by",          // Credit line prefix
};
