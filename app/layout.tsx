import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider defaultTheme="system" storageKey="catena-ui-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.app'
    };
