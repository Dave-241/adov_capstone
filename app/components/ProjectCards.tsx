type ProjectCardProps = {
  title: string;
};

export default function ProjectCard({ title }: ProjectCardProps) {
  return (
    <article className="w-full">
      {/* Placeholder image */}
      <div className="aspect-[1.55/1] w-full rounded-[10px] bg-[#d9d9d2] md:rounded-[12px]" />

      {/* Project title */}
      <h3 className="mt-1.5 text-[9px] font-bold leading-tight tracking-[-0.01em] text-black md:mt-2 md:text-[19px]">
        {title}
      </h3>
    </article>
  );
}