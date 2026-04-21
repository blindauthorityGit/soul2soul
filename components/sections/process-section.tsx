import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Body, H2, Small } from "@/components/typography";
import { Reveal } from "@/components/ui/reveal";
import { siteContent } from "@/data/site-content";

export function ProcessSection() {
  const { process } = siteContent;

  return (
    <Section className="bg-brand text-surface">
      <Container>
        <Reveal className="mb-10">
          <H2 className="text-surface">{process.title}</H2>
        </Reveal>
        <ol className="grid gap-8 md:grid-cols-3">
          {process.steps.map((step, index) => (
            <Reveal className="space-y-3 border-t border-surface/30 pt-5" delay={index * 0.08} key={step}>
              <Small className="text-surface/80">0{index + 1}</Small>
              <Body className="text-surface">{step}</Body>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
