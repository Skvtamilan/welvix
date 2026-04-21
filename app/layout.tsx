import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Welvix | Premium Websites for Modern Brands",
  description:
    "Welvix is a startup web agency building premium, high-converting websites for businesses, startups, creators, and growing brands."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
