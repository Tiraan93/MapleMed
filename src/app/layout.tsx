import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://maplemed.co";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "MapleMed | Modern Clinics in Canada with UK-Trained Doctors",
  description:
    "MapleMed is developing healthcare clinics in Canada and recruiting UK-qualified doctors and international medical professionals to support high-quality patient care.",
  keywords: [
    "MapleMed",
    "Canada clinics",
    "UK-trained doctors",
    "medical careers Canada",
    "international doctors Canada",
    "healthcare recruitment",
  ],
  authors: [{ name: "MapleMed" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "MapleMed",
    title: "MapleMed | Modern Clinics in Canada with UK-Trained Doctors",
    description:
      "MapleMed is developing healthcare clinics in Canada and recruiting UK-qualified doctors and international medical professionals to support high-quality patient care.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MapleMed | Modern Clinics in Canada with UK-Trained Doctors",
    description:
      "MapleMed is developing healthcare clinics in Canada and recruiting UK-qualified doctors and international medical professionals to support high-quality patient care.",
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
