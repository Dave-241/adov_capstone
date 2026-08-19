import Link from "next/link";

export default function StartProject() {
  return (
    <section className="w-full mx-auto max-w-7xl px-4 pt-12 md:px-12 md:pt-20">
      <div className="w-full rounded-3xl bg-[#031F4F] px-6 py-12 text-center md:px-12 md:py-16">
        
        <h2 className="text-2xl font-bold leading-tight text-white md:text-3xl">
          Like What You See?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-slate-300 md:text-sm">
          This is just a taste of what we can build. Let us create something
          just as impressive for your business.
        </p>

        <Link
          href="/contact"
          className="mx-auto mt-8 inline-flex h-12 items-center justify-center rounded-full bg-sky-500 px-7 text-sm font-medium text-white transition hover:bg-sky-400"
        >
          Start your project
        </Link>

      </div>
    </section>
  );
}