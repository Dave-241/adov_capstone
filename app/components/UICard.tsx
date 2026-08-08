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

export default function UICard({
  project,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="group w-full overflow-hidden rounded-3xl text-left"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">

        <Image
          src={project.cover}
          alt={project.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

      </div>

      <h3 className="mt-3 text-lg font-semibold text-[#06265f]">
        {project.title}
      </h3>
    </button>
  );
}