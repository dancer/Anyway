import "./globals.css"
import type { Metadata, Viewport } from "next"
import { Space_Mono } from "next/font/google"
import type React from "react"

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
})

export const viewport: Viewport = {
  themeColor: "#f5f5f1",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: "Anyway",
  description: "Building Open Source for Everyone",
  metadataBase: new URL("https://anyway.sh"),
  keywords: ["open source", "decentralized", "technology", "development", "web3"],
  authors: [{ name: "Anyway Team" }],
  openGraph: {
    title: "Anyway - Open Source for Everyone",
    description: "Building decentralized technology that matters. Open source, accessible, and empowering.",
    url: "https://anyway.ltd",
    siteName: "Anyway",
    images: [
      {
        url: "/512.png",
        width: 512,
        height: 512,
        alt: "Anyway Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anyway - Open Source for Everyone",
    description: "Building decentralized technology that matters. Open source, accessible, and empowering.",
    images: ["/512.png"],
    creator: "@anyway",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/48.png", sizes: "48x48", type: "image/png" },
      { url: "/64.png", sizes: "64x64", type: "image/png" },
      { url: "/128.png", sizes: "128x128", type: "image/png" },
      { url: "/256.png", sizes: "256x256", type: "image/png" },
      { url: "/512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/128.png", sizes: "128x128", type: "image/png" },
      { url: "/256.png", sizes: "256x256", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/controller.svg",
      },
    ],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Anyway",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} font-mono`}>{children}</body>
    </html>
  )
}

