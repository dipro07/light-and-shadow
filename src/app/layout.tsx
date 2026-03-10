import type { Metadata } from "next";
import { Inter, Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/shared/ScrollReveal";
import WhatsAppFloat from "@/components/shared/WhatsAppFloat";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
    title: "Light & Shadow Arch. Studio | Luxury Architecture & Interior Design, Dhaka",
    description: "Light & Shadow Arch. Studio, Premium architecture and interior design studio based in Dhaka, Bangladesh.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable} ${dmSans.variable}`}>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
            </head>
            <body>
                <Navbar />
                <ScrollReveal />
                <WhatsAppFloat />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
