"use client";

import Image from "next/image";

type Project = {
  id: number;
  title: string;
  cover: string;
  screens: string[];
};

type Props = {
  project: Project;
  onClick: () => void;
};

export default function UICard({ project, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group w-full text-left"
    >
      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

        <h3 className="mt-2  font-semibold text-black text-2xl md:text-2xl">
        {project.title}
      </h3>
    </button>
  );
}
