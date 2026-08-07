import Image from "next/image";
import ui from "@/public/images/UIUX image.png";
import FadeUp from "./FadeUp";

export default function UISection() {
  return (
    <section className="w-full bg-white px-6 pt-16 pb-12 md:px-8 md:pt-0 md:pb-16">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <FadeUp>
          <h2 className="mb-4 text-[12px] font-bold uppercase tracking-[0.05em] text-[#06265f] md:text-[18px]">
            UI/UX
          </h2>
        </FadeUp>

        {/* Image */}
        <FadeUp delay={0.15}>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={ui}
              alt="UI/UX Project"
              className="h-auto w-full"
              priority
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
