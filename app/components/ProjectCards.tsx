import Link from "next/link";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  image: string;
  url: string;
};

export default function ProjectCard({ title, image, url }: ProjectCardProps) {
  return (

    <Link
  href={url}
  target="_blank"
  rel="noopener noreferrer"
  className="group block"
>
    <article
  className="
    w-full
    cursor-pointer
    transition-all
    duration-300
    ease-out
    group-hover:-translate-y-1
  "
>
      {
      }
      <div
  className="
    relative
    aspect-[1.55/1]
    w-full
    overflow-hidden
    rounded-[10px]
    shadow-sm
    transition-shadow
    duration-300
    group-hover:shadow-xl
    md:rounded-[12px]
  "
>
<Image
  src={image}
  alt={title}
  fill
  className="
  object-cover
  transition-transform
  duration-500
  ease-out
  group-hover:scale-105
"
/>
</div>

      {/* Project title */}
      <h3 className="mt-2 text-[13px] font-semibold text-black md:text-[19px]">
  {title}
</h3>
    </article>

    </Link>
  );
}