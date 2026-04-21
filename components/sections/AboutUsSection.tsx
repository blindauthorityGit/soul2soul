"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function AboutUsSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 xl:px-16">
        <div className="grid min-h-[720px] items-end gap-0 md:min-h-[760px] md:grid-cols-[0.95fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease }}
            className="relative z-10 flex h-full flex-col justify-center py-16 md:py-24 xl:max-w-[620px]"
          >
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.05, ease }}
              className="mb-5 text-[11px] uppercase tracking-[0.18em] text-[#4e8a8c] md:mb-7 md:text-[12px]"
            >
              Über uns
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.9, delay: 0.08, ease }}
              className="max-w-[10.5ch] font-serif text-[52px] uppercase leading-[0.9] tracking-[-0.03em] text-[#3d7d80] sm:text-[64px] md:text-[82px] xl:text-[96px]"
            >
              Wir hören
              {" "}
              zu, bevor wir
              {" "}
              gestalten.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.85, delay: 0.16, ease }}
              className="mt-8 max-w-[520px] md:mt-10"
            >
              <p className="text-[18px] font-[350] leading-[1.45] tracking-[0.01em] text-[#2B2B2B] md:text-[23px] md:leading-[1.43]">
                Wir arbeiten nicht für dich, wir denken mit dir.
                Statt klassischer Agenturarbeit begleiten wir
                dich dabei, Klarheit zu gewinnen, deine Marke
                zu strukturieren und eine Präsenz aufzubauen,
                die nachhaltig wirkt.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.05, delay: 0.12, ease }}
            className="relative flex items-end justify-center self-end md:min-h-[720px] md:justify-end"
          >
            <div className="relative w-full max-w-[760px] md:max-w-[860px]">
              <Image
                src="/leidln.png"
                alt="Über uns"
                width={1200}
                height={1400}
                priority
                className="block h-auto w-full object-contain object-bottom"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}