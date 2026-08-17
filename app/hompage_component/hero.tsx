// // "use client";

// // import { useState, useRef, useEffect } from "react";

// // const mediaItems = [
// // //   { type: "video", src: "/herovideo_1.mp4" },
// //   { type: "video", src: "/herovideo2.mp4" },
// // //   { type: "image", src: "/heroImg.png" },
// // ];

// // export default function Hero() {
// //   const [current, setCurrent] = useState(0);
// //   const videoRef = useRef(null);

// //   const goToNext = () => {
// //     setCurrent((prev) => (prev + 1) % mediaItems.length);
// //   };

// //   useEffect(() => {
// //     const item = mediaItems[current];

// //     if (item.type === "image") {
// //       // Show image for 4 seconds, then advance
// //       const timer = setTimeout(goToNext, 4000);
// //       return () => clearTimeout(timer);
// //     }

// //     // For videos, play automatically
// //     if (videoRef.current) {
// //       videoRef.current.play();
// //     }
// //   }, [current]);

// //   const item = mediaItems[current];

// //   return (
// //     <div className="relative w-full overflow-hidden">
// //       {/* Background media - video or image depending on current */}
// //       {item.type === "video" ? (
// //         <video
// //           ref={videoRef}
// //           src={item.src}
// //           muted
// //           playsInline
// //           onEnded={goToNext}
// //           className="absolute inset-0 w-full h-full object-cover"
// //         />
// //       ) : (
// //         <img
// //           src={item.src}
// //           alt=""
// //           className="absolute inset-0 w-full h-full object-cover"
// //         />
// //       )}

// //       {/* Overlay for text contrast */}
// //       <div className="absolute inset-0 bg-white/5" />

// //       {/* Text content */}
// //       <div className="relative z-10 h-full flex flex-col justify-center px-12 max-w-lg my-30">
// //         <h1 className="text-4xl font-bold text-gray-900 leading-tight">
// //           Where Ideas
// //           <br />
// //           Become <span className="text-blue-500">Impact</span>.
// //         </h1>
// //         <p className="text-gray-600 mt-4 text-sm">
// //           Partnering with businesses to build exceptional digital products and
// //           future-ready talent.
// //         </p>
// //         <div className="flex gap-3 mt-6">
// //           <button className="bg-slate-900 text-white text-sm px-5 py-3 rounded-full hover:bg-slate-800 transition-colors">
// //             <a href="">Start a project +</a>
// //           </button>
// //           <button className="bg-white text-slate-900 text-sm px-5 py-3 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
// //             <a href="">See our work</a>
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // "use client";

// export default function Hero() {
//   return (
//     <div className="bg-[#fffff0] relative w-full px-4 sm:px-8 md:px-12 overflow-hidden flex items-center min-h-[80vh] py-16 sm:py-24 md:py-32">
//       {/* Background video */}
//       <video
//         src="/herovideo2.mp4"
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover brightness-[0.4]" // Darker video for better text contrast
//       />

//       {/* Overlay - Radial is often better when centering text */}
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/40 via-black/60 to-black/80" />

//       {/* Text content - Crucially added 'items-center' and 'text-center' */}
//       <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-center items-center text-center md:items-start md:text-left">
//         <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
// //           Where Ideas <br className="" />
// //           Become <span className="text-[#00CFFF]">Impact.</span>{" "}
// //           {/* Adjusted high-contrast highlight */}
// //         </h1>

// //         <p className="text-gray-100 font-normal mt-4 text-center md:text-left text-sm sm: leading-relaxed  md:mx-0">
// //           Partnering with businesses to build exceptional digital products and
// //           future-ready talent.
// //         </p>

// //         {/* Buttons Container - Updated to ensure full width on mobile and centered */}
// // <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-10 w-full max-w-md sm:max-w-none justify-center md:justify-start">
// //   <a
//     href="/contact"
//     className="block sm:inline-block bg-[#0f172b] text-white text-base font-semibold px-8 py-4 rounded-full hover:bg-slate-800 transition-colors text-center w-full sm:w-auto">
//     Start a project +
//   </a>

//   <a
//     href="/works"
//     className="block sm:inline-block bg-white text-[#0f172b] text-base font-semibold px-8 py-4 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors text-center w-full sm:w-auto"
//   >
//     See our work
//   </a>
// </div>
//       </div>
//     </div>
//   );
// }

import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#fffff0] relative w-full px-4 sm:px-8 md:px-12 overflow-hidden flex items-center min-h-[80vh] py-16 sm:py-24 md:py-32">
      {/* Darker video for better text contrast */}
      <video
        src="/hero_session3.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/40 via-black/60 to-black/80" />

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <h2 className="text-center text-6xl text-white font-bold text-balance max-w-7xl mx-auto py-12">
          Full Website Design & Development,
          <br />
          From Idea to Launch
        </h2>
        <p className="max-w-7xl mx-auto text-balance text-center text-xl text-slate-100">
          At Adov, we turn your ideas into high performing websites
          and handle everything from frontend to backend. Our UI/UX and branding
          services complete the picture, giving you one team, one standard, and
          one seamless result.
        </p>

        <div className="flex flex-col items-center sm:flex-row gap-4 mt-8 sm:mt-10 w-full max-w-md sm:max-w-none justify-center mx-auto">
          <a
            href="/contact"
            className="block sm:inline-block bg-[#031F4F] text-white text-base font-semibold px-8 py-4 rounded-full hover:bg-slate-800 transition-colors text-center w-full sm:w-auto"
          >
            Get a website
          </a>

          <a
            href="/services"
            className="block sm:inline-block bg-white text-[#0f172b] text-base font-semibold px-8 py-4 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors text-center w-full sm:w-auto"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// const Hero = () => {
//   return (
//     <
//       <div className=" max-w-6xl mx-auto">
//         <h2 className="text-center text-5xl text-white font-bold text-balance max-w-5xl mx-auto py-12">
//           Full Website Design & Development,
//           <br /> From Idea to Launch
//         </h2>
//         <p className="max-w-5xl mx-auto text-balance text-center text-xl text-slate-100">
//           At Adov, we turn your ideas into powerful, high performing websites
//           and handle everything from frontend to backend. Our UI/UX and
//           branding services complete the picture, giving you one team, one
//           standard, and one seamless result.
//         </p>

//         <div className="flex flex-col items-center sm:flex-row gap-4 mt-8 sm:mt-10 w-full max-w-md sm:max-w-none justify-center mx-auto">
//           <a
//             href="/contact"
//             className="block sm:inline-block bg-[#031F4F] text-white text-base font-semibold px-8 py-4 rounded-full hover:bg-slate-800 transition-colors text-center w-full sm:w-auto"
//           >
//             Get a website
//           </a>

//           <a
//             href="/works"
//             className="block sm:inline-block bg-white text-[#0f172b] text-base font-semibold px-8 py-4 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors text-center w-full sm:w-auto"
//           >
//             Explore Our Services
//           </a>
//         </div>

<div className="max-w-2xl mx-auto py-12">
  <h3 className="text-3xl uppercase font-bold text-white text-center py-3 mb-3 mt-5">
    what we do
  </h3>
  <p className="text-center text-balance text-slate-100">
    Adov is a full-service digital company. Whether you are launching a new
    business, upgrading an old website, or building a brand from scratch, we
    bring the skill, care, and consistency to get it done right. Here is what we
    offer:
  </p>
</div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
