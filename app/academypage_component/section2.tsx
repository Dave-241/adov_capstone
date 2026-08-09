import Section3Array from "./section3Array";

const section2 = () => {
  return (
    <div className="max-w-7xl md:px-12 px-4 mx-auto">
      <div className="bg-[#FFFFF0] flex flex-col  md:text-left text-center text-balance  md:gap-4 gap-3 md:py-12 py-10  mx-auto   ">
        <p className=" font-medium text-base text-[#10A4EA]">THE PROGRAM</p>
        <h3 className="md:text-4xl text-3xl px-10 md:px-0 font-semibold text-[#031F4F] ">
          Five weeks, four disciplines.
        </h3>
        <p className=" text-[#7B899A] text-base max-w-md ">
          Each week builds on the last, moving from fundamentals to a real
          capstone project.
        </p>
        <Section3Array />
      </div>
    </div>
  );
};

export default section2;
