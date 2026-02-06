export interface Project {
  id: number;
  title: string;
  description: string;
  status: "completed" | "in-progress";
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
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
      image: "https://images.unsplash.com/photo-1760813360432-9b5d79eb9679?w=800",

      completionDate: "2024-12"
    },
    {
      id: 2,
      title: "FREE: Financial Resilience for Ex-Gamlbler",
      description: "Mobile Apps that aims to Provide Education and Finance Management for Ex-Gambler ",
      status: "completed",
      technologies: ["Team Work", "TensorFlow", "Solidity", "Pandas", "Fast API"],
      githubUrl: "https://github.com/orgs/Capstone-C242-PS225/repositories",
      image: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=800",
      completionDate: "2024-10"
    },
    {
      id: 3,
      title: "Elementary School Money Management System",
      description: "IoT management system for autonomous vehicles with real-time telemetry and remote control capabilities.",
      status: "in-progress",
      technologies: ["Next-JS", "Tailwind CSS", "TypeScript", "Figma"],
      githubUrl: "https://github.com/yourhandle/project-3",
      image: "https://images.unsplash.com/photo-1722231518525-d47ef643c410?w=800",
      completionDate: "2025-Q1"
    },
    {
      id: 4,
      title: "Inflow",
      description: "Web App for Multi-modal Emotion Recognition System using facial, vocal, and textual data.",
      status: "completed",
      technologies: ["Python", "PyTorch", "Gradio", "Hugging Face", "NLP", "Computer Vision", ],
      githubUrl: "https://github.com/yourhandle/project-4",
      liveUrl: "https://demo.example.com",
      image: "https://images.unsplash.com/photo-1718083272953-b171ae87b3d9?w=800",
      completionDate: "2024-08"
    },
    {
      id: 5,
      title: "CLO-Sub CLO Alignment Evaluation",
      description: "Research to find best model to evaluate Course Learning Outcome (CLO) alignment using NLP techniques.",
      status: "completed",
      technologies: ["PyTorch", "NLP", "Gradio"],
      githubUrl: "https://github.com/yourhandle/project-5",
      liveUrl: "https://demo.example.com",
      image: "https://images.unsplash.com/photo-1521239248915-738394a81876?w=800",
      completionDate: "2024-06"
    },
    {
      id: 5,
      title: "Video Hoax Detection using Multimodal and RAG",
      description: "",
      status: "completed",
      technologies: ["Langchain", "LLM", "RAG", "Text Captioning", "Data Mining"],
      githubUrl: "https://github.com/yourhandle/project-5",
      liveUrl: "https://demo.example.com",
      image: "https://images.unsplash.com/photo-1521239248915-738394a81876?w=800",
      completionDate: "2024-06"
    }
  ],
}
