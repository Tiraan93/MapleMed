import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://maplemedic.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "MapleMedic | Modern Clinics in Canada with UK-Trained Doctors",
  description:
    "MapleMedic is developing healthcare clinics in Canada and recruiting UK-qualified doctors and international medical professionals to support high-quality patient care.",
  keywords: [
    "MapleMedic",
    "Canada clinics",
    "UK-trained doctors",
    "medical careers Canada",
    "international doctors Canada",
    "healthcare recruitment",
  ],
  authors: [{ name: "MapleMedic" }],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/favicon.svg?v=3", type: "image/svg+xml" }],
    shortcut: "/favicon.svg?v=3",
    apple: "/favicon.svg?v=3",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "MapleMedic",
    title: "MapleMedic | Modern Clinics in Canada with UK-Trained Doctors",
    description:
      "MapleMedic is developing healthcare clinics in Canada and recruiting UK-qualified doctors and international medical professionals to support high-quality patient care.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MapleMedic | Modern Clinics in Canada with UK-Trained Doctors",
    description:
      "MapleMedic is developing healthcare clinics in Canada and recruiting UK-qualified doctors and international medical professionals to support high-quality patient care.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1428",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
