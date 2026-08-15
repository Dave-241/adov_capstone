const cohorts = [
  { label: "Cohort 1 - Live", active: true },
  { label: "Cohort 2 - coming soon", active: false },
 
];

const Section6 = () => {
  return (
<<<<<<< Updated upstream
    <div className="flex flex-col  pt-12 md:pt-8 px-3 md:px-12 mx-auto justify-center">
=======
    <div className="flex flex-col  px-4 py-8  md:px-12 mx-auto justify-center">
>>>>>>> Stashed changes
      <div className="flex flex-col max-w-7xl gap-4 mx-auto justify-center w-full">
        <h3 className="font-bold  text-2xl md:text-base text-[#031F4F]">
          Our Cohorts
        </h3>
        <p className="text-sm  text-[#808080] ">
          Each cohort is a new group of trainees taking the journey together. We
          are currently running Cohort 1, and this is only the beginning.
        </p>

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
