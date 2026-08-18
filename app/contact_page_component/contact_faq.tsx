"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How do I contact Adov?",
    answer:
      "You can contact Adov by email at contactadov@gmail.com or by filling out the contact form on this page. We respond as soon as possible.",
  },
  {
    question: "How can I get a quote for a website?",
    answer:
      "Send us a message through the contact form or email contactadov@gmail.com with details about what you need, and we will get back to you with a quote.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#FFFFF0]  px-6 py-16 md:px-12 ">
      <div className="mx-auto max-w-7xl md:px-19">

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