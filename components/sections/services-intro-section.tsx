import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Body, H2 } from "@/components/typography";
import { Reveal } from "@/components/ui/reveal";
import { siteContent } from "@/data/site-content";

export function ServicesIntroSection() {
  const { servicesIntro } = siteContent;

  return (
    <Section className="border-y border-border-subtle bg-surface-muted/60">
      <Container>
        <Reveal className="grid gap-8 md:grid-cols-12 md:items-start">
          <H2 className="md:col-span-6">{servicesIntro.title}</H2>
          <Body className="md:col-span-6">{servicesIntro.body}</Body>
        </Reveal>
      </Container>
    </Section>
  );
}
