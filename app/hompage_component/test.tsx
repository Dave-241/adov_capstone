// // export default function ImageTest() {
// //   return (
// //     <div style={{ padding: 40 }}>
// //       <p>If you see the image below, the file is loading correctly:</p>
// //       <img
// //         src="/background_no_logo.png"
// //         alt="test"
// //         style={{ width: "100%", maxWidth: 600, border: "4px solid red" }}
// //       />
// //     </div>
// //   );
// // }

// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const faqs = [
  // {
  //   question: "What does Adov do?",
  //   answer:
  //     "Adov is a digital company that builds complete websites from start to finish and provides UI/UX design and branding services. Our flagship service is full website design and development, covering both the frontend and the backend.",
  // },
  // {
  //   question: "Does Adov build both the frontend and backend of a website?",
  //   answer:
  //     "Yes. Adov builds full websites end to end, handling both the frontend that visitors see and the backend that powers the site, so clients receive a complete, working website.",
  // },
  // {
  //   question: "What makes Adov different from other digital companies?",
  //   answer:
  //     "We focus on creating complete digital experiences rather than just individual parts of a website. From strategy and design to development and branding, we bring everything together to create a clear and consistent experience for your users.",
  // },
  // {
  //   question: "Does Adov provide UI/UX design?",
  //   answer:
  //     "Yes. We create clean, intuitive, and user-friendly interfaces that make digital products easy to understand and enjoyable to use. Our process can include user research, wireframes, prototypes, and polished final designs.",
  // },
  // {
  //   question: "Does Adov offer branding services?",
  //   answer:
  //     "Yes. We help businesses build a strong and consistent visual identity through color palettes, typography, visual direction, brand guidelines, and supporting brand assets.",
  // },
  // {
  //   question: "Can Adov redesign an existing website?",
  //   answer:
  //     "Yes. If you already have a website but want to improve its design, user experience, performance, or overall appearance, we can redesign and rebuild it to better fit your business and audience.",
  // },
// ];

// export default function ImageTest () {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="w-full bg-[#fffff0] px-5 py-16 sm:px-8 md:px-12 lg:px-20">
//       <div className="mx-auto max-w-[1133px]">

//         {/* FAQ heading */}
//         <p className="mb-5 text-sm font-medium text-black">
//           FAQ
//         </p>

//         {/* FAQ items */}
//         <div className="border-t border-black/20">

//           {faqs.map((faq, index) => {
//             const isOpen = openIndex === index;

//             return (
//               <div
//                 key={index}
//                 className="border-b border-black/20"
//               >

//                 {/* QUESTION ROW */}
//                 <button
//                   type="button"
//                   onClick={() => toggleFAQ(index)}
//                   className="flex w-full items-center justify-between gap-6 py-6 text-left"
//                   aria-expanded={isOpen}
//                 >
//                   <span className="text-[20px] font-semibold leading-tight tracking-tight text-black sm:text-[22px] md:text-[24px]">
//                     {faq.question}
//                   </span>

//                   {/* PLUS BUTTON */}
//                   <motion.span
//                     animate={{
//                       rotate: isOpen ? 45 : 0,
//                     }}
//                     transition={{
//                       duration: 0.25,
//                       ease: "easeInOut",
//                     }}
//                     className="flex h-7 w-7 shrink-0 items-center justify-center text-[28px] font-light leading-none text-gray-500"
//                   >
//                     +
//                   </motion.span>
//                 </button>

//                 {/* ANSWER */}
//                 <AnimatePresence initial={false}>
//                   {isOpen && (
//                     <motion.div
//                       initial={{
//                         height: 0,
//                         opacity: 0,
//                       }}
//                       animate={{
//                         height: "auto",
//                         opacity: 1,
//                       }}
//                       exit={{
//                         height: 0,
//                         opacity: 0,
//                       }}
//                       transition={{
//                         duration: 0.35,
//                         ease: [0.22, 1, 0.36, 1],
//                       }}
//                       className="overflow-hidden"
//                     >
//                       <p className="max-w-[1000px] pb-7 pr-8 text-[15px] leading-[1.5] text-gray-500 sm:text-[16px]">
//                         {faq.answer}
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>

//               </div>
//             );
//           })}

//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";

const faqs = [

    {
    question: "What does Adov do?",
    answer:
      "Adov is a digital company that builds complete websites from start to finish and provides UI/UX design and branding services. Our flagship service is full website design and development, covering both the frontend and the backend.",
  },
  {
    question: "Does Adov build both the frontend and backend of a website?",
    answer:
      "Yes. Adov builds full websites end to end, handling both the frontend that visitors see and the backend that powers the site, so clients receive a complete, working website.",
  },
  {
    question: "What makes Adov different from other digital companies?",
    answer:
      "We focus on creating complete digital experiences rather than just individual parts of a website. From strategy and design to development and branding, we bring everything together to create a clear and consistent experience for your users.",
  },
  {
    question: "Does Adov provide UI/UX design?",
    answer:
      "Yes. We create clean, intuitive, and user-friendly interfaces that make digital products easy to understand and enjoyable to use. Our process can include user research, wireframes, prototypes, and polished final designs.",
  },
  {
    question: "Does Adov offer branding services?",
    answer:
      "Yes. We help businesses build a strong and consistent visual identity through color palettes, typography, visual direction, brand guidelines, and supporting brand assets.",
  },
  {
    question: "Can Adov redesign an existing website?",
    answer:
      "Yes. If you already have a website but want to improve its design, user experience, performance, or overall appearance, we can redesign and rebuild it to better fit your business and audience.",
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
        <h3 className="mb-6 font-bold text-2xl tracking-wide text-[#06265F]">
          FAQs
        </h3>

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