import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { getSiteMeta } from "@/lib/content";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteMeta();
  return {
    title: {
      default: site.title,
      template: `%s | ${site.title}`,
    },
    description: site.description,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const site = await getSiteMeta();

  return (
    <html lang="en" className={`${dmSans.variable} ${cormorantGaramond.variable}`}>
      <body>
        <div className="min-h-screen">{children}</div>
        <div className="sr-only" aria-hidden="true">
          {site.title}
        </div>
      </body>
    </html>
  );
}
