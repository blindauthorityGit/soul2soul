"use client";

import { motion } from "framer-motion";

const items = [
  {
    number: "1",
    title: "VERSTEHEN",
    text: "Wir hören zu und erfassen dein Gesamtbild.",
  },
  {
    number: "2",
    title: "KLARHEIT SCHAFFEN",
    text: "Wir hören zu und erfassen dein Gesamtbild.",
  },
  {
    number: "3",
    title: "SICHTBAR MACHEN",
    text: "Wir hören zu und erfassen dein Gesamtbild.",
  },
  {
    number: "4",
    title: "BEGLEITEN",
    text: "Wir hören zu und erfassen dein Gesamtbild.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function ProcessSection() {
  return (
    <section className="py-20 md:py-28 xl:py-32">
      <motion.div
        className="mx-auto grid max-w-[1400px] grid-cols-1 gap-y-14 px-6 md:grid-cols-2 md:gap-x-20 md:gap-y-24 md:px-10 xl:px-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {items.map((item) => (
          <motion.div
            key={item.number}
            variants={itemVariants}
            className="grid grid-cols-[80px_1fr] items-start gap-x-5 md:grid-cols-[110px_1fr] md:gap-x-8"
          >
            {/* NUMBER */}
            <div className="select-none text-[90px] font-semibold leading-none tracking-[-0.04em] text-[#2f6f73]/10 md:text-[130px] xl:text-[150px]">
              {item.number}
            </div>

            {/* CONTENT */}
            <div className="pt-2 md:pt-4">
              <h3 className="text-[26px] !font-sans font-semibold uppercase leading-[1.0] tracking-[-0.02em] text-[#2f6f73] md:text-[32px] xl:text-[36px]">
                {item.title}
              </h3>

              <p className="mt-2 max-w-[360px] text-[20px] leading-[1.35] tracking-[-0.01em] text-[#2f6f73]/70 md:text-[22px] xl:text-[24px]">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}