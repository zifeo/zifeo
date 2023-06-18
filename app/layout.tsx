import "./globals.css";
import { Nunito } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Nunito({
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
      <body className={`${inter.className} bg-white `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
