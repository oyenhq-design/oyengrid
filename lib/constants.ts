// Navigation
export const NAV_ITEMS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "For", href: "#for" },
] as const

// Pricing
export const PRICING_TIERS = [
  {
    name: "Basic",
    price: "₦25,000",
    description: "Perfect for getting started",
    features: [
      "Up to 5 programmes",
      "Basic session management",
      "Email support",
      "Up to 100 participants",
    ],
    popular: false,
  },
  {
    name: "Standard",
    price: "₦50,000",
    description: "For growing organisations",
    features: [
      "Unlimited programmes",
      "Advanced session management",
      "Priority email support",
      "Up to 1,000 participants",
      "Recording storage",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "₦100,000",
    description: "For established programmes",
    features: [
      "Everything in Standard",
      "24/7 phone support",
      "Custom integrations",
      "Unlimited participants",
      "Analytics dashboard",
      "API access",
    ],
    popular: false,
  },
  {
    name: "Premium+",
    price: "Custom",
    description: "Enterprise solutions",
    features: [
      "Everything in Premium",
      "Dedicated account manager",
      "Custom development",
      "SLA guarantee",
      "On-premise option",
    ],
    popular: false,
  },
] as const

// Dashboard sidebar items
export const DASHBOARD_NAV_ITEMS = [
  { label: "Overview", href: "/app", icon: "Home" },
  { label: "Programmes", href: "/app/programmes", icon: "Briefcase" },
  { label: "Participants", href: "/app/participants", icon: "Users" },
  { label: "Sessions", href: "/app/sessions", icon: "Calendar" },
  { label: "Media Library", href: "/app/media", icon: "Film" },
  { label: "Messages", href: "/app/messages", icon: "MessageSquare" },
  { label: "Notes", href: "/app/notes", icon: "FileText" },
  { label: "Settings", href: "/app/settings", icon: "Settings" },
] as const

// Features
export const FEATURES = [
  {
    title: "Programme Management",
    description: "Create, structure, and manage programmes with ease.",
    icon: "Briefcase",
  },
  {
    title: "Session Delivery",
    description: "Schedule and deliver training sessions with full control.",
    icon: "Calendar",
  },
  {
    title: "Communication",
    description: "Built-in messaging for instructors and participants.",
    icon: "MessageSquare",
  },
  {
    title: "Recordings & Storage",
    description: "Automatically store and organise session recordings.",
    icon: "Film",
  },
  {
    title: "Tracking & Oversight",
    description: "Real-time insights into programme progress and participation.",
    icon: "BarChart3",
  },
  {
    title: "Certificates",
    description: "Issue certificates automatically upon programme completion.",
    icon: "Award",
  },
] as const

// How it works
export const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Create Your Programme",
    description:
      "Set up your programme structure with modules, sessions, and timelines.",
  },
  {
    step: "2",
    title: "Invite & Run Sessions",
    description:
      "Add participants and deliver sessions with live tracking and engagement tools.",
  },
  {
    step: "3",
    title: "Access & Analyse",
    description:
      "Access recordings, track completion, and generate insights from your programme data.",
  },
] as const

// Target users
export const TARGET_USERS = [
  {
    title: "Training Organisations",
    description:
      "Simplify programme delivery and participant management for professional training.",
    icon: "Building2",
  },
  {
    title: "Bootcamps",
    description:
      "Intensive, structured programmes with real-time tracking and engagement.",
    icon: "Zap",
  },
  {
    title: "Corporate Programmes",
    description:
      "Enterprise-grade solutions for internal training and professional development.",
    icon: "Briefcase",
  },
]
