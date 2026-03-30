import type { Metadata } from "next";
import { Syne, JetBrains_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackgroundMesh from "@/components/ui/BackgroundMesh";
import Navigation from "@/components/layout/Navigation";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md Abu Bokar | Software Engineer",
  description: "Portfolio of Md Abu Bokar - Software Engineer, Full-Stack Developer, and Machine Learning Enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${syne.variable} ${jetbrainsMono.variable} ${dmSans.variable} antialiased`}
      >
        <div className="fixed inset-0 z-50 pointer-events-none noise-bg mix-blend-overlay"></div>
        <CustomCursor />
        <ScrollProgress />
        <BackgroundMesh />
        <div className="flex flex-col md:flex-row min-h-screen">
          <Navigation />
          <main className="flex-1 w-full relative">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
