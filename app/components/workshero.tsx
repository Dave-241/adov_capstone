type WorksHeroProps = {
  activeFilter: string;
  setActiveFilter: React.Dispatch<React.SetStateAction<string>>;
};

export default function WorksHero({
  activeFilter,
  setActiveFilter,
}: WorksHeroProps) {
  return (
    <section className="w-full bg-[#ffffff] px-6 pt-14 pb-10 md:px-8 md:pt-16 md:pb-12">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* Small heading */}
        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.08em] text-[#41b7d6] md:text-[12px]">
          Our Work
        </p>

        {/* Main heading */}
        <h1 className="text-[25px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#06265f] md:text-[38px] lg:text-[40px]">
          Proof, not promises.
        </h1>

        {/* Description */}
        <p className="mt-3 max-w-[330px] text-[10px] leading-[1.5] text-[#6d6d6d] md:max-w-[390px] md:text-[12px]">
          A collection of websites, UI/UX and branding projects we&apos;ve
          completed for clients across industries.
        </p>

        {/* Category buttons */}
        {/* Category buttons */}
        <div className="mt-5 flex items-center justify-center gap-2">
          {[
            { label: "All", value: "all" },
            { label: "Websites", value: "website" },
            { label: "UI/UX", value: "uiux" },
            { label: "Branding", value: "branding" },
          ].map((button) => (
            <button
              key={button.value}
              type="button"
              onClick={() => setActiveFilter(button.value)}
              className={`rounded-full px-3 py-1 text-[7px] font-medium transition-all duration-300 md:px-3.5 md:py-1.5 md:text-[8px]
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
