import FadeUp from "./FadeUp";
import ProjectCard from "./ProjectCards";

// Static image imports
import GowHastings from "@/public/images/gow.jpg";
import GusCooney from "@/public/images/gus.webp";
import ThirstyBastard from "@/public/images/thirsty.jpeg";
import Erica from "@/public/images/erica.webp";
import Brala from "@/public/images/brala.webp";
import PawpWater from "@/public/images/pawp.webp";
import Anzza from "@/public/images/anzaa.webp";
import Hovn from "@/public/images/HOVN.jpg";
import Midtown from "@/public/images/midtown.webp";

import { StaticImageData } from "next/image";

type ProjectsGridProps = {
  activeFilter: string;
};

type Project = {
  title: string;
  category: string;
  type: string;
  image: StaticImageData;
  url: string;
  description: string;
};

const projects: Project[] = [
  {
    title: "Gow Hastings",
    category: "ARCHITECTURE · DESIGN STUDIO",
    type: "website",
    image: GowHastings,
    url: "https://gowhastings.com",
    description:
      "A portfolio-driven website for a Toronto architecture and interior design studio, showcasing its educational, institutional and public projects.",
  },
  {
    title: "Gus Cooney",
    category: "PERSONAL BRAND · ACADEMIA",
    type: "website",
    image: GusCooney,
    url: "https://guscooney.com/",
    description:
      "A personal academic website presenting Gus Cooney's research, publications, teaching and consulting work in social psychology, conversation and negotiation.",
  },
  {
    title: "Thirsty Bast****s",
    category: "E-COMMERCE · CONSUMER BRAND",
    type: "website",
    image: ThirstyBastard,
    url: "https://www.thirstybastardwater.com/",
    description:
      "A bold e-commerce experience for a premium water brand, combining strong visual branding, product storytelling and a direct-to-consumer shopping journey.",
  },
  {
    title: "Erica Boothby",
    category: "PERSONAL BRAND · ACADEMIA",
    type: "website",
    image: Erica,
    url: "https://www.ericaboothby.com/",
    description:
      "A personal brand website for psychologist and researcher Erica Boothby, bringing together her research, speaking, teaching, workshops and consulting work.",
  },
  {
    title: "Brala's Best",
    category: "E-COMMERCE · FOOD & BEVERAGE",
    type: "website",
    image: Brala,
    url: "https://www.bralasbest.com/",
    description:
      "A vibrant e-commerce experience for a family-owned garlic spread brand, combining product discovery, storytelling, recipes and a streamlined shopping experience.",
  },
  {
    title: "Pawp Water",
    category: "E-COMMERCE · PET WELLNESS",
    type: "website",
    image: PawpWater,
    url: "https://www.pawpwater.com/",
    description:
      "A product-focused e-commerce experience for a functional hydration brand for dogs, combining education, product discovery and wellness-focused storytelling.",
  },
  {
    title: "Anzza",
    category: "E-COMMERCE · FOOD & BEVERAGE",
    type: "website",
    image: Anzza,
    url: "https://snackanzza.com/",
    description:
      "A visual-first product experience for Anzza, a snack brand turning pineapple into crisp, fruit-infused chips with a distinctive and playful identity.",
  },
  {
    title: "HOVN Studios",
    category: "CREATIVE STUDIO · FILM & PHOTO",
    type: "website",
    image: Hovn,
    url: "https://hovnstudios.com/",
    description:
      "A visually driven portfolio for an international creative studio specializing in commercial film, photography and distinctive visual campaigns.",
  },
  {
    title: "Midtown Umbrellas",
    category: "E-COMMERCE · OUTDOOR LIVING",
    type: "website",
    image: Midtown,
    url: "https://www.midtownumbrellas.com/",
    description:
      "A product-focused e-commerce website for a premium outdoor umbrella brand, showcasing shade solutions for residential and commercial spaces.",
  },
];
export default function ProjectsGrid({ activeFilter }: ProjectsGridProps) {
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.type === activeFilter);

  if (filteredProjects.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-[#FFFFF0] px-6 pb-12 md:px-12 md:pb-16">
      <div className="mx-auto max-w-7xl md:pt-10">
        {/* Heading */}
        <FadeUp>
          <h2 className="mb-3 text-2xl text-center md:text-left font-bold uppercase tracking-[0.05em] text-[#06265f] md:mb-3 md:text-[21px]">
            Website Projects
          </h2>
        </FadeUp>

        {/* Grid */}
        <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-3">
          {filteredProjects.map((project, index) => (
            <FadeUp key={project.title} delay={index * 0.08}>
              <ProjectCard
                title={project.title}
                image={project.image}
                url={project.url}
                category={project.category}
                description={project.description}
              />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
