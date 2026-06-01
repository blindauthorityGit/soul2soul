"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function AboutUsSection() {
  return (
    <section className="relative overflow-hidden" id="ueber-uns">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 xl:px-16">
        <div className="grid items-center gap-12 py-16 md:min-h-[760px] md:grid-cols-[0.95fr_1.05fr] md:gap-14 md:py-24 xl:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease }}
            className="relative z-10 flex h-full flex-col justify-center xl:max-w-[620px]"
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
              className="max-w-[10.5ch] font-serif text-[clamp(3rem,6vw,6.5rem)] uppercase leading-[0.9] tracking-[-0.03em] text-[#3d7d80] sm:text-[64px] md:text-[82px] xl:text-[96px]"
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
                Mit über 13 Jahren Erfahrung im Design- und Agenturbereich
                verbinden wir strategisches Denken mit persönlicher Begleitung
                — damit professionelle Gestaltung auch für kleinere Unternehmen
                leistbar bleibt.
              </p>
              <p className="mt-5 text-[18px] font-[350] leading-[1.45] tracking-[0.01em] text-[#2B2B2B] md:text-[23px] md:leading-[1.43]">
                Dabei unterstützen wir nicht nur im Bereich Design und
                Sichtbarkeit, sondern begleiten auch Neuselbstständige auf
                ihrem Weg in die Selbstständigkeit — mit persönlicher Beratung,
                Klarheit im Aufbau ihres Außenauftritts und einem bewussten
                Blick auf Ressourcenmanagement, Struktur und nachhaltige
                Umsetzung.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.05, delay: 0.12, ease }}
            className="relative flex items-center justify-center md:justify-end"
          >
            <div className="relative aspect-[3/4] w-full max-w-[560px] overflow-hidden">
              <Image
                src="/about-us.jpg"
                alt="Denise Ritschel und Sandra Löbl von Soul2Soul"
                width={1200}
                height={1600}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
