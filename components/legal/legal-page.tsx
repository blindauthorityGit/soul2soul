import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";
import { SiteFooter } from "@/components/sections";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function LegalPage({ eyebrow, title, children }: LegalPageProps) {
  return (
    <>
      <main className="py-16 md:py-24">
        <Container>
          <article className="mx-auto max-w-[900px]">
            <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#5d8f95]">
              {eyebrow}
            </p>
            <h1 className="mt-4 font-heading text-[clamp(3.3rem,7vw,6.5rem)] leading-[0.9] tracking-[-0.03em] text-[#2f7c83]">
              {title}
            </h1>
            <div className="legal-content mt-12">{children}</div>
          </article>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
