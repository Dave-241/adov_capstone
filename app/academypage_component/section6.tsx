const cohorts = [
  { label: "Cohort 1 - Live", active: true },
  { label: "Cohort 2 - coming soon", active: false },
  { label: "Cohort 3 - coming soon", active: false },
];

const Section6 = () => {
  return (
    <div className="flex flex-col  pt-12 md:pt-8 px-3 md:px-12 mx-auto justify-center">
      <div className="flex flex-col max-w-7xl gap-4 mx-auto justify-center w-full">
        <p className="font-medium text-sm md:text-base text-[#10A4EA]">
          COHORTS
        </p>
        <h3 className="text-2xl  md:text-4xl font-semibold text-[#031F4F] ">
          Currently running Cohort 1.
        </h3>

        <div className="gap-3 sm:gap-4 flex flex-wrap ">
          {cohorts.map((cohort) => (
            <button
              key={cohort.label}
              className={
                cohort.active
                  ? "bg-[#031F4F] text-white px-5 sm:px-6 py-2 rounded-3xl hover:bg-[#05317D] text-sm sm:text-base whitespace-nowrap"
                  : "text-[#7B899A] border-[#BFBFB4] border px-5 sm:px-6 py-2 rounded-3xl items-center hover:bg-[#F5F5F5] text-sm sm:text-base whitespace-nowrap"
              }
            >
              {cohort.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section6;
