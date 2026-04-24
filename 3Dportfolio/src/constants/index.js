import {
  mobile, backend, creator, web,
  javascript, typescript, html, css, reactjs, redux, tailwind, nodejs, mongodb, git, figma, docker, threejs,
  fordAtlantic, moniteur, revature, ford,
  carrent, jobit, tripguide, managecorp, crmPredictor, qaInspector,
  nastasi, stackhouse, sheehan,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

export const services = [
  { title: "Full Stack Engineer", icon: web },
  { title: "React Native Developer", icon: mobile },
  { title: "Backend Developer", icon: backend },
  { title: "QA Automation Lead", icon: creator },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "docker", icon: docker },
  { name: "figma", icon: figma },
];

export const experiences = [
  {
    title: "Quality Assurance/Control Assistant",
    company_name: "Ford Atlantic",
    icon: fordAtlantic,
    iconBg: "#ffffff",
    date: "July 2012 – August 2016",
    points: [
      "Managed the Pre-Production Approval Process (PPAP) documentation for components.",
      "Maintained technical familiarity with international standards (ASME, ASTM).",
      "Implemented manual test suites alongside Python and Selenium.",
      "Led specialized quality assurance efforts and automated sales lead verification.",
      "Developed manufacturing inspection tools and hardware rotation methods.",
    ],
  },
  {
    title: "Quality Assurance Leader",
    company_name: "Moniteur Devices",
    icon: moniteur,
    iconBg: "#ffffff",
    date: "May 2016 – June 2019",
    points: [
      "Executed precision product inspections using metrology tools.",
      "Optimized manual workflows by replicating machining automation principles.",
      "Authored technical documentation for complex components.",
      "Validated mobile application functionality utilizing CI/CD pipelines.",
      "Established quality gate documentation standards.",
      "Utilized JavaScript, C++, and SQL within Agile workflows.",
    ],
  },
  {
    title: "Full Stack Software/Systems Engineer",
    company_name: "Revature",
    icon: revature,
    iconBg: "#f26d5b",
    date: "December 2018 – August 2021",
    points: [
      "Managed the complete SDLC from conception to deployment.",
      "Designed and implemented RESTful APIs to connect front-end and backend.",
      "Implemented automated CI/CD pipelines.",
      "Refactored legacy SQL queries boosting page load speeds by 60%.",
      "Migrated payment processing into a standalone microservice.",
      "Engaged in full-stack development using enterprise-level technologies.",
    ],
  },
  {
    title: "Sales/Client Consultant & Solutions Specialist",
    company_name: "Performance Ford",
    icon: ford,
    iconBg: "#003478",
    date: "March 2024 – May 2025",
    points: [
      "Engineered automated sales processes and QA protocols.",
      "Sanitized legacy customer databases generating $200k in new revenue.",
      "Built automated performance dashboards cutting response times.",
      "Consulted on tailored product solutions and technical diligence.",
      "Managed complex sales pipelines via high-volume outreach.",
      "Developed manufacturing inspection tools to optimize the QA cycle.",
    ],
  },
];

export const projects = [
  {
    name: "ManageCorp",
    description: "A web and mobile management app for project statuses and CRM operations.",
    tags: [
      { name: "php", color: "blue-text-gradient" },
      { name: "sql", color: "green-text-gradient" },
      { name: "python", color: "pink-text-gradient" },
    ],
    image: managecorp,
    source_code_link: "https://github.com/funabdul",
  },
  {
    name: "Smart CRM Predictor",
    description: "Utilizes Python and Selenium to scrape lead health data and predict revenue growth.",
    tags: [
      { name: "selenium", color: "blue-text-gradient" },
      { name: "data-analysis", color: "green-text-gradient" },
      { name: "automation", color: "pink-text-gradient" },
    ],
    image: crmPredictor,
    source_code_link: "https://github.com/funabdul",
  },
  {
    name: "Automated QA Inspector",
    description: "Hardware-software integration using computer vision to detect measurement drift.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "opencv", color: "green-text-gradient" },
      { name: "iot", color: "pink-text-gradient" },
    ],
    image: qaInspector,
    source_code_link: "https://github.com/funabdul",
  },
  {
    name: "Car Rent",
    description: "Web-based platform that allows users to search, book, and manage car rentals.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/funabdul",
  },
  {
    name: "Job IT",
    description: "Web application that enables users to search for job openings and view salary ranges.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "restapi", color: "green-text-gradient" },
      { name: "scss", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/funabdul",
  },
  {
    name: "Trip Guide",
    description: "A comprehensive travel booking platform for flights, hotels, and rental cars.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/funabdul",
  },
];

export const testimonials = [
  {
    testimonial: "I didn't think a website could ever match the aesthetic quality of our physical product, but David exceeded all expectations.",
    name: "John Nastasi",
    designation: "Plant Manufacturing",
    company: "Constellation Corp",
    image: nastasi,
  },
  {
    testimonial: "David’s dedication to his clients' long-term success is unparalleled in the web development industry.",
    name: "Amy Stackhouse",
    designation: "CNC Program",
    company: "Milling Labs",
    image: stackhouse,
  },
  {
    testimonial: "Thanks to David’s optimization work, our site traffic has grown by 50%. His impact on our business has been invaluable.",
    name: "Don Sheehan",
    designation: "QA Manager",
    company: "Staff Associates",
    image: sheehan,
  },
];