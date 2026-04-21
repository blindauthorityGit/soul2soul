import { siteContent } from "@/data/site-content";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Display, Eyebrow, Lead } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function HeroSection() {
  const { hero } = siteContent;

  return (
    <Section className="pt-28 sm:pt-32">
      <Container>
        <Reveal className="max-w-4xl space-y-8">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <Display>{hero.title}</Display>
          <Lead className="max-w-2xl">{hero.lead}</Lead>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#kontakt">{hero.ctaPrimary}</Button>
            <Button href="#leistungen" variant="secondary">
              {hero.ctaSecondary}
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
