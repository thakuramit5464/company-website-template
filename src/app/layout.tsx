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
  title: "Tech4Services - Transforming Ideas into Digital Excellence",
  description: "Modern IT services firm specializing in web development, mobile apps, desktop applications, and legacy system modernization. We deliver scalable, enterprise-grade software solutions.",
  keywords: "web development, mobile app development, software development, IT services, legacy modernization, cross-platform development",
  authors: [{ name: "Tech4Services" }],
  openGraph: {
    title: "Tech4Services - Transforming Ideas into Digital Excellence",
    description: "Modern IT services firm specializing in comprehensive software solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
