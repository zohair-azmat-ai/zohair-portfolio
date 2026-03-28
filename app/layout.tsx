import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zohairazmat.dev"),
  title: {
    default: "Zohair Azmat — AI SaaS Engineer",
    template: "%s | Zohair Azmat",
  },
  description:
    "Portfolio of Zohair Azmat — AI SaaS Engineer building production-level intelligent systems with Next.js, FastAPI, PostgreSQL, and OpenAI.",
  keywords: [
    "AI Engineer",
    "SaaS Developer",
    "AI SaaS Builder",
    "Full-Stack Developer",
    "Next.js Developer",
    "FastAPI",
    "OpenAI",
    "Python",
    "TypeScript",
    "Zohair Azmat",
  ],
  authors: [{ name: "Zohair Azmat" }],
  creator: "Zohair Azmat",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Zohair Azmat — AI SaaS Engineer",
    description:
      "Building production-level intelligent systems — AI SaaS platforms, full-stack products, and scalable backend architecture.",
    siteName: "Zohair Azmat",
  },
  twitter: {
    card: "summary",
    title: "Zohair Azmat — AI SaaS Engineer",
    description:
      "Building production-level intelligent systems — AI SaaS platforms, full-stack products, and scalable backend architecture.",
    creator: "@zohairazmat",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full bg-zinc-50 font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
