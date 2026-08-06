import Image from "next/image";
import u1 from '@/public/u1.png'
import u2 from '@/public/u2.png'
import u3 from '@/public/u3.png'
import u4 from '@/public/u4.png'
import u5 from '@/public/u5.png'


const uiux_images = () => {
  return (
    <div className="">
        <div className="grid grid-cols-2 md:grid-cols-5 w-full max-w-7xl px-4 mx-auto gap-[3px] mt-2 ">
          <Image src={u1} alt="u1" className=" "/>
          <Image src={u2} alt="u2" className=" "/>
          <Image src={u3} alt="u3" className=" "/>
          <Image src={u4} alt="u4" className=" "/>
          <Image src={u5} alt="u5" className=" "/>
        </div>
    </div>
  )
}

export default uiux_images