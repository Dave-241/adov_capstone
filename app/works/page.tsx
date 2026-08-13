"use client";

import { useState } from "react";

import WorksHero from "../components/workshero";
import ProjectGrid from "../components/ProjectGrid";
import WorksCTA from "../components/WorksCTA";
// import Faq from "../components/Faq";

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
