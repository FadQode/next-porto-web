import profilePics from "../asset/profile-pics.png";

export interface ProfileConfig {
  profile: {
    name: string;
    role: string;
    description: string;
    image: string; // public image path
  };
  techStack: {
    title: string;
    description: string;
    logos: string[]; // public image paths
  };
  experience: {
    title: string;
    subtitle: string;
  };
  highlight: {
    title: string;
    description: string;
  };
  activity: {
    title: string;
    description: string;
  };
}

export const profileConfig = {
  profile: {
    name: "Fadhil Erdya Qashmal",
    subtitle: "Informatics Engineering Graduate & Aspiring to Keep Learning, Studying, and Innvoating",
    description: "Dive into the transformative power of technology.",
    image: profilePics,
  },

  techStack: {
    title: "Tech Stack",
    description:
      "I have worked on many projects and understand that not all frameworks are good to implement. Case studies matter.",
    stacks: ["Next.js", "React", "TypeScript", "Python", "TensorFlow"],
  },

  teaching: {
    title: "The Art of Teaching",
    subtitle: "Computer Lab Assistant & Maintainer",
    place: "FKI UMS",
  },

  ability: {
    title: "Ultimate Jutsu",
    description:
      "This jutsu has suddenly become unusable since I entered this world.",
  },

  activity: {
    title: "GitHub Activity",
    description:
      "Try new things, discover the differences. It can make your life better and make you think ahead.",
  },
};

export const slug = [
  "typescript",
  "javascript",
  "java",
  "react",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "nextdotjs",  
  "postgresql",
  "firebase",
  "vercel",
  "docker",
  "git",
  "clickup",
  "github",
  "visualstudiocode",
  "androidstudio",
  "figma",
  "pytorch",
  "tensorflow",
  "fastapi",
  "tailwindcss",
  "laravel",
];
