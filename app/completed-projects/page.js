import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CompletedProjectsGrid from "@/components/projects/CompletedProjectsGrid";

export const metadata = {
    title: "The Collection | Vihav Group",
    description: "Explore our landmark completed residential and commercial projects.",
};

export default function CompletedProjectsPage() {
    return (
        <main className="bg-white dark:bg-neutral-950 min-h-screen transition-colors duration-500">
            <Header />

            {/* AGENCY HERO SECTION */}
            <div className="relative pt-32 pb-12 lg:pt-48 lg:pb-24 container mx-auto px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <span className="text-vihav-gold-500 font-bold tracking-[0.25em] text-[10px] md:text-sm uppercase mb-6 block animate-in fade-in slide-in-from-bottom-4 duration-700">
                        Our Portfolio
                    </span>
                    <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif text-neutral-900 dark:text-white leading-[0.9] mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
                        The <span className="italic text-neutral-400 dark:text-neutral-600 font-light">Collection.</span>
                    </h1>
                    <p className="text-base md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                        A curated archive of our delivered landmarks. Each structure stands as a permanent testament to our obsession with quality, luxury, and timeless design.
                    </p>
                </div>
            </div>

            <CompletedProjectsGrid />

            <Footer />
        </main>
    );
}
