import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteData } from '../config'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: SiteData.title,
  description: SiteData.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
