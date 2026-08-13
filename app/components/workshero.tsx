type WorksHeroProps = {
  activeFilter: string;
  setActiveFilter: React.Dispatch<React.SetStateAction<string>>;
};

export default function WorksHero({
  activeFilter,
  setActiveFilter,
}: WorksHeroProps) {
  return (
    <section className="w-full bg-[#fffff0] px-6 pt-14 pb-10 md:px-8 md:pt-16 md:pb-12">
      <div className="mx-auto flex max-w-3xl gap-3 md:gap-3 flex-col items-center text-center">
        {/* Main heading */}
        <h1 className="text-4xl font-medium leading-[1.1] tracking-[-0.02em] text-[#06265f] md:text-7xl lg:text-7xl">
          Websites, Design & Branding We're Proud Of
        </h1>

        {/* Description */}
        <p className=" text-base text-[#6d6d6d] md:max-w-sm  md:text-[16px] font-medium">
          Every project reflects the care and skill we bring to our work.
          Explore our websites, UI/UX, and branding projects.
        </p>

        {/* Category buttons */}
        <div className="mt-2 flex items-center justify-center gap-2">
          {[
            { label: "All", value: "all" },
            { label: "Websites", value: "website" },
            { label: "UI/UX", value: "uiux" },
            // { label: "Branding", value: "branding" },
          ].map((button) => (
            <button
              key={button.value}
              type="button"
              onClick={() => setActiveFilter(button.value)}
              className={`rounded-full cursor-pointer px-6 py-2 text-sm font-medium transition-all duration-300 md:px-6 md:py-1.5 md:text-sm
        ${
          activeFilter === button.value
            ? "bg-[#06265f] text-white"
            : "border border-[#d5d5d0] bg-transparent text-[#333333] hover:bg-[#f4f4ef]"
        }`}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
