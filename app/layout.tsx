import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ConditionalNavbar from "./components/layout/ConditionalNavBar";
import Footer from "./components/layout/Footer";
import { CurrencyProvider } from "./contexts/CurrencyContext";

const gilroy = localFont({
  src: [
    // Regular
    { path: '../public/fonts/Gilroy-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/Gilroy-RegularItalic.woff2', weight: '400', style: 'italic' },
    
    // Medium
    { path: '../public/fonts/Gilroy-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/Gilroy-MediumItalic.woff2', weight: '500', style: 'italic' },
    
    // Semibold
    { path: '../public/fonts/Gilroy-Semibold.woff2', weight: '600', style: 'normal' },
    { path: '../public/fonts/Gilroy-SemiboldItalic.woff2', weight: '600', style: 'italic' },
    
    // Bold
    { path: '../public/fonts/Gilroy-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../public/fonts/Gilroy-BoldItalic.woff2', weight: '700', style: 'italic' },
    
    // ExtraBold
    { path: '../public/fonts/Gilroy-Extrabold.woff2', weight: '800', style: 'normal' },
    { path: '../public/fonts/Gilroy-ExtraboldItalic.woff2', weight: '800', style: 'italic' },
    
    // Black
    { path: '../public/fonts/Gilroy-Black.woff2', weight: '900', style: 'normal' },
    { path: '../public/fonts/Gilroy-BlackItalic.woff2', weight: '900', style: 'italic' },
    
    // Light
    { path: '../public/fonts/Gilroy-Light.woff2', weight: '300', style: 'normal' },
    { path: '../public/fonts/Gilroy-LightItalic.woff2', weight: '300', style: 'italic' },
    
    // Thin
    { path: '../public/fonts/Gilroy-Thin.woff2', weight: '100', style: 'normal' },
    { path: '../public/fonts/Gilroy-ThinItalic.woff2', weight: '100', style: 'italic' },
  ],

  variable: '--font-gilroy',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif']
})

export const metadata: Metadata = {
  title: "Monitô",
  description: "Tech For Real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gilroy.variable} antialiased text-primary-dark-blue`}
      >
                <CurrencyProvider>

        <ConditionalNavbar />
        {children}
        <Footer />
        </CurrencyProvider>
      </body>
    </html>
  );
}