import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jb-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://northaxosky.github.io"),
  title: "Kuzey Gök — Software Development Engineer",
  description:
    "Portfolio of Kuzey Gök — SDE at Microsoft. Web apps, dev tools, and game mods.",
  openGraph: {
    title: "Kuzey Gök — Software Development Engineer",
    description:
      "Portfolio of Kuzey Gök — SDE at Microsoft. Web apps, dev tools, and game mods.",
    type: "website",
    url: "https://northaxosky.github.io",
  },
  twitter: {
    card: "summary",
    title: "Kuzey Gök — Software Development Engineer",
    description:
      "Portfolio of Kuzey Gök — SDE at Microsoft. Web apps, dev tools, and game mods.",
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
      className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground font-sans">
        <div className="bg-orbs" aria-hidden="true" />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
