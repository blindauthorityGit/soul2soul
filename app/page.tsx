import {
  AboutSection,
  ContactSection,
  HeroSection,
  ProcessSection,
  ServicesIntroSection,
  ServicesListSection,
  SiteFooter,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <main className="flex-1">
        <HeroSection />
        <ServicesIntroSection />
        <ServicesListSection />
        <ProcessSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
