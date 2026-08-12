import Image from "next/image";
import w1 from "@/public/w1.png";
import w2 from "@/public/w2.png";
import w3 from "@/public/w3.png";
import w4 from "@/public/w4.png";
import w5 from "@/public/w5.png";

const web_images = () => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-5 w-full max-w-7xl mx-auto gap-[3px] mt-2 ">
        <Image src={w1} alt="w1" className=" " />
        <Image src={w2} alt="w2" className=" " />
        <Image src={w3} alt="w3" className=" " />
        <Image src={w4} alt="w4" className=" " />
        <Image src={w5} alt="w5" className=" " />
      </div>
    </div>
  );
};

export default web_images;
