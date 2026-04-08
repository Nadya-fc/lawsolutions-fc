import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./components/LanguageContext";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  title: "Abogado de Lesiones Personales California | Consulta GRATIS 24/7 | (323) 880-4017",
  description: "Abogado de lesiones personales en Los Angeles, Orange County, San Diego, Riverside. Accidentes de auto, trabajo, resbalones. Consulta GRATIS. No paga si no gana. Disponible 24/7. Hablamos Espanol. Llame YA (323) 880-4017",
  keywords: "abogado de lesiones personales california, abogado de accidentes los angeles, abogado de accidentes orange county, abogado de accidentes san diego, abogado de accidentes riverside, abogado de accidentes san bernardino, abogado de accidentes ventura, abogado de accidentes de auto, abogado de compensacion laboral, abogado de lesiones en el trabajo, consulta gratis abogado, abogado hispano california, abogado latino los angeles, abogado latino orange county, abogado latino san diego, abogado 24 horas, abogado urgente, abogado de lesiones gratis",
  openGraph: {
    title: "Abogado de Lesiones Personales California | Consulta GRATIS 24/7",
    description: "Abogado de lesiones personales en Los Angeles, Orange County, San Diego, Riverside. Accidentes de auto, trabajo, resbalones. Consulta GRATIS. No paga si no gana. Llame YA (323) 880-4017",
    type: "website",
    locale: "es_US",
    url: "https://lawsolutionsfc.com",
    siteName: "LawSolutionsFC",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abogado de Lesiones Personales California | Consulta GRATIS 24/7",
    description: "Abogado de lesiones personales en Los Angeles, Orange County, San Diego. Consulta GRATIS. Llame YA (323) 880-4017",
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
      <body className="min-h-full flex flex-col font-sans m-0 p-0">
        <LanguageProvider>{children}</LanguageProvider>
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
              "telephone": "+1-323-880-4017",
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
