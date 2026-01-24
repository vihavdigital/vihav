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

import { ThemeProvider } from "@/components/theme/ThemeProvider";
// import CustomCursor from "@/components/ui/CustomCursor"; // Removed
import SmoothScroll from "@/components/layout/SmoothScroll";
import ChatLoader from "@/components/chat/ChatLoader";

export const metadata = {
    title: {
        default: "Vihav Group | Premium Real Estate Developer in Vadodara",
        template: "%s | Vihav Group"
    },
    description: "Discover luxury 3BHK, 4BHK flats, penthouses, and commercial properties in Vadodara by Vihav Group. Award-winning real estate developer crafting sustainable and premium living spaces.",
    keywords: [
        "Vihav Group",
        "Real Estate Vadodara",
        "Luxury Homes Vadodara",
        "3BHK Flats in Vadodara",
        "4BHK Flats in Vadodara",
        "Penthouse Vadodara",
        "Commercial Properties Vadodara",
        "Premium Apartments Vadodara",
        "Top Builders in Vadodara",
        "New Projects in Vadodara",
        "Properties in Bhayli",
        "Flats in Gotri",
        "New Alkapuri Real Estate",
        "Vasna Bhayli Road Projects",
        "Luxurious Sky Villas",
        "Duplex Apartments Vadodara",
        "Commercial Showrooms in Vadodara",
        "Office Spaces Vadodara",
        "Buy Flat in Vadodara",
        "Best Real Estate Developer Gujarat",
        "Gated Community Vadodara",
        "Ready to Move Flats Vadodara",
        "Under Construction Projects Vadodara"
    ],
    authors: [{ name: "Vihav Group" }],
    creator: "Vihav Group",
    publisher: "Vihav Group",
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://www.vihav.com",
        title: "Vihav Group | Premium Real Estate Developer in Vadodara",
        description: "Discover luxury 3BHK, 4BHK flats, penthouses, and commercial properties in Vadodara by Vihav Group.",
        siteName: "Vihav Group",
        images: [
            {
                url: "/og-image.jpg", // Assuming we might add one later, or it falls back
                width: 1200,
                height: 630,
                alt: "Vihav Group Luxury Real Estate",
            },
        ],
    },
    robots: {
        index: false,
        follow: false,
        googleBot: {
            index: false,
            follow: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'google-site-verification=YOUR_VERIFICATION_CODE', // User to replace
        // yandex: 'yandex-verification-code',
    },
    icons: {
        icon: '/images/project-images/other-images/favicon.webp',
        shortcut: '/images/project-images/other-images/favicon.webp',
        apple: '/images/project-images/other-images/favicon.webp',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                suppressHydrationWarning
                className={`${playfair.variable} ${lato.variable} antialiased transition-colors duration-300`}
            >
                <ThemeProvider>
                    {/* <CustomCursor /> Removed */}
                    <Preloader />
                    {/* <SmoothScroll /> Removed for native responsiveness */}
                    {/* <ChatLoader /> */}
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
