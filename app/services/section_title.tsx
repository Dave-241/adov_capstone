import Image from "next/image";
import { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  title: string;
  subtext: string;
};

const SectionTitle = ({ image, title, subtext }: Props) => {
  return (
    <div className="w-full max-w-7xl mx-auto  md:mb-0 mb-3 mt-15 md:mt-20 gap-3">
      <Image src={image} alt={title} className="w-12 h-12 mb-2" />
      <p className="font-semibold text-[#031F4F] text-balance text-2xl">
        {title}
      </p>
      <p className="font-medium text-base text-[#7B899A]">{subtext}</p>
    </div>
  );
};

export default SectionTitle;
