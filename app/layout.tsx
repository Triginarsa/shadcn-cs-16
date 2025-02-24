import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const arialPixel = localFont({
  src: "/ArialPixel.ttf",
  variable: "--font-arial-pixel",
});

export const metadata: Metadata = {
  title: "CS 1.6 Shadcn Theme",
  description: "CS 1.6 Shadcn Theme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${arialPixel.className} antialiased`}>{children}</body>
    </html>
  );
}
