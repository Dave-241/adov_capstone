import Link from "next/link";

export default function Startyourtech() {
  return (
    <section className="bg-[#fdfbe9] px-6 py pt-10">
      <div className="max-w-7xl mx-auto bg-[#031F4F] rounded-3xl text-center py-16 ">
        {/* <p className="text-sky-400 text-sm font-medium mb-3">
          Let&apos;s Build What&apos;s Next—Together.
        </p> */}
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
          Ready to Build Something Great?
        </h2>
        <p className="text-slate-300 text-sm max-w-2xl mx-auto mb-8 text-center">
          {/* Whether you&apos;re launching a new venture, transforming an existing
          business, or beginning your journey into tech, we&apos;re here to help
          you take the next step with confidence. */}
          Whether you are a business ready for a standout website or someone
          ready to launch a career in tech, Adov is where it begins. Let us
          bring your vision to life.
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
