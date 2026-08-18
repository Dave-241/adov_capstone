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
      // onClick={onClick}
      className="group w-full text-left"
    >
      <div className="relative w-full aspect-[1/1.3] overflow-hidden rounded-2xl border border-black/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-md">
        
        {/* Project image */}
        <Image
          src={project.cover}
          alt={project.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 h-[50%] w-full bg-linear-to-b from-transparent via-black via-80% to-black" />

        {/* Project information */}
        <div className="absolute bottom-0 left-0 z-10 w-full p-6">
          
          {/* Category */}
          <p className="mb-1.5 font-mono text-sm font-semibold uppercase tracking-[0.08em] text-white">
            UI/UX
          </p>

          {/* Title */}
          <h3 className="text-2xl font-bold leading-tight tracking-[-0.01em] text-white">
            {project.title}
          </h3>

        </div>
      </div>
    </button>
  );
}