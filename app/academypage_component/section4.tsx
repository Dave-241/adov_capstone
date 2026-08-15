import Section4 from "@/app/academypage_component/section5Array";

const section5 = () => {
  return (
    <div className=" md:px-12 px-3 bg-[#FFFFF0] mt-12">
      <div className=" flex flex-col gap-4    max-w-7xl mx-auto   ">
        <h3 className=" text-4xl  text-[#031F4F] ">
          What You Can Learn At Adov Academy
        </h3>
        <p className=" font-medium text-[16px] text-[#808080]">
          Whatever your interest, there is a track for you:
        </p>

        <Section4 />
      </div>
    </div>
  );
};

export default section5;
