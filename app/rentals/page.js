import RentalsClient from "@/components/rentals/RentalsClient";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
    title: "Luxury Rentals | Vihav Group",
    description: "Find or list premium rental properties in Vadodara with Vihav Group. Exclusive apartments, penthouses, and commercial spaces.",
};

export default function RentalsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <RentalsClient />
            <Footer />
        </main>
    );
}
