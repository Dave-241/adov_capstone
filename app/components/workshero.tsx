type WorksHeroProps = {
  activeFilter: string;
  setActiveFilter: React.Dispatch<React.SetStateAction<string>>;
};

export default function WorksHero({
  activeFilter,
  setActiveFilter,
}: WorksHeroProps) {
  return (
    <section className="w-full px-6 pt-14 pb-10 md:px-8 md:pt-16 md:pb-12">
      <div className="mx-auto flex max-w-3xl gap-3 md:gap-3 flex-col items-center text-center">
        {/* Small heading */}
        <p className=" text-sm font-medium uppercase tracking-[0.08em] text-[#41b7d6] md:text-sm">
          Our Work
        </p>

        {/* Main heading */}
        <h1 className="text-3xl font-semibold  tracking-[-0.04em] text-[#06265f] md:text-3xl lg:text-[40px]">
          Proof, not promises.
        </h1>

        {/* Description */}
        <p className=" text-base text-[#6d6d6d] md:max-w-sm text-balance  md:text-base">
          A collection of websites, UI/UX and branding projects we&apos;ve
          completed for clients across industries.
        </p>

        {/* Category buttons */}
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
