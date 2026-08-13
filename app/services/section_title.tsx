

type Props = {
  title: string;
};

const SectionTitle = ({ title }: Props) => {
  return (
    <div className="w-full max-w-7xl flex justify-center md:justify-start mx-auto pb-4  md:mb-6 mt-15 md:mt-20 gap-3">
      <p className="font-medium text-[#031F4F] text-balance text-[22px] md:text-4xl">
        {title}
      </p>
    </div>
  );
};

export default SectionTitle;
