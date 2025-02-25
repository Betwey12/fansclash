import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";

import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import "./globals.css";
import { metaData } from "@/constants";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";

import { ThemeProvider } from "@/components/providers/theme-provider";

export const metadata: Metadata = {
  title: metaData.home.title,
  description: metaData.home.description,
  keywords: metaData.home.keywords,
};

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const pepsi = localFont({
  src: [
    {
      path: "./fonts/PEPSI_pl.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-pepsi",
  display: "swap",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${pepsi.variable} gradient-bg antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
