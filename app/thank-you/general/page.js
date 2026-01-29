import Link from "next/link";
import { ArrowRight, CheckCircle, ArrowLeft } from "lucide-react";

export default function GenericThankYouPage() {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-background p-6">

            {/* Abstract Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.1),transparent_50%)]" />
                <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(255,215,0,0.05),transparent_50%)]" />
            </div>

            <div className="relative z-10 max-w-2xl w-full text-center space-y-8 animate-in fade-in zoom-in duration-700">

                {/* Success Icon */}
                <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-400 shadow-2xl shadow-gold-400/20 ring-1 ring-gold-400/50">
                        <CheckCircle size={48} strokeWidth={1.5} />
                    </div>
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-serif text-foreground">Thank You!</h1>
                    <p className="text-lg md:text-xl text-muted-foreground font-light max-w-lg mx-auto">
                        We have received your enquiry. Our team will verify your details and connect with you shortly.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 justify-center items-center pt-8">
                    {/* Explore Button */}
                    <Link
                        href="/?scroll=projects"
                        className="flex items-center gap-3 bg-gold-400 text-luxury-black hover:bg-gold-500 px-8 py-4 rounded-lg font-bold uppercase tracking-widest transition-all duration-300 w-full md:w-auto justify-center group"
                    >
                        Explore All Projects
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>

                    {/* Home Button */}
                    <Link
                        href="/"
                        className="flex items-center gap-3 bg-transparent border border-foreground/20 hover:bg-foreground hover:text-background text-foreground px-8 py-4 rounded-lg font-bold uppercase tracking-widest transition-all duration-300 w-full md:w-auto justify-center"
                    >
                        <ArrowLeft size={20} />
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
