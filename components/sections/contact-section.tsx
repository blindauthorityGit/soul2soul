import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Body, H2 } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { siteContent } from "@/data/site-content";

export function ContactSection() {
  const { contact } = siteContent;

  return (
    <Section id="kontakt" className="bg-surface-muted">
      <Container>
        <Reveal className="space-y-6 text-center">
          <H2>{contact.title}</H2>
          <Body className="mx-auto max-w-2xl">{contact.body}</Body>
          <Button href="mailto:hallo@soul2soul.studio">{contact.cta}</Button>
        </Reveal>
      </Container>
    </Section>
  );
}
