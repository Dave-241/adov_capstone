import Link from "next/link";

export default function StartProject() {
  return (
    <section className=" md:pt-20 mx-auto max-w-7xl md:px-12 pt-12 px-4">
      <div className=" mx-auto bg-[#031F4F] rounded-3xl text-center py-12  md:py-20">
        <p className="text-sky-400 text-sm font-medium mb-3">
          Let&apos;s Build What&apos;s Next—Together.
        </p>
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
          Ready to start your project?
        </h2>
        <p className="text-slate-300 text-balance  text-sm max-w-xl mx-auto mb-8">
          Whether you&apos;re launching a new venture, transforming an existing
          business, or beginning your journey into tech, we&apos;re here to help
          you take the next step with confidence.
        </p>
        <Link
          href="/contact"
          className="bg-sky-500 hover:bg-sky-400 text-white text-sm font-medium px-6 py-3 rounded-full transition"
        >
          Start a project →
        </Link>
      </div>
    </section>
  );
}
