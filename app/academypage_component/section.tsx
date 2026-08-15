import Image from "next/image";
import hero from "../../public/home hero 1.png";
import Link from "next/link";
const Section = () => {
  return (
    
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
