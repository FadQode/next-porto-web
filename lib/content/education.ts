import aslab from "@/public/asset/Aslab.jpeg";
import bangkit from "@/public/asset/bangkit.png";
import gemastik from "@/public/asset/Gemastik.jpeg";
import muslimPergi from "@/public/asset/MulimPergi.jpeg";
import ums from "@/public/asset/ums.jpeg";
import type { StaticImageData } from "next/image";

export type TimelineItem = {
  id: number;
  title: string;
  subtitle: string;
  period: string;
  image?: StaticImageData | string;
  description: string;
};

export const educationTimelineContent: TimelineItem[] = [
  {
    id: 1,
    title: "Muhammadiyah University of Surakarta",
    subtitle: "Informatics Engineering",
    period: "2022 - Present",
    image: ums,
    description:
      "Learning fundamentals, building projects, gaining practical experience, and connecting with fellow developers.",
  },
  {
    id: 2,
    title: "Bangkit Academy",
    subtitle: "Machine Learning Cohort",
    period: "2024",
    image: bangkit,
    description:
      "Intensive industry-led program covering ML engineering, teamwork, and product thinking.",
  },
];

export const experienceTimelineContent: TimelineItem[] = [
  {
    id: 1,
    title: "Computer Laboratory Assistant",
    subtitle: "Faculty of Communication & Informatics",
    period: "February 2024 - January 2026",
    image: aslab,
    description:
      "Maintained lab systems, assisted practicum sessions, and supported students technically.",
  },
  {
    id: 2,
    title: "Muslim Pergi - Full Stack Web Developer Intern",
    subtitle: "PT Muslimina Indo Persada",
    period: "May 2025 - June 2025",
    image: muslimPergi,
    description:
      "Built an Umroh travel landing page with Vue and school management features with Laravel in a cross-functional team.",
  },
  {
    id: 3,
    title: "Finalist of GEMASTIK XVII 2025 - Data Mining Competition",
    subtitle: "Competition",
    period: "October 2025",
    image: gemastik,
    description:
      "Built and tested multiple model approaches across computer vision, tabular data, video, and LLM tasks.",
  },
];
