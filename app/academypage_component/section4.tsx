import Section4 from "@/app/academypage_component/section5Array";

const section5 = () => {
  return (
    <div className="max-w-7xl md:px-12 px-4 mx-auto">
      {" "}
      <div className=" flex flex-col  md:text-left text-center gap-4 md:pb-12   max-w-7xl mx-auto       ">
        <p className=" font-medium text-[16px] text-[#10A4EA]">
          SKILLS BREAKDOWN
        </p>
        <h3 className=" md:text-4xl text-3xl px-10 md:px-0 text-balance font-semibold text-[#031F4F] ">
          What you'll actually learn.
        </h3>

        <Section4 />
      </div>
    </div>
  );
};

export default section5;
