"use client";

import Image from "next/image";

type LightboxProps = {
  open: boolean;
  images: string[];
  onClose: () => void;
};

export default function Lightbox({
  open,
  images,
  onClose,
}: LightboxProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 px-4 py-6 md:px-10 md:py-10"
      onClick={onClose}
    >
      <div
        className="relative flex h-full w-full items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-0 top-0 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-medium text-black shadow-lg transition-transform duration-200 hover:scale-105 md:right-2 md:top-2"
        >
          ×
        </button>

        {/* UI image */}
        <div className="relative h-full w-full max-w-[1400px] overflow-hidden rounded-xl">
          <Image
            src={images[0]}
            alt="UI/UX design"
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}