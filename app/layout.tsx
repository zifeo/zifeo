import "./globals.css";
import { Nunito } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--nunito-sans-font",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className} bg-white `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
