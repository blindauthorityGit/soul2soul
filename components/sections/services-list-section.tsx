"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const SERVICES = [
  {
    id: "01",
    title: "Social Media Betreuung",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "02",
    title: "Printdesign",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.",
  },
  {
    id: "03",
    title: "Merchandise & Werbemittel",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum.",
  },
  {
    id: "04",
    title: "Persönliche Beratung",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit libero, a pharetra augue.",
  },
];

const itemOffsets = [
  "md:pl-[6%] xl:pl-[8%]",
  "md:pl-[10%] xl:pl-[13%]",
  "md:pl-[14%] xl:pl-[18%]",
  "md:pl-[18%] xl:pl-[23%]",
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 36,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function ServicesListSection() {
  const [openId, setOpenId] = useState(null);

  const toggleItem = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-[#8A5A6B] text-[#F4F1EB]">
      <div className="mx-auto w-full max-w-[1920px] px-6 py-16 md:px-10 md:py-24 xl:px-16 xl:py-48">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.16 }}
          className="flex flex-col gap-8 md:gap-6 xl:gap-16"
        >
          {SERVICES.map((service, index) => {
            const isOpen = openId === service.id;

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                layout="position"
                className={index === 0 ? "" : itemOffsets[index]}
              >
                <div className="grid grid-cols-[34px_minmax(0,1fr)_24px] items-start gap-x-3 sm:grid-cols-[40px_minmax(0,1fr)_28px] sm:gap-x-4 md:grid-cols-[52px_minmax(0,1fr)_34px] md:gap-x-5 xl:grid-cols-[60px_minmax(0,1fr)_38px] xl:gap-x-7">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-[0.38em] flex h-7 w-7 items-center justify-center rounded-full border border-[#F4F1EB]/70 text-[11px] leading-none text-[#F4F1EB]/90 sm:h-8 sm:w-8 sm:text-[12px] md:h-10 md:w-10 md:text-[15px]"
                  >
                    {index + 1}
                  </motion.div>

                  <button
                    type="button"
                    onClick={() => toggleItem(service.id)}
                    className="group block w-full text-left"
                  >
                    <motion.h3
                      layout="position"
                      className="
                        font-heading font-normal tracking-[0.01em] text-[#F4F1EB]
                        text-[clamp(2.8rem,11vw,4.2rem)]
                        leading-[0.9]
                        sm:text-[clamp(3.2rem,9vw,4.9rem)]
                        md:max-w-none
                        md:text-[clamp(3.8rem,5.1vw,5.7rem)]
                        md:leading-[0.92]
                        xl:text-[clamp(4.2rem,4.6vw,6rem)]
                        xl:leading-[0.9]
                      "
                    >
                      {service.title}
                    </motion.h3>
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleItem(service.id)}
                    aria-label={isOpen ? "Inhalt schließen" : "Inhalt öffnen"}
                    className="mt-[0.34em] flex h-7 w-7 items-center justify-center text-[#F4F1EB]/78 transition-colors duration-300 hover:text-[#F4F1EB] sm:h-8 sm:w-8 md:h-10 md:w-10"
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" strokeWidth={1.4} />
                    ) : (
                      <Plus className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" strokeWidth={1.4} />
                    )}
                  </button>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: {
                            duration: 0.55,
                            ease: [0.22, 1, 0.36, 1],
                          },
                          opacity: {
                            duration: 0.32,
                            delay: 0.08,
                          },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: {
                            duration: 0.42,
                            ease: [0.4, 0, 0.2, 1],
                          },
                          opacity: {
                            duration: 0.18,
                          },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-[34px_minmax(0,1fr)_24px] gap-x-3 pt-4 sm:grid-cols-[40px_minmax(0,1fr)_28px] sm:gap-x-4 sm:pt-5 md:grid-cols-[52px_minmax(0,1fr)_34px] md:gap-x-5 md:pt-6 xl:grid-cols-[60px_minmax(0,1fr)_38px] xl:gap-x-7 xl:pt-7">
                        <div />
                        <motion.div
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -6, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="max-w-[720px] md:max-w-[760px]"
                        >
                          <p className="text-[14px] leading-relaxed text-[#F4F1EB]/82 sm:text-[15px] md:text-[16px] xl:text-[18px]">
                            {service.text}
                          </p>
                        </motion.div>
                        <div />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}