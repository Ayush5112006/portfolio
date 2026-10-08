export type Project = {
  title: string;
  description: string;
  tags: string[];
  categories: string[];
  icon: string;
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
  highlight: string;
  caseStudy: string[];
};

export const projects: Project[] = [
  {
    title: "Deepfake & AI-Generated Content Detection Platform",
    description:
      "An AI-powered platform that detects deepfakes and AI-generated content using computer vision and machine learning, served through a FastAPI backend with a React interface for analyzing and reviewing media.",
    tags: ["AI / ML", "Computer Vision", "Python", "FastAPI", "React", "Node.js", "MongoDB"],
    categories: ["AI", "ML"],
    icon: "fa-solid fa-shield-halved",
    liveUrl: "",
    githubUrl: "",
    featured: true,
    highlight: "Computer Vision Detection",
    caseStudy: [
      "Detects deepfake and AI-generated media using computer vision techniques",
      "Machine learning model inference served through a FastAPI backend",
      "React and Node.js interface with MongoDB for analyzing and reviewing content",
      "End-to-end AI workflow connecting models with a production-style web application",
    ],
  },
  {
    title: "Alumni Connect",
    description:
      "A college networking platform that connects colleges, students, and alumni, with universal user invite flows and Razorpay payment API integration for premium features.",
    tags: ["Next.js", "Razorpay API", "Tailwind", "TypeScript"],
    categories: ["Web"],
    icon: "fa-solid fa-user-group",
    liveUrl: "https://alumni-connects-snowy.vercel.app/",
    githubUrl: "https://github.com/Ayush5112006/depstar",
    featured: true,
    highlight: "Payments + Invite Flows",
    caseStudy: [
      "Networking platform connecting colleges, students, and alumni in one place",
      "Universal user invite flows for organic growth",
      "Razorpay payment API integration for premium features",
      "Built with Next.js and TypeScript, deployed on Vercel",
    ],
  },
  {
    title: "Hostel Mass Attendance",
    description:
      "A real-time hostel attendance management system with role-based access control and date-wise attendance tracking, built with Next.js and Supabase as the backend database.",
    tags: ["Next.js", "Supabase", "Tailwind", "TypeScript"],
    categories: ["Web"],
    icon: "fa-solid fa-clipboard-check",
    liveUrl: "https://avj-peach.vercel.app/login",
    githubUrl: "https://github.com/Ayush5112006/hostel",
    highlight: "Role-Based Access",
    caseStudy: [
      "Real-time hostel attendance management system",
      "Role-based access control for different user types",
      "Date-wise attendance tracking and records",
      "Next.js frontend with Supabase backend database",
    ],
  },
  {
    title: "DDU Hackathon Platform",
    description:
      "A hackathon management platform built for DDU, featuring team registration, project submissions, and real-time leaderboard using Next.js and SQL database.",
    tags: ["Next.js", "SQL", "Tailwind", "TypeScript"],
    categories: ["Web"],
    icon: "fa-solid fa-trophy",
    liveUrl: "https://dduhackathon.vercel.app/",
    githubUrl: "https://github.com/Ayush5112006/dduhack",
    highlight: "Real-Time Leaderboard",
    caseStudy: [
      "Hackathon management platform built for DDU",
      "Team registration and project submission workflow",
      "Real-time leaderboard for live results",
      "Next.js with SQL database",
    ],
  },
  {
    title: "Train Ticket Booking",
    description:
      "A comprehensive train ticket booking platform with seat selection, payment integration, and real-time schedule tracking.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    categories: ["Web"],
    icon: "fa-solid fa-train",
    liveUrl: "",
    githubUrl: "https://github.com/Ayush5112006/Red-Feri",
    highlight: "Seat Selection + Payments",
    caseStudy: [
      "Train ticket booking platform with end-to-end flow",
      "Interactive seat selection",
      "Payment integration for bookings",
      "Real-time schedule tracking",
      "MERN stack — React, Node.js, Express, MongoDB",
    ],
  },
  {
    title: "Mobile App with AdMob",
    description:
      "Cross-platform mobile application integrated with Google AdMob for monetization and Firebase backend.",
    tags: ["React Native", "Firebase", "AdMob"],
    categories: ["Mobile"],
    icon: "fa-solid fa-mobile-screen-button",
    liveUrl: "",
    githubUrl: "",
    highlight: "AdMob Monetization",
    caseStudy: [
      "Cross-platform mobile application",
      "Google AdMob integration for monetization",
      "Firebase backend services",
      "Built with React Native",
    ],
  },
];
