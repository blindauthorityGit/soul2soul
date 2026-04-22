"use client";

import { motion } from "framer-motion";

export function SimpleIntroSection() {
  return (
    <section className="relative w-full overflow-hidden py-32 md:py-40" id="arbeitsweise">
      {/* subtle background texture / gradient */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.4]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,0,0,0.04),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,0,0,0.04),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* eyebrow */}
          <p className="mb-10 text-xs uppercase tracking-[0.25em] text-[#3f6f6c]">
            Arbeitsweise
          </p>

          {/* statement */}
          <h2 className="font-heading text-[30px] leading-[1.2] tracking-tight text-[#3f6f6c] sm:text-[36px] md:text-[40px] lg:text-[48px]">
            Du brauchst keine Inhalte. Du brauchst <span className="text-[#5FD1E3]">Klarheit.</span> 
        
            Ohne klare Richtung wird Content beliebig.
 
            Ohne Substanz bleibt Gestaltung nur Oberfläche.

            Wir helfen dir, eine<span className="text-[#5FD1E3]"> Marke aufzubauen</span>, 

            die stimmig ist – und funktioniert.
          </h2>
        </motion.div>
      </div>
    </section>
  );
}