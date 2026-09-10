import { siteConfig } from "@/lib/constants";

export const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export const socialItems = [
  { label: "Instagram", href: "https://www.instagram.com/krystalcreatives?stkn=MXVuNDE4YW9oYzFiYw%3D%3D&utm_source=qr" },
  { label: "Behance", href: "https://www.behance.net/krystalcreativ" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/krystal-creative/posts/?viewAsMember=true" },
];

export const services = [
  {
    kicker: "Brand",
    title: "Brand Direction",
    description: "Identity systems, art direction, and positioning for premium digital-first brands.",
  },
  {
    kicker: "Web",
    title: "Experience Design",
    description: "Responsive interfaces and editorial web experiences with strong conversion intent.",
  },
  {
    kicker: "Motion",
    title: "Motion Systems",
    description: "UI motion, product reveal sequences, and brand movement that feels deliberate.",
  },
  {
    kicker: "Launch",
    title: "Campaign Rollouts",
    description: "Launch surfaces and digital touchpoints aligned to a single cohesive visual idea.",
  },
  {
    kicker: "Content",
    title: "Creative Production",
    description: "Structured creative assets for social, landing pages, and high-impact product moments.",
  },
  {
    kicker: "Strategy",
    title: "Digital Positioning",
    description: "Messaging and experience framing that supports clearer perception and sharper recall.",
  },
];

export const portfolioItems = [
  { title: "Astra Motion", category: "Brand Launch" },
  { title: "Nexa Studio", category: "Product Website" },
  { title: "Veloura", category: "Luxury Commerce" },
  { title: "Pulse Frame", category: "Creative Campaign" },
  { title: "Halo Labs", category: "SaaS Rebrand" },
  { title: "Lumen Arc", category: "Immersive Portfolio" },
];

export const portfolioFilters = ["All", "Brand", "Web", "Campaign", "Motion"];

export const processSteps = [
  {
    title: "Discover",
    description: "We align on audience, visual ambition, and the emotional tone the brand should leave behind.",
  },
  {
    title: "Design",
    description: "We translate strategy into a premium interface and identity system with strong visual hierarchy.",
  },
  {
    title: "Launch",
    description: "We refine the final details so the experience ships polished, responsive, and presentation-ready.",
  },
];

export const values = [
  {
    kicker: "Intent",
    title: "Creative Clarity",
    description: "Every visual decision should support perception, not just decoration.",
  },
  {
    kicker: "Taste",
    title: "Premium Restraint",
    description: "We keep the work bold and atmospheric without losing clarity or usability.",
  },
  {
    kicker: "Craft",
    title: "Polished Execution",
    description: "Refinement shows up in motion, rhythm, spacing, and the quality of every surface.",
  },
];

export const stats = [
  { value: "12+", label: "Launches Framed" },
  { value: "4wk", label: "Typical Sprint" },
  { value: "100%", label: "Responsive Ready" },
  { value: "24/7", label: "Global Presence" },
];

export const contactDetails = [
  { label: "Email", value: siteConfig.email },
  { label: "Phone", value: siteConfig.phone },
  { label: "Location", value: "Remote-first, globally available" },
  { label: "Timeline", value: "New projects from October 2026" },
];
