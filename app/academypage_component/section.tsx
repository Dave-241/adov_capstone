"use client"
import Image from "next/image";
import job from "@/public/streamline-ultimate_job-responsibility-bag-hand-bold.svg"
import document from "@/public/document.svg"

import design from "@/public/streamline-ultimate_coding-apps-website-web-dev-api-cloud-bold (1).svg"
import health from "@/public/healthicons_ui-user-profile.svg"
import material from "@/public/material-symbols_devices-rounded.svg"
import light from "@/public/thesvg-color_heroui-light.svg"
import award from "@/public/thesvg_css-design-awards.svg"
import  vector from "@/public/Vector academy.svg"
import Link from "next/link";

export default function AdovAcademyBanner() {
  return (
    <div className="relative mx-auto aspect-[434/230] w-full max-w-7xl overflow-hidden rounded ">
      {/* Local keyframes for the gentle up/down float */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      {/* ===== Floating icons — swap src for your own ===== */}

      <div
        className="float absolute left-[45.6%] top-[3.5%] aspect-square w-[6%]"
        style={{ animationDelay: "0s" }}
      >
        <Image src={document} alt="Document icon" fill className="object-contain" />
      </div>

      <div
        className="float absolute left-[13.8%] top-[12%] aspect-square w-[5%]"
        style={{ animationDelay: "0.4s" }}
      >
        <Image src={job} alt="Briefcase icon" fill className="object-contain" />
      </div>

      <div
        className="float absolute right-[7.8%] top-[10.5%] aspect-square w-[5.5%]"
        style={{ animationDelay: "0.8s" }}
      >
        <Image src={health} alt="User icon" fill className="object-contain" />
      </div>

      <div
        className="float absolute left-[3.2%] top-[38%] aspect-square w-[6%]"
        style={{ animationDelay: "1.2s" }}
      >
        <Image src={design} alt="API icon" fill className="object-contain" />
      </div>

      <div
        className="float absolute right-[3.2%] top-[35.5%] aspect-square w-[5.5%]"
        style={{ animationDelay: "0.2s" }}
      >
        <Image src={material} alt="Drawer icon" fill className="object-contain" />
      </div>

      <div
        className="float absolute bottom-[15%] left-[12%] flex aspect-square w-[5.5%] items-center justify-center rounded-full "
        style={{ animationDelay: "0.6s" }}
      >
        <Image src={vector} alt="UX icon" fill className="object-contain" />
      </div>


      <div
        className="float absolute bottom-[15%] right-[10%] flex aspect-square w-[6%] items-center justify-center rounded-lg"
        style={{ animationDelay: "1s" }}
      >
        <Image src={light}alt="UI icon"  fill className="object-contain" />
      </div>

      <div
        className="float absolute bottom-[2.5%] left-[45.2%] aspect-square w-[5%]"
        style={{ animationDelay: "1.4s" }}
      >
        <Image src={award} alt="Loop icon" fill className="object-contain" />
      </div>

      {/* ===== Center text ===== */}
      <div className="absolute left-1/2 top-1/2 w-[70%] max-w-7xl -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-[30px] sm:text-[28px] md:text-6xl text-[#031F4F] font-medium w-full  text-center leading-tight">
          Become a Techie in 5 Weeks
        </h1>
        <p className="mb-3.5 px-2.5 text-xs text-[#5C6270] sm:text-sm md:text-">
          Train with Adov Academy is our intensive, onsite training program built to turn
          ambition into real, market-ready skill.
        </p>
        <Link
          href="#"
          className="inline-block rounded-full bg-[#0F2A57] px-6 py-2.5 text-xs font-semibold tracking-wide text-white sm:text-sm"
        >
          Register now
        </Link>
      </div>
    </div>
  );
}