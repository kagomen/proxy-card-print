import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
