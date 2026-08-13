import FadeUp from "./FadeUp";
import ProjectCard from "./ProjectCards";

type ProjectsGridProps = {
  activeFilter: string;
};

const projects = [
  {
    title: "Gow Hastings",
    category: "ARCHITECTURE · DESIGN STUDIO",
    type: "website",
    image: "/images/Gow Hastings.svg",
    url: "https://gowhastings.com",
    description:
      "A portfolio-driven website for a Toronto architecture and interior design studio, showcasing its educational, institutional and public projects.",
  },
  {
    title: "Gus Cooney",
    category: "PERSONAL BRAND · ACADEMIA",
    type: "website",
    image: "/images/Gus Cooney.webp",
    url: "https://guscooney.com/",
    description:
      "A personal academic website presenting Gus Cooney's research, publications, teaching and consulting work in social psychology, conversation and negotiation.",
  },
  {
    title: "Thirsty Bast****s",
    category: "E-COMMERCE · CONSUMER BRAND",
    type: "website",
    image: "/images/thirsty_bastard 1.svg",
    url: "https://www.thirstybastardwater.com/",
    description:
      "A bold e-commerce experience for a premium water brand, combining strong visual branding, product storytelling and a direct-to-consumer shopping journey.",
  },
  {
    title: "Erica Boothby",
    category: "PERSONAL BRAND · ACADEMIA",
    type: "website",
    image: "/images/Erica.svg",
    url: "https://www.ericaboothby.com/",
    description:
      "A personal brand website for psychologist and researcher Erica Boothby, bringing together her research, speaking, teaching, workshops and consulting work.",
  },
  {
    title: "Brala's Best",
    category: "E-COMMERCE · FOOD & BEVERAGE",
    type: "website",
    image: "/images/brala 1.svg",
    url: "https://www.bralasbest.com/",
    description:
      "A vibrant e-commerce experience for a family-owned garlic spread brand, combining product discovery, storytelling, recipes and a streamlined shopping experience.",
  },
  {
    title: "Pawp Water",
    category: "E-COMMERCE · PET WELLNESS",
    type: "website",
    image: "/images/Pawp Water.svg",
    url: "https://www.pawpwater.com/",
    description:
      "A product-focused e-commerce experience for a functional hydration brand for dogs, combining education, product discovery and wellness-focused storytelling.",
  },
  {
    title: "Anzza",
    category: "E-COMMERCE · FOOD & BEVERAGE",
    type: "website",
    image: "/images/Anza.svg",
    url: "https://snackanzza.com/",
    description:
      "A visual-first product experience for Anzza, a snack brand turning pineapple into crisp, fruit-infused chips with a distinctive and playful identity.",
  },
  {
    title: "HOVN Studios",
    category: "CREATIVE STUDIO · FILM & PHOTO",
    type: "website",
    image: "/images/HOVN.svg",
    url: "https://hovnstudios.com/",
    description:
      "A visually driven portfolio for an international creative studio specializing in commercial film, photography and distinctive visual campaigns.",
  },
  {
    title: "Midtown Umbrellas",
    category: "E-COMMERCE · OUTDOOR LIVING",
    type: "website",
    image: "/images/midtown.webp",
    url: "https://www.midtownumbrellas.com/",
    description:
      "A product-focused e-commerce website for a premium outdoor umbrella brand, showcasing shade solutions for residential and commercial spaces.",
  },
];


export default function ProjectsGrid({
  activeFilter,
}: ProjectsGridProps) {
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(
          (project) => project.type === activeFilter
        );

  return (
<<<<<<< Updated upstream
    <section className="w-full bg-white px-6 pb-12 md:px-8 md:pb-16">
      <div className="mx-auto max-w-6xl  md:pt-10">
        {/* Heading */}
        <FadeUp>
          <h2 className="mb-2 text-[9px] font-bold uppercase tracking-[0.05em] text-[#06265f] md:mb-3 md:text-[21px]">
            Websites
=======
    <section className="w-full bg-[#FFFFF0] px-6 pb-12 md:px-12 md:pb-16">
      <div className="mx-auto max-w-7xl md:pt-10">

        {/* Heading */}
        <FadeUp>
          <h2 className="mb-3 text-2xl text-center md:text-left font-bold uppercase tracking-[0.05em] text-[#06265f] md:mb-3 md:text-[21px]">
            Website Projects
>>>>>>> Stashed changes
          </h2>
        </FadeUp>

        {/* Grid */}
<<<<<<< Updated upstream
        <div className="block mt-5 md:grid grid-cols-2 gap-x-3 gap-y-8 md:gap-x-5 md:gap-y-6">
=======
        <div className="mt-5 grid md:grid-cols-3 gap-4 md:gap-x-5 md:gap-y-6">
>>>>>>> Stashed changes
          {filteredProjects.map((project, index) => (
            <FadeUp
              key={project.title}
              delay={index * 0.08}
            >
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