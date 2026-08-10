// import Image from "next/image";
// import atimage from "@/public/atimage.png";
// import instalogo from "@/public/instalogo.png";

// const Details = () => {
//   return (
//     <div>
//       <div className="w-full max-w-7xl mx-auto px-4 md:px-0 flex flex-col md:flex-row mb-8 justify-center gap-6 md:gap-0">

//         <div className="bg-[#FFFFFF] flex flex-col gap-6 md:gap-9 py-8 md:py-19 px-6 md:px-8 rounded-3xl border w-full md:w-auto">

//           <div className="flex flex-col gap-[15px]">
//             <label className="text-[#031F4F] font-semibold text-[16px]">
//               Full name
//             </label>
//             <input
//               type="text"
//               placeholder="Jane doe"
//               autoComplete="name"
//               className="border border-gray-300 rounded-xl py-4 px-3 text-[16px] w-full md:w-[555px] placeholder:text-[#7B899A] placeholder:font-medium"
//             />
//           </div>

//           <div className="flex flex-col gap-[15px]">
//             <label className="text-[#031F4F] font-semibold text-[16px]">
//               Email address
//             </label>
//             <input
//               type="text"
//               placeholder="jane@company.com"
//               className="border border-gray-300 rounded-xl px-3 py-4 text-[16px] w-full placeholder:text-[#7B899A] placeholder:font-medium"
//             />
//           </div>

//           <div className="flex flex-col gap-[15px]">
//             <label className="text-[#031F4F] font-semibold text-[16px]">
//               What do you need help with?
//             </label>
//             <input
//               type="text"
//               placeholder="Website, UI/UX, branding, or Academy"
//               className="border border-gray-300 rounded-xl px-3 py-4 text-[16px] w-full placeholder:text-[#7B899A] placeholder:font-medium"
//             />
//           </div>

//           <div className="flex flex-col gap-[15px]">
//             <label className="text-[#031F4F] font-semibold text-[16px]">
//               Message
//             </label>
//             <input
//               type="text"
//               placeholder="Tell us a bit about your project.."
//               className="border border-gray-300 rounded-xl px-3 py-4 text-[16px] w-full placeholder:text-[#7B899A] placeholder:font-medium"
//             />
//           </div>

//           <div>
//             <button className="w-full md:w-auto font-medium cursor-pointer border transition duration-300 hover:border-[#031F4F] hover:bg-white hover:text-[#031F4F] bg-[#031F4F] text-[16px] py-[14px] px-[30px] rounded-[40px] text-white">
//               Send message
//             </button>
//           </div>
//         </div>

//         <div className="bg-[#031F4F] rounded-[20px] py-13 md:py-8 md:py-[44px] px-6 md:pl-[40px] md:pr-[142px] w-full md:w-auto">
//           <p className="text-[#7B899A] font-semibold">CONTACT DETAILS</p>

//           <a
//             href="mailto:contactadov@gmail.com"
//             className="flex items-center gap-3 mt-3 hover:opacity-80 transition"
//           >
//             <Image src={atimage} alt="atimage" className="w-[45px]" />
//             <div>
//               <p className="text-[12px] font-semibold text-[#7B899A]">Email</p>
//               <p className="text-[12px] font-bold text-white">
//                 contactadov@gmail.com
//               </p>
//             </div>
//           </a>

//           <a
//             href="https://www.instagram.com/adov.official/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-3 mt-8 hover:opacity-80 transition"
//           >
//             <Image src={instalogo} alt="instalogo" className="w-[45px]" />
//             <div>
//               <p className="text-[12px] font-semibold text-[#7B899A]">
//                 Instagram
//               </p>
//               <p className="text-[12px] font-bold text-white">the_adov</p>
//             </div>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Details;

"use client";

import { useState } from "react";
import Image from "next/image";
import atimage from "@/public/atimage.png";
import instalogo from "@/public/instalogo.png";

const Details = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    helpWith: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // '', 'sending', 'sent', 'error'

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ fullName: "", email: "", helpWith: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      <div className="w-full max-w-7xl mx-auto px-4 md:px-0 flex flex-col md:flex-row mb-8 justify-center gap-6 md:gap-0">
        <form
          onSubmit={handleSubmit}
          className="bg-[#FFFFFF] flex text-black flex-col gap-6 md:gap-9 py-8 md:py-19 px-6 md:px-8 rounded-3xl border w-full md:w-auto"
        >
          <div className="flex flex-col gap-[15px]">
            <label className="text-[#031F4F] font-semibold text-[16px]">
              Full name
            </label>
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
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
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="jane@company.com"
              className="border border-gray-300 rounded-xl px-3 py-4 text-[16px] w-full placeholder:text-[#7B899A] placeholder:font-medium"
            />
          </div>

          <div className="flex flex-col gap-[15px]">
            <label className="text-[#031F4F] font-semibold text-[16px]">
              What do you need help with?
            </label>
            <input
              name="helpWith"
              value={formData.helpWith}
              onChange={handleChange}
              type="text"
              placeholder="Website, UI/UX, branding, or Academy"
              className="border border-gray-300 rounded-xl px-3 py-4 text-[16px] w-full placeholder:text-[#7B899A] placeholder:font-medium"
            />
          </div>

          <div className="flex flex-col gap-[15px]">
            <label className="text-[#031F4F] font-semibold text-[16px]">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us a bit about your project.."
              rows={4}
              className="border border-gray-300 rounded-xl px-3 py-4 text-[16px] w-full text-black placeholder:text-[#7B899A] placeholder:font-medium resize-none"
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full md:w-auto font-medium cursor-pointer border transition duration-300 hover:border-[#031F4F] hover:bg-white hover:text-[#031F4F] bg-[#031F4F] text-[16px] py-[14px] px-[30px] rounded-[40px] text-white disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send message"}
            </button>

            {status === "sent" && (
              <p className="text-green-600 text-sm mt-3">
                Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-sm mt-3">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </form>

        <div className="bg-[#031F4F] rounded-[20px] py-8 md:py-[44px] px-6 md:pl-[40px] md:pr-[142px] w-full md:w-auto">
          <p className="text-[#7B899A] font-semibold">CONTACT DETAILS</p>

          <a
            href="mailto:contactadov@gmail.com"
            className="flex items-center gap-3 mt-3 hover:opacity-80 transition"
          >
            <Image src={atimage} alt="atimage" className="w-[45px]" />
            <div>
              <p className="text-[12px] font-semibold text-[#7B899A]">Email</p>
              <p className="text-[12px] font-bold text-white">
                contactadov@gmail.com
              </p>
            </div>
          </a>

          <a
            href="https://www.instagram.com/adov.official/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 mt-8 hover:opacity-80 transition"
          >
            <Image src={instalogo} alt="instalogo" className="w-[45px]" />
            <div>
              <p className="text-[12px] font-semibold text-[#7B899A]">
                Instagram
              </p>
              <p className="text-[12px] font-bold text-white">the_adov</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Details;
