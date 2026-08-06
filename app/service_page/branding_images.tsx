import Image from "next/image";
import b11 from '@/public/b11.png'
import b2 from '@/public/b2.png'
import b3 from '@/public/b3.png'
import b4 from '@/public/b4.png'
import b5 from '@/public/b5.png'

const branding_images = () => {
  return (
    <div>
        <div className="grid grid-cols-2 md:grid-cols-5 w-full max-w-7xl mx-auto px-4 gap-[3px] mt-2 ">
          <Image src={b11} alt="b11" className=" "/>
          <Image src={b2} alt="b2" className=" "/>
          <Image src={b3} alt="b3" className=" "/>
          <Image src={b4} alt="b4" className=" "/>
          <Image src={b5} alt="b5" className=" "/>
        </div>
    </div>
  )
}

export default branding_images