import Section3Array from "./section3Array";

const section2 = () => {
  return (
    <div className="bg-[#FFFFF0] flex flex-col   px-4 gap-4 md:py-12   max-w-7xl mx-auto md:px-12      ">
      <p className=" font-medium text-[16px] text-[#10A4EA]">THE PROGRAM</p>
      <h3 className="text-4xl font-semibold text-[#031F4F] ">
        Five weeks, four disciplines.
      </h3>
      <p className=" text-[#7B899A] max-w-md ">
        Each week builds on the last, moving from fundamentals to a real
        capstone project.
      </p>
      <Section3Array />
    </div>
  );
};

export default section2;
