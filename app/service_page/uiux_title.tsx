import Image from "next/image";
import uiux_image from '@/public/uiux_image.png'

const uiux_title = () => {
  return (
    <div className="">
        <div className="w-full max-w-7xl mx-auto px-4 mt-15 md:mt-20 gap-[3px] flex flex-col items-center text-center md:items-start md:text-left mb-7 ">
         <Image src={uiux_image} alt="uiux_image" className="w-[40px] "/>
         <p className="font-semibold text-[#031F4F] text-[24px] ">UI/UX</p>
         <p className="font-medium text-[16px] text-[#7B899A] ">Creating user experiences that simplify, engage and inspire. </p>
      </div>
    </div>
  )
}

export default uiux_title