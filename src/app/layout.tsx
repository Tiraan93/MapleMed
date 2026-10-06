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
  title: "MapleMedic | Practise in Canada. With doctors who know the way.",
  description:
    "We match Canada/UK/Ireland/Australia/US- trained doctors with Canadian clinics we've visited in person and we trust. Then we guide you through licensing, give you general guidance on your work permit, and help your family move. Our support is free for you.",
  keywords: [
    "MapleMedic",
    "UK-trained GPs",
    "Canadian clinics",
    "GP recruitment",
    "work in Canada",
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
    title: "MapleMedic | Practise in Canada. With doctors who know the way.",
    description:
      "We match Canada/UK/Ireland/Australia/US- trained doctors with Canadian clinics we've visited in person and we trust. Then we guide you through licensing, give you general guidance on your work permit, and help your family move. Our support is free for you.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MapleMedic | Practise in Canada. With doctors who know the way.",
    description:
      "We match Canada/UK/Ireland/Australia/US- trained doctors with Canadian clinics we've visited in person and we trust. Then we guide you through licensing, give you general guidance on your work permit, and help your family move. Our support is free for you.",
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
