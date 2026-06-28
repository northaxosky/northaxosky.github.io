import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
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
  },
  twitter: {
    card: "summary",
    title: "Kuzey Gök — Software Engineer",
    description,
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
        <div className="grid-bg" aria-hidden="true" />
        <div className="accent-seam" aria-hidden="true" />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
