import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/ui/Preloader";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Vihav | The Art of Luxury Living",
  description: "Vihav Group - Redefining luxury real estate with masterfully crafted homes and sustainable communities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${playfair.variable} ${lato.variable} antialiased bg-white text-gray-900`}
      >
        <Preloader />
        {children}
      </body>
    </html>
  );
}
