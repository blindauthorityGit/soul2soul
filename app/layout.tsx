import type { Metadata } from "next";
import { sansFont, serifFont } from "@/lib/fonts";
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
    <html lang="de" className={`${sansFont.variable} ${serifFont.variable} h-full antialiased`}>
      <body className="min-h-full bg-surface text-text-default">{children}</body>
    </html>
  );
}
