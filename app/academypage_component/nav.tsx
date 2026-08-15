"use client";

import { useState } from "react";
import Image from "next/image";
import adovlogo from "@/public/adovlogo.svg";
import { PenLine, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "services" },
    { label: "Works", href: "works" },
    { label: "Academy", href: "academy" },
  ];

  const isActive = (href: string) => {
    // normalize href to always start with "/"
    const normalizedHref = href.startsWith("/") ? href : `/${href}`;

    if (normalizedHref === "/") {
      return pathname === "/";
    }

    return pathname === normalizedHref || pathname.startsWith(`${normalizedHref}/`);
  };

  return (
    <nav className="  font-semibold sticky px-6 sm:px-8 lg:px-12 top-0 z-99999999999 bg-[#FFFFF0] shadow-md  border-[#7B899A]">
      <div className="max-w-7xl relative  py-4 mx-auto flex justify-between items-center ">
        {/* Logo */}
        <Link href={"/"} className="shrink-0">
          <Image src={adovlogo} alt="Adov logo" className=" w-auto" />
        </Link>

        {/* Desktop links - hidden below lg */}
        <ul className="hidden  absolute left-1/2 top-1/2 -translate-y-1/2 -translate-[50%] lg:flex gap-8 items-center">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`hover:text-gray-600 transition-colors absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 ${
                  isActive(link.href)
                    ? "text-[#031F4F] font-bold"
                    : "text-[#7B899A]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop contact button - hidden below lg */}
        <Link
          href={"/contact"}
          className={`hidden lg:flex border hover:bg-gray-100 font-bold py-2 px-4 rounded-xl gap-1 items-center ${
            isActive("/contact") ? "bg-gray-100 text-black" : ""
          }`}
        >
          <span>Contact us</span>
          <PenLine className="scale-75" />
        </Link>

        {/* Mobile / tablet menu toggle - shown below lg */}
        <button
          className="lg:hidden p-2 border rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile / tablet dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`px-6 sm:px-8 pb-4 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`block hover:text-gray-600 transition-colors ${
                    isActive(link.href)
                      ? "text-[#031F4F] font-bold"
                      : "text-[#7B899A]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href={"/contact"}
            className={`mt-4 w-full border hover:bg-gray-100 font-bold py-2 px-4 rounded-xl flex gap-1 items-center justify-center ${
              isActive("/contact") ? "bg-gray-100 text-black" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            <span>Contact us</span>
            <PenLine className="scale-75" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;