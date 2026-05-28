import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CursorEffect from "@/components/ui/CursorEffect";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Loader from "@/components/ui/Loader";

export const metadata: Metadata = {
  title: "Shirshak Mondal — UI/UX Designer & Developer",
  description:
    "Portfolio of Shirshak Mondal — UI/UX Designer, IoT Engineer & Full-Stack Developer at NIT Hamirpur. Building intuitive digital experiences that solve real problems.",
  keywords: [
    "UI/UX Designer",
    "Product Designer",
    "Figma",
    "React",
    "IoT",
    "NIT Hamirpur",
    "Shirshak Mondal",
  ],
  authors: [{ name: "Shirshak Mondal" }],
  openGraph: {
    title: "Shirshak Mondal — UI/UX Designer & Developer",
    description:
      "Building digital experiences that feel alive. Explore my work in UI/UX, IoT, and full-stack development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="noise-overlay">
        <Loader />
        <SmoothScroll />
        <CursorEffect />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
