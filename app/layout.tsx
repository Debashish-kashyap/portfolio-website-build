import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Debashish Kashyap – AI Engineer | ML Developer | Cloud Practitioner",
  description:
    "Portfolio of Debashish Kashyap, an AI Engineer and Machine Learning Developer specializing in practical AI applications, agentic systems, and cloud-based solutions. Explore projects, achievements, certifications, and contact details.",
  icons: {
    icon: [
      {
        url: "/dk-icon-light.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/dk-icon-dark.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/dk-icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/dk-apple-icon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
