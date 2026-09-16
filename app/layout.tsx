import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { absoluteUrl } from "@/lib/url";
import { SplashScreen } from "@/components/layout/SplashScreen";
import { SPLASH_BOOT_SCRIPT } from "@/lib/splash";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, insuranceAgencySchema, websiteSchema } from "@/lib/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brandName} | ${site.tagline}`,
    template: `%s | ${site.brandName}`,
  },
  description: site.description,
  applicationName: site.brandName,
  alternates: { canonical: absoluteUrl("/") },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    siteName: site.brandName,
    locale: "en_US",
    url: absoluteUrl("/"),
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <noscript>
          <style>{`#splash-boot{display:none!important}body{overflow:auto!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-full flex-col bg-surface">
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="a62/B7Ff6BMyc5ZDNDVu7g"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18231331009"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18231331009');
          `}
        </Script>
        <Script id="google-ads-click-to-call" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-18231331009/QdFfCIPf2MAcEMGRsPVD',
                'value': 1.0,
                'currency': 'USD',
                'event_callback': callback
              });
              return false;
            }
            window.gtag_report_conversion = gtag_report_conversion;
          `}
        </Script>
        <Script id="splash-boot-script" strategy="beforeInteractive">
          {SPLASH_BOOT_SCRIPT}
        </Script>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={insuranceAgencySchema()} />
        <JsonLd data={websiteSchema()} />
        <div id="splash-boot">
          <button
            type="button"
            id="splash-skip"
            className="splash-skip fixed right-4 top-4 z-[110] hidden rounded-md bg-brand-950/95 px-4 py-2.5 text-sm font-semibold text-white shadow-elevated"
          >
            Skip intro
          </button>
          <div className="splash-boot-curtain" aria-hidden="true">
            <img
              src="/images/cascadelogo.png"
              alt=""
              width={240}
              height={104}
              className="splash-boot-logo w-[min(72vw,240px)] object-contain"
            />
          </div>
        </div>
        <SkipLink />
        <SplashScreen />
        <Header />
        <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
