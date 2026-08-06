import Image from "next/image";
import atimage from '@/public/atimage.png'
import instalogo from '@/public/instalogo.png'

const details = () => {
  return (
    <div className="">
        <div className="w-full max-w-7xl mx-auto flex mb-8 justify-center">

            <div className="bg-[#FFFFFF] flex flex-col gap-9 py-19 px-8 rounded-3xl border ">

               <div className="flex flex-col gap-[15px]">
                   <label className="text-[#031F4F] font-semibold text-[16px]">Full name</label>
                   <input
                     type="text"
                     placeholder="Jane doe"
                     className="border border-gray-300 rounded-xl py-4 px-3 text-[16px]  w-[555px] placeholder:text-[#7B899A] placeholder:font-medium"
                   />
                </div>

               <div className="flex flex-col gap-[15px]">
                   <label className="text-[#031F4F] font-semibold text-[16px]">Email address</label>
                   <input
                     type="text"
                     placeholder="jane@company.com"
                     className="border border-gray-300 rounded-xl px-3 py-4 text-[16px]   placeholder:text-[#7B899A] placeholder:font-medium"
                   />
                </div>
               <div className="flex flex-col gap-[15px]">
                   <label className="text-[#031F4F] font-semibold text-[16px]">What do you need help with?</label>
                   <input
                     type="text"
                     placeholder="Website, UI/UX, branding, or Academy"
                     className="border border-gray-300 rounded-xl px-3 py-4 text-[16px]  placeholder:text-[#7B899A] placeholder:font-medium"
                   />
                </div>
               <div className="flex flex-col gap-[15px]">
                   <label className="text-[#031F4F] font-semibold text-[16px]">Message</label>
                   <input
                     type="text"
                     placeholder="Tell us a bit about your project.."
                     className="border border-gray-300 rounded-xl px-3 py-4 text-[16px]  placeholder:text-[#7B899A] placeholder:font-medium"
                   />
                </div>

                <div className=""><button className="font-medium bg-[#031F4F] text-[16px] py-[14px] px-[30px] rounded-[40px] text-white ">Send message</button></div>

            </div>

            <div className="bg-[#031F4F] rounded-[20px] py-[44px] pl-[40px] pr-[142px] ">
                
                <p className="text-[#7B899A] font-semibold  ">CONTACT DETAILS</p>

                <div className="flex items-center gap-3 mt-3">
                     <Image src={atimage} alt="atimage" className="w-[45px] "/>
                     <div className="">
                        <p className="text-[12px] font-semibold text-[#7B899A] ">Email</p>
                        <p className="text-[12px] font-bold text-white ">contactadov@gmail.com</p>
                     </div>
                </div>

                <div className="flex items-center gap-3 mt-8">
                     <Image src={instalogo} alt="instalogo" className="w-[45px] "/>
                     <div className="">
                        <p className="text-[12px] font-semibold text-[#7B899A] ">Instagram</p>
                        <p className="text-[12px] font-bold text-white ">the_adov</p>
                     </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default details
