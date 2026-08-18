import Link from "next/link";
import Image from "next/image";
import { StaticImageData } from "next/image";

type ProjectCardProps = {
  title: string;
  image: StaticImageData;
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
      <article className="w-full  relative overflow-hidden aspect-[1/1.3] rounded-2xl border border-black/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-md">
        {/* Project image */}
        <div className="relative h-full  w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="w-full h-[50%]  bg-linear-to-b  via-black via-80% to-black absolute left-0 bottom-0">
          {" "}
        </div>

        {/* Project information */}
        <div className=" absolute bottom-0 left-0 w-full z-10  p-6 ">
          {/* Category */}
          <p className="mb-1.5 font-mono text-sm font-semibold uppercase tracking-[0.08em]  text-white md:mb-2 md:text-sm">
            {category}
          </p>

          {/* Project title */}
          <h3 className=" text-2xl font-bold leading-tight tracking-[-0.01em] text-white md:text-2xl">
            {title}
          </h3>

          {/* Description */}
          {/* <p className="text-[12px] leading-[1.5] text-gray-600 md:text-[12px] md:leading-[1.6]">
            {description}
          </p> */}
        </div>
      </article>
    </Link>
  );
}
