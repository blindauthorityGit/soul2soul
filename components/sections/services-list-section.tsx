import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Body, H3 } from "@/components/typography";
import { Reveal } from "@/components/ui/reveal";
import { siteContent } from "@/data/site-content";

export function ServicesListSection() {
  return (
    <Section id="leistungen">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          {siteContent.services.map((service, index) => (
            <Reveal
              className="rounded-2xl border border-border-subtle bg-surface p-8"
              delay={index * 0.08}
              key={service.title}
            >
              <H3 className="mb-4">{service.title}</H3>
              <Body>{service.text}</Body>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
