import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "./components/nav";
import Footer from "./components/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "./components/theme-switch";
import { metaData } from "./lib/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(metaData.baseUrl),
  title: { default: metaData.title, template: `%s | ${metaData.title}` },
  description: metaData.description,
  openGraph: {
    images: metaData.ogImage,
    title: metaData.title,
    description: metaData.description,
    url: metaData.baseUrl,
    siteName: metaData.name,
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  twitter: { title: metaData.name, card: "summary_large_image" },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased min-h-screen text-[15.5px] md:text-[17px] tracking-tight">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/10 dark:bg-[#0a0f18]/40 backdrop-blur">
              <div className="mx-auto w-full max-w-7xl px-6 lg:px-12 h-16 flex items-center">
                <Navbar />
              </div>
            </header>

            <main className="flex-1 w-full">
              <div className="mx-auto w-full max-w-7xl px-6 lg:px-12 py-16 md:py-24">
                {children}
              </div>
            </main>

            <footer className="w-full border-t border-white/10">
              <div className="mx-auto w-full max-w-7xl px-6 lg:px-12 py-10">
                <Footer />
              </div>
            </footer>
          </div>

          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
