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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: { title: metaData.name, card: "summary_large_image" },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body
        className="antialiased min-h-screen
                   pt-[calc(var(--header-h)+var(--header-pad)+env(safe-area-inset-top))]
                   pb-[calc(var(--footer-h)+env(safe-area-inset-bottom))]"
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {/* Fixed Header */}
          <header className="w-full border-b" style={{ borderColor: "var(--hairline)" }}>
            <div className="mx-auto w-full max-w-6xl h-full px-4 sm:px-6 lg:px-8 flex items-center">
              <Navbar />
            </div>
          </header>
          {/* Main */}
          <main className="w-full flex items-center justify-center min-h-[calc(100vh-var(--header-h)-var(--footer-h))]">
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
          {/* Fixed Footer */}
          <footer className="w-full border-t" style={{ borderColor: "var(--hairline)" }}>
            <div
              className="mx-auto w-full max-w-6xl h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between"
              style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
            >
              <Footer />
            </div>
          </footer>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
