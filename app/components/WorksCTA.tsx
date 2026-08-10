export default function WorksCTA() {
  return (
    <section className="w-full bg-white px-6 pb-12 md:px-8 md:pb-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex min-h-[166px] flex-col items-center justify-center bg-[#06265f] px-6 py-10 text-center md:min-h-[166px]">
          
          {/* Small heading */}
          <p className="mb-2 text-[9px] font-medium uppercase tracking-[0.08em] text-[#20a9e8] md:text-[10px]">
            Let&apos;s build
          </p>

          {/* Main heading */}
          <h2 className="text-[20px] font-medium leading-tight text-white md:text-[24px]">
            Want to be our next case study?
          </h2>

          {/* Description */}
          <p className="mt-1 text-[10px] leading-relaxed text-white/50 md:text-[12px]">
            Tell us what you&apos;re building, we&apos;ll get back to you within one business day
          </p>

          {/* Buttons */}
          <div className="mt-4 flex items-center gap-2">
            
            <a
              href="/contact"
              className="rounded-full bg-[#20a9e8] px-4 py-1.5 text-[9px] font-semibold text-white transition hover:bg-[#1698d4] md:px-5 md:py-2 md:text-[10px]"
            >
              Start a project
            </a>

            <a
              href="/services"
              className="rounded-full border border-white/50 px-4 py-1.5 text-[9px] font-medium text-white transition hover:bg-white/10 md:px-5 md:py-2 md:text-[10px]"
            >
              See our services
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}