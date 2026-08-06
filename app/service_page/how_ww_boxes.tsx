const processData = [
  {
    id: 1,
    number: "01",
    title: "Branding",
    description: "We learn your goals, audience and constraints before anything is designed.",
  },
  {
    id: 2,
    number: "02",
    title: "Design",
    description: "Full UI/UX and brand direction, reviewed with you before build starts.",
  },
  {
    id: 3,
    number: "03",
    title: "Build",
    description: "Frontend and backend built to match the approved design exactly.",
  },
  {
    id: 4,
    number: "04",
    title: "Launch",
    description: "Tested, polished and shipped, with support after go live.",
  },
];

const How_ww_boxes = () => {
  return (
    <div className="my-8 w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-[12px]">
      {processData.map((step) => (
        <div
          key={step.id}
          className="border rounded-3xl px-6 md:px-[41px] pt-[28px] md:pt-[36px] pb-[36px] md:pb-[60px] flex flex-col gap-[8px] bg-[#FFFFFF] w-full md:w-auto"
        >
          <p className="font-semibold text-[#10A4EA] text-[18px] md:text-[20px]">{step.number}</p>
          <p className="text-[18px] md:text-[20px] text-[#031F4F] font-semibold">{step.title}</p>
          <p className="text-[14px] text-[#7B899A] font-semibold w-full md:w-[218px]">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default How_ww_boxes;