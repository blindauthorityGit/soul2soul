"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { ArrowRight, X } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function ServicesIntroSection() {
  const [open, setOpen] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // spürbarer Parallax-Wert
  const rawImageY = useTransform(scrollYProgress, [0, 1], [90, -90]);

  // macht die Bewegung smoother
  const imageY = useSpring(rawImageY, {
    stiffness: 90,
    damping: 22,
    mass: 0.2,
  });

  return (
    <>
      <section
        ref={sectionRef}
        className="relative overflow-hidden py-20 md:py-28 xl:py-32"
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 xl:px-16">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1fr] lg:gap-16 xl:gap-20">
            {/* Bild */}
            <motion.div
              initial={{ opacity: 0, y: 36, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.95, ease }}
              className="relative"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <motion.div
                  style={{ y: imageY }}
                  className="absolute inset-[-8%] will-change-transform"
                >
                  <Image
                    src="/first.jpg"
                    alt="Designprozess und Farbgestaltung"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.08, ease }}
              className="max-w-[760px]"
            >
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.12, ease }}
                className="mb-5 text-[13px] font-medium uppercase tracking-[0.18em] text-[#5d8f95] md:text-[15px]"
              >
                Leistungen
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, delay: 0.16, ease }}
                className="font-serif text-[clamp(3rem,6vw,6.5rem)] leading-[0.9] tracking-[-0.03em] text-[#2f7c83]"
              >
                Verbindung.
                <br />
                Wirkung. <span className="text-[#e5a38d]">Präsenz.</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.24, ease }}
                className="mt-8 max-w-[640px]"
              >
                <p className="text-[18px] font-[350] leading-[1.45] tracking-[0.01em] text-[#2B2B2B] md:text-[23px] md:leading-[1.43]">
                  Wir arbeiten nicht für dich, wir denken mit dir. Statt
                  klassischer Agenturarbeit begleiten wir dich dabei, Klarheit
                  zu gewinnen, deine Marke zu strukturieren und eine Präsenz
                  aufzubauen, die wirklich wirkt. Unser Ziel ist es,
                  professionelle und zugleich leistbare Designlösungen
                  anzubieten – besonders für Unternehmen mit begrenzten
                  Ressourcen und einem laufenden Bedarf an visueller
                  Kommunikation.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease }}
                className="mt-10"
              >
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center gap-4 bg-[#2f7c83] px-7 py-4 text-[15px] font-medium tracking-[0.08em] text-white transition duration-300 hover:bg-[#286a70]"
                >
                  <ArrowRight className="h-4 w-4" />
                  Termin vereinbaren
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 px-4">
          <div className="relative w-full max-w-[640px] bg-[#f7f5f1] p-8 shadow-2xl md:p-10">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center text-[#3f3a35] transition hover:bg-black/5"
              aria-label="Modal schließen"
            >
              <X className="h-5 w-5" />
            </button>

            <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.16em] text-[#5d8f95]">
              Platzhalter
            </p>

            <h3 className="font-serif text-3xl leading-tight text-[#2f7c83] md:text-4xl">
              Terminmodul folgt hier
            </h3>

            <p className="mt-5 text-[17px] font-[350] leading-[1.6] text-[#2B2B2B]">
              Dieses Modal ist vorerst nur als Platzhalter eingebaut. Hier kann
              später z. B. Calendly, ein Formular oder eine eigene
              Terminbuchungslogik rein.
            </p>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center bg-[#2f7c83] px-6 py-3 text-sm font-medium tracking-[0.08em] text-white transition hover:bg-[#286a70]"
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}