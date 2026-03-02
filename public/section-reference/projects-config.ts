import { StaticImageData } from "next/image";
import skripsi from "../asset/Project-Pics/Clo-Sub-CLO.png";
import inflow from "../asset/Project-Pics/Inflow.png";
import analysis from "../asset/Project-Pics/Analysis.png";
import money from "../asset/Project-Pics/siskeu.png";
import taleshub from "../asset/Project-Pics/TalesHub.png";
import free from "../asset/Project-Pics/free.jpeg";
import gfa from "../asset/Project-Pics/gfa.jpeg";



export interface Project {
  id: number;
  title: string;
  description: string;
  status: "completed" | "in-progress";
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image: StaticImageData | string; // public image path
  completionDate: string;
}

export interface ProjectConfig {
  projects: Project[];
}

export const projectConfig: ProjectConfig =  {
    projects: [
    {
      id: 1,
      title: "GFA News",
      description: "News Web App built with native PHP",
      status: "completed",
      technologies: ["Web Dev", "PHP", "HTML", "CSS", "figma"],
      githubUrl: "https://github.com/GilangSN23/GFA-News/tree/master",
      image: gfa,

      completionDate: "2024-07"
    },
    {
      id: 2,
      title: "FREE: Financial Resilience for Ex-Gamlbler",
      description: "Mobile Apps that aims to Provide Education and Finance Management for Ex-Gambler ",
      status: "completed",
      technologies: ["Team Work", "TensorFlow", "Solidity", "Pandas", "Fast API"],
      githubUrl: "https://github.com/orgs/Capstone-C242-PS225/repositories",
      image: free,
      completionDate: "2025-01"
    },
    {
      id: 3,
      title: "Elementary School Money Management System",
      description: "IoT management system for autonomous vehicles with real-time telemetry and remote control capabilities.",
      status: "in-progress",
      technologies: ["Next-JS", "Tailwind CSS", "TypeScript", "Figma"],
      githubUrl: "",
      image: money,
      completionDate: "2026-Q1"
    },
    {
      id: 4,
      title: "Inflow",
      description: "Web App for Multi-modal Emotion Recognition System using facial, vocal, and textual data.",
      status: "completed",
      technologies: ["Python", "PyTorch", "Gradio", "Hugging Face", "NLP", "Computer Vision", ],
      githubUrl: "https://github.com/FadQode/Inflow-Modelling",
      liveUrl: "https://inflow-overlogic.vercel.app/en",
      image: inflow,
      completionDate: "2025-06"
    },
    {
      id: 5,
      title: "CLO-Sub CLO Alignment Evaluation",
      description: "Research to find best model to evaluate Course Learning Outcome (CLO) alignment using NLP techniques.",
      status: "completed",
      technologies: ["PyTorch", "NLP", "Gradio"],
      githubUrl: "https://github.com/FadQode/skripsi-modelling",
      liveUrl: "https://huggingface.co/spaces/FadQ/skripsi-clo-subClo-ALignment-Measure",
      image: skripsi,
      completionDate: "2024-06"
    },
    {
      id: 6,
      title: "Video Hoax Detection using Multimodal and RAG",
      description: "Detecting and analyzing video hoaxes using multimodal data and Retrieval-Augmented Generation (RAG) techniques.",
      status: "completed",
      technologies: ["Langchain", "LLM", "RAG", "Text Captioning", "Data Mining"],
      githubUrl: "https://github.com/FadQode/Fact-Check-withLLM-RAG",
      image: taleshub,
      completionDate: "2025-08"
    },
      {
      id: 7,
      title: "Air Quality Analysis Dashboard",
      description: "Analyze and visualize air quality data from multiple sources to provide insights",
      status: "completed",
      technologies: ["Data Analysis", "Python", "Pandas", "Streamlit",],
      githubUrl: "https://github.com/FadQode/Final-Project-DA-Dicoding",
      liveUrl: "https://fadqode-final-project-da-dicoding-dashboard-r1nmou.streamlit.app/",
      image: analysis,
      completionDate: "2024-08"
    },
      {
      id: 8,
      title: "TalesHub: Where every story met",
      description: "Designing a Mobile App platform where users can read legend and myth all over the world",
      status: "completed",
      technologies: ["Figma", "UI/UX", "Design"],
      githubUrl: "https://www.figma.com/proto/uHTuOnFtBpojsIYwYBsgue/TalesHub-IMK-Assignment?node-id=63-245&starting-point-node-id=41%3A189&t=asK5xotM4RGn6Lbu-1",
      image: taleshub,
      completionDate: "2024-08"
    }
  ],
}
