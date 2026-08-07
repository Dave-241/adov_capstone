import Image from "next/image";
import hero from "../../public/home hero 1.png";

const Section = () => {
  return (
    <div className="bg-[#FFFFF0]">
      <div className="grid grid-cols-1 md:pt-20 md:grid-cols-2 gap-8 md:gap-4 px-6 sm:px-8 md:px-12 max-w-7xl bg-[#FFFFF0] mx-auto py-8 md:py-3">
        <div className="flex flex-col justify-center items-start order-2 md:order-1">
          <div>
            <p className="font-medium font-inter text-sm sm:text-[16px] text-[#10A4EA]">
              Train with Adov Academy
            </p>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-semibold text-[#031F4F] leading-tight md:leading-[72px]">
              Build Skills That Open Doors
            </h3>
            <p className="text-[#7B899A] max-w-md mt-3 text-sm sm:text-base">
              Our Academy combines practical learning, expert mentorship, and
              real-world projects to prepare aspiring professionals for
              successful careers in today's digital industry.
            </p>
          </div>
          <div className="gap-3 sm:gap-4 flex mt-5 md:mt-3 flex-wrap">
            <button className="bg-[#031F4F] text-white px-5 sm:px-6 py-2 rounded-3xl hover:bg-[#0a337a] text-sm sm:text-base">
              Register now
            </button>
            <button className="text-[#031F4F] border-[#031F4F] border px-5 sm:px-6 py-2 hover:bg-[#dcdfe4] rounded-3xl text-sm sm:text-base">
              Log in
            </button>
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
