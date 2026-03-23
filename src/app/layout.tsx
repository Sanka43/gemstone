import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ceylongemgallery.com"),
  title: {
    default: "Ceylon Gem Gallery | Authentic Ceylon Gemstones",
    template: "%s | Ceylon Gem Gallery",
  },
  description:
    "Luxury Sri Lankan gemstone marketplace for certified Ceylon sapphires, rubies, and precious stones with worldwide inquiry support.",
  keywords: [
    "Ceylon gemstones",
    "Sri Lankan sapphires",
    "certified gemstones",
    "ruby Sri Lanka",
    "luxury gemstone gallery",
  ],
  openGraph: {
    title: "Ceylon Gem Gallery",
    description:
      "Discover certified natural gemstones from Sri Lanka with trusted global shipping and private inquiry service.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <body className="min-h-screen bg-white text-zinc-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
