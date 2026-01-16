import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CompletedProjectsList from "@/components/projects/CompletedProjectsList";

export const metadata = {
    title: "Completed Projects | Vihav Group",
    description: "Explore our landmark completed residential and commercial projects.",
};

export default function CompletedProjectsPage() {
    return (
        <main className="bg-white dark:bg-neutral-950 min-h-screen transition-colors duration-500">
            <Header />

            {/* AGENCY HERO SECTION */}
            {/* AGENCY HERO SECTION */}
            <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 container mx-auto px-6">
                <div className="max-w-4xl">
                    <span className="text-vihav-gold-500 font-medium tracking-[0.2em] text-[10px] md:text-sm uppercase mb-4 md:mb-6 block">
                        Our Portfolio
                    </span>
                    <h1 className="text-5xl md:text-8xl font-serif text-neutral-900 dark:text-white leading-[0.9] mb-8 md:mb-12">
                        The <br /> <span className="italic text-neutral-400 dark:text-neutral-600">Collection.</span>
                    </h1>
                    <p className="text-base md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed border-l-2 border-vihav-gold-500 pl-4 md:pl-6">
                        A curated archive of our delivered landmarks. Each structure stands as a permanent testament to our obsession with quality, luxury, and timeless design.
                    </p>
                </div>
            </div>

            <CompletedProjectsList />

            <Footer />
        </main>
    );
}
