import type { Metadata } from "next";
import { DM_Sans, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-agency-heading",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-agency-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sharpe Systems: Marketing Systems For Local Businesses",
  description: "Simple marketing systems for local businesses at $297/mo. No contracts. No BS.",
  openGraph: {
    title: "Sharpe Systems: Marketing Systems For Local Businesses",
    description: "Simple marketing systems for local businesses at $297/mo. No contracts. No BS.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharpe Systems: Marketing Systems For Local Businesses",
    description: "Simple marketing systems for local businesses at $297/mo. No contracts. No BS.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${sourceSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
