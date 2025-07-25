import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavigationProvider } from "@/context/navigationContext";
import { cn } from "@/lib/utils";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "The Silva Dev",
  description: "Desenvolvedor front-end web e Mobile",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={cn(`${geistSans.variable} ${geistMono.variable} antialiased`)}
      >
        <NavigationProvider> 
          {children}
        </NavigationProvider>
      </body>
    </html>
  );
}
