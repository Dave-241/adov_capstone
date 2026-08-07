// import Image from "next/image";
// import atimage from "@/public/atimage.png";
// import instalogo from "@/public/instalogo.png";

// const details = () => {
//   return (
//     <div className="">
//       <div className="w-full max-w-7xl mx-auto flex mb-8 justify-center">
//         <div className="bg-[#FFFFFF] flex flex-col gap-9 py-19 px-8 rounded-3xl border ">
//           <div className="flex flex-col gap-[15px]">
//             <label className="text-[#031F4F] font-semibold text-[16px]">
//               Full name
//             </label>
//             <input
//               type="text"
//               placeholder="Jane doe"
//               autoComplete="name"
//               className="border border-gray-300 rounded-xl py-4 px-3 text-[16px]  w-[555px] placeholder:text-[#7B899A] placeholder:font-medium"
//             />
//           </div>

//           <div className="flex flex-col gap-[15px]">
//             <label className="text-[#031F4F] font-semibold text-[16px]">
//               Email address
//             </label>
//             <input
//               type="text"
//               placeholder="jane@company.com"
//               className="border border-gray-300 rounded-xl px-3 py-4 text-[16px]   placeholder:text-[#7B899A] placeholder:font-medium"
//             />
//           </div>
//           <div className="flex flex-col gap-[15px]">
//             <label className="text-[#031F4F] font-semibold text-[16px]">
//               What do you need help with?
//             </label>
//             <input
//               type="text"
//               placeholder="Website, UI/UX, branding, or Academy"
//               className="border border-gray-300 rounded-xl px-3 py-4 text-[16px]  placeholder:text-[#7B899A] placeholder:font-medium"
//             />
//           </div>
//           <div className="flex flex-col gap-[15px]">
//             <label className="text-[#031F4F] font-semibold text-[16px]">
//               Message
//             </label>
//             <input
//               type="text"
//               placeholder="Tell us a bit about your project.."
//               className="border border-gray-300 rounded-xl px-3 py-4 text-[16px]  placeholder:text-[#7B899A] placeholder:font-medium"
//             />
//           </div>

//           <div className="">
//             <button className="font-medium cursor-pointer border transition duration-300 hover:border-[#031F4F] hover:bg-white hover:text-[#031F4F] bg-[#031F4F] text-[16px] py-[14px] px-[30px] rounded-[40px] text-white ">
//               Send message
//             </button>
//           </div>
//         </div>

//         <div className="bg-[#031F4F] rounded-[20px] py-[44px] pl-[40px] pr-[142px] ">
//           <p className="text-[#7B899A] font-semibold  ">CONTACT DETAILS</p>

//           <div className="flex items-center gap-3 mt-3">
//             <Image src={atimage} alt="atimage" className="w-[45px] " />
//             <div className="">
//               <p className="text-[12px] font-semibold text-[#7B899A] ">Email</p>
//               <p className="text-[12px] font-bold text-white ">
//                 contactadov@gmail.com
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center gap-3 mt-8">
//             <Image src={instalogo} alt="instalogo" className="w-[45px] " />
//             <div className="">
//               <p className="text-[12px] font-semibold text-[#7B899A] ">
//                 Instagram
//               </p>
//               <p className="text-[12px] font-bold text-white ">the_adov</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default details;


import Image from "next/image";
import atimage from "@/public/atimage.png";
import instalogo from "@/public/instalogo.png";

const Details = () => {
  return (
    <div>
      <div className="w-full max-w-7xl mx-auto px-4 md:px-0 flex flex-col md:flex-row mb-8 justify-center gap-6 md:gap-0">

        <div className="bg-[#FFFFFF] flex flex-col gap-6 md:gap-9 py-8 md:py-19 px-6 md:px-8 rounded-3xl border w-full md:w-auto">

          <div className="flex flex-col gap-[15px]">
            <label className="text-[#031F4F] font-semibold text-[16px]">
              Full name
            </label>
            <input
              type="text"
              placeholder="Jane doe"
              autoComplete="name"
              className="border border-gray-300 rounded-xl py-4 px-3 text-[16px] w-full md:w-[555px] placeholder:text-[#7B899A] placeholder:font-medium"
            />
          </div>

          <div className="flex flex-col gap-[15px]">
            <label className="text-[#031F4F] font-semibold text-[16px]">
              Email address
            </label>
            <input
              type="text"
              placeholder="jane@company.com"
              className="border border-gray-300 rounded-xl px-3 py-4 text-[16px] w-full placeholder:text-[#7B899A] placeholder:font-medium"
            />
          </div>

          <div className="flex flex-col gap-[15px]">
            <label className="text-[#031F4F] font-semibold text-[16px]">
              What do you need help with?
            </label>
            <input
              type="text"
              placeholder="Website, UI/UX, branding, or Academy"
              className="border border-gray-300 rounded-xl px-3 py-4 text-[16px] w-full placeholder:text-[#7B899A] placeholder:font-medium"
            />
          </div>

          <div className="flex flex-col gap-[15px]">
            <label className="text-[#031F4F] font-semibold text-[16px]">
              Message
            </label>
            <input
              type="text"
              placeholder="Tell us a bit about your project.."
              className="border border-gray-300 rounded-xl px-3 py-4 text-[16px] w-full placeholder:text-[#7B899A] placeholder:font-medium"
            />
          </div>

          <div>
            <button className="w-full md:w-auto font-medium cursor-pointer border transition duration-300 hover:border-[#031F4F] hover:bg-white hover:text-[#031F4F] bg-[#031F4F] text-[16px] py-[14px] px-[30px] rounded-[40px] text-white">
              Send message
            </button>
          </div>
        </div>

        <div className="bg-[#031F4F] rounded-[20px] py-8 md:py-[44px] px-6 md:pl-[40px] md:pr-[142px] w-full md:w-auto">
          <p className="text-[#7B899A] font-semibold">CONTACT DETAILS</p>

          <div className="flex items-center gap-3 mt-3">
            <Image src={atimage} alt="atimage" className="w-[45px]" />
            <div>
              <p className="text-[12px] font-semibold text-[#7B899A]">Email</p>
              <p className="text-[12px] font-bold text-white">
                contactadov@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-8">
            <Image src={instalogo} alt="instalogo" className="w-[45px]" />
            <div>
              <p className="text-[12px] font-semibold text-[#7B899A]">
                Instagram
              </p>
              <p className="text-[12px] font-bold text-white">the_adov</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;