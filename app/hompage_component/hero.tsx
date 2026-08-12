"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-[#fffff0] relative w-full px-4 sm:px-8 md:px-12 overflow-hidden flex items-center md:min-h-[70vh] min-h-[60vh] py-16 sm:py-24 md:py-32">
      {/* Background video */}
      <video
        src="/herovideo2.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-[0.4]" // Darker video for better text contrast
      />

      {/* Overlay - Radial is often better when centering text */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/40 via-black/60 to-black/80" />

      {/* Text content - Crucially added 'items-center' and 'text-center' */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-center items-center text-center md:items-start md:text-left">
        <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tight">
          Where Ideas <br className="" />
          Become <span className="text-[#00CFFF]">Impact.</span>{" "}
          {/* Adjusted high-contrast highlight */}
        </h1>

        <p className="text-gray-100 text-balance font-normal mt-4 text-center md:text-left text-sm  md:mx-0">
          Partnering with businesses to build exceptional digital products and
          future-ready talent.
        </p>

        {/* Buttons Container - Updated to ensure full width on mobile and centered */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-8 sm:mt-10 w-full max-w-md sm:max-w-none justify-center md:justify-start">
          <Link
            href="/contact"
            className="block sm:inline-block bg-[#0f172b] text-white text-base font-semibold px-8 py-3 rounded-full hover:bg-slate-800 transition-colors text-center w-full sm:w-auto"
          >
            Start a project +
          </Link>

          <Link
            href="/works"
            className="block sm:inline-block bg-white text-[#0f172b] text-base font-semibold px-8 py-3 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors text-center w-full sm:w-auto"
          >
            See our work
          </Link>
        </div>
      </div>
    </div>
  );
}
