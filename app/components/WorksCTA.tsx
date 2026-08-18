import Link from "next/link";

export default function StartProject() {
  return (
    <section className=" md:pt-20  w-full mx-auto max-w-7xl md:px-12  px-4 pt-12 ">
      <div className=" mx-auto w-full bg-[#031F4F] rounded-3xl text-center py-12 md:pt-16 md:pb-30">
        <h2 className="text-white text-2xl md:text-3xl font-bold">
          Like What You See?</h2>
        <p className="text-slate-300 text-balance text-xs md:px-0  mb-8">
          This is just a taste of what we can build. Let us create something just as impressive for your business.</p>
        <Link
          href="/contact"
          className="bg-sky-500 hover:bg-sky-400 text-white text-sm font-medium px-6 py-3 rounded-full transition">
          Start your project
        </Link>
      </div>
    </section>
  );
}