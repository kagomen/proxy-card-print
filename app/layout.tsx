import type { Metadata } from "next";
import "./globals.css";
import { Inter, M_PLUS_2 } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mplus2 = M_PLUS_2({
  preload: false,
  variable: "--font-mplus2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Proxy Card Print",
  description: "Proxy Card Print",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={cn(inter.variable, mplus2.variable, "font-sans")}
    >
      <body>{children}</body>
    </html>
  );
}
