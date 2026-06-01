import type { Metadata } from "next";
import MenuBar from "@/components/menu";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.soul2soul.at"),
  title: {
    default: "Soul2Soul Designstudio | Klarheit. Wirkung. Sichtbarkeit.",
    template: "%s | Soul2Soul Designstudio",
  },
  description:
    "Soul2Soul verbindet Strategie und Design zu einem klaren Außenauftritt: Social Media Design, Websites, Printdesign und persönliche Beratung.",
  keywords: [
    "Soul2Soul Designstudio",
    "Grafikdesign",
    "Webdesign",
    "Social Media Design",
    "Printdesign",
    "Markenauftritt",
    "Wiener Neustadt",
    "Kirchschlag",
  ],
  authors: [{ name: "Soul2Soul Designstudio" }],
  creator: "Soul2Soul Designstudio",
  publisher: "Soul2Soul Designstudio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_AT",
    url: "/",
    siteName: "Soul2Soul Designstudio",
    title: "Soul2Soul Designstudio | Klarheit. Wirkung. Sichtbarkeit.",
    description:
      "Wir verbinden Strategie und Design zu einem Außenauftritt, der Vertrauen schafft.",
  },
  twitter: {
    card: "summary",
    title: "Soul2Soul Designstudio | Klarheit. Wirkung. Sichtbarkeit.",
    description:
      "Wir verbinden Strategie und Design zu einem Außenauftritt, der Vertrauen schafft.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full antialiased">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ygq0hgz.css" />
      </head>

      <body className="relative min-h-full text-text-default">
        <div
          className="fixed inset-0 -z-20 bg-blend-luminosity"
          style={{
            backgroundImage: "url('./bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="fixed inset-0 -z-10 bg-white/10" />

        <div className="relative z-0 min-h-full">
          <MenuBar />
          {children}
        </div>
      </body>
    </html>
  );
}
