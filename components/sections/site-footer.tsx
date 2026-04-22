import Link from "next/link";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { Container } from "@/components/layout/container";
import { siteContent } from "@/data/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-[#f5f4f1] py-8 md:py-10">
      <Container>
<div className="grid grid-cols-1 items-center gap-6 text-center md:grid-cols-3 md:text-left">
  
  {/* Left */}
  <div className="text-[15px] leading-none text-black/75 md:justify-self-start">
    {siteContent.footer}
  </div>

  {/* Center */}
  <div className="flex items-center justify-center gap-6">
    <Link
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="text-[#3e787d] transition-opacity duration-200 hover:opacity-70"
    >
      <FaInstagram className="h-11 w-11 md:h-12 md:w-12" />
    </Link>

    <Link
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="text-[#3e787d] transition-opacity duration-200 hover:opacity-70"
    >
      <FaFacebookF className="h-10 w-10 md:h-11 md:w-11" />
    </Link>
  </div>

  {/* Right */}
  <div className="flex items-center justify-center gap-3 text-[15px] leading-none text-black/75 md:justify-self-end md:justify-end">
    <Link href="/impressum" className="hover:opacity-70">
      Impressum
    </Link>
    <span className="text-black/35">|</span>
    <Link href="/datenschutz" className="hover:opacity-70">
      Datenschutz
    </Link>
  </div>

</div>
      </Container>
    </footer>
  );
}