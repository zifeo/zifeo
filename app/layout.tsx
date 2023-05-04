import "./globals.css";
import { Nunito } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Nunito({
  subsets: ["latin"],
  variable: "--nunito-sans-font",
  display: "swap",
});

export const metadata = {
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">📡</text></svg>',
  },
};

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
