"use client";

import { useState } from "react";

import FadeUp from "./FadeUp";
import UICard from "./UICard";
import Lightbox from "./Lightbox";
import uiProjects from "./uiData";

export default function UISection() {
  const [selectedProject, setSelectedProject] =
    useState<(typeof uiProjects)[0] | null>(null);

  return (
    <section className="w-full bg-white px-6 pt-16 pb-12 md:px-8 md:pt-0 md:pb-16">
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <FadeUp>
          <h2 className="mb-4 text-[12px] font-bold uppercase tracking-[0.05em] text-[#06265f] md:text-[18px]">
            UI/UX
          </h2>
        </FadeUp>

        {/* UI Cards */}
        <FadeUp delay={0.15}>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {uiProjects.map((project) => (
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