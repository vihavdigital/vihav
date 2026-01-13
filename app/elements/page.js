import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroVariations from "@/components/showcase/HeroVariations";

export default function ElementsPage() {
    return (
        <main className="bg-white min-h-screen">
            <Header />
            <div className="pt-32 pb-12 container mx-auto px-6 text-center">
                <span className="text-gold-400 uppercase tracking-widest text-xs font-bold mb-2 block">Design System</span>
                <h1 className="text-4xl md:text-6xl font-serif text-luxury-black mb-6">Hero Variations</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    A collection of premium hero section layouts designed for different project needs.
                    Includes Cinematic, Split-Screen, and Interactive Slider variations.
                </p>
            </div>

            <div className="space-y-32 pb-32">
                <HeroVariations />
            </div>

            <Footer />
        </main>
    );
}
