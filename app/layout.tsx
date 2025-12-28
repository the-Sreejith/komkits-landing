import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Site configuration
const siteConfig = {
  name: "Komkits",
  description: "The all-in-one bookkeeping and AI automation platform for modern e-commerce businesses. Automate your finances, track customers & suppliers, and generate invoices with AI.",
  url: "https://komkits.com",
  ogImage: "/logo.png",
  keywords: [
    "e-commerce bookkeeping",
    "AI automation",
    "finance automation",
    "invoice generation",
    "e-commerce accounting",
    "bookkeeping software",
    "AI bookkeeping",
    "business finance",
    "automated invoicing",
    "supplier management",
    "customer tracking",
    "e-commerce finance",
  ],
};

export const metadata: Metadata = {
  // Base URL for resolving relative URLs
  metadataBase: new URL(siteConfig.url),

  // Primary Meta Tags
  title: {
    default: `${siteConfig.name} - AI-Powered E-commerce Bookkeeping`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "Komkits Team" }],
  creator: "Komkits",
  publisher: "Komkits",

  // Robots
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

  // Icons
  icons: {
    icon: [
      { url: "/logo-icon.png", sizes: "32x32", type: "image/png" },
      { url: "/logo-icon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/logo-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/logo-icon.png",
  },

  // Manifest
  manifest: "/manifest.json",

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - AI-Powered E-commerce Bookkeeping`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - E-commerce Bookkeeping Platform`,
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - AI-Powered E-commerce Bookkeeping`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@komkits",
  },

  // Alternates
  alternates: {
    canonical: siteConfig.url,
  },

  // Category
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://komkits.com/#organization",
      name: "Komkits",
      url: "https://komkits.com",
      logo: {
        "@type": "ImageObject",
        url: "https://komkits.com/logo.png",
        width: "512",
        height: "512",
      },
      description: "The all-in-one bookkeeping and AI automation platform for modern e-commerce businesses.",
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": "https://komkits.com/#website",
      url: "https://komkits.com",
      name: "Komkits",
      publisher: {
        "@id": "https://komkits.com/#organization",
      },
      description: "AI-Powered E-commerce Bookkeeping Platform",
    },
    {
      "@type": "SoftwareApplication",
      name: "Komkits",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: "Automate your e-commerce bookkeeping with AI. Track customers, suppliers, generate invoices, and more.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free tier available",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
