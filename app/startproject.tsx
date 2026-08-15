import Link from "next/link";

export default function Startyourtech() {
  return (
    <section className="bg-[#FFFFF0] px-12 py-16  ">
      <div className="max-w-7xl mx-auto bg-[#031F4F]  py-12  rounded-3xl text-center px-12 py-5 ">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
          Start Your Tech Career With Adov Academy
        </h2>
        <p className="text-slate-300 text-sm max-w-md mx-auto mb-8">
          Spaces are limited and cohorts fill up fast. If you are ready to build
          a future in tech and design, this is your moment to take the first
          step.
        </p>
        <div className="flex gap-5 justify-center">
          <Link
            href="/contact"
            className="bg-[#ffff]  hover:bg-[#618bd4] text-[#042a6b]  hover:text-white text-sm font-medium px-6 py-3 rounded-full transition"
          >
            Register now
          </Link>
          <Link
            href="/contact"
            className="border hover:bg-[#042a6b] text-white text-sm font-medium px-6 py-3 rounded-full transition"
          >
            Login to dashboard
          </Link>
        </div>
      </div>
    </section>
  );
}
