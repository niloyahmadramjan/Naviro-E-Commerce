import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Naviro",
  description: "Online shopping",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-gray-100 ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="max-w-7xl mx-auto">
          <Navbar />
        </div>
        <div className="max-w-7xl mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
