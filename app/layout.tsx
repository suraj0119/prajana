import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Poppins, Raleway } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap", // Optimize font loading
})

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-raleway",
  display: "swap", // Optimize font loading
})

export const metadata: Metadata = {
  title: "Prajna Foundation - Empowering Dreams, Transforming Lives",
  description:
    "Prajna Foundation empowers underprivileged children, particularly girls, through education, vocational training, and community support.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5", // Improved viewport settings
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${raleway.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
