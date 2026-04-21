import type { Metadata } from "next";
import MenuBar from "@/components/menu";
import "./globals.css";

export const metadata: Metadata = {
  title: "soul2soul studio",
  description:
    "Minimalistische, strategische Marken- und Designbegleitung für Klarheit, Präsenz und nachhaltige Wirkung.",
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