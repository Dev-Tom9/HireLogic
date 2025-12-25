import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HireLogic | AI Recruitment Screening",
  description: "Enterprise-grade AI candidate screening and ranking.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* We removed the static nav from here to let the Dashboard handle its own UI */}
        {children}
      </body>
    </html>
  );
}