"use client";

import { useState } from "react";

import FadeUp from "./FadeUp";
import UICard from "./UICards";
import Lightbox from "./Lightbox";
import uiProjects from "./uiData";

type UISectionProps = {
  activeFilter: string;
};

type UIProject = (typeof uiProjects)[number];

export default function UISection({ activeFilter }: UISectionProps) {
  const [selectedProject, setSelectedProject] = useState<UIProject | null>(
    null
  );

  const filteredProjects =
    activeFilter === "all"
      ? uiProjects
      : uiProjects.filter((project) => project.category === activeFilter);

  if (filteredProjects.length === 0) {
    return null;
  }

  return (
    <section className="w-full  px-6 md:pt-16 pb-12 md:px-8 md:pt-0 md:pb-16">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <FadeUp>
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-[0.05em] text-[#06265f] md:text-2xl ">
            Design Projects
          </h2>
        </FadeUp>

        {/* UI Cards */}
        <FadeUp delay={0.15}>
          <div className="grid grid-cols-1  md:grid-cols-2 gap-3 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project) => (
              <UICard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </FadeUp>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={selectedProject !== null}
        images={selectedProject?.screens ?? []}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}