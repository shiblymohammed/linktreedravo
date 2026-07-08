import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // ── SEO: Update brand name and description below ──
  title: "Dravohome | Luxury Furniture for Modern Living",
  description:
    "Dravohome crafts timeless, premium furniture for modern living spaces. Explore our collection of luxury handcrafted pieces.",
  keywords: "luxury furniture, premium furniture, Dravohome, handcrafted furniture, modern interior design",
  openGraph: {
    title: "Dravohome | Luxury Furniture",
    description: "Crafting Timeless Furniture for Modern Living.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dravohome | Luxury Furniture",
    description: "Crafting Timeless Furniture for Modern Living.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
