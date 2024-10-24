import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Josefin_Sans, Shantell_Sans } from "next/font/google"

// Backup fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Our main fonts
const josefinSans = Josefin_Sans({ 
  subsets: ['latin'],
  display: "swap",
  variable: "--font-josefin-sans"
});

const shantellSans = Shantell_Sans({ 
  subsets: ['latin'],
  display: "swap",
  variable: "--font-shantell-sans"
});

export const metadata: Metadata = {
  title: "Coffee Spot",
  description: "An Application Focused on Finding Third Spaces",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.variable} ${shantellSans.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
