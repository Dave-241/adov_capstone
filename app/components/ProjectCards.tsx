import Link from "next/link";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  image: string;
  url: string;
  category: string;
  description: string;
};

export default function ProjectCard({
  title,
  image,
  url,
  category,
  description,
}: ProjectCardProps) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <article className="w-full overflow-hidden rounded-[12px] border border-black/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-md">

        {/* Project image */}
        <div className="relative aspect-[1.55/1] w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        {/* Project information */}
        <div className="px-3 pb-4 pt-3 md:px-4 md:pb-5 md:pt-4">

          {/* Category */}
          <p className="mb-1.5 text-[10px] font-medium uppercase tracking-[0.08em] text-[#06265f] md:mb-2 md:text-[12px]">
            {category}
          </p>

          {/* Project title */}
          <h3 className="mb-2 text-[16px] font-bold leading-tight tracking-[-0.01em] text-black md:text-[18px]">
            {title}
          </h3>

          {/* Description */}
          <p className="text-[12px] leading-[1.5] text-gray-600 md:text-[12px] md:leading-[1.6]">
            {description}
          </p>

        </div>
      </article>
    </Link>
  );
}