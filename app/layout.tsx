import "./globals.css";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Silkscreen, VT323, JetBrains_Mono } from "next/font/google";

const silkscreen = Silkscreen({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-console",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Tishya Dhakal | AI Workstation Portfolio",
  description: "B.Tech Artificial Intelligence student portfolio. Developing specialized deep learning, machine learning, and natural language processing pipelines.",
  metadataBase: new URL("https://tishyadhakal.com"),
  icons: {
    icon: "/icon.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${silkscreen.variable} ${vt323.variable} ${jetbrains.variable} scroll-smooth`}>
      <body className="bg-[#E5D9C0] text-[#2E2430] transition-colors duration-300 min-h-screen flex flex-col">
        {/* Clean, provider-free layout hierarchy */}
        <AnimatedBackground />
        <Navbar />
        <main className="flex-grow z-10 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}