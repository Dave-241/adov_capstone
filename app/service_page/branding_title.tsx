import Image from "next/image";
import bimage from '@/public/bimage.png'

const branding_title = () => {
  return (
    <div>
        <div className="w-full max-w-7xl px-4 mx-auto px-4 mt-15 md:mt-20 gap-[3px] ">
         <Image src={bimage} alt="bimage" className="w-[40px] "/>
         <p className="font-semibold text-[#031F4F] text-[24px]  ">Branding</p>
         <p className="font-medium text-[16px] text-[#7B899A] ">Building brands that inspire trust and lasting connection.</p>
      </div>
    </div>
  )
}

export default branding_title