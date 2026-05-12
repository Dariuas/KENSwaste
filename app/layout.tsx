import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TX BM Rentals and Septic Pump | Portable Toilet & Septic Services | Central Texas",
  description:
    "Reliable porta potty rentals, holding tank rentals, hand washing stations, and septic pump-out services in Buda, Kyle, San Marcos, and the greater Austin area.",
  keywords:
    "porta potty rental, portable toilet rental, septic pump out, holding tank, RV pump out, Buda TX, Kyle TX, San Marcos TX, Austin TX",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://kenswaste.com"
  ),
  openGraph: {
    title: "TX BM Rentals and Septic Pump | Portable Toilet & Septic Services",
    description:
      "Reliable porta potty and septic services across Central Texas. Book online today.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
