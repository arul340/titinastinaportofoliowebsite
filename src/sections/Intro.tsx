"use client";
import { useInView } from "motion/react";
import { FC, useEffect, useRef } from "react";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";

const Intro: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scope, entranceAnimation } = useTextRevealAnimation();
  const inView = useInView(scope, {
    once: true,
  });

  useEffect(() => {
    if (inView) {
      entranceAnimation();
    }
  }, [inView, entranceAnimation]);

  return (
    <section
      className="py-24 mt-12 md:py-32 md:mt-16 lg:py-40 lg:mt-20"
      ref={sectionRef}
      id="intro"
    >
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-7xl " ref={scope}>
          Helping learners master English with expert guidance, engaging
          lessons, and practical skills for confident communication, reading and
          speaking.
        </h2>
      </div>
    </section>
  );
};

export default Intro;
