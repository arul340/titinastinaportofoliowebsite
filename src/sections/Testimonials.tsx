"use client";
import { FC, useRef, useState } from "react";
import image1 from "@/assets/images/testimonial-1.jpg";
import image2 from "@/assets/images/testimonial-2.jpg";
import image3 from "@/assets/images/testimonial-3.jpg";
import image4 from "@/assets/images/testimonial-4.jpg";
import image5 from "@/assets/images/testimonial-5.jpg";
import image6 from "@/assets/images/testimonial-6.jpg";
import { useScroll, motion, useTransform, AnimatePresence } from "motion/react";
import Testimonial from "@/components/Testimonial";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const testimonials = [
  {
    name: "Yeni Havila Saraswati",
    company: "Pixel Perfect",
    role: "Flight Attendant and Fashion Designer",
    quote:
      "Miss Titin is a very kind and skilled teacher. She always helps me learn English easily. My English has improved, thanks to Miss Titin.",
    image: image1,
    imagePositionY: 0.1,
  },
  {
    name: "I’m Azka Khafiyya",
    company: "LSPR Communication and Business Institute",
    role: "Student",
    quote:
      "Lessons with Miss Titin are something I always look forward to. The tutor really helped me to improve my English skills by knowing my weaknesses accurately.",
    image: image2,
    imagePositionY: 0.1,
  },
  {
    name: "Hannania Khairani Sethya",
    company: "SMA Islam Al Azhar 4",
    role: "Student",
    quote:
      "Learning with Miss Titin has been really fun and helpful for me, before we actually start learning the material, we usually chat about random topics and it's really helps to improve my vocabulary and speaking skills. ",
    image: image3,
    imagePositionY: 0.1,
  },
  {
    name: "Fakhri Al-irsyad Hartana",
    company: "SMP IA 31 Al Azhar Summarecon Bekasi",
    role: "Student",
    quote:
      "Learning with Miss Titin is fun and enjoyable because she can adjust her teaching methods to suit me. She also often includes motivational words or random topics during lessons, which makes me more confident in speaking English in public. ",
    image: image4,
    imagePositionY: 0.2,
  },
  {
    name: "Diaz Bela",
    company: "Pixel Perfect",
    role: "Content Specialist",
    quote:
      "Learning with Miss Titin is fun and enjoyable because she can adjust her teaching methods to suit me. She also often includes motivational words or random topics during lessons, which makes me more confident in speaking English in public. ",
    image: image5,
    imagePositionY: 0.1,
  },
  {
    name: "Nila Khasanah",
    company: "BUMN Indonesia",
    role: "Staff Teknik",
    quote:
      "I have been learning with Learning Nexus for two years, and still going on. I am so grateful to meet her. The tutor always talks about the syllabus at the first meeting, and we plan target learning. ",
    image: image6,
    imagePositionY: 0.1,
  },
];

const Testimonials: FC = () => {
  const titleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end end"],
  });

  const transformTop = useTransform(scrollYProgress, [0, 1], ["0", "15%"]);
  const transformBottom = useTransform(scrollYProgress, [0, 1], ["0", "-15%"]);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const handleClickPrev = () => {
    setTestimonialIndex((curr) => {
      if (curr === 0) {
        return testimonials.length - 1;
      }
      return curr - 1;
    });
  };

  const handleClickNext = () => {
    setTestimonialIndex((curr) => {
      if (curr == testimonials.length - 1) return 0;
      return curr + 1;
    });
  };
  return (
    <section className="section" id="testimonials">
      <h2
        className="text-4xl md:text-7xl lg:text-8xl flex flex-col overflow-hidden"
        ref={titleRef}
      >
        <motion.span
          className="whitespace-nowrap"
          style={{
            x: transformTop,
          }}
        >
          Some nice words from my past clients
        </motion.span>
        <motion.span
          className="whitespace-nowrap self-end text-orange-500"
          style={{
            x: transformBottom,
          }}
        >
          Some nice words from my past clients
        </motion.span>
      </h2>
      <div className="container">
        <div className="mt-20">
          <AnimatePresence mode="wait" initial={false}>
            {testimonials.map(
              ({ name, company, role, quote, image, imagePositionY }, index) =>
                index === testimonialIndex && (
                  <Testimonial
                    name={name}
                    company={company}
                    role={role}
                    quote={quote}
                    image={image}
                    imagePositionY={imagePositionY}
                    key={name}
                  />
                )
            )}
          </AnimatePresence>
        </div>
        <div className="flex gap-4 mt-6 lg:mt-10">
          <button
            className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full hover:bg-red-orange-500 hover:text-white hover:border-red-orange-500 transition-all duration-500"
            onClick={handleClickPrev}
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
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <button
            className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full hover:bg-red-orange-500 hover:text-white hover:border-red-orange-500 transition-all duration-500"
            onClick={handleClickNext}
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
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
