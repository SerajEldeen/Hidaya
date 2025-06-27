import type { Metadata } from "next";
import "./globals.css";
import { Cairo } from "next/font/google";
import TopUpButton from "@/hooks/TopUp";
import ShowNavBar from "@/components/ShowNavBar";
import CursorTrail from "@/hooks/CursorTrail";
export const metadata: Metadata = {
  title: "Hidaya",
  description:
    "Hidaya is a modern, user-friendly website designed with a noble intention to aware the people about the teaching of Islam ",
  icons: "/favicon.ico",
};

const cairo = Cairo({ subsets: ["arabic"], weight: ["400", "700"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.className}>
      <body>
        <CursorTrail />
        <ShowNavBar />
        {children}
        <TopUpButton />
      </body>
    </html>
  );
}
