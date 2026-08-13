// import Image from "next/image";
// import w1 from "@/public/w1.webp";
// import w2 from "@/public/w2.webp";
// import w3 from "@/public/w3.webp";
// import w4 from "@/public/w4.webp";
// import w5 from "@/public/w5.webp";
// import w6 from "@/public/w6.webp";

// const web_images = () => {
//   return (
//     <div>
//       <div className="grid grid-cols-2 md:grid-cols-3 w-full overflow-hidden rounded-3xl max-w-7xl mx-auto gap-[4px] mt-2 ">
//         <Image src={w1} alt="w1" className=" " />
//         <Image src={w2} alt="w2" className=" " />
//         <Image src={w3} alt="w3" className=" " />
//         <Image src={w4} alt="w4" className=" " />
//         <Image src={w5} alt="w5" className=" " />
//         <Image src={w6} alt="w6" className=" " />
//       </div>
//     </div>
//   );
// };

// export default web_images;


// 'use client';

// import { motion } from "motion/react";
// import Image from "next/image";
// import w1 from "@/public/w1.webp";
// import w2 from "@/public/w2.webp";
// import w3 from "@/public/w3.webp";
// import w4 from "@/public/w4.webp";
// import w5 from "@/public/w5.webp";
// import w6 from "@/public/w6.webp";

// const images = [w1, w2, w3, w4, w5, w6];

// // duplicate the array so the loop feels seamless with no visible jump
// const loopImages = [...images, ...images];

// const WebImages = () => {
//   return (
//     <div className="w-full overflow-hidden mt-2">
//       <motion.div
//         className="flex gap-[4px]"
//         animate={{ x: ["0%", "-50%"] }}
//         transition={{
//           duration: 30,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       >
//         {loopImages.map((img, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 w-[380px] h-[280px] rounded-3xl overflow-hidden relative"
//           >
//             <Image
//               src={img}
//               alt={`Web project ${(index % images.length) + 1}`}
//               fill
//               className="object-cover"
//             />
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default WebImages;

// 'use client';

// import { motion } from "motion/react";
// import Image from "next/image";
// import w1 from "@/public/w1.webp";
// import w2 from "@/public/w2.webp";
// import w3 from "@/public/w3.webp";
// import w4 from "@/public/w4.webp";
// import w5 from "@/public/w5.webp";
// import w6 from "@/public/w6.webp";

// const images = [w1, w2, w3, w4, w5, w6];

// const loopImages = [...images, ...images];

// const WebImages = () => {
//   return (
//     <div className="w-full max-w-7xl mx-auto overflow-hidden mt-2">
//       <motion.div
//         className="flex gap-2"
//         animate={{ x: ["0%", "-70%"] }}
//         transition={{
//           duration: 25,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       >
//         {loopImages.map((img, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 w-[280px] w-[380px] h-[280px] rounded-2xl overflow-hidden relative"
//           >
//             <Image
//               src={img}
//               alt={`Web project ${(index % images.length) + 1}`}
//               fill
//               className="object-cover"
//             />
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default WebImages;

import w1 from "@/public/w1.webp";
import w2 from "@/public/w2.webp";
import w3 from "@/public/w3.webp";
import w4 from "@/public/w4.webp";
import w5 from "@/public/w5.webp";
import w6 from "@/public/w6.webp";
import ImageCarousel from "./ImageCarousel";

const WebImages = () => {
  return <ImageCarousel images={[w1, w2, w3, w4, w5, w6]} />;
};

export default WebImages;