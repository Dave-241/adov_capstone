"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is Train with Adov Academy?",
    answer:
      "Train with Adov Academy is an onsite, hands-on tech training program. It teaches frontend development, backend development, UI/UX design, and branding over an intensive five-week, project-based program.",
  },
  {
    question: "Is Train with Adov Academy free?",
    answer: "Yes, the program is free and onsite.",
  },
  {
    question: "What can I learn at Adov Academy?",
    answer:
      "You can learn frontend development, backend development, UI/UX design, or branding. Trainees choose their focus and build a real project as part of the program.",
  },
  {
    question: "How long is the Adov Academy program?",
    answer:
      "The program runs for five weeks, combining classes with a hands-on team project.",
  },
];

const FaqSection = () => {
  // First item open by default, like the reference design.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="bg-[#FFFFF0]   mt-4 md:p-12  px-3 ">
      <div className="max-w-7xl mx-auto ">
        {/* Header */}
        <div className="flex flex-col items-start mb-4">
          <span className=" font-bold tracking-wide text-[#031F4F] mb-2">
            FAQ
          </span>
          
        </div>

        {/* Accordion list */}
        <div>
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className={`py-6 ${
                  index !== faqs.length - 1 ? "border-b border-black/10" : ""
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-start justify-between gap-4 text-left"
                >
                  <span className="text-[17px] sm:text-[18px] font-semibold text-[#031F4F] leading-snug">
                    {item.question}
                  </span>
                  <span className="shrink-0 mt-1 text-[#031F4F]">
                    {isOpen ? (
                      <Minus className="w-4 h-4" strokeWidth={2} />
                    ) : (
                      <Plus className="w-4 h-4" strokeWidth={2} />
                    )}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-3"
                      : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
                  style={{ display: "grid" }}
                >
                  <div className="overflow-hidden">
                    <p className="text-[14px] text-[#7B899A] leading-relaxed pr-6">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
