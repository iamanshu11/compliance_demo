import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PopupTalkToExpertProvider from "@/context/PopupTalkToExpertContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RemitSo - Your Trusted Partner in Compliance Consulting",
  description: "Proven Expertise for Banks, Fintechs, MSBs & across diverse regulated industries. Get expert compliance consulting services.",
  keywords: "compliance consulting, banking compliance, fintech compliance, MSB compliance, regulatory compliance",
  authors: [{ name: "RemitSo" }],
  openGraph: {
    title: "RemitSo - Your Trusted Partner in Compliance Consulting",
    description: "Proven Expertise for Banks, Fintechs, MSBs & across diverse regulated industries. Get expert compliance consulting services.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PopupTalkToExpertProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </PopupTalkToExpertProvider>
      </body>
    </html>
  );
}
