import Image from "next/image";
import hero from "../../public/home hero 1.png";
import Link from "next/link";
const Section = () => {
  return (
    <div className="bg-[#FFFFF0] md:px-12">
      <div className="grid grid-cols-1 md:pt-20 md:grid-cols-2 gap-8 md:gap-4  sm:px-8  max-w-7xl bg-[#FFFFF0] mx-auto py-8 md:py-3">
        <div className="flex flex-col justify-center items-start order-2 md:order-1">
          <div>
            <p className="font-medium font-inter text-sm sm:text-[16px] text-[#10A4EA]">
              Train with Adov Academy
            </p>
            <h3 className="text-3xl md:text-5xl md:px-0 px-5 text-balance  font-semibold text-[#031F4F] ">
              Build Skills That Open Doors
            </h3>
            <p className="text-[#7B899A] max-w-md  text-balance text-sm sm:text-base">
              Our Academy combines practical learning, expert mentorship, and
              real-world projects to prepare aspiring professionals for
              successful careers in today's digital industry.
            </p>
          </div>
          <div className="gap-3 sm:gap-4 flex mt-5 md:mt-3 flex-wrap">
            <Link
              href="/contact"
              className="bg-[#031F4F] text-white px-5 sm:px-6 py-2 rounded-3xl hover:bg-[#0a337a] text-sm sm:text-base"
            >
              Register now
            </Link>
          </div>
        </div>

        <div className="order-2 ">
          <Image src={hero} alt="Academy" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Section;
