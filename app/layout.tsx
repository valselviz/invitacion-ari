import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ariadna ✨ | Mis 15 Años",
  description: "Una noche mágica para celebrar juntos los 15 años de Ariadna.",

  openGraph: {
    title: "Ariadna ✨ | Mis 15 Años",
    description:
      "Una noche mágica para celebrar juntos los 15 años de Ariadna.",
    images: ["/images/ariadna.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
