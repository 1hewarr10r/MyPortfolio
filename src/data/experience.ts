export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  location?: string;
  start: string; 
  end: string;  
  bullets: string[];
  tags?: string[];
  link?: string; 
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "bc-ta",
    role: "Software Engineer (Part-Time)",
    company: "IUK College NOMAD",
    location: "Bishkek, Kyrgyzstan",
    start: "June 2023",
    end: "March 2024",
    bullets: [
      "Contributed to the design, development and deployment of a campus-wide security program significantly enhancing college safety protocols.",
      "Assisted in configuring, testing and optimizing network and data protection tools to strengthen cybersecurity measures.",
      "Collaborated closely with the IT team to improve system reliability, proactively safeguarding against potential threats and vulnerabilities."
    ],
    tags: ["Python", "Data Analytics", "Data Bases", "SQL", "Cybersecurity"],
    link: "https://nomadcollege.kg/"
  },
  {
    id: "portfolio",
    role: "Software Engineer (Intern),",
    company: "Microcredit Company Kentush",
    location: "Bishkek, Kyrgyzstan",
    start: "March 2024",
    end: "June 2024",
    bullets: [
      "Assisted in maintaining and updating client financial records in the company’s database, ensuring accuracy and compliance with data standards.",
      "Helped staff process loan applications and prepare detailed financial reports, contributing to efficient service delivery.",
      "Supported the IT and operations teams by troubleshooting basic software and system issues, improving daily workflow and reducing downtime."
    ],
    tags: ["Python" , "SQL" , "Excel" , "Networking" , "System Administration" , "Technical Support" , "Troubleshooting" , "Database Management" , "Automation" , "Data Entry" , "Hadware Support" , "Software Maintenance"],
    link: ""
  },
  {
    id: "Hackathon",
    role: "Contributor (Winner)",
    company: "Hackathon - CodeDay 2025",
    location: "Seattle, WA",
    start: "Nov 1 , 2025",
    end: "Single Day Event",
    bullets: [
      "Set up the user interface and worked on the front-end design, creating menus, buttons, and layouts that made the game smooth and interactive. ",
      "Helped debug scene transitions and assisted with connecting Ren’Py to the AI generation pipeline. In addition, I supported other areas like testing, troubleshooting layout issues, and refining the overall user experience.",
      "Helped integrate the AI APIs for story and image generation, ensuring they connected properly with Ren’Py"
    ],
    tags: ["Python", "Ren’Py", "UI/UX", "API Integration", "AI Tools", "Game Development", "Team Collaboration", "Gemini API", "Stability AI", "Debugging"],
    link: "https://showcase.codeday.org/project/cmhgqspw91903j5my04z26yk6"
  }
];