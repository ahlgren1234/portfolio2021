import { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import { Analytics } from "@vercel/analytics/react"
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });
const caveat = Caveat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Peter Ahlgren | Software Engineer",
  description: "Software engineer and web developer portfolio of Peter Ahlgren",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <ClientLayout caveatFont={caveat.style.fontFamily}>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}
