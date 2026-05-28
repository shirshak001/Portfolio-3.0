import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CursorEffect from "@/components/ui/CursorEffect";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Loader from "@/components/ui/Loader";
import BackgroundFX from "@/components/ui/BackgroundFX";
import ParallaxBG from "@/components/ui/ParallaxBG";

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
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Shirshak Mondal — UI/UX Designer & Developer",
    description:
      "Building digital experiences that feel alive. Explore my work in UI/UX, IoT, and full-stack development.",
    type: "website",
    url: "https://shirshak-portfolio.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shirshak Mondal — UI/UX Designer & Developer",
    description: "Building digital experiences that feel alive.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" data-scroll-behavior="smooth">
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
        {/* Fixed background layers — z:0 */}
        <BackgroundFX />
        <ParallaxBG />
        {/* App chrome — z:1+ */}
        <Loader />
        <SmoothScroll />
        <CursorEffect />
        <ScrollProgress />
        <Navbar />
        <main
          style={{
            position: "relative",
            zIndex: 1,
            animation: "pageEnter 0.55s cubic-bezier(0.22,1,0.36,1) both",
          }}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
