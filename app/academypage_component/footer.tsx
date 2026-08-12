import Image from "next/image";
import Link from "next/link";
import adovlogo from "@/public/adovlogo.svg";
import footerlogo from "@/public/Vector (1).svg";
import insta from "@/public/Group.svg";

const UnderlineLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <Link
    href={href}
    className="relative inline-block w-fit text-[#7B899A] cursor-pointer group"
  >
    {children}
    <span className="absolute left-0 -bottom-0.5 h-[1px] w-full bg-[#7B899A] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
  </Link>
);

type FooterLinkItem = {
  label: string;
  href: string;
};

type FooterLinkGroup = {
  title: string;
  links: FooterLinkItem[];
};

const footerLinkGroups: FooterLinkGroup[] = [
  // {
  //   title: "SERVICES",
  //   links: [
  //     { label: "Websites", href: "/services/websites" },
  //     { label: "UI/UX design", href: "/services/ui-ux-design" },
  //     { label: "Branding", href: "/services/branding" },
  //   ],
  // },
  {
    title: "COMPANY",
    links: [
      { label: "Home", href: "/" },
    { label: "Services", href: "services" },
    { label: "Works", href: "works" },
    { label: "Academy", href: "academy" },
    ],
  },
  {
    title: "CONTACT",
    links: [
      { label: "Contact Us", href: "mailto:contactadov@gmail.com" },
    ],
  },
];

const Footer = () => {
  return (
    <div className="  md:px-12 px-4 mx-auto w-full">
      <div className=" max-w-7xl   mx-auto w-full">
        <div className=" flex md:flex-row flex-col     justify-between gap-8  mx-auto py-10 md:py-12 border-b  border-[#7B899A]">
          <div className="flex w-full gap-3 items-start   flex-col">
          
              <Image
                src={adovlogo}
                alt="adovlogo"
                className="h-8 w-auto md:h-auto scale-70   md:scale-100"
              />
         
            <h1 className="text-[#7B899A] text-xs sm:text-base">
              Creating experiences. Empowering growth.
            </h1>
          </div>
          <div className="  flex  gap-6 md:gap-24 md:flex-row flex-col     ">
            {footerLinkGroups.map((group) => (
              <div key={group.title} className="flex flex-col gap-1">
                <h1 className="text-[#7B899A] font-semibold hover:text-gray-700 transition-colors text-sm sm:text-sm">
                  {group.title}
                </h1>
                <div className="flex flex-col  gap-2 md:gap-1 text-xs sm:text-sm break-words">
                  {group.links.map((link) => (
                    <UnderlineLink key={link.href} href={link.href}>
                      {link.label}
                    </UnderlineLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-row  justify-between items-center gap-3 sm:gap-2 mx-auto  bg-[#FFFFF0] text-[#7B899A]  py-4 sm:py-4">
          <div className="flex gap-2 items-center">
            <Image src={footerlogo} alt="footerlogo" />
            <h1 className="text-sm sm:text-base">2026 Adov.</h1>
          </div>
          <Link
            href="https://www.instagram.com/the_adov"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center hover:opacity-70 transition-opacity"
          >
            <Image src={insta} alt="instagram" />
            <h1 className="text-[#7B899A] text-sm sm:text-base">the_adov</h1>
          </Link>
        </div>
      </div>{" "}
    </div>
  );
};

export default Footer;
