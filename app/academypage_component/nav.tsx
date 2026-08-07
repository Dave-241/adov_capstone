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
    <nav className="  font-semibold sticky top-0 z-99999999999 bg-[#FFFFF0] shadow-md  border-[#7B899A]">
      <div className="max-w-7xl px-6 sm:px-8 lg:px-12 py-4 mx-auto flex justify-between items-center ">
        {/* Logo */}
        <Link href={"/"} className="shrink-0">
          <Image src={adovlogo} alt="Adov logo" className=" w-auto" />
        </Link>

        {/* Desktop links - hidden below lg */}
        <ul className="hidden lg:flex gap-8 items-center">
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

        {/* Desktop contact button - hidden below lg */}
        <Link
          href={"/contact"}
          className="hidden lg:flex border hover:bg-gray-100 font-bold py-2 px-4 rounded-xl gap-1 items-center"
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
      {isOpen && (
        <div className="lg:hidden px-6 sm:px-8 pb-4">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block hover:text-gray-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <Link
            href={"/contact"}
            className="mt-4 w-full border hover:bg-gray-100 font-bold py-2 px-4 rounded-xl flex gap-1 items-center justify-center"
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
