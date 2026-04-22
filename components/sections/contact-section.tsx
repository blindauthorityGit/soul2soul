"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import ContactForm from "@/components/forms/ContactForms";
const ease = [0.22, 1, 0.36, 1] as const;

export function ContactSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-[#ffffff] py-24 md:py-32 xl:py-40">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center px-6 text-center md:px-10 xl:px-16">
          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, ease }}
            className="font-serif text-[clamp(3rem,6vw,6.5rem)] leading-[0.9] tracking-[-0.03em] text-[#2f7c83]"
          >
            KONTAKT
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 0.8, delay: 0.08, ease }}
            className="mt-8 max-w-[520px] text-[15px] font-[350] leading-[1.9] tracking-[0.03em] text-[#3f3a35] md:text-[17px]"
          >
            Wenn du spürst, dass da mehr möglich ist –
            <br className="hidden sm:block" />
            dann lass uns sprechen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.16, ease }}
            className="mt-10"
          >
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-4 bg-[#2f7c83] px-8 py-4 text-[14px] font-medium tracking-[0.08em] text-white transition duration-300 hover:bg-[#286a70] md:px-10"
            >
              <ArrowRight className="h-4 w-4" />
              Termin vereinbaren
            </button>
          </motion.div>
        </div>
      </section>

<AnimatePresence>
  {open && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22, ease }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 px-4"
      onClick={() => setOpen(false)}
    >
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.985 }}
        transition={{ duration: 0.32, ease }}
        className="relative w-full max-w-[720px] bg-[#f7f5f1] p-8 shadow-2xl md:p-12"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center text-[#3f3a35] hover:bg-black/5"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <p className="mb-4 text-[12px] uppercase tracking-[0.16em] text-[#5d8f95]">
          Kontakt
        </p>

        <h3 className="font-serif text-[clamp(2.2rem,3vw,3rem)] leading-[1.05] text-[#2f7c83]">
          Lass uns sprechen
        </h3>

        <p className="mt-4 max-w-[560px] text-[16px] leading-[1.6] text-[#2B2B2B]">
          Schreib uns kurz, worum es geht. Wir melden uns persönlich bei dir zurück.
        </p>

        {/* FORM */}
        <ContactForm
          onSuccess={() => {
            setTimeout(() => setOpen(false), 1200);
          }}
        />
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
}