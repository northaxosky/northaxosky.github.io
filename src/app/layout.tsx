import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import { MotionConfig } from "motion/react";
import { ScrollProgress } from "@/components/scroll-progress";
import { Background } from "@/components/background/background";
import { BackgroundProvider } from "@/components/background/background-context";
import { BackgroundToggle } from "@/components/background/background-toggle";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jb-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const description =
  "Kuzey Gök — software engineer at Microsoft. Rust systems & tooling, machine learning from scratch, a C++ game engine, and Fallout 4 reverse-engineering.";

export const metadata: Metadata = {
  metadataBase: new URL("https://northaxosky.github.io"),
  title: "Kuzey Gök — Software Engineer",
  description,
  openGraph: {
    title: "Kuzey Gök — Software Engineer",
    description,
    type: "website",
    url: "https://northaxosky.github.io",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Kuzey Gök — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kuzey Gök — Software Engineer",
    description,
    images: ["/og.png"],
  },
  icons: {
    icon: "/icon.svg",
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
    <html
      lang="en"
      className={`${archivo.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-bg text-ink font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-accent focus:px-4 focus:py-2 focus:font-medium focus:text-bg"
        >
          Skip to content
        </a>
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
        <div className="grid-bg" aria-hidden="true" />
        <BackgroundProvider>
          <Background />
          <div className="accent-seam" aria-hidden="true" />
          <MotionConfig reducedMotion="user">
            <ScrollProgress />
            <div className="relative z-10">{children}</div>
          </MotionConfig>
          <BackgroundToggle />
        </BackgroundProvider>
      </body>
    </html>
  );
}
