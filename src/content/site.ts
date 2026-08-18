// All editable site content lives here.
export const contact = {
  name: "Kathy Rodelas Talabis",
  shortName: "Kathy Rodelas",
  title: "Real Estate Operations, CRM & Workflow Automation Specialist",
  email: "hello@example.com", // TODO: replace with real email
  linkedin: "https://www.linkedin.com/in/your-profile", // TODO: replace
  schedulingUrl: "https://calendly.com/your-link", // TODO: replace
  resumeUrl: "/resume-placeholder.pdf", // TODO: replace with real resume file
  location: "Based in the Philippines",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const experienceFlow = {
  eyebrow: "Experience snapshot",
  title: "Real estate operations, from first conversation to appointment",
  intro:
    "Nearly 10 years working directly with property owners, investors, builders, and real estate agents — qualifying opportunities, nurturing leads, and moving conversations toward the next step.",
  steps: [
    {
      marker: "Property Owner Conversations",
      title: "Motivation, timeline, and condition",
      body: "Speaking directly with property owners to understand why they are selling, when they need to move, and what shape the property is in.",
    },
    {
      marker: "Lead Qualification",
      title: "Finding the opportunity behind the inquiry",
      body: "Pre-qualifying sellers and identifying which leads are worth pursuing based on the client's acquisition or listing criteria.",
    },
    {
      marker: "Investor & Builder Acquisition",
      title: "Fix & flip, wholesale, and teardown opportunities",
      body: "Worked with real estate investors and builders evaluating properties for acquisition, redevelopment, and resale.",
    },
    {
      marker: "Appointment Setting",
      title: "Turning conversations into next steps",
      body: "Following up with prospects, handling ongoing conversations, and setting qualified appointments for agents, investors, and acquisition teams.",
    },
    {
      marker: "Real Estate Operations",
      title: "CRM, follow-up, and market support",
      body: "Managing pipelines, creating follow-up campaigns, sending property listings, preparing market analysis, and keeping leads organized until they are ready to move forward.",
    },
  ],
};

export const expertise = [
  {
    title: "CRM & Pipeline Management",
    body: "Lead organization, segmentation, conversation notes, task management, database cleanup, status tracking, and agent handoff.",
    icon: "pipeline" as const,
  },
  {
    title: "Lead Nurturing & Follow-Up",
    body: "Buyer, seller, expired, off-market, and acquisition lead outreach, long-term nurturing, appointment setting, and follow-up coordination.",
    icon: "conversation" as const,
  },
  {
    title: "Workflow Automation",
    body: "Automated responses, follow-up sequences, lead scoring, task creation, notifications, escalation rules, and workflow monitoring.",
    icon: "automation" as const,
  },
  {
    title: "Real Estate Operations",
    body: "Property research, campaign support, listing coordination, appointment management, activity reporting, and process documentation.",
    icon: "property" as const,
  },
];

export const experienceDuties = [
  "Managing buyer and seller leads",
  "Conducting cold, warm, expired, and off-market outreach",
  "Writing detailed CRM notes and maintaining lead histories",
  "Coordinating appointments and follow-up activities",
  "Supporting real estate agents in Miami and Washington markets",
  "Researching properties and potential opportunities",
  "Identifying leads requiring immediate agent attention",
  "Preventing opportunities from being lost through inconsistent follow-up",
];

export const bamoAreas = [
  {
    title: "Property marketplace",
    body: "Listing structure and agent visibility for buyers browsing available properties.",
  },
  {
    title: "Advertising & campaigns",
    body: "Campaign management and listing content workflows that bring inquiries in.",
  },
  {
    title: "AI-assisted CRM",
    body: "Lead qualification, conversation handling, and follow-up support for agents.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Understand",
    body: "Review how the team currently handles inquiries, leads, tasks, and follow-up.",
  },
  {
    step: "02",
    title: "Identify",
    body: "Find bottlenecks, repetitive work, missing information, and leads at risk of being overlooked.",
  },
  {
    step: "03",
    title: "Build and Improve",
    body: "Organize the CRM and create practical workflows, automations, templates, and rules.",
  },
  {
    step: "04",
    title: "Monitor and Refine",
    body: "Review activity and response data, identify issues, and continuously improve the process.",
  },
];

export const toolGroups = [
  {
    title: "CRM and Lead Management",
    items: ["Follow Up Boss", "Custom real estate CRM systems", "Lead pipelines and task management"],
  },
  {
    title: "Workflow Automation",
    items: ["n8n", "Webhooks", "Automated follow-up systems", "Workflow monitoring"],
  },
  {
    title: "AI-Assisted Operations",
    items: ["OpenAI", "Claude", "AI lead qualification", "Conversation analysis", "Follow-up decision systems"],
  },
  {
    title: "Product and Data Tools",
    items: ["Supabase", "Firebase", "GitHub", "Vercel", "Next.js", "Expo"],
  },
  {
    title: "Marketing Operations",
    items: ["Meta Messenger", "Facebook campaigns", "Listing and campaign content workflows"],
  },
];

export const aboutParagraphs = [
  "I started working in real estate operations in 2017, supporting agents with prospecting, lead follow-up, CRM management, appointments, property research, and day-to-day client communication.",
  "Working directly inside real estate workflows showed me how easily good opportunities can be lost—not because agents are not working hard, but because inquiries, conversations, and follow-up tasks can quickly become overwhelming.",
  "That experience led me to explore workflow automation and eventually build BaMo, a Philippine real estate technology startup designed to support agents between receiving an inquiry and moving that lead toward the next step.",
  "Today, I bring together hands-on real estate experience, operational thinking, CRM management, and practical automation to help real estate professionals build more organized and dependable systems.",
];

export const aboutFacts = [
  "Based in the Philippines",
  "Supporting U.S. and Philippine real estate operations",
  "Available for remote opportunities and selected projects",
];
