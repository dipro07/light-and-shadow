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

import { siteData } from "@/data/siteData";

export const metadata: Metadata = {
    title: `${siteData.company.name} | Luxury Architecture & Interior Design, Dhaka`,
    description: siteData.company.description,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const themeStyles = {
        '--orange': siteData.theme.colors.orange,
        '--orange-dark': siteData.theme.colors.orangeDark,
        '--orange-soft': siteData.theme.colors.orangeSoft,
        '--black': siteData.theme.colors.black,
        '--dark': siteData.theme.colors.dark,
        '--dark-2': siteData.theme.colors.dark2,
        '--dark-3': siteData.theme.colors.dark3,
        '--gray': siteData.theme.colors.gray,
        '--gray-light': siteData.theme.colors.grayLight,
        '--white': siteData.theme.colors.white,
        '--white-soft': siteData.theme.colors.whiteSoft,
        '--font-head': siteData.theme.typography.fontHead,
        '--font-body': siteData.theme.typography.fontBody,
    } as React.CSSProperties;

    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable} ${dmSans.variable}`} style={themeStyles}>
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
