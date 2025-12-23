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
      title: "Neural Command Center",
      description: "AI-powered dashboard for real-time system monitoring and anomaly detection. Built with React, FastAPI, and TensorFlow.",
      status: "completed",
      technologies: ["React", "FastAPI", "TensorFlow", "MongoDB"],
      githubUrl: "https://github.com/yourhandle/project-1",
      liveUrl: "https://demo.example.com",
      image: "https://images.unsplash.com/photo-1760813360432-9b5d79eb9679?w=800",

      completionDate: "2024-12"
    },
    {
      id: 2,
      title: "Wasteland Marketplace",
      description: "Decentralized trading platform with smart contract integration and real-time price tracking.",
      status: "completed",
      technologies: ["Next.js", "Solidity", "Web3.js", "PostgreSQL"],
      githubUrl: "https://github.com/yourhandle/project-2",
      liveUrl: "https://demo.example.com",
      image: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=800",
      completionDate: "2024-10"
    },
    {
      id: 3,
      title: "Rover Control System",
      description: "IoT management system for autonomous vehicles with real-time telemetry and remote control capabilities.",
      status: "in-progress",
      technologies: ["Python", "ROS", "MQTT", "Redis"],
      githubUrl: "https://github.com/yourhandle/project-3",
      image: "https://images.unsplash.com/photo-1722231518525-d47ef643c410?w=800",
      completionDate: "2025-Q1"
    },
    {
      id: 4,
      title: "Data Mining Operation",
      description: "Advanced data pipeline for processing and analyzing large-scale datasets with ML-powered insights.",
      status: "completed",
      technologies: ["Python", "Pandas", "Apache Spark", "Kafka"],
      githubUrl: "https://github.com/yourhandle/project-4",
      liveUrl: "https://demo.example.com",
      image: "https://images.unsplash.com/photo-1718083272953-b171ae87b3d9?w=800",
      completionDate: "2024-08"
    },
    {
      id: 5,
      title: "Terminal Interface OS",
      description: "Custom web-based terminal with advanced command parsing and plugin system.",
      status: "completed",
      technologies: ["TypeScript", "Xterm.js", "Node.js"],
      githubUrl: "https://github.com/yourhandle/project-5",
      liveUrl: "https://demo.example.com",
      image: "https://images.unsplash.com/photo-1521239248915-738394a81876?w=800",
      completionDate: "2024-06"
    }
  ],
}
