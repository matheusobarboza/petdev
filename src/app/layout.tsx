import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { AosInit } from "./_components/aos-init";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pet Dev | Melhor Serviço para Pets",
  description:
    "Cuidamos do seu pet com carinho e dedicação. Agende um horário para banho, tosa e mais!",

  keywords: [
    "pets",
    "banho e tosa",
    "cuidado animal",
    "petshop",
    "veterinário",
  ],

  authors: [
    { name: "Matheus Barboza", url: "https://www.matheusobarboza.com" },
  ],

  robots: "index, follow",

  openGraph: {
    title: "Pet Dev | Melhor Serviço para Pets",
    description:
      "Cuidamos do seu pet com carinho e dedicação. Agende um horário para banho, tosa e mais!",
    url: "https://petdev-kohl.vercel.app/",
    siteName: "Pet Dev",
    images: [
      {
        url: "/images/smile-dog.png",
        width: 1200,
        height: 630,
        alt: "Cachorro feliz depois do banho",
      },
    ],
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://petdev-kohl.vercel.app/",
    languages: {
      "pt-BR": "https://petdev-kohl.vercel.app/",
      "en-US": "https://petdev-kohl.vercel.app/",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        {children}
        <AosInit />
      </body>
    </html>
  );
}
