import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import { Providers } from "./providers";
import  Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "EcoTechHub",
  description: "Your one-stop shop for eco-friendly electronics and clothing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <Navbar />
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
