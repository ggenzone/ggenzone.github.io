export type Experience = {
  date: string;
  role: string;
  place: string;
  type: string;
  desc?: string;
  location?: string;
  bullets: string[];
};

export type Education = {
  date: string;
  degree: string;
  place: string;
  location: string;
};

export type Contact = {
  name: string;
  url: string;
};

export type Resume = {
  title: string;
  description: string;
  firstname: string;
  lastname: string;
  tagline: string;
  experiences: Experience[];
  educations: Education[];
  skills: string[];
  contacts: Contact[];
};

const resume: Resume = {
  title: "Guido Genzone",
  description: "Guido Genzone – software engineer in Spain",
  firstname: "Guido",
  lastname: "Genzone",
  tagline: "Software engineer",
  experiences: [
    {
      date: "Mar 2024 – Jan 2025",
      role: "Senior Software Engineer",
      place: "[Bodycad](https://bodycad.com)",
      type: "Full-time",
      desc: "Bodycad enables orthopedic surgeons to create a personalized restoration based on the anatomical specifications of their patient using the company's proprietary Personalized Restoration Software.",
      bullets: [
        "Designed and developed web application based on NestJS / ReactJS / TypeScript."
      ]
    },
    {
      date: "Feb 2020 – Feb 2024",
      role: "Senior Software Engineer",
      place: "[NetApp](https://www.netapp.com)",
      type: "Remote contractor",
      desc: "NetApp, Inc. is an American hybrid cloud data services and data management company. Working in the Product Documentation & Business Process Automation deparment I worked developing the following tools",
      bullets: [
        "Continuous Integration and Deployment",
        "Content site generation (Ruby - Javascript - HTML - CSS).",
        "Automatic PDF generation (Ruby - Javascript - HTML - CSS).",
        "Automatic content translation using NMT (Ruby).",
        "Developed a ChatBot using OpenAI / Azure Cognitive Search (TypeScript / Python).",
        "Developed GitHub Apps using Probot framework (TypeScript)."
      ]
    },
    {
      date: "Feb 2020 – Feb 2024",
      role: "Senior Software Engineer",
      place: "[Sinapi](https://www.thesinapiteam.com/)",
      type: "Remote contractor",
      desc: "SaaS Management Software for translation agencies",
      bullets: [
        "Designed and developed web application based on Symfony framework.",
        "Designed and developed a frontend based on ReactJS."
      ]
    },
    {
      date: "Ago 2017 – Oct 2021",
      role: "Co-founder",
      place: "[BeerApp](https://www.beerapp.net)",
      location: "Rosario, Argentina",
      type: "Full-time",
      desc: "Management Software for Craft Breweries together with another co-founder, we designed and developed craft brewery management software from the ground up",
      bullets: [
        "Designed and developed web application based on Symfony framework.",
        "Designed and developed mobile application based on ReactNative + Expo."
      ]
    },
    {
      date: "Ago 2013 – Ago 2020",
      role: "Senior Software Engineer",
      place: "Ministry of Health of Santa Fe (Argentina)",
      location: "Rosario, Argentina",
      type: "Full-time",
      bullets: [
        "Designed and developed an emergency medical services software that provides information management tools for ambulance and hospitals.",
        "Designed and developed web application based on Symonfy."
      ]
    },
    {
      date: "Ago 2013 – Mar 2014",
      role: "PHP Developer",
      place: "[SocialEngine](https://socialengine.com/) / USA",
      location: "Rosario, Argentina",
      type: "Remote contractor",
      desc: "SocialEngine PHP, a white label social network software solution.",
      bullets: [
        "Developed web application based on Zend framework."
      ]
    },
    {
      date: "Sep 2011 – Apr 2012",
      role: "EasyCrypt intership",
      place: "[IMDEA Software Institute](https://software.imdea.org/)",
      desc: "EasyCrypt is a toolset for reasoning about relational properties of probabilistic computations with adversarial code. Its main application is the construction and verification of game-based cryptographic proofs.",
      location: "Madrid, Spain",
      type: "Full-time",
      bullets: [
        "Developed UI based on ProofGeneral for Emacs (elisp).",
        "Developed backtrack feature for proofs (OCaml)."
      ]
    },
    {
      date: "Jun 2008 – Dec 2011",
      role: "Senior C/C++ Developer",
      place: "Accenture",
      location: "Rosario, Argentina",
      type: "Full-time",
      desc: "Accenture is a multinational professional services company where I began my career as a junior C/C++ developer. I worked my way up to the position of senior developer before leaving the company. While at Accenture, I worked on Telefónica España Billing System.",
      bullets: [
        "Development and maintenance of C functionalities in Unix environments."
      ]
    },
    {
      date: "2008",
      role: "Undergraduate Teaching Assistant in Programming language analysis II",
      place: "Universidad Nacional de Rosario",
      type: "Part-time",
      location: "Rosario, Argentina",
      bullets: [
        "Functional Programming"
      ]
    },
    {
      date: "2007",
      role: "Undergraduate Teaching Assistant in Discrete Mathematics",
      place: "Universidad Nacional de Rosario",
      type: "Part-time",
      location: "Rosario, Argentina",
      bullets: [
        "Discrete Mathematics, Functional Programming, C Programming"
      ]
    }
  ],
  educations: [
    {
      date: "Jan 2006 – ",
      degree: "M.Sc. Degree in Computer Science",
      place: "Universidad Nacional de Rosario",
      location: "Argentina"
    }
  ],
  skills: [
    "Languages: PHP, JavaScript, C ,Ruby, TypeScript, Python, Haskell, Ocaml",
    "Frameworks: Symfony, Zend, Probot, NestJS, Expo, ESP-IDF",
    "Libraries: ReactJS, Tailwind, ReactNative",
    "Tools: Docker, MySQL, Postgres, MongoDB, Redis"
  ],
  contacts: [
    { name: "Linkedin:", url: "[linkedin.com/in/guido-genzone-01a274179](https://linkedin.com/in/guido-genzone-01a274179/)" },
    { name: "Github:", url: "[github.com/ggenzone](https://github.com/ggenzone)" },
    { name: "Location:", url: "Alicante, Spain" }
  ]
};

export default resume;