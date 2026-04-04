import analysis from "@/public/asset/Project-Pics/Analysis.png";
import inflow from "@/public/asset/Project-Pics/Inflow.png";
import cloSubClo from "@/public/asset/Project-Pics/Clo-Sub-CLO.png";
import moneyManagement from "@/public/asset/Project-Pics/siskeu.png";
import taleshub from "@/public/asset/Project-Pics/TalesHub.png";
import freeProject from "@/public/asset/Project-Pics/free.jpeg";
import gfaNews from "@/public/asset/Project-Pics/gfa.jpeg";
import gemastik from "@/public/asset/Project-Pics/gemastik.png";
import umrahTravel from "@/public/asset/Project-Pics/umrah-travel.png";
import type { StaticImageData } from "next/image";

export type ProjectStatus = "completed" | "in-progress";

export type Project = {
  id: number;
  title: string;
  description: string;
  status: ProjectStatus;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image: StaticImageData | string;
  completionDate: string;
};

export const projectContent: Project[] = [
  {
    id: 1,
    title: "GFA News",
    description: "News web app built with native PHP.",
    status: "completed",
    technologies: ["Web Dev", "PHP", "HTML", "CSS", "Figma"],
    githubUrl: "https://github.com/GilangSN23/GFA-News/tree/master",
    image: gfaNews,
    completionDate: "2024-07",
  },
  {
    id: 2,
    title: "FREE: Financial Resilience for Ex-Gambler",
    description:
      "Mobile app that provides education and financial management for ex-gamblers.",
    status: "completed",
    technologies: ["Team Work", "TensorFlow", "Solidity", "Pandas", "Fast API"],
    githubUrl: "https://github.com/orgs/Capstone-C242-PS225/repositories",
    image: freeProject,
    completionDate: "2025-01",
  },
  {
    id: 3,
    title: "Elementary School Money Management System",
    description:
      "School money management dashboard focused on clear finance operations.",
    status: "in-progress",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Figma"],
    githubUrl: "",
    image: moneyManagement,
    completionDate: "2026-Q1",
  },
  {
    id: 4,
    title: "Inflow",
    description:
      "Web app for multimodal emotion recognition with facial, vocal, and textual input.",
    status: "completed",
    technologies: [
      "Python",
      "PyTorch",
      "Gradio",
      "Hugging Face",
      "NLP",
      "Computer Vision",
    ],
    githubUrl: "https://github.com/FadQode/Inflow-Modelling",
    liveUrl: "https://inflow-overlogic.vercel.app/en",
    image: inflow,
    completionDate: "2025-06",
  },
  {
    id: 5,
    title: "CLO-Sub CLO Alignment Evaluation",
    description:
      "Research project to evaluate course learning outcome alignment using NLP techniques.",
    status: "completed",
    technologies: ["PyTorch", "NLP", "Gradio"],
    githubUrl: "https://github.com/FadQode/skripsi-modelling",
    liveUrl: "https://huggingface.co/spaces/FadQ/skripsi-clo-subClo-ALignment-Measure",
    image: cloSubClo,
    completionDate: "2026-01",
  },
  {
    id: 6,
    title: "Video Hoax Detection using Multimodal and RAG",
    description:
      "Detects and analyzes video hoaxes using multimodal data and retrieval-augmented generation.",
    status: "completed",
    technologies: ["Langchain", "LLM", "RAG", "Text Captioning", "Data Mining"],
    githubUrl: "https://github.com/FadQode/Fact-Check-withLLM-RAG",
    image: gemastik,
    completionDate: "2025-07",
  },
  {
    id: 7,
    title: "Air Quality Analysis Dashboard",
    description:
      "Analyzes and visualizes air quality data from multiple sources to provide insights.",
    status: "completed",
    technologies: ["Data Analysis", "Python", "Pandas", "Streamlit"],
    githubUrl: "https://github.com/FadQode/Final-Project-DA-Dicoding",
    liveUrl: "https://fadqode-final-project-da-dicoding-dashboard-r1nmou.streamlit.app/",
    image: analysis,
    completionDate: "2024-08",
  },
  {
    id: 8,
    title: "TalesHub: Where Every Story Met",
    description:
      "Mobile app design platform where users can read legends and myths around the world.",
    status: "completed",
    technologies: ["Figma", "UI/UX", "Design"],
    githubUrl:
      "https://www.figma.com/proto/uHTuOnFtBpojsIYwYBsgue/TalesHub-IMK-Assignment?node-id=63-245&starting-point-node-id=41%3A189&t=asK5xotM4RGn6Lbu-1",
    image: taleshub,
    completionDate: "2025-10",
  },
  {
    id: 9,
    title: "Umrah Travel Landing Page",
    description:
      "Landing page for a travel agency specializing in Umrah packages.",
    status: "completed",
    technologies: ["Vue.js", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/Josumaru/muslimpergi-demo-replica",
    liveUrl: "https://muslimpergi.vercel.app/",
    image: umrahTravel,
    completionDate: "2025-06",

  }
];
