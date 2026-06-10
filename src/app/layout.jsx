import { Geist, Geist_Mono } from "next/font/google";
import { vazir } from "@/assets/fonts/fonts";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Silver Team",
  description: "Silver, Programming and Web Developement Team",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} ${vazir.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
