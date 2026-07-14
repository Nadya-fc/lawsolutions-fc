import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./components/LanguageContext";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import TikTokPixel from "./components/TikTokPixel";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lawsolutionsfc.com"),
  title: "Abogados de Lesiones Personales en California | LawSolutionsFC",
  description: "Conectamos víctimas de accidentes en California con abogados de lesiones personales. Consulta gratis 24/7 en español para accidentes de auto, trabajo y caídas.",
  openGraph: {
    title: "Abogados de Lesiones Personales en California | LawSolutionsFC",
    description: "Consulta gratis 24/7 en español para accidentes de auto, trabajo, caídas y lesiones personales en California.",
    type: "website",
    locale: "es_US",
    url: "/",
    siteName: "LawSolutionsFC",
    images: [
      {
        url: "/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "LawSolutionsFC ayuda a conectar víctimas de accidentes con abogados de lesiones personales en California",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abogados de Lesiones Personales en California | LawSolutionsFC",
    description: "Consulta gratis 24/7 en español para accidentes y lesiones personales en California.",
    images: ["/hero-bg.png"],
  },
  alternates: {
    canonical: "https://lawsolutionsfc.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "mclIiadpkpOjmjP3ynekC9PNcSTN_TiM6Yni_RlxUww",
  },
  authors: [{ name: "LawSolutionsFC" }],
  creator: "LawSolutionsFC",
  publisher: "LawSolutionsFC",
  formatDetection: {
    telephone: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans m-0">
        <LanguageProvider>{children}</LanguageProvider>
        <TikTokPixel />
        <Analytics />
        <SpeedInsights />
        
        {/* Structured Data for Legal Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "LawSolutionsFC - Abogado de Lesiones Personales California",
              "description": "Abogado de lesiones personales en Los Angeles, Orange County, San Diego, Riverside. Accidentes de auto, trabajo, resbalones. Consulta GRATIS 24/7. No paga si no gana.",
              "url": "https://lawsolutionsfc.com",
              "telephone": "+1-888-807-1855",
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Los Angeles",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "California"
                  }
                },
                {
                  "@type": "City",
                  "name": "Santa Ana",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "California"
                  }
                },
                {
                  "@type": "City",
                  "name": "Anaheim",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "California"
                  }
                },
                {
                  "@type": "City",
                  "name": "San Diego",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "California"
                  }
                },
                {
                  "@type": "City",
                  "name": "Riverside",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "California"
                  }
                },
                {
                  "@type": "City",
                  "name": "San Bernardino",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "California"
                  }
                },
                {
                  "@type": "City",
                  "name": "Ventura",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "California"
                  }
                },
                {
                  "@type": "City",
                  "name": "Long Beach",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "California"
                  }
                },
                {
                  "@type": "City",
                  "name": "Ontario",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "California"
                  }
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "5959 Mission Gorge Rd STE 202",
                "addressLocality": "San Diego",
                "addressRegion": "CA",
                "postalCode": "92120",
                "addressCountry": "US"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "00:00",
                "closes": "23:59"
              },
              "priceRange": "$$",
              "paymentAccepted": "No fee unless we win",
              "currenciesAccepted": "USD",
              "languages": ["Spanish", "English"],
              "isAccessibleForFree": true
            })
          }}
        />
      </body>
    </html>
  );
}
