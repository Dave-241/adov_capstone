export default function WorksHero() {
  return (
    <section className="w-full bg-[#fffff4] px-6 pt-14 pb-10 md:px-8 md:pt-16 md:pb-12">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">

        {/* Small heading */}
        <p className="mb-3 text-[8px] font-medium uppercase tracking-[0.08em] text-[#41b7d6] md:text-[9px]">
          Our Work
        </p>

        {/* Main heading */}
        <h1 className="text-[25px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#06265f] md:text-[38px] lg:text-[40px]">
          Proof, not promises.
        </h1>

        {/* Description */}
        <p className="mt-3 max-w-[330px] text-[7px] leading-[1.5] text-[#6d6d6d] md:max-w-[390px] md:text-[8px]">
          A collection of websites, UI/UX and branding projects we&apos;ve
          completed for clients across industries.
        </p>

        {/* Category buttons */}
        <div className="mt-5 flex items-center justify-center gap-1.5">
          <button
            type="button"
            className="rounded-full bg-[#06265f] px-3 py-1 text-[7px] font-medium text-white md:px-3.5 md:py-1.5 md:text-[8px]"
          >
            All
          </button>

          <button
            type="button"
            className="rounded-full border border-[#d5d5d0] bg-transparent px-3 py-1 text-[7px] font-medium text-[#333333] md:px-3.5 md:py-1.5 md:text-[8px]"
          >
            Websites
          </button>

          <button
            type="button"
            className="rounded-full border border-[#d5d5d0] bg-transparent px-3 py-1 text-[7px] font-medium text-[#333333] md:px-3.5 md:py-1.5 md:text-[8px]"
          >
            UI/UX
          </button>

          <button
            type="button"
            className="rounded-full border border-[#d5d5d0] bg-transparent px-3 py-1 text-[7px] font-medium text-[#333333] md:px-3.5 md:py-1.5 md:text-[8px]"
          >
            Branding
          </button>
        </div>

      </div>
    </section>
  );
}