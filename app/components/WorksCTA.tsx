export default function WorksCTA() {
  return (
    <section className="w-full bg-white px-6 pb-12  md:px-8 md:pb-16 rounded-2xl">
      <div className="mx-auto max-w-6xl">
        <div className="flex min-h-[166px] flex-col items-center justify-center bg-[#06265f] px-6 py-10 text-center md:min-h-[166px] rounded-2xl">
          
          {/* Small heading */}
          <p className="mb-8 text-[12px] font-medium uppercase tracking-[0.08em] text-[#20a9e8] md:text-[15px]">
            Let&apos;s build
          </p>

          {/* Main heading */}
          <h2 className="text-[25px] font-medium leading-tight text-white md:text-[30px]">
            Like What You See?
          </h2>

          {/* Description */}
          <p className="mt-1 text-[12px] leading-relaxed text-white/50 md:text-[16px] text-balance">
            This is just a glimpse of what we can build. Let us create something just as impressive for your business.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex items-center">
            
            <a
              href="/contact"
              className="rounded-full bg-[#20a9e8] px-4 py-1.5 text-[18px] font-semibold text-white transition hover:bg-[#1698d4] md:px-5 md:py-2 md:text-[20px]"
            >
              Start Your project
            </a>

            {/* <a
              href="/services"
              className="rounded-full border border-white/50 px-4 py-1.5 text-[11px] font-medium text-white transition hover:bg-white/10 md:px-5 md:py-2 md:text-[12px]"
            >
              See our services
            </a> */}

          </div>
        </div>
      </div>
    </section>
  );
}