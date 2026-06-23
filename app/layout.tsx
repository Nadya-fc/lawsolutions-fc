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
  title: "Abogado de Lesiones Personales California | Consulta GRATIS 24/7 | (858) 439-9983",
  description: "Abogado de lesiones personales en Los Angeles, Orange County, San Diego, Riverside. Accidentes de auto, trabajo, resbalones. Consulta GRATIS. No paga si no gana. Disponible 24/7. Hablamos Espanol. Llame YA (858) 439-9983",
  keywords: [
    "abogado de lesiones personales california",
    "personal injury lawyer Los Angeles",
    "car accident attorney San Diego",
    "injury lawyer Orange County",
    "car accident lawyer Riverside",
    "personal injury attorney Long Beach",
    "accident lawyer Anaheim",
    "injury attorney Irvine",
    "car accident lawyer San Bernardino",
    "personal injury lawyer Santa Ana",
    "accident attorney Bakersfield",
    "injury lawyer Pasadena",
    "car accident attorney Fontana",
    "personal injury lawyer Glendale",
    "accident lawyer Huntington Beach",
    "injury attorney Oxnard Ventura",
    "abogado de accidentes Los Ángeles",
    "abogado de lesiones personales San Diego",
    "abogado de accidentes Orange County",
    "abogado de accidentes Riverside",
    "abogado de lesiones Long Beach",
    "abogado de accidentes Anaheim",
    "abogado de lesiones Irvine",
    "abogado de accidentes San Bernardino",
    "abogado de lesiones Santa Ana",
    "abogado de accidentes Bakersfield",
    "abogado de lesiones Pasadena",
    "abogado de accidentes Fontana",
    "abogado de lesiones Glendale",
    "abogado de accidentes Huntington Beach",
    "abogado de lesiones Oxnard Ventura",
    "405 freeway accident lawyer",
    "5 freeway car accident attorney",
    "10 freeway accident lawyer",
    "91 freeway car accident lawyer",
    "PCH accident attorney",
    "60 freeway accident lawyer",
    "accidente en la 405",
    "accidente en el freeway 5",
    "accidente en la autopista 10",
    "abogado accidente freeway 91",
    "accidente en la PCH",
    "accidente en el freeway 60",
    "personal injury lawyer near me",
    "car accident lawyer near me",
    "free consultation injury attorney",
    "no win no fee lawyer",
    "truck accident attorney",
    "motorcycle accident lawyer",
    "rideshare accident lawyer Uber Lyft",
    "slip and fall attorney",
    "workers comp lawyer",
    "wrongful death lawyer",
    "best personal injury attorney",
    "do I need a lawyer after a car accident",
    "abogado de accidentes cerca de mí",
    "abogado de lesiones personales gratis",
    "consulta gratis abogado de accidentes",
    "abogado sin cobrar si no gano",
    "abogado de accidentes de carro",
    "abogado de accidentes de motocicleta",
    "abogado de accidentes de trabajo",
    "abogado de caídas y resbalones",
    "abogado de Uber o Lyft accidente",
    "abogado de muerte injusta",
    "mejor abogado de lesiones personales",
    "necesito un abogado después de un accidente",
    "rear ended on the freeway",
    "hit by a car in LA traffic",
    "Uber accident lawyer Los Angeles",
    "construction accident lawyer LA",
    "pedestrian hit by car Los Angeles",
    "bicycle accident lawyer San Diego",
    "car accident settlement amount",
    "insurance company lowballing claim",
    "statute of limitations injury claim",
    "pain and suffering compensation",
    "hit by uninsured driver",
    "injured at work what to do",
    "dog bite lawsuit",
    "me chocaron por detrás qué hago",
    "cuánto vale mi caso de accidente",
    "qué hacer después de un accidente de auto",
    "el seguro no me quiere pagar",
    "tengo derecho a compensación",
    "accidente sin seguro qué hacer",
    "cuánto tiempo tengo para demandar",
    "me lastimé en el trabajo qué hago",
    "atropellado por un carro abogado",
    "compensación por accidente laboral",
    "mordida de perro demanda",
    "no tengo seguro me chocaron",
    "cuánto tiempo tengo para demandar después de un accidente",
    "abogado de accidentes los angeles",
    "abogado de accidentes orange county",
    "abogado de accidentes san diego",
    "abogado de accidentes riverside",
    "abogado de accidentes san bernardino",
    "abogado de accidentes ventura",
    "abogado de accidentes de auto",
    "abogado de compensacion laboral",
    "abogado de lesiones en el trabajo",
    "consulta gratis abogado",
    "abogado hispano california",
    "abogado latino los angeles",
    "abogado latino orange county",
    "abogado latino san diego",
    "abogado 24 horas",
    "abogado urgente",
    "abogado de lesiones gratis",
  ],
  openGraph: {
    title: "Abogado de Lesiones Personales California | Consulta GRATIS 24/7",
    description: "Abogado de lesiones personales en Los Angeles, Orange County, San Diego, Riverside. Accidentes de auto, trabajo, resbalones. Consulta GRATIS. No paga si no gana. Llame YA (858) 439-9983",
    type: "website",
    locale: "es_US",
    url: "https://lawsolutionsfc.com",
    siteName: "LawSolutionsFC",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abogado de Lesiones Personales California | Consulta GRATIS 24/7",
    description: "Abogado de lesiones personales en Los Angeles, Orange County, San Diego. Consulta GRATIS. Llame YA (858) 439-9983",
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
              "telephone": "+1-858-439-9983",
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
