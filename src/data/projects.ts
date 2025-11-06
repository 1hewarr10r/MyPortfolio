export type Project = {
  id: string;
  title: string;
  blurb: string;
  highlight?: string;
  links: { demo?: string; repo?: string; more?: string };
  images?: string[];
};

export const LINKS = {
  linkedin: "https://www.linkedin.com/in/umar-turdumambetov-6160ba368/",
  github: "https://github.com/1hewarr10r",
  cv: "/src/UmarTurdumambetov_CV.pdf",
  carPriceDrive:
    "https://drive.google.com/drive/folders/13AngcldziXQsCfKh6fylokz6W0F6s_6Q?usp=drive_link",
};

export const PROJECTS: Project[] = [
  {
    id: "car-estimator",
    title: "Car Price Estimator",
    blurb: "This is the ML model , that estimates the car's value based on it's descriptions(Year, Mileage, Mark, etc.)",
    highlight: "This is my first ML project",
    links: { more: "https://github.com/1hewarr10r/Car_Price_Estimator",},
    images: ["/projects/CarPriceEstimator/CarPriceEstimator.jpg", "/projects/CarPriceEstimator/CarPriceEstimator2.jpg","/projects/CarPriceEstimator/CarPriceEstimator3.jpg"],
  },
  {
    id: "Visual-Novel-Creator",
    title: "Visual Novel Creator",
    blurb: "An AI-powered tool that automatically generates complete visual novels using Google Gemini and Stability AI. Simply provide your story ideas through an interactive interface, and the system generates the dialogue, script, and images to create a playable Ren'Py visual novel.",
    links: { repo: "https://github.com/Vimpel-O-O/AI_Visual_Novel_Creator" ,
             demo: "https://showcase.codeday.org/project/cmhgqspw91903j5my04z26yk6"
     },
    images: ["/projects/VisualNovelCreator/VisualNovelCreator.jpg","/projects/VisualNovelCreator/VisualNovelCreator2.jpg","/projects/VisualNovelCreator/VisualNovelCreator3.jpg"]
  },
  {
    id: "hackathon-starter",
    title: "Hackathon Starter",
    blurb: "Template for ML/web hackathons to ship in hours.",
    links: { repo: LINKS.github },
  },
];