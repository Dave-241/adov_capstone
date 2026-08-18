"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What services does Adov offer?",
    answer:
      "Adov offers three core services: full website design and development, UI/UX design, and branding. Website development is our flagship service and covers both frontend and backend.",
  },
  {
    question: "Can Adov design a brand and build the website too?",
    answer:
      "Yes. Adov can handle your branding and your website together, so your identity and your site stay consistent and professional from start to finish.",
  },
  {
    question: "How much does a website from Adov cost?",
    answer:
      "The cost depends on the size and features of your website. Contact us with your requirements and we will provide a clear quote.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#FFFFF0] px-6 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <p className="mb-6 font-bold text-xl uppercase tracking-wide text-[#06265F]">
          FAQ
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