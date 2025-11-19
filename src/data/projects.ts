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
  cv: `${import.meta.env.BASE_URL}UmarTurdumambetov_Resume.pdf`,
  carPriceDrive:
    "https://drive.google.com/drive/folders/13AngcldziXQsCfKh6fylokz6W0F6s_6Q?usp=drive_link",
};

const IMG = (folder: string, file: string) =>
  `${import.meta.env.BASE_URL}projects/${folder}/${file}`;

export const PROJECTS: Project[] = [
  {
    id: "polypredictor-kit",
    title: "PolyPredictor-Kit",
    blurb: "AI Copilot that analyzes Polymarket data and generates real-time insights.",
    links: {
      repo: "https://devpost.com/software/poly-predictor-kit?ref_content=user-portfolio&ref_feature=in_progress",
    },
    highlight: "Project that won the QuackHacks 2025 Polymarket track.",
    images: [IMG("PolyPredictor-Kit", "PolyPredictor-Kit.jpg")],
  },
  {
    id: "visual-novel-creator",
    title: "Visual Novel Creator",
    blurb:
      "An AI-powered tool that generates complete visual novels using Gemini and Stability AI. It takes your story ideas and builds dialogues, scripts, and images for a playable Ren'Py visual novel.",
    links: {
      repo: "https://github.com/Vimpel-O-O/AI_Visual_Novel_Creator",
      demo: "https://showcase.codeday.org/project/cmhgqspw91903j5my04z26yk6",
    },
    images: [
      IMG("VisualNovelCreator", "1.jpg"),
      IMG("VisualNovelCreator", "2.jpg"),
      IMG("VisualNovelCreator", "3.jpg"),
    ],
  },
   {
    id: "car-estimator",
    title: "Car Price Estimator",
    blurb:
      "This ML model estimates a car's value based on its attributes (Year, Mileage, Make, etc.).",
    highlight: "My first ML project",
    links: { more: "https://github.com/1hewarr10r/Car_Price_Estimator" },
    images: [
      IMG("CarPriceEstimator", "1.jpg"),
      IMG("CarPriceEstimator", "2.jpg"),
      IMG("CarPriceEstimator", "3.jpg"),
    ],
  },
];