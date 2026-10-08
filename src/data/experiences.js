// Shown newest first, in this order.
//
// start / end: "YYYY-MM" (e.g. "2024-06"). Leave `end` as null for a role you
// are still in: it shows "Present" and the duration keeps counting. Until
// `start` is set, the card simply hides its dates.
// companyUrl: optional; makes the company name a link.
const experiences = [
  {
    role: "Associate Software Engineer",
    company: "Contentstack Pvt Ltd",
    companyUrl: "https://www.contentstack.com",
    start: "2026-01",
    end: null,
    desc: "Entered the Product Development team at Contentstack Pvt Ltd, contributing to the development of multiple innovative features.",
  },
  {
    role: "Project Intern",
    company: "Tata Consultancy Services",
    companyUrl: "https://www.tcs.com",
    start: "2025-05",
    end: "2025-07",
    desc: "Worked under HyperInnovationLabs at TCS, building creative solutions for internal access",
  },
  {
    role: "Customer service chatbot",
    company: "HotPack Global",
    companyUrl: "https://www.hotpackglobal.com",
    start: "2024-02",
    end: "2024-03",
    desc: "Built a customer service chatbot for Hotpack Global that raised their customer satisfaction rate by 15%.",
  },
  {
    role: "Backend Intern",
    company: "ClientsBridge",
    companyUrl: null, // TODO: add the site if it has one
    start: "2024-04",
    end: "2024-07",
    desc: "Led the backend team for a freelancing platform: real-time chat, role-based auth and a scalable architecture.",
  },
];

export default experiences;
