import { MdDevices } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import { MdLeaderboard } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import { Service, Skill } from "types";

export const services: Service[] = [
  {
    title: "Frontend Development",
    about:
      "Build beautiful and scalable SPA using <b> HTML</b>, <b>CSS</b> and <b>React.js</b>.",
    Icon: MdDevices,
  },
  {
    title: "Backend Development",
    about:
      "Handle Database, Server, APIs using <b>Express</b> & other popular frameworks.",
    Icon: FaCode,
  },
  {
    title: "Competitive Coder",
    about: "Daily problem solver in <b>LeetCode</b> and <b>AlgoExpert</b>.",
    Icon: MdLeaderboard,
  },
  {
    title: "UI/UX Design",
    about: "Build stunning and responsive user interfaces.",
    Icon: SiAntdesign,
  },
];

export const languages: Skill[] = [
  {
    name: "JavaScript",
    level: "100",
    Icon: BsCircleFill,
  },
  {
    name: "TypeScript",
    level: "100",
    Icon: BsCircleFill,
  },
  {
    name: "PostgresQL",
    level: "100",
    Icon: BsCircleFill,
  },
  {
    name: "NoSQL",
    level: "100",
    Icon: BsCircleFill,
  },
  {
    name: "React.js",
    level: "100",
    Icon: BsCircleFill,
  },
  {
    name: "Redux/RTK",
    level: "100",
    Icon: BsCircleFill,
  },
  {
    name: "Sequelize",
    level: "100",
    Icon: BsCircleFill,
  },
  {
    name: "Express",
    level: "100",
    Icon: BsCircleFill,
  },
  {
    name: "Stripe",
    level: "100",
    Icon: BsCircleFill,
  },
];

export const tools: Skill[] = [
  { name: "Next.js", level: "100", Icon: BsCircleFill },
  { name: "Vercel", level: "100", Icon: BsCircleFill },
  { name: "Firebase", level: "100", Icon: BsCircleFill },
  { name: "Git", level: "100", Icon: BsCircleFill },
  { name: "Github", level: "100", Icon: BsCircleFill },
  { name: "Figma", level: "100", Icon: BsCircleFill },
];