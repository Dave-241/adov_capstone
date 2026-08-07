import Image from "next/image";
import wimage from '@/public/wimage.png'
const web_title = () => {
  return (
    <div className="">
      <div className="w-full max-w-7xl mx-auto px-4 mt-15 md:mt-20 gap-[3px] flex flex-col items-center text-center md:items-start md:text-left mb-7 ">
         <Image src={wimage} alt="w-image" className="w-[45px] "/>
         <p className="font-semibold text-[#031F4F] text-[24px] w-full  max-w-[358px] ">Websites That Perform Beyond Expectations.</p>
         <p className="font-medium text-[16px] text-[#7B899A] ">Innovative technology. Real business impact.</p>

      </div>
    </div>
  )
}

export default web_title