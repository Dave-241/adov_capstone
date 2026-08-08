import Image from "next/image";
import adovlogo from "@/public/adovlogo.svg";
import footerlogo from "@/public/Vector (1).svg";
import insta from "@/public/Group.svg";
import Link from "next/link";
const UnderlineLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <Link href={href} className="relative inline-block w-fit text-[#7B899A] cursor-pointer group">
    {children}
    <span className="absolute left-0 -bottom-0.5 h-[1px] w-full bg-[#7B899A] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
  </Link>
);

const Footer = () => {
  return (
    <div className=" max-w-7xl  px-6  md:px-12  mx-auto w-full">
      <div className=" flex md:flex-row flex-col   md:justify-around gap-8  mx-auto py-10 md:py-12 border-b  border-[#7B899A]">
        <div className="flex w-full gap-3   flex-col  md:col-span-1">
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
        <div className=" gap-5 md:gap-0 grid md:grid-cols-3 ">
          <div className="flex flex-col gap-2">
            <Link
              href={"/services"}
              className="text-[#7B899A] font-bold hover:text-gray-700 transition-colors text-sm sm:text-base"
            >
              SERVICES
            </Link>

            <div className="flex flex-col gap-1 text-xs sm:text-base">
              <UnderlineLink href="/works">Websites</UnderlineLink>
              <UnderlineLink href="/works">UI/UX design</UnderlineLink>
              <UnderlineLink href="/works">Branding</UnderlineLink>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Link
              href={"/"}
              className="text-[#7B899A] font-bold hover:text-gray-700 transition-colors text-sm sm:text-base"
            >
              COMPANY
            </Link>
            <div className="flex flex-col gap-1 text-xs sm:text-base">
              <UnderlineLink href="/works">Works</UnderlineLink>

              <UnderlineLink href="/academy">Academy</UnderlineLink>
              <UnderlineLink href="/contact">Contact</UnderlineLink>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Link
              href={"/contact"}
              className="text-[#7B899A] font-bold hover:text-gray-700 transition-colors text-sm sm:text-base"
            >
              CONTACT
            </Link>
            <div className="flex flex-col gap-1 text-xs sm:text-base break-words">
              <UnderlineLink href="mailto:contactadov@gmail.com">
                contactadov@gmail.com
              </UnderlineLink>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row  justify-between items-center gap-3 sm:gap-2 mx-auto max-w-7xl bg-[#FFFFF0] text-[#7B899A] px-6 sm:px-8 md:px-4 py-4 sm:py-3">
        <div className="flex gap-2 items-center">
          <Image src={footerlogo} alt="footerlogo" />
          <h1 className="text-sm sm:text-base">2026 Adov.</h1>
        </div>
        <Link href= "https://www.instagram.com/the_adov" className="flex gap-2 items-center">
          <Image src={insta} alt="instagram" />
          <h1 className="text-[#7B899A] text-sm sm:text-base">the_adov</h1>
        </Link >
      </div>
    </div>
  );
};

export default Footer;
