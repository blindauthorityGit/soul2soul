import { Container } from "@/components/layout/container";
import { Small } from "@/components/typography";
import { siteContent } from "@/data/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border-subtle py-10">
      <Container>
        <Small>{siteContent.footer}</Small>
      </Container>
    </footer>
  );
}
