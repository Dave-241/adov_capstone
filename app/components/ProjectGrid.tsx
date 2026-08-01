import ProjectCard from "./ProjectCards";

const projects = [
  "Gow Hastings",
  "Gus Cooney",
  "Thirsty Bast****s",
  "Erica Boothby",
  "Brala's Best",
  "Pawp Water",
  "Anzza",
  "Hovn Studios",
];

export default function ProjectsGrid() {
  return (
    <section className="w-full px-6 pb-12 md:px-8 md:pb-16 bg-white">
      <div className="mx-auto max-w-[900px]">
        {/* Section heading */}
        <h2 className="mb-2 text-[9px] font-bold uppercase tracking-[0.05em] text-[#06265f] md:mb-3 md:text-[21px]">
          Websites
        </h2>

        {/* Project grid */}
        <div className="grid grid-cols-2 gap-x-2 gap-y-4 md:gap-x-3 md:gap-y-5">
          {projects.map((project) => (
            <ProjectCard key={project} title={project} />
          ))}
        </div>
      </div>
    </section>
  );
}