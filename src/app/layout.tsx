import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Catriel Bartezaghi - Software Developer",
  description: "Portfolio of Catriel Bartezaghi, a Computer Engineer and Software Developer focused on backend logic, web applications, automation, and maintainable business systems.",
  openGraph: {
    title: "Catriel Bartezaghi - Software Developer",
    description: "Backend-oriented software developer building reliable web applications, internal tools, and automation solutions.",
    type: "website",
  }
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
