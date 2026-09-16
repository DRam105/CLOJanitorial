import type { Metadata } from "next";
import "./globals.css";
import { inter, poppins } from "@/lib/fonts";
import { site } from "@/lib/site";
import { Header } from "@/components/layout/header";
import { TopBar } from "@/components/layout/top-bar";
import { Footer } from "@/components/layout/footer";
import { MobileActionBar } from "@/components/layout/mobile-action-bar";
import { ChatWidget } from "@/components/shared/chat-widget";
import { JsonLd } from "@/components/shared/json-ld";
import { localBusinessJsonLd } from "@/lib/jsonld";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Commercial Cleaning & Janitorial Services`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "commercial cleaning",
    "janitorial services",
    "office cleaning",
    "Carlsbad commercial cleaning",
    "North County San Diego janitorial",
    "floor care",
    "disinfection services",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: site.url,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="flex min-h-dvh flex-col">
        {/* Accessibility: skip to content */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>

        {/*
          TODO: Analytics — drop Google Analytics / GTM here.
          e.g. <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXX" />
          See README "Analytics" section.
        */}

        <JsonLd data={localBusinessJsonLd()} />

        <TopBar />
        <Header />

        {/* pb on mobile keeps content clear of the fixed action bar */}
        <main id="main" className="flex-1 pb-20 lg:pb-0">
          {children}
        </main>

        <Footer />
        <MobileActionBar />
        <ChatWidget />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
