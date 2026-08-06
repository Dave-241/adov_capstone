const Section6 = () => {
  return (
    <div className="flex flex-col max-w-7xl px-4 py-8 sm:p-12 mx-auto justify-center">
      <div className="flex flex-col max-w-7xl mx-auto justify-center w-full">
        <div>
          <p className="font-medium text-sm sm:text-[16px] text-[#10A4EA]">
            COHORTS
          </p>
          <h3 className="text-2xl sm:text-3xl md:text-[40px] font-semibold text-[#031F4F] leading-tight md:leading-[52px]">
            Currently running Cohort 1.
          </h3>
        </div>

        <div className="gap-3 sm:gap-4 flex flex-wrap mt-4 sm:mt-3">
          <button className="bg-[#031F4F] text-white px-5 sm:px-6 py-2 rounded-3xl hover:bg-[#05317D] text-sm sm:text-base whitespace-nowrap">
            Cohort 1 - Live
          </button>
          <button className="text-[#7B899A] border-[#BFBFB4] border px-5 sm:px-6 py-2 rounded-3xl items-center hover:bg-[#F5F5F5] text-sm sm:text-base whitespace-nowrap">
            Cohort 2 - coming soon
          </button>
          <button className="text-[#7B899A] border-[#BFBFB4] border px-5 sm:px-6 py-2 rounded-3xl items-center hover:bg-[#F5F5F5] text-sm sm:text-base whitespace-nowrap">
            Cohort 3 - coming soon
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section6;