

import {
  ContactSection,
  HeroSection,
  ProcessSection,
  ServicesIntroSection,
  ServicesListSection,
  SimpleIntroSection,
  AboutUsSection,
  SiteFooter,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <main className="flex-1">
        <HeroSection />
        <ServicesIntroSection />
        <ServicesListSection />
        <SimpleIntroSection />
        <ProcessSection />
        <AboutUsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
