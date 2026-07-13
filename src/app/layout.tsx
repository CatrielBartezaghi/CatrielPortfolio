import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = "https://catriel.dev";
const siteTitle = "Catriel Bartezaghi | Backend-Focused Full Stack Developer";
const siteDescription =
  "Computer Engineer and backend-focused Full Stack Developer building reliable software for industrial ERP workflows, production traceability, batch inventory, picking, logistics, testing, and CI/CD.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  applicationName: "Catriel Bartezaghi Portfolio",
  authors: [{ name: "Catriel Bartezaghi", url: siteUrl }],
  creator: "Catriel Bartezaghi",
  publisher: "Catriel Bartezaghi",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "Catriel Bartezaghi",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-text-primary selection:bg-primary-soft selection:text-primary">
        {children}
      </body>
    </html>
  );
}
