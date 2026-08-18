

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
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#FFFFF0] px-6 py-16 md:px-12 ">
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <p className="mb-6 font-bold text-xl tracking-wide text-[#06265F]">
          FAQs
        </p>
        

        <div className="border-t border-[#D9D9D0]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question} className="border-b border-[#D9D9D0]">
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-lg font-medium text-[#111111] md:text-xl">
                    {faq.question}
                  </span>

                  <span className="flex-shrink-0 text-2xl font-light text-[#777777]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="pb-6 pr-12">
                    <p className="text-sm leading-relaxed font-light text-[#858585] md:text-md">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}