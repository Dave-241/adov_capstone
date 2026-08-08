import Section4 from "@/app/academypage_component/section5Array";

const section5 = () => {
  return (
    <div className=" md:px-12 bg-[#FFFFF0] ">
      <div className=" flex flex-col   px-4 gap-4 md:pb-12   max-w-7xl mx-auto       ">
        <p className=" font-medium text-[16px] text-[#10A4EA]">
          SKILLS BREAKDOWN
        </p>
        <h3 className="text-4xl font-semibold text-[#031F4F] ">
          What you'll actually learn.
        </h3>

        <Section4 />
      </div>
    </div>
  );
};

export default section5;
