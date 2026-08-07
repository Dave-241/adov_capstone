// "use client";

// import { useState, useRef, useEffect } from "react";

// const mediaItems = [
// //   { type: "video", src: "/herovideo_1.mp4" },
//   { type: "video", src: "/herovideo2.mp4" },
// //   { type: "image", src: "/heroImg.png" },
// ];

// export default function Hero() {
//   const [current, setCurrent] = useState(0);
//   const videoRef = useRef(null);

//   const goToNext = () => {
//     setCurrent((prev) => (prev + 1) % mediaItems.length);
//   };

//   useEffect(() => {
//     const item = mediaItems[current];

//     if (item.type === "image") {
//       // Show image for 4 seconds, then advance
//       const timer = setTimeout(goToNext, 4000);
//       return () => clearTimeout(timer);
//     }

//     // For videos, play automatically
//     if (videoRef.current) {
//       videoRef.current.play();
//     }
//   }, [current]);

//   const item = mediaItems[current];

//   return (
//     <div className="relative w-full overflow-hidden">
//       {/* Background media - video or image depending on current */}
//       {item.type === "video" ? (
//         <video
//           ref={videoRef}
//           src={item.src}
//           muted
//           playsInline
//           onEnded={goToNext}
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//       ) : (
//         <img
//           src={item.src}
//           alt=""
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//       )}

//       {/* Overlay for text contrast */}
//       <div className="absolute inset-0 bg-white/5" />

//       {/* Text content */}
//       <div className="relative z-10 h-full flex flex-col justify-center px-12 max-w-lg my-30">
//         <h1 className="text-4xl font-bold text-gray-900 leading-tight">
//           Where Ideas
//           <br />
//           Become <span className="text-blue-500">Impact</span>.
//         </h1>
//         <p className="text-gray-600 mt-4 text-sm">
//           Partnering with businesses to build exceptional digital products and
//           future-ready talent.
//         </p>
//         <div className="flex gap-3 mt-6">
//           <button className="bg-slate-900 text-white text-sm px-5 py-3 rounded-full hover:bg-slate-800 transition-colors">
//             <a href="">Start a project +</a>
//           </button>
//           <button className="bg-white text-slate-900 text-sm px-5 py-3 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
//             <a href="">See our work</a>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

export default function Hero() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background video */}
      <video
        src="/herovideo2.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/5 to-transparent" />

      {/* Text content */}
      <div className="relative z-10  flex flex-col justify-center px-12 max-w-lg my-30">
        <h1 className="text-4xl font-bold text-gray-900 leading-tight">
          Where Ideas
          <br />
          Become <span className="text-blue-500">Impact</span>.
        </h1>
        <p className="text-gray-600 mt-4 text-sm">
          Partnering with businesses to build exceptional digital products and
          future-ready talent.
        </p>
        <div className="flex gap-3 mt-6">
          <a
            href=""
            className="bg-slate-900 text-white text-sm px-5 py-3 rounded-full hover:bg-slate-800 transition-colors"
          >
            Start a project +
          </a>

          <a
            href=""
            className="bg-white text-slate-900 text-sm px-5 py-3 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            See our work
          </a>
        </div>
      </div>
    </div>
  );
}
