"use client";
import { AnimatePresence } from "motion/react";
import { FC, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const faqs = [
  {
    question: "How long does it take to see improvement in my English skills?",
    answer:
      "It depends on your current level, the amount of practice, and your dedication. Regular lessons and consistent practice can lead to noticeable improvement within a few months.",
  },
  {
    question: "What is your teaching methodology?",
    answer:
      "I use a communicative approach, focusing on real-life situations, interactive activities, and personalized feedback to help you improve your speaking, listening, reading, and writing skills.",
  },
  {
    question: "Do you offer lessons to students from different countries?",
    answer:
      "Yes, I teach students from all over the world and can adjust lesson times to accommodate different time zones.",
  },
  {
    question: "What levels of English do you teach?",
    answer:
      "I teach all levels, from beginner to advanced, and can tailor lessons to meet your specific needs and goals.",
  },
  {
    question: "Do you provide materials for the lessons?",
    answer:
      "Yes, I provide all necessary materials, including textbooks, worksheets, and online resources, to support your learning.",
  },
  {
    question: "Can you help with exam preparation, like IELTS or TOEFL?",
    answer:
      "Absolutely, I have extensive experience preparing students for various English proficiency exams and can provide targeted practice and strategies to help you succeed.",
  },
];

const FAQs: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section className="section" id="faqs">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">FAQs</h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {faqs.map(({ question, answer }, faqIndex) => (
            <div
              key={question}
              className="border-t border-stone-400 border-dotted py-6 md:py-8 lg:py-10 last:border-b relative isolate group/faq"
              onClick={() => {
                if (faqIndex === selectedIndex) {
                  setSelectedIndex(null);
                } else {
                  setSelectedIndex(faqIndex);
                }
              }}
            >
              <div
                className={twMerge(
                  "absolute h-0 w-full bottom-0 left-0 bg-stone-300 -z-10 group-hover/faq:h-full transition-all duration-700  ",
                  faqIndex === selectedIndex && "h-full"
                )}
              ></div>
              <div
                className={twMerge(
                  "flex items-center justify-between gap-4 transition-all duration-700 group-hover/faq:lg:px-8",
                  faqIndex === selectedIndex && "lg:px-8"
                )}
              >
                <div className="text-2xl md:text-3xl lg:text-4xl">
                  {question}
                </div>
                <div
                  className={twMerge(
                    "inline-flex items-center justify-center size-11 border border-stone-400 rounded-full shrink-0 transition-all duration-300",
                    faqIndex === selectedIndex && "rotate-45"
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
              </div>
              <AnimatePresence>
                {faqIndex == selectedIndex && (
                  <motion.div
                    className="overflow-hidden  lg:px-8"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                  >
                    <p className="text-xl md:text-2xl lg:text-3xl mt-4">
                      {answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
