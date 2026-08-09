import FadeUp from "./FadeUp";
import ProjectCard from "./ProjectCards";

type ProjectsGridProps = {
  activeFilter: string;
};

const projects = [
  {
    title: "Gow Hastings",
    category: "website",
    image: "/images/Gow Hastings.svg",
    url: "https://gowhastings.com",
  },
  {
    title: "Gus Cooney",
    category: "website",
    image: "/images/Gus Cooney.webp",
    url: "https://guscooney.com/",
  },
  {
    title: "Thirsty Bast****s",
    category: "website",
    image: "/images/thirsty_bastard 1.svg",
    url: "https://www.thirstybastardwater.com/",
  },
  {
    title: "Erica Boothby",
    category: "website",
    image: "/images/Erica.svg",
    url: "https://www.ericaboothby.com/",
  },
  {
    title: "Brala's Best",
    category: "website",
    image: "/images/brala 1.svg",
    url: "https://www.bralasbest.com/",
  },
  {
    title: "Pawp Water",
    category: "website",
    image: "/images/Pawp Water.svg",
    url: "https://www.pawpwater.com/",
  },
  {
    title: "Anzza",
    category: "website",
    image: "/images/Anza.svg",
    url: "https://snackanzza.com/",
  },
  {
    title: "Hovn Studios",
    category: "website",
    image: "/images/HOVN.svg",
    url: "https://hovnstudios.com/",
  },
];

export default function ProjectsGrid({ activeFilter }: ProjectsGridProps) {
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="w-full bg-white px-6 pb-12 md:px-12 md:pb-16">
      <div className="mx-auto max-w-7xl md:pt-10">
        {/* Heading */}
        <FadeUp>
          <h2 className="mb-3  text-2xl text-center md:text-left font-bold uppercase tracking-[0.05em] text-[#06265f] md:mb-3 md:text-[21px]">
            {" "}
            Websites
          </h2>
        </FadeUp>

        {/* Grid */}
        <div className=" mt-5 grid md:grid-cols-2  gap-4 md:gap-x-5 md:gap-y-6">
          {filteredProjects.map((project, index) => (
            <FadeUp key={project.title} delay={index * 0.08}>
              <ProjectCard
                title={project.title}
                image={project.image}
                url={project.url}
              />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
