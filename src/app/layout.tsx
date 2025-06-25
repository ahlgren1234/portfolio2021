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
      <head>
        <!-- Hotjar Tracking Code for https://peterahlgren.com -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:6445406,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <ClientLayout caveatFont={caveat.style.fontFamily}>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}
