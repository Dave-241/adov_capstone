import Link from "next/link";

export default function Startyourtech() {
  return (
<<<<<<< Updated upstream
    <section className=" md:pt-20  w-full mx-auto max-w-7xl md:px-12 px-4 pt-12 ">
      <div className=" mx-auto w-full bg-[#031F4F] rounded-3xl text-center py-12  md:py-20">
        <p className="text-sky-400 text-sm font-medium mb-3">
          Let&apos;s Build What&apos;s Next—Together.
        </p>
=======
    <section className="bg-[#FFFFF0] px-12 py-16  ">
      <div className="max-w-7xl mx-auto bg-[#031F4F]  py-12  rounded-3xl text-center px-12 py-5 ">
        
>>>>>>> Stashed changes
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
         Start Your Tech Career With Adov Academy

        </h2>
<<<<<<< Updated upstream
        <p className="text-slate-300 text-balance   text-xs md:px-0  md:text-sm max-w-xl mx-auto mb-8">
          Whether you&apos;re launching a new venture, transforming an existing
          business, or beginning your journey into tech, we&apos;re here to help
          you take the next step with confidence.
=======
        <p className="text-slate-300 text-sm max-w-md mx-auto mb-8">
        Spaces are limited and cohorts fill up fast. If you are ready to build a future in tech and design, this is your moment to take the first step.
>>>>>>> Stashed changes
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
