import profilePicture from "@/public/asset/profile-pics.png";

export type ProfileContent = {
  identity: {
    name: string;
    subtitle: string;
    description: string;
    image: typeof profilePicture;
  };
  techStack: {
    title: string;
    description: string;
  };
  teaching: {
    title: string;
    subtitle: string;
    place: string;
  };
  activity: {
    title: string;
    description: string;
    githubUsername: string;
  };
  iconCloudSlugs: string[];
};

export const profileContent: ProfileContent = {
  identity: {
    name: "Fadhil Erdya Qashmal",
    subtitle:
      "Informatics Engineering Graduate & Aspiring to Keep Learning, Studying, and Innovating",
    description: "Dive into the transformative power of technology.",
    image: profilePicture,
  },
  techStack: {
    title: "Tech Stack",
    description:
      "I have worked on many projects and understand that not all frameworks are good to implement. Case studies matter.",
  },
  teaching: {
    title: "The Art of Teaching",
    subtitle: "Computer Lab Assistant & Maintainer",
    place: "FKI UMS",
  },
  activity: {
    title: "GitHub Activity",
    description:
      "Try new things, discover the differences. It can make your life better and make you think ahead.",
    githubUsername: "FadQode",
  },
  iconCloudSlugs: [
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
  ],
};
