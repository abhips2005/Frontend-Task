import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/lib/providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Beyond UI - Modern Blog",
  description: "A modern blog application showcasing the latest in UI/UX design, SaaS solutions, and technology trends.",
  keywords: ["blog", "UI", "UX", "SaaS", "technology", "design"],
  authors: [{ name: "Beyond UI Team" }],
  openGraph: {
    title: "Beyond UI - Modern Blog",
    description: "A modern blog application showcasing the latest in UI/UX design, SaaS solutions, and technology trends.",
    type: "website",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-inter antialiased bg-gray-50" suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
