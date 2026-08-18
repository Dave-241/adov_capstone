import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#fffff0] relative w-full px-4 md:p-16 overflow-hidden flex items-end min-h-[80vh] py-16 ">
      {/* Darker video for better text contrast */}
      <video
        src="/hero_session3.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
      />
      <div className="absolute bottom-0 left-0 w-full  bg-linear-to-t   h-[50%] from-black" />

      <div className="relative text-balance  z-10 w-full max-w-6xl ">
        <h2 className=" text-6xl text-white  font-bold  max-w-4xl  py-12">
          Full Website Design & Development.
        </h2>
        <p className="max-w-4xl text-xl text-slate-100">
          At Adov, we turn your ideas into high performing websites and handle
          everything from frontend to backend. Our UI/UX and branding services
          complete the picture, giving you one team, one standard, and one
          seamless result.
        </p>

        <div className="flex flex-col w-fit  gap-4 mt-8 sm:mt-10 max-w-md sm:max-w-none justify-center">
          <a
            href="/contact"
            className=" hidden bg-[#031F4F] text-white text-base font-semibold px-8 py-4 rounded-full hover:bg-slate-800 transition-colors  w-full sm:w-auto"
          >
            Get a website
          </a>

          <a
            href="/services"
            className="block  bg-white text-[#0f172b] text-base font-semibold px-8 py-4 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors  w-full sm:w-auto"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

<div className="max-w-2xl mx-auto py-12">
  <h3 className="text-3xl uppercase font-bold text-white  py-3 mb-3 mt-5">
    what we do
  </h3>
  <p className=" text-balance text-slate-100">
    Adov is a full-service digital company. Whether you are launching a new
    business, upgrading an old website, or building a brand from scratch, we
    bring the skill, care, and consistency to get it done right. Here is what we
    offer:
  </p>
</div>;
