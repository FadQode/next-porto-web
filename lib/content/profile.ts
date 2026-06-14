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
  profileCard: {
    badge: string;
    name: string;
    role: string;
    bio: string;
    quote: string;
    cta: {
      resume: string;
      contact: string;
    };
    stats: {
      availability: string;
      availabilitySub: string;
      linkedin: string;
      github: string;
      email: string;
      focus: string;
      focusSub: string;
    };
  };
  iconCloudSlugs: string[];
};

export const profileCard = {
  badge: "THE BUILDER IN TRAINING",
  name: "Fadhil Erdya\nQashmal",
  role: "Early-career Software / AI Engineer",
  bio: "I'm focused on learning by building -\nturning ideas into clean interfaces,\nuseful systems & data-driven solutions\nwhile growing one project at a time.",
  quote: "Keep learning. Keep building. Keep improving.",
  cta: {
    resume: "Resume",
    contact: "Let's Connect",
  },
  stats: {
    availability: "Open to work",
    availabilitySub: "Let's build together.",
    linkedin: "fadhil-erdya",
    github: "@fadqode",
    email: "connect@fadqash.dev",
    focus: "AI · Web · Data",
    focusSub: "Building & shipping.",
  },
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
  profileCard,
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
