import Image from "next/image";
import hero from "../../public/home hero 1.png";
import Link from "next/link";
const Section = () => {
  return (
<<<<<<< Updated upstream
    <div className="bg-[#FFFFF0] md:px-12">
      <div className="grid grid-cols-1 md:pt-20 md:grid-cols-2 gap-8 md:gap-4  sm:px-8  max-w-7xl bg-[#FFFFF0] mx-auto py-8 md:py-3">
        <div className="flex flex-col justify-center items-start order-2 md:order-1">
          <div>
            <p className="font-medium font-inter text-sm sm:text-[16px] text-[#10A4EA]">
              Train with Adov Academy
            </p>
            <h3 className="text-3xl md:text-5xl md:px-0 px-5 text-balance  font-semibold text-[#031F4F] ">
              Build Skills That Open Doors
            </h3>
            <p className="text-[#7B899A] max-w-md  text-balance text-sm sm:text-base">
              Our Academy combines practical learning, expert mentorship, and
              real-world projects to prepare aspiring professionals for
              successful careers in today's digital industry.
            </p>
          </div>
          <div className="gap-3 sm:gap-4 flex mt-5 md:mt-3 flex-wrap">
            <Link
              href="/contact"
              className="bg-[#031F4F] text-white px-5 sm:px-6 py-2 rounded-3xl hover:bg-[#0a337a] text-sm sm:text-base"
            >
              Register now
            </Link>
          </div>
        </div>
=======
    <div className="relative w-full px-12 overflow-hidden ">
      {/* Background video */}
      <video
        src="/session.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute brightness-20 inset-0 w-full h-full object-cover"
      />
>>>>>>> Stashed changes

      {/* Overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/5 to-transparent" />

      {/* Text content */}
      <div className="relative z-10 w-full   flex flex-col justify-center  max-w-3xl mx-auto my-30">
        <h1 className="text-4xl items-center text-center justify-center flex font-bold text-white leading-tight">
          Train with Adov Academy. Become a Techie in 5 Weeks
        </h1>
        <p className="text-[#808080]  justify-center text-center  flex font-normal mt-4 text-sm">
          Train with Adov Academy is our intensive, onsite training program
          built to turn ambition into real, market-ready skill. You will not
          just sit and study, you will build,alongside a community of people as
          driven as you are, and finish with real work to show for it.
        </p>
        <div className="flex gap-3 mt-6 items-center justify-center">
          <Link
            href="/contact"
            className="bg-[#031F4F] text-white text-sm px-5 py-3 rounded-full hover:bg-[#06327e] transition-colors"
          >
            Register now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section;
