"use client";

import { useState } from "react";

import WorksHero from "../components/workshero";
import ProjectGrid from "../components/ProjectGrid";
import WorksCTA from "../components/WorksCTA";
import StartProject from "../startproject";
import UISection from "../components/UI Section";

export default function WorksPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <main>
      <WorksHero
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <ProjectGrid activeFilter={activeFilter} />
      <UISection activeFilter={activeFilter} />
      <StartProject />
    </main>
  );
}
