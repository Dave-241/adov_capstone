import Image from "next/image";
import adovlogo from "@/public/adovlogo.svg";
import footerlogo from "@/public/Vector (1).svg";
import insta from "@/public/Group.svg";

const UnderlineLink = ({ children }: { children: React.ReactNode }) => (
  <p className="relative inline-block w-fit text-[#7B899A] cursor-pointer group">
    {children}
    <span className="absolute left-0 -bottom-0.5 h-[1px] w-full bg-[#7B899A] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
  </p>
);

const Footer = () => {
  return (
    <div className=" max-w-7xl  px-6  md:px-12  mx-auto w-full">
      <div className=" flex md:flex md:justify-around gap-8  mx-auto py-10 md:py-12 border-b  border-[#7B899A]">
        <div className="flex w-full gap-3  flex-col col-span-2 md:col-span-1">
          <div>
            <Image
              src={adovlogo}
              alt="adovlogo"
              className="h-8 w-auto md:h-auto scale-70  md:scale-100"
            />
          </div>
          <h1 className="text-[#7B899A] text-xs sm:text-base">
            Creating experiences. Empowering growth.
          </h1>
        </div>
        <div className=" m-3 grid grid-cols-3 ">
          <div className="flex flex-col gap-2">
            <h1 className="text-[#7B899A] font-bold hover:text-gray-700 transition-colors text-sm sm:text-base">
              SERVICES
            </h1>
            <div className="flex flex-col gap-1 text-xs sm:text-base">
              <UnderlineLink>Websites</UnderlineLink>
              <UnderlineLink>UI/UX design</UnderlineLink>
              <UnderlineLink>Branding</UnderlineLink>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-[#7B899A] font-bold hover:text-gray-700 transition-colors text-sm sm:text-base">
              COMPANY
            </h1>
            <div className="flex flex-col gap-1 text-xs sm:text-base">
              <UnderlineLink>Works</UnderlineLink>
              <UnderlineLink>Academy</UnderlineLink>
              <UnderlineLink>Contact</UnderlineLink>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-[#7B899A] font-bold hover:text-gray-700 transition-colors text-sm sm:text-base">
              CONTACT
            </h1>
            <div className="flex flex-col gap-1 text-xs sm:text-base break-words">
              <UnderlineLink>contactadov@gmail.com</UnderlineLink>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row  justify-between items-center gap-3 sm:gap-2 mx-auto max-w-7xl bg-[#FFFFF0] text-[#7B899A] px-6 sm:px-8 md:px-4 py-4 sm:py-3">
        <div className="flex gap-2 items-center">
          <Image src={footerlogo} alt="footerlogo" />
          <h1 className="text-sm sm:text-base">2026 Adov.</h1>
        </div>
        <div className="flex gap-2 items-center">
          <Image src={insta} alt="instagram" />
          <h1 className="text-[#7B899A] text-sm sm:text-base">the_adov</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
