"use client";

import { useState } from "react";
import Image from "next/image";
import adovlogo from "@/public/adovlogo.svg";
import { PenLine, Menu, X } from "lucide-react";
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "services" },
    { label: "Works", href: "works" },
    { label: "Academy", href: "academy" },
  ];

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
                className="hover:text-gray-600 transition-colors text-[#7B899A] absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href={"/contact"}
          className="hidden lg:flex border border-[#031F4F] text-[#031F4F] hover:bg-gray-100 dark:border-[#031F4F] dark:text-[#031F4F] dark:hover:bg-gray-100 dark:bg-transparent font-bold py-2 px-4 rounded-xl gap-1 items-center"
        >
          <span>Contact us</span>
          <PenLine className="scale-75" />
        </Link>

        {/* Mobile / tablet menu toggle */}
        <button
          className="lg:hidden p-2 border border-[#031F4F] text-[#031F4F] dark:border-[#031F4F] dark:text-[#031F4F] dark:bg-transparent rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden   pb-4">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block text-lg text-[#7B899A] hover:text-gray-600 dark:text-[#7B899A] dark:hover:text-gray-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <Link
            href={"/contact"}
            className="mt-4 w-full border border-[#031F4F] text-[#031F4F] dark:border-[#031F4F] dark:text-[#031F4F] dark:bg-transparent dark:hover:bg-gray-100 hover:bg-gray-100 font-bold py-4 px-4 rounded-xl flex gap-1 items-center justify-center"
          >
            <span>Contact us</span>
            <PenLine className="scale-75" />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
