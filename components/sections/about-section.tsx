import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Body, H2 } from "@/components/typography";
import { Reveal } from "@/components/ui/reveal";
import { siteContent } from "@/data/site-content";

export function AboutSection() {
  const { about } = siteContent;

  return (
    <Section>
      <Container>
        <Reveal className="grid gap-8 md:grid-cols-12">
          <H2 className="md:col-span-5">{about.title}</H2>
          <Body className="md:col-span-7">{about.body}</Body>
        </Reveal>
      </Container>
    </Section>
  );
}
